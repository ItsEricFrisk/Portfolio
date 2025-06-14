import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FormErrors, FormData } from "../types";
import TextField from "./TextField";

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
      console.error("Missing EmailJS environment variables");
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

  return (
    <section
      id="contact"
      className="border-t-2 border-borderSecondary flex flex-col items-start justify-center pt-10 gap-8 relative"
    >
      <TextField
        styling="text-md"
        text="I'm always looking for new opportunities to collaborate and grow.
          Whether you have a project in mind or just want to say hello, I'd love
          to hear from you."
      />
      <form
        ref={form}
        onSubmit={sendEmail}
        className="w-full flex flex-col items-end gap-y-5 mb-10"
      >
        <div className="w-full flex flex-col gap-y-2">
          <div className="">
            <input
              type="text"
              placeholder="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full p-2 rounded-sm border ${
                errors.name ? "border-error" : "border-borderPrimary"
              }`}
            />
            {errors.name && (
              <p className="text-error text-sm mt-1">{errors.name}</p>
            )}
          </div>
          <div className="w-full">
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full p-2 rounded-sm border ${
                errors.email ? "border-error" : "border-borderPrimary"
              }`}
            />
            {errors.email && (
              <p className="text-error text-sm mt-1">{errors.email}</p>
            )}
          </div>
        </div>
        <div className="w-full">
          <textarea
            placeholder="Message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className={`w-full p-2 rounded-sm border ${
              errors.message ? "border-error" : "border-borderPrimary"
            }`}
          />
          {errors.message && (
            <p className="text-error text-sm mt-1">{errors.message}</p>
          )}
        </div>
        {successMessage && (
          <p className="text-success text-sm">{successMessage}</p>
        )}
        {errorMessage && <p className="text-error text-sm">{errorMessage}</p>}
        <button
          type="submit"
          className=" px-4 py-2 rounded shadow-sm hover:bg-hoverBg border border-borderPrimary"
        >
          Send
        </button>
      </form>
    </section>
  );
};

export default Contact;
