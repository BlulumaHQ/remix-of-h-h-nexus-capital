import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import InvestmentThesisSection from "@/components/InvestmentThesisSection";
import PortfolioSection from "@/components/PortfolioSection";
import GlobalNetworkSection from "@/components/GlobalNetworkSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => (
  <>
    <Header />
    <main>
      <HeroSection />
      <InvestmentThesisSection />
      <PortfolioSection />
      <GlobalNetworkSection />
      <ContactSection />
    </main>
    <Footer />
  </>
);

export default Index;
