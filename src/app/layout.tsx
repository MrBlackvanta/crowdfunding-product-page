import { SITE_URL } from "@/app/site";
import type { Metadata, Viewport } from "next";
import { Commissioner } from "next/font/google";
import "./globals.css";

const commissioner = Commissioner({
  variable: "--font-commissioner",
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

const name = "crowdfund";
const title = `${name} | Back the Mastercraft Bamboo Monitor Riser`;
const description =
  "A beautiful and handcrafted monitor stand to reduce neck and eye strain. Follow the campaign total, pick the reward that suits you, and back the project.";

const shareImage = {
  url: "/opengraph-image.jpg",
  width: 1200,
  height: 630,
  alt: "A photo of the bamboo monitor riser beside the headline “Back the Mastercraft Bamboo Monitor Riser”.",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title,
  description,
  alternates: { canonical: "/" },
  openGraph: {
    title,
    description,
    url: "/",
    siteName: name,
    locale: "en_US",
    type: "website",
    images: [shareImage],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [shareImage],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#fafafa",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${commissioner.variable} antialiased`}>
      <body>
        <a href="#main" className="v-skip-link">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
