import Image from "next/image";
import Link from "next/link";
import Second from "../components/Second";
import Third from "../components/Third";
import Thirdpointfive from "../components/Thirdpointfive";
import Fourth from "../components/Fourth";
import Fifth from "../components/Fifth";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Second />

      {/* Services Section */}
      <Third />

      {/* Reviews Section */}
      <Thirdpointfive />

      {/* About Section */}
      <Fourth />

      {/* Contact CTA */}
      <Fifth />

      {/* Footer */}
      <Footer />
    </div>
  );
}
