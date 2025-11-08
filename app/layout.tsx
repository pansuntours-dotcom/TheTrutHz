import "./globals.css";
import React from "react";

export const metadata = {
  title: "The TrutHz",
  description: "A social streaming + gallery platform for free expression."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen flex flex-col">
          <header className="py-4 border-b border-white/10">
            <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
              <div className="text-lg font-bold">The TrutHz</div>
              <nav className="space-x-4 text-sm">
                <a href="#gallery" className="hover:underline">Gallery</a>
                <a href="#live" className="hover:underline">Live</a>
                <a href="https://github.com/pansuntours-dotcom/TheTrutHz" target="_blank" rel="noreferrer" className="hover:underline">GitHub</a>
              </nav>
            </div>
          </header>

          <main className="flex-1">{children}</main>

          <footer className="py-6 border-t border-white/6 mt-8">
            <div className="max-w-6xl mx-auto px-6 text-sm text-slate-400">
              © {new Date().getFullYear()} The TrutHz — Built to scale. All rights reserved.
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
