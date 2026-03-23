import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/context/LanguageContext";
import { ArrowDown, CheckCircle2, Globe, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-skyline.jpg";
import hsinFramingLogo from "@/assets/brands/hsin_framing_logo.png";
import cambridgeArtLogo from "@/assets/brands/cambridge_art_logo.png";
import hsinEventsLogo from "@/assets/brands/hsin_events_logo.png";
import laPetiteElliLogo from "@/assets/brands/la_petite_elli_logo.png";
import blulumaLogo from "@/assets/brands/bluluma_logo.png";

/* ── scroll reveal hook ── */
function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { el.classList.add("revealed"); obs.unobserve(el); } },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

const RevealSection = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  const ref = useReveal();
  return (
    <div ref={ref} className={`reveal-section ${className}`}>
      {children}
    </div>
  );
};

/* ── CTA Button ── */
const CTAButton = ({ large = false }: { large?: boolean }) => {
  const { t } = useLanguage();
  const scrollToContact = () => {
    document.getElementById("final-cta")?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <button
      onClick={scrollToContact}
      className={`inline-flex items-center justify-center bg-secondary text-secondary-foreground font-semibold tracking-[0.08em] uppercase font-body hover:bg-secondary/90 transition-all active:scale-[0.97] ${
        large ? "px-10 py-4 text-sm gap-2" : "px-8 py-3.5 text-xs gap-1.5"
      }`}
    >
      {t("Start a Conversation", "開始對話")}
      <ArrowRight size={large ? 18 : 15} />
    </button>
  );
};

/* ── Companies data ── */
const companies = [
  { name: "Hsin Framing & Moulding", nameCn: "欣欣畫框", sector: "Art Craftsmanship", sectorCn: "藝術工藝", logo: hsinFramingLogo },
  { name: "Cambridge Art Center", nameCn: "劍橋藝術中心", sector: "Art Education", sectorCn: "藝術教育", logo: cambridgeArtLogo },
  { name: "Hsin PR & Events", nameCn: "欣欣公關活動", sector: "PR / Events", sectorCn: "公關 / 活動", logo: hsinEventsLogo },
  { name: "La Petite Elli", nameCn: "La Petite Elli", sector: "Lifestyle / Hospitality", sectorCn: "生活方式 / 餐飲", logo: laPetiteElliLogo },
  { name: "Bluluma Design", nameCn: "Bluluma Design", sector: "Brand Strategy / Digital", sectorCn: "品牌策略 / 數位", logo: blulumaLogo },
];

const pillars = [
  {
    title: { en: "Craftsmanship & Heritage", zh: "工藝與傳承" },
    desc: { en: "Preserving and elevating traditional craftsmanship through modern business practices and long-term stewardship.", zh: "通過現代商業實踐和長期管理，保護和提升傳統工藝。" },
  },
  {
    title: { en: "Creative Industries", zh: "創意產業" },
    desc: { en: "Supporting art education, cultural programs, and creative skill development that strengthen communities.", zh: "支持藝術教育、文化項目和創意技能發展，以強化社區。" },
  },
  {
    title: { en: "Lifestyle & Community", zh: "生活方式與社區" },
    desc: { en: "Building hospitality and lifestyle brands rooted in quality sourcing, craftsmanship, and community engagement.", zh: "建立以優質採購、工藝和社區參與為根基的餐飲和生活方式品牌。" },
  },
  {
    title: { en: "Brand & Digital Strategy", zh: "品牌與數位策略" },
    desc: { en: "Providing brand identity, digital design, and strategic communications that empower the entire ecosystem.", zh: "提供品牌識別、數位設計和策略傳播，以賦能整個生態系統。" },
  },
];

const hubs = [
  { city: "Vancouver", lat: "49.28°N", lon: "123.12°W" },
  { city: "Singapore", lat: "1.35°N", lon: "103.82°E" },
  { city: "Tokyo", lat: "35.68°N", lon: "139.69°E" },
  { city: "San Francisco", lat: "37.77°N", lon: "122.42°W" },
];

/* ════════════════════════════════════════════════════════
   FUNNEL PAGE
   ════════════════════════════════════════════════════════ */
const FunnelPage = () => {
  const { lang, t } = useLanguage();

  return (
    <div className="funnel-flow">

      {/* ═══ 1. HOOK — Full-screen hero ═══ */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${heroImage})` }} />
        <div className="absolute inset-0 bg-primary/60" />
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <p className="label-uppercase mb-4 text-secondary">
            {t("Family Office & Cultural Capital Platform", "家族辦公室與文化資本平台")}
          </p>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-semibold text-primary-foreground leading-[0.95] tracking-tight mb-6" style={{ textWrap: "balance" as any }}>
            {lang === "en" ? (
              <>Connecting Capital, Culture, and <span className="text-secondary">Long-Term Value</span></>
            ) : (
              <>連結資本、文化與<span className="text-secondary">長期價值</span></>
            )}
          </h1>
          <p className="text-primary-foreground/70 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-body leading-relaxed">
            {t(
              "HH Nexus Capital operates as a family-backed capital platform focused on long-term value creation across culture, craftsmanship, lifestyle, and strategic partnerships.",
              "衡寰資本作為家族支持的資本平台運營，專注於文化、工藝、生活方式和戰略合作夥伴關係的長期價值創造。"
            )}
          </p>
          <CTAButton large />
          <div className="mt-16 animate-bounce">
            <ArrowDown className="mx-auto text-secondary/60" size={28} />
          </div>
        </div>
      </section>

      {/* ═══ 2. PROBLEM — Pain point ═══ */}
      <section className="bg-background py-20 md:py-28">
        <RevealSection className="section-container max-w-3xl mx-auto text-center">
          <p className="label-uppercase mb-4">{t("The Challenge", "挑戰")}</p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-primary tracking-tight mb-8" style={{ textWrap: "balance" as any }}>
            {lang === "en" ? (
              <>Traditional industries are losing their cultural identity to <span className="text-secondary">short-term thinking</span></>
            ) : (
              <>傳統產業正因<span className="text-secondary">短期思維</span>而失去其文化認同</>
            )}
          </h2>
          <p className="body-large max-w-2xl mx-auto">
            {t(
              "Heritage brands and creative communities face pressure to prioritize quick returns over lasting cultural value. Without patient capital and strategic stewardship, craftsmanship fades and communities weaken.",
              "傳統品牌和創意社區面臨壓力，被迫優先考慮快速回報而非持久的文化價值。沒有耐心資本和策略性管理，工藝會消逝，社區會衰弱。"
            )}
          </p>
        </RevealSection>
      </section>

      {/* ═══ 3. AGITATION — Emphasize the problem ═══ */}
      <section className="bg-primary py-20 md:py-28">
        <RevealSection className="section-container">
          <div className="max-w-4xl mx-auto">
            <p className="label-uppercase mb-6">{t("Why It Matters", "為何重要")}</p>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { stat: t("Lost Heritage", "失落的傳承"), desc: t("Traditional craftsmanship disappears when businesses chase short-term financial engineering over cultural stewardship.", "當企業追逐短期金融工程而非文化管理時，傳統工藝就會消失。") },
                { stat: t("Disconnected Markets", "斷裂的市場"), desc: t("North America and Asia lack bridges between heritage industries and global opportunities.", "北美和亞洲之間缺乏連結傳統產業與全球機會的橋樑。") },
                { stat: t("Fragmented Ecosystems", "碎片化的生態"), desc: t("Creative industries, lifestyle brands, and cultural programs operate in silos without cohesive platform support.", "創意產業、生活方式品牌和文化項目在缺乏統一平台支持的情況下各自為政。") },
              ].map((item) => (
                <div key={item.stat} className="border-l-2 border-secondary pl-6">
                  <h3 className="font-display text-xl font-semibold text-primary-foreground mb-3">{item.stat}</h3>
                  <p className="text-primary-foreground/60 text-sm leading-relaxed font-body">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </RevealSection>
      </section>

      {/* ═══ 4. SOLUTION — The platform ═══ */}
      <section className="bg-background py-20 md:py-28">
        <RevealSection className="section-container text-center">
          <p className="label-uppercase mb-4">{t("The Solution", "解決方案")}</p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-primary tracking-tight mb-6 max-w-3xl mx-auto" style={{ textWrap: "balance" as any }}>
            {lang === "en" ? (
              <>A Family-Backed <span className="text-secondary">Capital Platform</span></>
            ) : (
              <>家族支持的<span className="text-secondary">資本平台</span></>
            )}
          </h2>
          <p className="body-large max-w-2xl mx-auto mb-6">
            {t(
              "HH Nexus Capital operates as a family-backed capital platform focused on long-term value creation across culture, craftsmanship, lifestyle, and strategic partnerships.",
              "衡寰資本作為家族支持的資本平台運營，專注於文化、工藝、生活方式和戰略合作夥伴關係的長期價值創造。"
            )}
          </p>
          <p className="body-large max-w-2xl mx-auto">
            {t(
              "The platform connects operating companies, creative industries, and global networks into a cohesive ecosystem.",
              "平台將營運公司、創意產業和全球網絡連結成一個有凝聚力的生態系統。"
            )}
          </p>
        </RevealSection>

        {/* Inline CTA */}
        <div className="text-center mt-12">
          <CTAButton />
        </div>
      </section>

      {/* ═══ 5. BENEFITS — Value breakdown (Pillars) ═══ */}
      <section className="bg-card py-20 md:py-28 border-y border-border">
        <RevealSection className="section-container">
          <div className="text-center mb-16">
            <p className="label-uppercase mb-4">{t("Platform Pillars", "平台支柱")}</p>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-primary tracking-tight max-w-2xl mx-auto" style={{ textWrap: "balance" as any }}>
              {lang === "en" ? (
                <>Patient Capital, <span className="text-secondary">Lasting Impact</span></>
              ) : (
                <>耐心資本，<span className="text-secondary">持久影響</span></>
              )}
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-0 max-w-4xl mx-auto">
            {pillars.map((p, i) => (
              <div key={i} className="p-8 md:p-10 border border-border hover:bg-background transition-colors group">
                <CheckCircle2 className="text-secondary mb-4 group-hover:scale-110 transition-transform" size={24} />
                <h3 className="font-display text-xl font-semibold text-primary mb-3">{lang === "en" ? p.title.en : p.title.zh}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed font-body">{lang === "en" ? p.desc.en : p.desc.zh}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <p className="body-large max-w-2xl mx-auto">
              {t(
                "HH Nexus Capital believes that meaningful value is created through patience, cultural relevance, and strong brand stewardship.",
                "衡寰資本相信，有意義的價值是通過耐心、文化相關性和強大的品牌管理來創造的。"
              )}
            </p>
          </div>
        </RevealSection>
      </section>

      {/* ═══ 6. TRUST — Portfolio companies ═══ */}
      <section className="bg-primary py-20 md:py-28">
        <RevealSection className="section-container">
          <div className="text-center mb-16">
            <p className="label-uppercase mb-4">{t("Portfolio", "投資組合")}</p>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-primary-foreground tracking-tight mb-4">
              {t("Operating Portfolio Companies", "營運投資組合企業")}
            </h2>
            <p className="text-primary-foreground/50 text-base font-body max-w-lg mx-auto">
              {t(
                "Rather than short-term financial engineering, the platform focuses on nurturing businesses, creative ecosystems, and community-driven initiatives that generate lasting impact.",
                "平台不追求短期金融工程，而是專注於培育企業、創意生態系統和社區驅動的倡議，以產生持久的影響。"
              )}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-5xl mx-auto">
            {companies.map((c) => (
              <div
                key={c.name}
                className="bg-primary-foreground/5 border border-primary-foreground/10 p-6 flex flex-col items-center text-center hover:border-secondary/50 transition-all hover:bg-primary-foreground/10"
              >
                <div className="h-14 mb-3 flex items-center justify-center">
                  <img src={c.logo} alt={c.name} className="max-h-[50px] max-w-[100px] object-contain" />
                </div>
                <h3 className="font-display text-sm font-semibold text-primary-foreground mb-1">
                  {lang === "en" ? c.name : c.nameCn}
                </h3>
                <p className="text-primary-foreground/40 text-[10px] tracking-[0.12em] uppercase font-body">
                  {lang === "en" ? c.sector : c.sectorCn}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/portfolio"
              className="inline-flex items-center text-secondary text-sm font-body tracking-wide hover:text-secondary/80 transition-colors"
            >
              {t("View Full Portfolio →", "查看完整投資組合 →")}
            </Link>
          </div>
        </RevealSection>
      </section>

      {/* ═══ 7. OFFER — Global reach & value ═══ */}
      <section className="bg-background py-20 md:py-28">
        <RevealSection className="section-container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <p className="label-uppercase mb-4">{t("Global Network", "全球網絡")}</p>
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-primary tracking-tight mb-6">
                {t("Worldwide Presence", "全球佈局")}
              </h2>
              <p className="body-large max-w-2xl mx-auto">
                {t(
                  "HH Nexus Capital connects North America and Asia through a network of partners, cultural institutions, and creative communities. Our platform bridges heritage industries with global opportunities.",
                  "衡寰資本通過合作夥伴、文化機構和創意社區的網絡連結北美和亞洲。我們的平台將傳統產業與全球機會連接起來。"
                )}
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {hubs.map((hub) => (
                <div key={hub.city} className="bg-card border border-border p-6 text-center hover:shadow-lg hover:shadow-secondary/5 transition-all">
                  <Globe className="mx-auto text-secondary mb-3" size={20} />
                  <h3 className="font-display text-lg font-semibold text-primary mb-1">{hub.city}</h3>
                  <p className="text-xs text-muted-foreground font-body tracking-wide">
                    {hub.lat}, {hub.lon}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </RevealSection>
      </section>

      {/* ═══ 8. CTA — Primary action ═══ */}
      <section className="bg-secondary py-16 md:py-20">
        <RevealSection className="section-container text-center">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-secondary-foreground tracking-tight mb-4" style={{ textWrap: "balance" as any }}>
            {t("Ready to Build Long-Term Value Together?", "準備好一起創造長期價值了嗎？")}
          </h2>
          <p className="text-secondary-foreground/70 text-base font-body max-w-lg mx-auto mb-8">
            {t(
              "For partnership opportunities, collaboration inquiries, or to learn more about the HH Nexus Capital platform, please reach out to our team.",
              "如有合作機會、協作諮詢或了解更多衡寰資本平台資訊，請與我們的團隊聯繫。"
            )}
          </p>
          <button
            onClick={() => document.getElementById("final-cta")?.scrollIntoView({ behavior: "smooth" })}
            className="inline-flex items-center justify-center px-10 py-4 bg-primary text-primary-foreground text-sm font-semibold tracking-[0.08em] uppercase font-body hover:bg-primary/90 transition-all active:scale-[0.97] gap-2"
          >
            {t("Contact Us Now", "立即聯繫我們")}
            <ArrowRight size={18} />
          </button>
        </RevealSection>
      </section>

      {/* ═══ 9. REINFORCEMENT — Philosophy recap ═══ */}
      <section className="bg-card py-20 md:py-28 border-y border-border">
        <RevealSection className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <p className="label-uppercase mb-4">{t("Capital Philosophy", "資本理念")}</p>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-primary tracking-tight mb-8" style={{ textWrap: "balance" as any }}>
              {lang === "en" ? (
                <>Why <span className="text-secondary">Patient Capital</span> Wins</>
              ) : (
                <>為何<span className="text-secondary">耐心資本</span>是贏家</>
              )}
            </h2>
            <div className="space-y-6 text-left">
              {[
                t("Meaningful value is created through patience, cultural relevance, and strong brand stewardship.", "有意義的價值是通過耐心、文化相關性和強大的品牌管理來創造的。"),
                t("Rather than short-term financial engineering, the platform focuses on nurturing businesses, creative ecosystems, and community-driven initiatives that generate lasting impact.", "平台不追求短期金融工程，而是專注於培育企業、創意生態系統和社區驅動的倡議，以產生持久的影響。"),
                t("The platform connects operating companies, creative industries, and global networks into a cohesive ecosystem.", "平台將營運公司、創意產業和全球網絡連結成一個有凝聚力的生態系統。"),
              ].map((text, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <CheckCircle2 className="text-secondary mt-1 shrink-0" size={20} />
                  <p className="body-large">{text}</p>
                </div>
              ))}
            </div>
            <div className="mt-10">
              <Link
                to="/investment"
                className="inline-flex items-center text-secondary text-sm font-body tracking-wide hover:text-secondary/80 transition-colors"
              >
                {t("Learn More About Our Philosophy →", "了解更多我們的理念 →")}
              </Link>
            </div>
          </div>
        </RevealSection>
      </section>

      {/* ═══ 10. FINAL CTA — Contact block ═══ */}
      <section id="final-cta" className="bg-primary py-24 md:py-32">
        <RevealSection className="section-container">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-12 h-[2px] bg-secondary mx-auto mb-6" />
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-primary-foreground tracking-tight mb-6" style={{ textWrap: "balance" as any }}>
              {t("Get in Touch", "與我們聯繫")}
            </h2>
            <p className="text-primary-foreground/60 text-lg leading-relaxed mb-10 font-body">
              {t(
                "For partnership opportunities, collaboration inquiries, or to learn more about the HH Nexus Capital platform, please reach out to our team.",
                "如有合作機會、協作諮詢或了解更多衡寰資本平台資訊，請與我們的團隊聯繫。"
              )}
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <div className="text-center">
                <p className="text-primary-foreground/40 text-xs tracking-[0.15em] uppercase mb-1 font-body">
                  {t("Headquarters", "總部")}
                </p>
                <p className="text-primary-foreground text-base font-body">Vancouver, Canada</p>
              </div>
              <div className="hidden sm:block w-px bg-primary-foreground/10" />
              <div className="text-center">
                <p className="text-primary-foreground/40 text-xs tracking-[0.15em] uppercase mb-1 font-body">
                  {t("Email", "電子信箱")}
                </p>
                <p className="text-primary-foreground text-base font-body">info@hhnexuscapital.com</p>
              </div>
            </div>

            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-12 py-4 bg-secondary text-secondary-foreground text-sm font-semibold tracking-[0.1em] uppercase hover:bg-secondary/90 transition-all active:scale-[0.97] gap-2 font-body"
            >
              {t("Contact Us", "聯絡我們")}
              <ArrowRight size={18} />
            </Link>
          </div>
        </RevealSection>
      </section>
    </div>
  );
};

export default FunnelPage;
