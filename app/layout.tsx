import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Discord Event Scheduler – Recurring Events with Timezone Handling",
  description: "Schedule recurring Discord events with automatic timezone conversion for global communities. Perfect for server admins, community managers, and gaming guilds."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="9af42032-1e1a-4c38-bdb0-006c153b5d8d"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">
        {children}
      </body>
    </html>
  );
}
