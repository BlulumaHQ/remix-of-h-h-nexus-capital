import { Link } from "react-router-dom";
import { useLanguage } from "@/context/LanguageContext";
import heroImage from "@/assets/hero-skyline.jpg";

const HeroSection = () => {
  const { lang, t } = useLanguage();

  return (
    <section className="relative min-h-[85vh] flex items-center pt-20 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-primary/45" />

      <div className="section-container w-full relative z-10">
        <div className="max-w-3xl">
          <div className="gold-line mb-8" />
          <p className="font-display text-xl md:text-2xl text-primary-foreground font-semibold tracking-wide mb-2">
            {t("HH Nexus Capital", "衡寰資本")}
          </p>
          <p className="label-uppercase mb-6">
            {t("Family Office & Cultural Capital Platform", "家族辦公室與文化資本平台")}
          </p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold text-primary-foreground leading-[1.1] tracking-tight mb-8">
            {lang === "en" ? (
              <>
                Connecting Capital,
                <br />
                Culture, and
                <br />
                <span className="text-secondary">Long-Term Value</span>
              </>
            ) : (
              <>
                連結資本、文化
                <br />
                與<span className="text-secondary">長期價值</span>
              </>
            )}
          </h1>

          <div className="flex flex-col sm:flex-row gap-4 mt-10">
            <Link
              to="/portfolio"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-secondary text-secondary-foreground text-sm font-medium tracking-wide hover:bg-secondary/90 transition-colors"
            >
              {t("Explore Portfolio", "探索投資組合")}
            </Link>
            <Link
              to="/investment"
              className="inline-flex items-center justify-center px-8 py-3.5 border border-primary-foreground/20 text-primary-foreground/80 text-sm font-medium tracking-wide hover:border-secondary hover:text-secondary transition-colors"
            >
              {t("Capital Philosophy", "資本理念")}
            </Link>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};

export default HeroSection;
