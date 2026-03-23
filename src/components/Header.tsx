import { useState, useEffect } from "react";
import { Globe } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import logo from "@/assets/logo.svg";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const { lang, setLang, t } = useLanguage();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToContact = () => {
    document.getElementById("final-cta")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-primary/98 backdrop-blur-md shadow-lg shadow-black/10"
          : "bg-transparent"
      }`}
    >
      <div className="section-container flex items-center justify-between h-16">
        <img src={logo} alt="HH Nexus Capital" className="h-10 w-auto" />

        <div className="flex items-center gap-3">
          <button
            onClick={() => setLang(lang === "en" ? "zh" : "en")}
            className="flex items-center gap-1 text-primary-foreground/50 hover:text-primary-foreground text-xs font-body tracking-wide transition-colors"
          >
            <Globe size={13} />
            {lang === "en" ? "中文" : "EN"}
          </button>
          <button
            onClick={scrollToContact}
            className="px-5 py-2 bg-secondary text-secondary-foreground text-xs font-semibold tracking-[0.1em] uppercase font-body hover:bg-secondary/90 transition-all active:scale-[0.97]"
          >
            {t("Get Started", "立即開始")}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
