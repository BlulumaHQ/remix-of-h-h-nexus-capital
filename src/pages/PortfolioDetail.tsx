import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage } from "@/context/LanguageContext";
import heroImage from "@/assets/hero-skyline.jpg";
import hsinFramingLogo from "@/assets/brands/hsin_framing_logo.png";
import cambridgeArtLogo from "@/assets/brands/cambridge_art_logo.png";
import hsinEventsLogo from "@/assets/brands/hsin_events_logo.png";
import laPetiteElliLogo from "@/assets/brands/la_petite_elli_logo.png";
import blulumaLogo from "@/assets/brands/bluluma_logo.png";

const companies: Record<string, {
  name: string; nameCn: string;
  sector: string; sectorCn: string;
  founded: string;
  location: string; locationCn: string;
  logo: string; url?: string;
  description: string; descriptionCn: string;
  services: string[]; servicesCn: string[];
  role: string; roleCn: string;
}> = {
  "hsin-framing": {
    name: "Hsin Framing & Moulding",
    nameCn: "欣欣畫框",
    sector: "Art Craftsmanship / Manufacturing",
    sectorCn: "藝術工藝 / 製造",
    founded: "1995",
    location: "Vancouver, Canada",
    locationCn: "加拿大溫哥華",
    logo: hsinFramingLogo,
    description: "Hsin Framing & Moulding is a Vancouver-based craftsmanship company specializing in premium custom framing and art presentation. The company works with artists, collectors, galleries, and designers seeking high-quality framing and preservation solutions. With nearly three decades of expertise, Hsin Framing has established itself as a trusted partner for art institutions and private collectors throughout Western Canada.",
    descriptionCn: "欣欣畫框是一家位於溫哥華的工藝公司，專精於高端定制畫框和藝術展示。公司與藝術家、收藏家、畫廊和設計師合作，提供高品質的裝裱和保存解決方案。憑藉近三十年的專業經驗，欣欣畫框已成為加拿大西部藝術機構和私人收藏家的可信賴合作夥伴。",
    services: ["Custom picture framing", "Art preservation & conservation framing", "Gallery & exhibition installations", "Corporate art program management", "Moulding wholesale & distribution"],
    servicesCn: ["定制畫框", "藝術品保存與修復裝裱", "畫廊與展覽裝置", "企業藝術項目管理", "畫框線條批發與分銷"],
    role: "Hsin Framing & Moulding serves as the heritage anchor of the HH Nexus ecosystem, representing the foundation of craftsmanship and attention to detail that defines the broader platform's approach to quality and excellence.",
    roleCn: "欣欣畫框作為衡寰生態系統的傳統基石，代表了工藝和對細節的關注，這定義了更廣泛平台對品質和卓越的追求。",
  },
  "cambridge-art": {
    name: "Cambridge Art Center",
    nameCn: "劍橋藝術中心",
    sector: "Art Education / Creative Programs",
    sectorCn: "藝術教育 / 創意課程",
    founded: "2005",
    location: "Vancouver, Canada",
    locationCn: "加拿大溫哥華",
    logo: cambridgeArtLogo,
    description: "Cambridge Art Center provides educational programs focused on craftsmanship, metal arts, and creative skill development. The center supports artists and students through workshops, mentorship, and community engagement. As a leading creative education institution in Vancouver, Cambridge Art Center has trained hundreds of emerging artists and continues to expand its curriculum across traditional and contemporary disciplines.",
    descriptionCn: "劍橋藝術中心提供以工藝、金屬藝術和創意技能發展為重點的教育課程。中心通過工作坊、導師計劃和社區活動支持藝術家和學生。作為溫哥華領先的創意教育機構，劍橋藝術中心已培養了數百名新興藝術家，並持續擴展其傳統與當代學科課程。",
    services: ["Metal arts workshops", "Jewelry design courses", "Sculpture & mixed media programs", "Youth creative development", "Artist mentorship programs"],
    servicesCn: ["金屬藝術工作坊", "珠寶設計課程", "雕塑與混合媒材課程", "青少年創意發展", "藝術家導師計劃"],
    role: "Cambridge Art Center extends the creative ecosystem by developing the next generation of artists and craftspeople, creating a pipeline of talent and innovation that supports the broader cultural economy.",
    roleCn: "劍橋藝術中心通過培養新一代藝術家和工匠來擴展創意生態系統，創建支持更廣泛文化經濟的人才和創新管道。",
  },
  "hsin-events": {
    name: "Hsin PR & Events",
    nameCn: "欣欣公關活動",
    sector: "Public Relations / Events",
    sectorCn: "公共關係 / 活動策劃",
    founded: "2012",
    location: "Vancouver, Canada",
    locationCn: "加拿大溫哥華",
    logo: hsinEventsLogo,
    description: "Hsin PR & Events specializes in brand activations, cultural events, and corporate experiences. The company works with organizations seeking to create meaningful engagement with audiences through curated events and strategic communications. With a track record of producing high-profile cultural events and brand launches, Hsin PR & Events has become a recognized name in Vancouver's corporate and cultural event landscape.",
    descriptionCn: "欣欣公關活動專精於品牌推廣、文化活動和企業體驗。公司與尋求通過策劃活動和策略傳播與受眾建立有意義互動的組織合作。憑藉製作高知名度文化活動和品牌發布的業績記錄，欣欣公關活動已成為溫哥華企業和文化活動領域的知名品牌。",
    services: ["Brand activation campaigns", "Cultural & community events", "Corporate experience design", "Media relations & communications", "Event production & management"],
    servicesCn: ["品牌推廣活動", "文化與社區活動", "企業體驗設計", "媒體關係與傳播", "活動製作與管理"],
    role: "Hsin PR & Events connects the ecosystem's portfolio companies with broader audiences, creating visibility and engagement through strategic events that bridge business, culture, and community.",
    roleCn: "欣欣公關活動通過策略性活動將生態系統的投資組合公司與更廣泛的受眾連接，創建跨越商業、文化和社區的曝光度和參與度。",
  },
  "la-petite-elli": {
    name: "La Petite Elli Coffee & Tea Boutique",
    nameCn: "La Petite Elli 咖啡茶精品店",
    sector: "Lifestyle / Hospitality",
    sectorCn: "生活方式 / 餐飲",
    founded: "2018",
    location: "Vancouver, Canada",
    locationCn: "加拿大溫哥華",
    logo: laPetiteElliLogo,
    description: "La Petite Elli Coffee & Tea Boutique is a curated café and lifestyle boutique offering specialty coffee, premium teas, and artisanal ingredients. The brand focuses on craftsmanship, quality sourcing, and community-driven experiences. Located in the heart of Vancouver, La Petite Elli has cultivated a loyal community of discerning customers who value authenticity, provenance, and the art of slow consumption.",
    descriptionCn: "La Petite Elli 咖啡茶精品店是一家精選咖啡廳和生活方式精品店，提供特色咖啡、高級茶和手工食材。品牌專注於工藝、優質採購和社區驅動的體驗。位於溫哥華市中心，La Petite Elli 已培養了一群忠實的顧客社群，他們重視真實性、產地和慢消費的藝術。",
    services: ["Specialty coffee & espresso bar", "Premium loose-leaf tea collection", "Artisanal pastries & ingredients", "Private event hosting", "Curated lifestyle retail"],
    servicesCn: ["特色咖啡與意式濃縮吧", "高級散葉茶系列", "手工糕點與食材", "私人活動舉辦", "精選生活方式零售"],
    role: "La Petite Elli represents the lifestyle and hospitality dimension of the HH Nexus ecosystem, creating physical spaces where community, craftsmanship, and culture converge in daily life.",
    roleCn: "La Petite Elli 代表了衡寰生態系統的生活方式和餐飲維度，創建社區、工藝和文化在日常生活中匯聚的實體空間。",
  },
  "bluluma": {
    name: "Bluluma Design",
    nameCn: "Bluluma Design",
    sector: "Brand Strategy / Digital Design",
    sectorCn: "品牌策略 / 數位設計",
    founded: "2020",
    location: "Vancouver, Canada",
    locationCn: "加拿大溫哥華",
    logo: blulumaLogo,
    url: "https://www.bluluma.com",
    description: "Bluluma Design is a creative studio specializing in brand identity, website design, and digital storytelling. The studio works with modern businesses to build strong brand systems and engaging digital experiences. As the digital arm of the HH Nexus ecosystem, Bluluma provides the strategic design thinking and technical execution that helps portfolio companies and external clients communicate their vision effectively.",
    descriptionCn: "Bluluma Design 是一家專精於品牌識別、網站設計和數位故事敘述的創意工作室。工作室與現代企業合作，建立強大的品牌系統和引人入勝的數位體驗。作為衡寰生態系統的數位部門，Bluluma 提供策略設計思維和技術執行，幫助投資組合公司和外部客戶有效傳達他們的願景。",
    services: ["Brand identity & visual systems", "Website design & development", "Digital storytelling & content strategy", "UI/UX design", "Marketing collateral & print design"],
    servicesCn: ["品牌識別與視覺系統", "網站設計與開發", "數位故事敘述與內容策略", "UI/UX 設計", "行銷材料與印刷設計"],
    role: "Bluluma Design serves as the creative and digital engine of the HH Nexus ecosystem, providing brand strategy, design infrastructure, and digital capabilities that empower the entire portfolio.",
    roleCn: "Bluluma Design 作為衡寰生態系統的創意和數位引擎，提供品牌策略、設計基礎設施和數位能力，賦能整個投資組合。",
  },
};

const PortfolioDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const { lang, t } = useLanguage();
  const company = slug ? companies[slug] : null;

  if (!company) {
    return (
      <>
        <Header />
        <main className="min-h-screen bg-background flex items-center justify-center">
          <div className="text-center">
            <h1 className="font-display text-2xl text-primary mb-4">{t("Company Not Found", "找不到公司")}</h1>
            <Link to="/portfolio" className="text-secondary text-sm hover:text-secondary/80 transition-colors">
              {t("← Back to Portfolio", "← 返回投資組合")}
            </Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-primary pt-28 md:pt-36 pb-16 md:pb-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${heroImage})` }} />
          <div className="absolute inset-0 bg-primary/85" />
          <div className="section-container relative z-10">
            <Link to="/portfolio" className="inline-block text-primary-foreground/50 text-sm font-body mb-6 hover:text-secondary transition-colors">
              {t("← Back to Portfolio", "← 返回投資組合")}
            </Link>
            <div className="flex items-center gap-6 mb-6">
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded">
                <img src={company.logo} alt={company.name} className="h-16 object-contain" />
              </div>
              <div>
                <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-primary-foreground tracking-tight">
                  {lang === "en" ? company.name : company.nameCn}
                </h1>
                <p className="text-secondary text-sm font-body tracking-wide mt-1">
                  {lang === "en" ? company.sector : company.sectorCn}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="section-padding bg-background">
          <div className="section-container">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-10">
                <div>
                  <h2 className="font-display text-2xl font-semibold text-primary mb-4">
                    {t("Company Overview", "公司概覽")}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed font-body">
                    {lang === "en" ? company.description : company.descriptionCn}
                  </p>
                </div>

                <div>
                  <h2 className="font-display text-2xl font-semibold text-primary mb-4">
                    {t("Services & Activities", "服務與業務")}
                  </h2>
                  <ul className="space-y-3">
                    {(lang === "en" ? company.services : company.servicesCn).map((s, i) => (
                      <li key={i} className="flex items-start gap-3 text-muted-foreground font-body">
                        <span className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 shrink-0" />
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h2 className="font-display text-2xl font-semibold text-primary mb-4">
                    {t("Role in the HH Nexus Ecosystem", "在衡寰生態系統中的角色")}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed font-body">
                    {lang === "en" ? company.role : company.roleCn}
                  </p>
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                <div className="p-6 bg-card border border-border">
                  <h3 className="font-display text-sm font-semibold text-primary uppercase tracking-wider mb-4">
                    {t("Company Details", "公司詳情")}
                  </h3>
                  <div className="space-y-4 text-sm font-body">
                    <div>
                      <span className="text-muted-foreground block mb-1">{t("Sector", "行業")}</span>
                      <span className="text-primary font-medium">{lang === "en" ? company.sector : company.sectorCn}</span>
                    </div>
                    <div>
                      <span className="text-muted-foreground block mb-1">{t("Founded", "成立")}</span>
                      <span className="text-primary font-medium">{company.founded}</span>
                    </div>
                    <div>
                      <span className="text-muted-foreground block mb-1">{t("Location", "地點")}</span>
                      <span className="text-primary font-medium">{lang === "en" ? company.location : company.locationCn}</span>
                    </div>
                    {company.url && (
                      <div>
                        <span className="text-muted-foreground block mb-1">{t("Website", "網站")}</span>
                        <a href={company.url} target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-secondary/80 transition-colors">
                          {company.url.replace("https://www.", "")} →
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default PortfolioDetail;
