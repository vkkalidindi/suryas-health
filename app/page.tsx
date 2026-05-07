import Image from "next/image";
import ContactForm from "@/components/ContactForm";

const SERVICES = [
  {
    icon: "🧠",
    title: "Neuro-Rehabilitation",
    items: ["Neuro Care", "Elderly Care", "Orthopedic Rehabilitation", "Palliative Care", "Occupational Therapy", "Behavior Therapy"],
  },
  {
    icon: "🏃",
    title: "Physiotherapy",
    items: ["Post-Stroke Rehabilitation", "Joint & Muscle Health", "Back Pain Rehabilitation", "Sports Injury Care", "Posture & Stability Training"],
  },
  {
    icon: "🚫",
    title: "De-Addiction & Mental Health",
    items: ["Alcohol De-Addiction", "Smoking Cessation", "Drug Rehabilitation", "Gambling & Gaming Addiction", "Depression Management", "Anxiety & Stress Care"],
  },
  {
    icon: "🌿",
    title: "Holistic Healing",
    items: ["Nutritious & Balanced Food", "Comfortable Accommodation", "Individual & Family Counseling", "Vocational Training Programs", "Occupational Therapy"],
  },
];

const PHONE = "+918317648543";
const PHONE_DISPLAY = "+91 83176 48543";
const WHATSAPP_URL = `https://wa.me/918317648543?text=Hello%2C%20I%20would%20like%20to%20know%20more%20about%20your%20services.`;

export default function HomePage() {
  return (
    <div className="min-h-screen font-sans">

      {/* Top bar */}
      <div className="bg-[#1B3A6B] text-white text-sm py-2 px-4 text-center">
        📞 24/7 Helpline:{" "}
        <a href={`tel:${PHONE}`} className="font-bold underline">{PHONE_DISPLAY}</a>
        {" · "}
        Bypass Road, Behind Vector School, Nizamabad
      </div>

      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image
              src="/teja-logo.jpeg"
              alt="Teja Rehabilitation Centre Logo"
              width={56}
              height={56}
              className="rounded-full object-cover"
            />
            <div>
              <p className="font-bold text-[#1B3A6B] text-sm leading-tight">Teja Rehabilitation &amp; De-Addiction Centre</p>
              <p className="text-xs text-gray-500">A unit of Surya&apos;s Health Organization</p>
            </div>
          </div>
          <a
            href={`tel:${PHONE}`}
            className="bg-[#F47920] text-white text-sm font-bold px-4 py-2 rounded-lg hover:bg-orange-600 transition"
          >
            Call Now
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#FFF7EE] to-[#e8f0fb] py-14 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <Image
            src="/teja-logo.jpeg"
            alt="Teja Rehabilitation & De-Addiction Centre"
            width={120}
            height={120}
            className="mx-auto rounded-full object-cover shadow-lg mb-6"
          />
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#1B3A6B] leading-tight">
            Journey Towards Wellness
          </h1>
          <p className="mt-4 text-lg text-gray-700 max-w-xl mx-auto">
            Are you or your loved one struggling with addiction, mental health challenges, or
            recovery after illness?{" "}
            <strong>We are here to help</strong> — with 24/7 compassionate care.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${PHONE}`}
              className="bg-[#F47920] text-white text-xl font-bold px-8 py-4 rounded-xl shadow-md hover:bg-orange-600 transition"
            >
              📞 Call Us Now
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white text-xl font-bold px-8 py-4 rounded-xl shadow-md hover:bg-green-600 transition"
            >
              💬 WhatsApp Us
            </a>
          </div>
          <p className="mt-4 text-sm text-gray-500">Free consultation · Confidential · No judgment</p>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-14 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1B3A6B] mb-4">About Us</h2>
          <p className="text-gray-700 text-lg leading-relaxed max-w-2xl mx-auto">
            <strong>Surya&apos;s Health Organization</strong> runs the{" "}
            <strong>Teja Rehabilitation &amp; De-Addiction Centre</strong> in Nizamabad —
            a registered centre (Regd. No: 71/2017) dedicated to helping patients and families
            rebuild their lives. Our team provides professional medical care, therapy, and a
            safe, supportive home for recovery.
          </p>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { icon: "❤️", label: "Compassionate Care" },
              { icon: "🏅", label: "Professional Excellence" },
              { icon: "🌱", label: "Holistic Healing" },
            ].map(({ icon, label }) => (
              <div key={label} className="bg-[#FFF7EE] rounded-xl p-6">
                <div className="text-4xl mb-2">{icon}</div>
                <p className="font-bold text-[#1B3A6B]">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-14 px-4 bg-[#f4f7fb]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1B3A6B] text-center mb-2">
            Our Services
          </h2>
          <p className="text-center text-gray-500 mb-10">
            All services available 24/7 — inpatient and outpatient care
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {SERVICES.map(({ icon, title, items }) => (
              <div key={title} className="bg-white rounded-2xl shadow-sm p-6 border border-orange-100">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">{icon}</span>
                  <h3 className="text-lg font-bold text-[#1B3A6B]">{title}</h3>
                </div>
                <ul className="space-y-1">
                  {items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-gray-700 text-sm">
                      <span className="text-[#F47920] mt-0.5">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Flyer highlight */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-3xl mx-auto flex flex-col sm:flex-row items-center gap-8">
          <Image
            src="/cfe1411b-3e0d-4eab-a8fd-ccd90faf56b0.jpeg"
            alt="Teja Rehabilitation & De-Addiction Centre"
            width={300}
            height={400}
            className="rounded-2xl shadow-lg w-full sm:w-64 object-contain"
          />
          <div>
            <h2 className="text-2xl font-extrabold text-[#1B3A6B] mb-3">
              Teja Rehabilitation &amp; De-Addiction Centre
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              A unit of Surya&apos;s Health Organization. We offer a safe, supportive, and healing
              environment with personalised care plans and an experienced medical team.
              Comfortable accommodation and holistic support for patients and their families.
            </p>
            <a
              href={`tel:${PHONE}`}
              className="inline-block bg-[#F47920] text-white font-bold px-6 py-3 rounded-xl hover:bg-orange-600 transition"
            >
              📞 {PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </section>

      {/* Lead capture */}
      <section id="contact" className="py-14 px-4 bg-[#1B3A6B]">
        <div className="max-w-xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white text-center mb-2">
            Get a Free Call Back
          </h2>
          <p className="text-center text-blue-200 mb-8 text-sm">
            Leave your number — our team will call you back within a few hours.
            Everything is kept confidential.
          </p>
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-xl">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Visit Us */}
      <section id="visit" className="py-14 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1B3A6B] mb-6">Visit Us</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
            <div className="bg-[#FFF7EE] rounded-xl p-5">
              <div className="text-3xl mb-2">📍</div>
              <p className="font-bold text-[#1B3A6B] text-sm">Address</p>
              <p className="text-gray-600 text-sm mt-1">
                Bypass Road, Behind Vector School,<br />Nizamabad, Telangana
              </p>
            </div>
            <div className="bg-[#FFF7EE] rounded-xl p-5">
              <div className="text-3xl mb-2">📞</div>
              <p className="font-bold text-[#1B3A6B] text-sm">Phone / WhatsApp</p>
              <a href={`tel:${PHONE}`} className="text-[#F47920] font-bold text-sm block mt-1">
                {PHONE_DISPLAY}
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-600 text-sm underline block mt-1"
              >
                Chat on WhatsApp
              </a>
            </div>
            <div className="bg-[#FFF7EE] rounded-xl p-5">
              <div className="text-3xl mb-2">🕐</div>
              <p className="font-bold text-[#1B3A6B] text-sm">Hours</p>
              <p className="text-gray-600 text-sm mt-1">
                Open 24 hours, 7 days a week<br />
                <span className="text-[#F47920] font-semibold">Always available</span>
              </p>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg w-full h-56">
            <iframe
              title="Location map"
              src="https://maps.google.com/maps?q=Nizamabad+Telangana&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1B3A6B] text-white py-8 px-4 text-center text-sm">
        <p className="font-bold text-lg mb-1">Surya&apos;s Health Organization</p>
        <p className="text-blue-200 mb-1">Teja Rehabilitation &amp; De-Addiction Centre · Regd. No: 71/2017</p>
        <p className="text-blue-200 mb-3">Bypass Road, Behind Vector School, Nizamabad · {PHONE_DISPLAY}</p>
        <p className="text-blue-300 text-xs">
          © {new Date().getFullYear()} Surya&apos;s Health Organization. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
