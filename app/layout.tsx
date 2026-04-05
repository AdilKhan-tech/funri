import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ClientComponents from "./components/ClientComponents";
import "../css/bootstrap.min.css";
import "../css/tiny-slider.css";
import "../css/style.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Furni - Modern Furniture Store",
  description: "Modern Interior Design Studio - Quality Furniture for Your Home",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
        />
      </head>
      <body>
        <ClientComponents>{children}</ClientComponents>
      </body>
    </html>
  );
}
