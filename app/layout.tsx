import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MedCheck – Medication Interaction Alert System",
  description: "Check drug interactions before taking new medications. Get instant severity ratings and doctor consultation recommendations."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="e55afdd2-b3df-4808-b050-85431e7e3204"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">{children}</body>
    </html>
  );
}
