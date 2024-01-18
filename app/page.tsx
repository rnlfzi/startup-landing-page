import Blog from "@/components/blog";
import Boots from "@/components/boost";
import CS from "@/components/cs";
import Features from "@/components/features";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import Testimonial from "@/components/testimonial";
import Video from "@/components/video";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Features />
      <Boots />
      <Video />
      <Testimonial />
      <CS />
      <Blog />
      <Footer />
    </div>
  );
}
