import { Link } from "react-router-dom";
import { useLanguage } from "@/context/LanguageContext";
import logo from "@/assets/logo.svg";

const navEn = [
  { label: "About", href: "/about" },
  { label: "Investment", href: "/investment" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Leadership", href: "/leadership" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
];

const navZh = [
  { label: "關於我們", href: "/about" },
  { label: "資本理念", href: "/investment" },
  { label: "投資組合", href: "/portfolio" },
  { label: "領導團隊", href: "/leadership" },
  { label: "洞察觀點", href: "/insights" },
  { label: "聯絡我們", href: "/contact" },
];

const Footer = () => {
  const { lang, t } = useLanguage();
  const navItems = lang === "en" ? navEn : navZh;

  return (
    <footer className="bg-primary border-t border-white/5">
      <div className="section-container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16 mb-12">
          <div>
            <img src={logo} alt="HH Nexus Capital" className="h-16 w-auto mb-5" />
            <p className="font-display text-lg md:text-xl text-primary-foreground font-semibold mb-1">
              {t("HH Nexus Capital Ltd.", "衡寰資本有限公司")}
            </p>
            <p className="font-display text-sm text-secondary mb-3">
              {t("Family Office & Cultural Capital Platform", "家族辦公室與文化資本平台")}
            </p>
            <p className="text-primary-foreground/50 text-sm leading-relaxed font-body">
              {t("Connecting Capital, Culture, and Long-Term Value.", "連結資本、文化與長期價值。")}
            </p>
          </div>

          <div>
            <p className="text-primary-foreground/40 text-xs tracking-[0.15em] uppercase mb-4 font-body">
              {t("Navigation", "導覽")}
            </p>
            <div className="grid grid-cols-2 gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className="text-primary-foreground/50 hover:text-secondary text-sm transition-colors font-body"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="text-primary-foreground/40 text-xs tracking-[0.15em] uppercase mb-4 font-body">
              {t("Contact", "聯絡")}
            </p>
            <div className="space-y-2">
              <p className="text-primary-foreground/60 text-sm font-body">Vancouver, Canada</p>
              <p className="text-primary-foreground/60 text-sm font-body">info@hhnexuscapital.com</p>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-primary-foreground/40 text-xs tracking-wide font-body">
            © {new Date().getFullYear()} HH Nexus Capital Ltd. {t("All rights reserved.", "版權所有。")}
          </p>
          <div className="flex gap-6">
            <Link to="/privacy" className="text-primary-foreground/40 hover:text-secondary text-xs tracking-wide transition-colors font-body">
              {t("Privacy Policy", "隱私政策")}
            </Link>
            <Link to="/terms" className="text-primary-foreground/40 hover:text-secondary text-xs tracking-wide transition-colors font-body">
              {t("Terms", "條款")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
