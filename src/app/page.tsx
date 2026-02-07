import {
  Navbar,
  Hero,
  Problem,
  Solution,
  Features,
  HowItWorks,
  Pricing,
  Testimonials,
  FAQ,
  FinalCTA,
  Footer,
} from '@/components';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <Features />
        <HowItWorks />
        <Pricing />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
