import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage } from "@/context/LanguageContext";
import heroImage from "@/assets/hero-skyline.jpg";
import hsinFramingLogo from "@/assets/brands/hsin_framing_logo.png";
import cambridgeArtLogo from "@/assets/brands/cambridge_art_logo.png";
import hsinEventsLogo from "@/assets/brands/hsin_events_logo.png";
import laPetiteElliLogo from "@/assets/brands/la_petite_elli_logo.png";
import blulumaLogo from "@/assets/brands/bluluma_logo.png";

const portfolioCompanies = [
  {
    slug: "hsin-framing",
    name: "Hsin Framing & Moulding",
    nameCn: "欣欣畫框",
    sector: "Art Craftsmanship / Manufacturing",
    sectorCn: "藝術工藝 / 製造",
    founded: "1995",
    location: "Vancouver, Canada",
    locationCn: "加拿大溫哥華",
    logo: hsinFramingLogo,
    description: "Hsin Framing & Moulding is a Vancouver-based craftsmanship company specializing in premium custom framing and art presentation. The company works with artists, collectors, galleries, and designers seeking high-quality framing and preservation solutions.",
    descriptionCn: "欣欣畫框是一家位於溫哥華的工藝公司，專精於高端定制畫框和藝術展示。公司與藝術家、收藏家、畫廊和設計師合作，提供高品質的裝裱和保存解決方案。",
  },
  {
    slug: "cambridge-art",
    name: "Cambridge Art Center",
    nameCn: "劍橋藝術中心",
    sector: "Art Education / Creative Programs",
    sectorCn: "藝術教育 / 創意課程",
    founded: "2005",
    location: "Vancouver, Canada",
    locationCn: "加拿大溫哥華",
    logo: cambridgeArtLogo,
    description: "Cambridge Art Center provides educational programs focused on craftsmanship, metal arts, and creative skill development. The center supports artists and students through workshops, mentorship, and community engagement.",
    descriptionCn: "劍橋藝術中心提供以工藝、金屬藝術和創意技能發展為重點的教育課程。中心通過工作坊、導師計劃和社區活動支持藝術家和學生。",
  },
  {
    slug: "hsin-events",
    name: "Hsin PR & Events",
    nameCn: "欣欣公關活動",
    sector: "Public Relations / Events",
    sectorCn: "公共關係 / 活動策劃",
    founded: "2012",
    location: "Vancouver, Canada",
    locationCn: "加拿大溫哥華",
    logo: hsinEventsLogo,
    description: "Hsin PR & Events specializes in brand activations, cultural events, and corporate experiences. The company works with organizations seeking to create meaningful engagement with audiences through curated events and strategic communications.",
    descriptionCn: "欣欣公關活動專精於品牌推廣、文化活動和企業體驗。公司與尋求通過策劃活動和策略傳播與受眾建立有意義互動的組織合作。",
  },
  {
    slug: "la-petite-elli",
    name: "La Petite Elli Coffee & Tea Boutique",
    nameCn: "La Petite Elli 咖啡茶精品店",
    sector: "Lifestyle / Hospitality",
    sectorCn: "生活方式 / 餐飲",
    founded: "2018",
    location: "Vancouver, Canada",
    locationCn: "加拿大溫哥華",
    logo: laPetiteElliLogo,
    description: "La Petite Elli Coffee & Tea Boutique is a curated café and lifestyle boutique offering specialty coffee, premium teas, and artisanal ingredients. The brand focuses on craftsmanship, quality sourcing, and community-driven experiences.",
    descriptionCn: "La Petite Elli 咖啡茶精品店是一家精選咖啡廳和生活方式精品店，提供特色咖啡、高級茶和手工食材。品牌專注於工藝、優質採購和社區驅動的體驗。",
  },
  {
    slug: "bluluma",
    name: "Bluluma Design",
    nameCn: "Bluluma Design",
    sector: "Brand Strategy / Digital Design",
    sectorCn: "品牌策略 / 數位設計",
    founded: "2020",
    location: "Vancouver, Canada",
    locationCn: "加拿大溫哥華",
    logo: blulumaLogo,
    url: "https://www.bluluma.com",
    description: "Bluluma Design is a creative studio specializing in brand identity, website design, and digital storytelling. The studio works with modern businesses to build strong brand systems and engaging digital experiences.",
    descriptionCn: "Bluluma Design 是一家專精於品牌識別、網站設計和數位故事敘述的創意工作室。工作室與現代企業合作，建立強大的品牌系統和引人入勝的數位體驗。",
  },
];

const Portfolio = () => {
  const { lang, t } = useLanguage();

  return (
    <>
      <Header />
      <main>
        <section className="bg-primary pt-28 md:pt-36 pb-16 md:pb-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${heroImage})` }} />
          <div className="absolute inset-0 bg-primary/80" />
          <div className="section-container relative z-10">
            <div className="gold-line mb-6" />
            <p className="label-uppercase mb-4">{t("Portfolio", "投資組合")}</p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-primary-foreground tracking-tight leading-[1.1] max-w-3xl">
              {lang === "en" ? (
                <>Operating <span className="text-secondary">Portfolio Companies</span></>
              ) : (
                <>營運<span className="text-secondary">投資組合企業</span></>
              )}
            </h1>
            <p className="text-primary-foreground/60 text-base md:text-lg leading-relaxed mt-6 max-w-2xl">
              {t(
                "HH Nexus Capital maintains a portfolio of operating companies spanning craftsmanship, creative industries, brand strategy, and lifestyle experiences. These companies represent the foundation of the broader platform ecosystem, combining heritage craftsmanship, entrepreneurship, and community engagement.",
                "衡寰資本擁有一系列橫跨工藝、創意產業、品牌策略和生活方式體驗的營運公司。這些公司代表了更廣泛平台生態系統的基礎，結合了傳統工藝、創業精神和社區參與。"
              )}
            </p>
          </div>
        </section>

        {/* Logo Grid */}
        <section className="section-padding bg-background">
          <div className="section-container">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {portfolioCompanies.map((c) => {
                const logoElement = (
                  <img
                    src={c.logo}
                    alt={c.name}
                    className="max-h-[80px] max-w-[180px] object-contain"
                  />
                );

                return (
                  <div key={c.slug} className="p-8 bg-card border border-border hover:border-secondary/20 transition-colors flex flex-col items-center text-center">
                    <div className="h-24 mb-5 flex items-center justify-center">
                      {c.url ? (
                        <a href={c.url} target="_blank" rel="noopener noreferrer">{logoElement}</a>
                      ) : (
                        logoElement
                      )}
                    </div>
                    <h3 className="font-display text-lg font-semibold text-primary mb-1">
                      {lang === "en" ? c.name : c.nameCn}
                    </h3>
                    <p className="text-xs text-secondary font-body tracking-wide mb-1">
                      {lang === "en" ? c.sector : c.sectorCn}
                    </p>
                    <p className="text-xs text-muted-foreground font-body">
                      {t("Est.", "創立")} {c.founded} · {lang === "en" ? c.location : c.locationCn}
                    </p>
                    {c.url && (
                      <a href={c.url} target="_blank" rel="noopener noreferrer" className="mt-3 text-xs text-secondary hover:text-secondary/80 transition-colors font-body">
                        bluluma.com →
                      </a>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Detailed Cards */}
            <div className="space-y-8">
              {portfolioCompanies.map((c) => (
                <Link to={`/portfolio/${c.slug}`} key={c.slug} className="block p-8 md:p-10 bg-card border border-border hover:border-secondary/20 transition-colors group">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-4">
                    <div>
                      <h3 className="font-display text-xl md:text-2xl font-semibold text-primary group-hover:text-secondary transition-colors">
                        {lang === "en" ? c.name : c.nameCn}
                      </h3>
                      <p className="text-secondary text-sm font-body tracking-wide">
                        {lang === "en" ? c.sector : c.sectorCn}
                      </p>
                    </div>
                    <div className="flex gap-4">
                      <span className="text-xs text-muted-foreground font-body border border-border px-3 py-1">
                        {t("Est.", "創立")} {c.founded}
                      </span>
                      <span className="text-xs text-muted-foreground font-body border border-border px-3 py-1">
                        {lang === "en" ? c.location : c.locationCn}
                      </span>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed font-body">
                    {lang === "en" ? c.description : c.descriptionCn}
                  </p>
                  <span className="inline-block mt-4 text-xs text-secondary font-body tracking-wide group-hover:translate-x-1 transition-transform">
                    {t("View Details →", "查看詳情 →")}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Portfolio;
