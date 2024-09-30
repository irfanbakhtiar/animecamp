import { Poppins } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/Navbar";
import Footer from "@/components/Footer";

const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Discover the Best in Anime - ANIMECAMP",
  description:
    "Explore top anime series with reviews and a passionate community.",
  keywords: [
    "anime",
    "manga",
    "Japanese animation",
    "anime community",
    "anime reviews",
  ],
  openGraph: {
    title: "Discover the Best in Anime - ANIMECAMP",
    description:
      "Explore top anime series with reviews and a passionate community.",
    images: [{ url: "/images/animecamp.jpg" }],
    type: "website",
    locale: "en_US",
    siteName: "ANIMECAMP",
  },
  twitter: {
    card: "summary_large_image",
    title: "Discover the Best in Anime - ANIMECAMP",
    description:
      "Explore top anime series with reviews and a passionate community.",
    images: ["/images/animecamp.jpg"],
    creator: "@animecamp",
  },
  linkedin: {
    title: "Discover the Best in Anime - ANIMECAMP",
    description:
      "Explore top anime series with reviews and a passionate community.",
    image: "/images/animecamp.jpg",
  },
  google: {
    name: "Discover the Best in Anime - ANIMECAMP",
    description:
      "Explore top anime series with reviews and a passionate community.",
    image: "/images/animecamp.jpg",
  },
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} bg-gray-800 flex flex-col h-screen justify-between`}
      >
        <NavBar />
        <div className="mb-auto">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
