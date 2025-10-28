// app/layout.tsx
import './globals.css';
import Script from 'next/script';
import type { ReactNode } from 'react';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* model-viewer library for AR (client side) */}
        <Script src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js" strategy="beforeInteractive" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
