import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Surya's Health Organization – Teja Rehabilitation & De-Addiction Centre",
  description:
    "24/7 compassionate care for neuro-rehabilitation, physiotherapy, de-addiction, and mental health in Nizamabad. Great Care Closer to Home.",
  icons: { icon: "/favicon.png", apple: "/favicon.png" },
  openGraph: {
    title: "Surya's Health Organization",
    description: "Journey Towards Wellness – Nizamabad",
    images: ["/3e4a9bc9-08c6-4d21-b517-676ffd4016b0.jpeg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
