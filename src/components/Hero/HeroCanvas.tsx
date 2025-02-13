import { useEffect, useRef } from "react";
import { motion } from "motion/react"

class Particle {
  x: number;
  y: number;
  baseX: number;
  baseY: number;
  size: number;
  density: number;
  ctx: CanvasRenderingContext2D;

  constructor(x: number, y: number, ctx: CanvasRenderingContext2D) {
    this.x = x;
    this.y = y;
    this.baseX = x;
    this.baseY = y;
    this.size = 2;
    this.density = Math.random() * 30 + 1;
    this.ctx = ctx;
  }

  draw() {
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    this.ctx.closePath();
    this.ctx.fill();
  }

  update(mouse: { x: number; y: number; radius: number }) {
    const dx = mouse.x - this.x;
    const dy = mouse.y - this.y;
    const distance = Math.sqrt(dx * dx + dy * dy);

    if (distance < mouse.radius) {
      const forceDirectionX = dx / distance;
      const forceDirectionY = dy / distance;
      const maxDistance = mouse.radius;
      const force = (maxDistance - distance) / maxDistance;
      const directionX = forceDirectionX * force * this.density;
      const directionY = forceDirectionY * force * this.density;

      this.x -= directionX;
      this.y -= directionY;
    } else {
      if (this.x !== this.baseX) {
        const dx = this.x - this.baseX;
        this.x -= dx / 10;
      }
      if (this.y !== this.baseY) {
        const dy = this.y - this.baseY;
        this.y -= dy / 10;
      }
    }
  }
}

const HeroCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const particles = useRef<Particle[]>([]);  
  const mouse = useRef({ x: 0, y: 0, radius: window.innerWidth < 1024 ? 0 : 70 });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    
    if (canvas && ctx) {

      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      const mobileText1 = "Web"
      const mobileText2 = "Dev"
      const desktopText1 = "Frontend";
      const desktopText2 = "Developer";
      const textX = canvas.width / 2;
      const textY = canvas.height / 2;

      // Responsive text
      const getResponsiveLayout = () => {
        if (window.innerWidth < 600) {
            ctx.font = "150px Arial"; 
            ctx.fillText(mobileText1, textX, textY - 40);
            ctx.fillText(mobileText2, textX, textY + 80);
        } else if (window.innerWidth < 1024) {
            ctx.font = "bolder 120px Arial";
            ctx.fillText(desktopText1, textX, textY - 30);
            ctx.fillText(desktopText2, textX, textY + 80);
        } else {
            ctx.font = "bolder 200px Arial";  
            ctx.fillText(desktopText1, textX, textY - 100);
            ctx.fillText(desktopText2, textX, textY + 100);
        }
      }

      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);

      // Colors
      gradient.addColorStop(0, "#0602FF");
      gradient.addColorStop(0.7, "#8301F2");
      gradient.addColorStop(1, "#FF00E5");

      ctx.fillStyle = gradient;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      getResponsiveLayout()

      const textData = ctx.getImageData(0, 0, canvas.width, canvas.height);

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const getParticleSize = () => {
        if (window.innerWidth < 600) {
            return 5
        } else  {
            return 6
        } 
      }

      const createParticles = () => {
        for (let y = 0; y < canvas.height; y += getParticleSize()) {
          for (let x = 0; x < canvas.width; x += getParticleSize()) {
            const index = (y * canvas.width + x) * 4;
            if (textData.data[index + 3] > 128) {
              particles.current.push(new Particle(x, y, ctx));
            }
          }
        }
      };

      // Mouse movement
      const handleMouseMove = (e: MouseEvent) => {
        const rect = canvas.getBoundingClientRect();
        mouse.current.x = e.clientX - rect.left;
        mouse.current.y = e.clientY - rect.top;
      };

      // "Explosion" on click
      const handleClick = (e: MouseEvent) => {
        const rect = canvas.getBoundingClientRect();
        mouse.current.x = e.clientX - rect.left;
        mouse.current.y = e.clientY - rect.top;

        if (window.innerWidth < 1024) {
          mouse.current.radius = 80
        } else {
          mouse.current.radius = 250
        }

        setTimeout(() => {
          mouse.current.radius = window.innerWidth < 1024 ? 0 : 70;
        }, 100);
      }

      canvas.addEventListener("mousemove", handleMouseMove);
      canvas.addEventListener("click", handleClick)

      const animate = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.current.forEach((particle) => {
          particle.update(mouse.current);
          particle.draw();
        });
        requestAnimationFrame(animate);
      };

      createParticles();
      animate();

      return () => {
        canvas.removeEventListener("mousemove", handleMouseMove);
        canvas.removeEventListener("click", handleClick)
      };
    }
  }, []);

  return <motion.canvas
  initial={{scale: 0}}
  animate={{scale: 1}}
  transition={{delay: .5, duration: .5}}
  ref={canvasRef}>
  </motion.canvas>

};

export default HeroCanvas;
