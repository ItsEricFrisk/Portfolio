import { contactLinks } from "../data/links";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FormErrors, FormData } from "../types";

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [successMessage, setSuccessMessage] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});

  const validateField = (
    name: keyof FormData,
    value: string
  ): string | undefined => {
    if (!value.trim()) {
      return `${name.charAt(0).toUpperCase() + name.slice(1)} is required`;
    }
    if (name === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      return "Please enter a valid email address";
    }
    return undefined;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    let isValid = true;

    Object.keys(formData).forEach((key) => {
      const error = validateField(
        key as keyof FormData,
        formData[key as keyof FormData]
      );
      if (error) {
        newErrors[key as keyof FormErrors] = error;
        isValid = false;
      }
    });

    setErrors(newErrors);
    return isValid;
  };

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSuccessMessage("");
    setErrorMessage("");

    if (!validateForm()) return;

    if (!form.current) return;

    const serviceId = import.meta.env.VITE_SERVICE_ID;
    const templateId = import.meta.env.VITE_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setErrorMessage("Missing EmailJS environment variables");
      return;
    }

    emailjs
      .sendForm(serviceId, templateId, form.current, {
        publicKey: publicKey,
      })
      .then(
        () => {
          setSuccessMessage("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          setErrorMessage("Failed to send message. Please try again.");
          console.error("Email sending failed:", error);
        }
      );
  };

  const handleClickToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section
      id="contact"
      className="w-full h-auto bg-light border-t-2 border-neutral-200 flex flex-col lg:flex-row items-start justify-center pt-10 lg:pt-24 py-4 px-4 md:px-16 gap-8 relative"
    >
      <div className="w-full lg:w-1/2 flex flex-col gap-y-10">
        <p className="text-lg">
          I'm always looking for new opportunities to collaborate and grow.
          Whether you have a project in mind or just want to say hello, I'd love
          to hear from you.
        </p>
        <div className="w-full flex gap-4 text-dark">
          {contactLinks.map((link, index) => (
            <div key={index}>
              <a
                href={link.link}
                target="_blank"
                rel="noopener noreferrer"
                className="px-2 py-1 bg-black rounded-md text-light cursor-pointer hover:bg-neutral-800"
              >
                {link.name}
              </a>
            </div>
          ))}
        </div>
      </div>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="w-full lg:w-1/2 flex flex-col items-end gap-y-5 mb-10"
      >
        <div className="w-full flex flex-col gap-y-2">
        <div className="w-full">
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`w-full p-2 rounded-sm bg-neutral-50 border ${
              errors.name ? "border-red-500" : "border-neutral-400"
            }`}
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name}</p>
          )}
        </div>
        <div className="w-full">
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full p-2 rounded-sm bg-neutral-50 border ${
              errors.email ? "border-red-500" : "border-neutral-400"
            }`}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}
        </div>
        </div>
        <div className="w-full">
          <textarea
            placeholder="Message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className={`w-full p-2 rounded-sm bg-neutral-50 border ${
              errors.message ? "border-red-500" : "border-neutral-400"
            }`}
          />
          {errors.message && (
            <p className="text-red-500 text-sm mt-1">{errors.message}</p>
          )}
        </div>
        {successMessage && (
          <p className="text-green-500 text-sm">{successMessage}</p>
        )}
        {errorMessage && <p className="text-red-500 text-sm">{errorMessage}</p>}
        <button
          type="submit"
          className="px-4 py-1 bg-black rounded-md text-light cursor-pointer hover:bg-neutral-800"
        >
          Send
        </button>
      </form>
      <button
        onClick={handleClickToTop}
        className="text-neutral-500 hover:text-neutral-800 cursor-pointer mt-6 bg-transparent border-none absolute bottom-4 right-0"
        aria-label="Scroll to top of page"
      >
        Back to top
      </button>
    </section>
  );
};

export default Contact;
