"use client";

import { useState } from "react";

const SERVICES = [
  "Neuro-Rehabilitation",
  "Physiotherapy",
  "De-Addiction (Alcohol / Drugs / Smoking)",
  "Mental Health & Counselling",
  "Holistic Healing",
  "General Enquiry",
];

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");
  const [form, setForm] = useState({ name: "", phone: "", service: "", message: "" });

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? "YOUR_ACCESS_KEY",
        email: "shorg712017@gmail.com",
        subject: `New enquiry – ${form.service || "General"}`,
        from_name: form.name,
        ...form,
      }),
    });

    if (res.ok) {
      setStatus("done");
      setForm({ name: "", phone: "", service: "", message: "" });
    } else {
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <div className="text-center py-10">
        <div className="text-5xl mb-4">🙏</div>
        <p className="text-2xl font-bold text-[#1B3A6B]">Thank you!</p>
        <p className="text-gray-600 mt-2">We will call you back very soon.</p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-6 text-[#F47920] underline text-sm"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1">Your Name *</label>
        <input
          required
          type="text"
          placeholder="e.g. Ramesh Kumar"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="w-full border border-gray-300 rounded-lg px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-[#F47920]"
        />
      </div>
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1">Phone Number *</label>
        <input
          required
          type="tel"
          placeholder="+91 99999 99999"
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
          className="w-full border border-gray-300 rounded-lg px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-[#F47920]"
        />
      </div>
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1">I need help with</label>
        <select
          value={form.service}
          onChange={(e) => setForm({ ...form, service: e.target.value })}
          className="w-full border border-gray-300 rounded-lg px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-[#F47920] bg-white"
        >
          <option value="">-- Select a service --</option>
          {SERVICES.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
      </div>
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1">Message (optional)</label>
        <textarea
          rows={3}
          placeholder="Tell us a little about the situation..."
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className="w-full border border-gray-300 rounded-lg px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-[#F47920] resize-none"
        />
      </div>
      <p className="text-xs text-gray-400">
        Your details are kept private and used only to contact you about treatment.
      </p>
      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full bg-[#F47920] hover:bg-orange-600 text-white font-bold py-4 rounded-xl text-lg transition disabled:opacity-60"
      >
        {status === "sending" ? "Sending…" : "Request a Call Back"}
      </button>
      {status === "error" && (
        <p className="text-red-500 text-sm text-center">
          Something went wrong. Please call us directly at{" "}
          <a href="tel:+918317648543" className="underline">83176 48543</a>.
        </p>
      )}
    </form>
  );
}
