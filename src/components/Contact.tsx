import { useState } from "react";
import emailjs from "emailjs-com";

type IFormData = {
  name: string;
  email: string;
  message: string;
};

type Errors = Partial<Record<keyof IFormData, string>>;

const SERVICE_ID = "service_iwmdoyq";
const TEMPLATE_ID = "template_t3uevr2";
const PUBLIC_KEY = "3Ay72OyUK2wKU8mGw";

function Contact() {
  const [form, setForm] = useState<IFormData>({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState("");

  const validate = (): boolean => {
    const newErrors: Errors = {};

    if (!form.name.trim()) newErrors.name = "Name is required.";
    if (!form.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(form.email)) {
      newErrors.email = "Email is invalid.";
    }
    if (!form.message.trim()) newErrors.message = "Message is required.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, form, PUBLIC_KEY);
      setStatus("Message sent successfully.");
      setForm({ name: "", email: "", message: "" });
      setErrors({});
    } catch (err) {
      console.error(err);
      setStatus("Failed to send message.");
    }
  };

  return (
    <section className="bg-dark-500 pt-[84px] pb-[92px]" id="contact">
      <div className="lg:max-w-[1110px] max-w-[90%] mx-auto flex flex-col md:flex-row justify-between gap-12">
        <div className="flex-1 flex flex-col gap-6">
          <h4 className="text-[28px] md:text-[32px] lg:text-[40px]  font-bold text-white">
            Contact
          </h4>
          <p className="text-sm md:max-w-[445px] text-white">
            I would love to hear about your project and how I could help. Please
            fill in the form, and I’ll get back to you as soon as possible.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="flex-1 w-full md:max-w-[500px] mt-10 md:mt-0 text-white"
        >
          {["name", "email", "message"].map(field => (
            <div key={field} className="mb-6">
              <label
                htmlFor={field}
                className="block text-xs uppercase mb-2 text-gray-400 tracking-wide"
              >
                {field}
              </label>
              {field === "message" ? (
                <textarea
                  id={field}
                  name={field}
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-gray-500 focus:outline-none focus:border-green-500 p-1"
                />
              ) : (
                <input
                  type={field === "email" ? "email" : "text"}
                  id={field}
                  name={field}
                  value={form[field as keyof IFormData]}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-gray-500 focus:outline-none focus:border-green-500 p-1"
                />
              )}
              {errors[field as keyof IFormData] && (
                <p className="text-red-500 text-xs mt-1">
                  {errors[field as keyof IFormData]}
                </p>
              )}
            </div>
          ))}

          <div className="flex justify-end">
            <button
              type="submit"
              className="uppercase text-sm font-semibold tracking-wider text-white relative group"
            >
              Send Message
              <span className="block h-[2px] w-full bg-green-500 mt-1 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
            </button>
          </div>

          {status && (
            <p className="mt-4 text-sm text-center text-red-400">{status}</p>
          )}
        </form>
      </div>
    </section>
  );
}

export default Contact;
