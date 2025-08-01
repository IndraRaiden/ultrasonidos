import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Second from "../components/Second";
import Third from "../components/Third";
import Fourth from "../components/Fourth";
import Fifth from "../components/Fifth";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col pt-24">
      <Navbar />
      {/* Hero Section */}
      <Second />

      {/* Services Section */}
      <Third />

      {/* About Section */}
      <Fourth />

      {/* Contact CTA */}
      <Fifth />

      {/* Footer */}
      <Footer />
    </div>
  );
}
