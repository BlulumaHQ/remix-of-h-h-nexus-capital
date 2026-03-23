import { Link } from "react-router-dom";
import { useLanguage } from "@/context/LanguageContext";
import hsinFramingLogo from "@/assets/brands/hsin_framing_logo.png";
import cambridgeArtLogo from "@/assets/brands/cambridge_art_logo.png";
import hsinEventsLogo from "@/assets/brands/hsin_events_logo.png";
import laPetiteElliLogo from "@/assets/brands/la_petite_elli_logo.png";
import blulumaLogo from "@/assets/brands/bluluma_logo.png";

const companies = [
  { name: "Hsin Framing & Moulding", nameCn: "欣欣畫框", sector: "Art Craftsmanship", sectorCn: "藝術工藝", logo: hsinFramingLogo },
  { name: "Cambridge Art Center", nameCn: "劍橋藝術中心", sector: "Art Education", sectorCn: "藝術教育", logo: cambridgeArtLogo },
  { name: "Hsin PR & Events", nameCn: "欣欣公關活動", sector: "PR / Events", sectorCn: "公關 / 活動", logo: hsinEventsLogo },
  { name: "La Petite Elli", nameCn: "La Petite Elli", sector: "Lifestyle / Hospitality", sectorCn: "生活方式 / 餐飲", logo: laPetiteElliLogo },
  { name: "Bluluma Design", nameCn: "Bluluma Design", sector: "Brand Strategy / Digital", sectorCn: "品牌策略 / 數位", logo: blulumaLogo },
];

const PortfolioSection = () => {
  const { lang, t } = useLanguage();

  return (
    <section id="portfolio" className="section-padding bg-primary">
      <div className="section-container">
        <div className="max-w-2xl mb-16">
          <div className="gold-line mb-6" />
          <p className="label-uppercase mb-4">{t("Portfolio", "投資組合")}</p>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-primary-foreground tracking-tight mb-6">
            {t("Operating Portfolio Companies", "營運投資組合企業")}
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {companies.map((c) => (
            <div
              key={c.name}
              className="border border-primary-foreground/10 p-6 hover:border-secondary/40 transition-colors flex flex-col items-center text-center"
            >
              <div className="h-16 mb-4 flex items-center justify-center">
                <img src={c.logo} alt={c.name} className="max-h-[60px] max-w-[120px] object-contain" />
              </div>
              <h3 className="font-display text-sm font-semibold text-primary-foreground mb-1">
                {lang === "en" ? c.name : c.nameCn}
              </h3>
              <p className="text-primary-foreground/50 text-xs tracking-[0.1em] uppercase font-body">
                {lang === "en" ? c.sector : c.sectorCn}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/portfolio"
            className="inline-flex items-center text-secondary text-sm font-body tracking-wide hover:text-secondary/80 transition-colors"
          >
            {t("View Full Portfolio →", "查看完整投資組合 →")}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
