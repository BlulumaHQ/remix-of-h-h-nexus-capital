import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/logo.svg";
import { Menu, X, Globe } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const navItemsEn = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Investment", href: "/investment" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Leadership", href: "/leadership" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
];

const navItemsZh = [
  { label: "首頁", href: "/" },
  { label: "關於我們", href: "/about" },
  { label: "資本理念", href: "/investment" },
  { label: "投資組合", href: "/portfolio" },
  { label: "領導團隊", href: "/leadership" },
  { label: "洞察觀點", href: "/insights" },
  { label: "聯絡我們", href: "/contact" },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const { lang, setLang, t } = useLanguage();
  const location = useLocation();

  const navItems = lang === "en" ? navItemsEn : navItemsZh;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-sm border-b border-white/5">
      <div className="section-container flex items-center justify-between h-20 md:h-24">
        <Link to="/" className="flex items-center">
          <img src={logo} alt="HH Nexus Capital" className="h-16 md:h-20 w-auto" />
        </Link>

        <nav className="hidden lg:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className={`text-sm font-body tracking-wide transition-colors duration-200 ${
                location.pathname === item.href
                  ? "text-secondary"
                  : "text-primary-foreground/70 hover:text-secondary"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <button
            onClick={() => setLang(lang === "en" ? "zh" : "en")}
            className="flex items-center gap-1.5 text-primary-foreground/60 hover:text-primary-foreground text-xs font-body tracking-wide transition-colors"
          >
            <Globe size={14} />
            {lang === "en" ? "EN / 中文" : "中文 / EN"}
          </button>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-6 py-2.5 bg-secondary text-secondary-foreground text-xs font-medium tracking-[0.1em] uppercase hover:bg-secondary/90 transition-colors font-body"
          >
            {t("Contact Us", "聯絡我們")}
          </Link>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-primary-foreground"
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <nav className="lg:hidden bg-primary border-t border-white/5">
          <div className="section-container py-6 flex flex-col gap-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                onClick={() => setOpen(false)}
                className={`text-sm tracking-wide transition-colors font-body ${
                  location.pathname === item.href
                    ? "text-secondary"
                    : "text-primary-foreground/70 hover:text-secondary"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-4 border-t border-white/5 flex flex-col gap-3">
              <button
                onClick={() => setLang(lang === "en" ? "zh" : "en")}
                className="flex items-center gap-1.5 text-primary-foreground/60 text-xs font-body tracking-wide"
              >
                <Globe size={14} />
                {lang === "en" ? "EN / 中文" : "中文 / EN"}
              </button>
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="inline-flex items-center justify-center px-6 py-2.5 bg-secondary text-secondary-foreground text-xs font-medium tracking-[0.1em] uppercase font-body"
              >
                {t("Contact Us", "聯絡我們")}
              </Link>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
