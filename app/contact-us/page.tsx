"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ContactUs() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted:", form);
    // TODO: hook up backend/email API (e.g., Nodemailer, Resend, etc.)
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-6 py-12">
      <div className="max-w-2xl w-full">
        <h1 className="text-4xl font-bold text-center mb-4">
          Get in <span className="text-orange-600">Touch</span>
        </h1>
        <p className="text-center text-gray-600 mb-10">
          Have questions, feedback, or partnership ideas?  
          Drop us a message — we’d love to hear from you!
        </p>

        <form
          onSubmit={handleSubmit}
          className="bg-gray-50 shadow-md rounded-2xl p-8 space-y-6"
        >
          <div>
            <label className="block text-sm font-medium mb-2">Name</label>
            <Input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Email</label>
            <Input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="you@example.com"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Message</label>
            <Textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Write your message..."
              rows={5}
              required
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-orange-600 hover:bg-orange-700 text-white text-lg"
          >
            Send Message
          </Button>
        </form>

        <div className="text-center mt-10 text-gray-600">
          Or email us directly at{" "}
          <a
            href="mailto:support@aitripplanner.com"
            className="text-orange-600 font-medium"
          >
            support@aitripplanner.com
          </a>
        </div>
      </div>
    </div>
  );
}
