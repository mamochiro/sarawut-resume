import "./globals.css";
import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: {
    default: "Sarawut Nawawisitkul | Senior Backend Engineer",
    template: "%s | Sarawut Nawawisitkul",
  },
  icons: {
    icon: [{ url: "/icon.png", type: "image/png", sizes: "32x32" }],
    apple: [{ url: "/icon.png", sizes: "180x180" }],
  },
  description:
    "Senior Backend Engineer specializing in Golang, distributed systems, Kafka, Elasticsearch, and cloud-native architectures.",
  keywords: [
    "Backend Engineer",
    "Senior Backend Engineer",
    "Golang",
    "Distributed Systems",
    "Kafka",
    "Elasticsearch",
    "Microservices",
    "Cloud Native",
    "FinTech",
  ],
  authors: [{ name: "Sarawut Nawawisitkul" }],
  creator: "Sarawut Nawawisitkul",
  metadataBase: new URL("https://sarawut.dev"),

  openGraph: {
    title: "Sarawut Nawawisitkul | Senior Backend Engineer",
    description:
      "Senior Backend Engineer with experience building scalable financial and distributed systems using Golang, Kafka, and Elasticsearch.",
    url: "https://sarawut.dev",
    siteName: "Sarawut Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Sarawut Nawawisitkul – Senior Backend Engineer",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Sarawut Nawawisitkul | Senior Backend Engineer",
    description:
      "Senior Backend Engineer focused on Golang, distributed systems, and financial platforms.",
    images: ["/og.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,600;0,700;0,800;1,700&family=DM+Sans:ital,wght@0,300;0,400;0,500;0,600;1,400&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
