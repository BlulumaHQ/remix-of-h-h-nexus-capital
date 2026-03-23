import { Link } from "react-router-dom";
import { useLanguage } from "@/context/LanguageContext";
import logo from "@/assets/logo.svg";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-primary border-t border-white/5">
      <div className="section-container py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <img src={logo} alt="HH Nexus Capital" className="h-10 w-auto" />
            <div>
              <p className="font-display text-sm text-primary-foreground font-semibold">
                {t("HH Nexus Capital Ltd.", "衡寰資本有限公司")}
              </p>
              <p className="text-primary-foreground/40 text-xs font-body">
                {t("Family Office & Cultural Capital Platform", "家族辦公室與文化資本平台")}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <p className="text-primary-foreground/30 text-xs font-body">
              © {new Date().getFullYear()} HH Nexus Capital Ltd.
            </p>
            <Link to="/privacy" className="text-primary-foreground/30 hover:text-secondary text-xs font-body transition-colors">
              {t("Privacy", "隱私")}
            </Link>
            <Link to="/terms" className="text-primary-foreground/30 hover:text-secondary text-xs font-body transition-colors">
              {t("Terms", "條款")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
