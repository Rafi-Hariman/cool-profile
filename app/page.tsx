import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Work from "@/components/work";
import About from "@/components/about";
import Stack from "@/components/stack";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Work />
        <About />
        <Stack />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
