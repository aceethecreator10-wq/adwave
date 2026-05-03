import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import Work from "@/components/Work";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <Services />
      <Work />
      <Process />
      <section className="bg-tint py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="font-heading text-3xl font-bold text-charcoal md:text-4xl">
            Give Us Your Feedback
          </h2>
          <p className="mt-4 text-midgrey">
            We value your experience. Share your thoughts and help us grow.
          </p>
          <a
            href="/feedback"
            className="mt-8 inline-block rounded-full bg-ocean px-8 py-4 text-base font-semibold text-white transition-opacity hover:opacity-90"
          >
            Share Your Experience
          </a>
        </div>
      </section>
      <Testimonials />
      <About />
      <Contact />
      <Footer />
    </>
  );
}