import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage } from "@/context/LanguageContext";
import heroImage from "@/assets/hero-skyline.jpg";

const About = () => {
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
            <p className="label-uppercase mb-4">{t("About Us", "關於我們")}</p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-primary-foreground tracking-tight leading-[1.1] max-w-3xl">
              {lang === "en" ? (
                <>Family Office & <span className="text-secondary">Cultural Capital Platform</span></>
              ) : (
                <>家族辦公室與<span className="text-secondary">文化資本平台</span></>
              )}
            </h1>
          </div>
        </section>

        {/* Who We Are */}
        <section className="section-padding bg-background">
          <div className="section-container">
            <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start">
              <div>
                <div className="gold-line mb-6" />
                <p className="label-uppercase mb-4">{t("Who We Are", "我們是誰")}</p>
                <h2 className="heading-section mb-6">
                  {t("HH Nexus Capital Ltd.", "衡寰資本有限公司")}
                </h2>
              </div>
              <div>
                <p className="body-large mb-6">
                  {t(
                    "HH Nexus Capital is a family-backed capital platform headquartered in Vancouver, Canada. The platform operates across culture, craftsmanship, lifestyle, and strategic partnerships, connecting operating companies and creative industries into a cohesive ecosystem.",
                    "衡寰資本是一家總部位於加拿大溫哥華的家族支持資本平台。平台橫跨文化、工藝、生活方式和戰略合作夥伴關係領域運營，將營運公司和創意產業連結成一個有凝聚力的生態系統。"
                  )}
                </p>
                <p className="body-large">
                  {t(
                    "Our approach is rooted in patience, cultural relevance, and strong brand stewardship — nurturing businesses and community-driven initiatives that generate lasting impact across North America and Asia.",
                    "我們的方法植根於耐心、文化相關性和強大的品牌管理——培育企業和社區驅動的倡議，在北美和亞洲產生持久的影響。"
                  )}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="section-padding bg-card border-t border-border">
          <div className="section-container">
            <div className="grid md:grid-cols-2 gap-12 md:gap-20">
              <div>
                <div className="w-8 h-[2px] bg-secondary mb-4" />
                <h2 className="font-display text-2xl font-semibold text-primary mb-4">{t("Vision", "願景")}</h2>
                <p className="body-large">
                  {t(
                    "To become a leading cultural capital platform connecting heritage craftsmanship, creative industries, and lifestyle brands through long-term stewardship and global networks.",
                    "成為連結傳統工藝、創意產業和生活方式品牌的領先文化資本平台，透過長期管理和全球網絡實現願景。"
                  )}
                </p>
              </div>
              <div>
                <div className="w-8 h-[2px] bg-secondary mb-4" />
                <h2 className="font-display text-2xl font-semibold text-primary mb-4">{t("Mission", "使命")}</h2>
                <p className="body-large">
                  {t(
                    "To nurture and grow a portfolio of operating companies that preserve craftsmanship, support creative communities, and build meaningful lifestyle experiences — powered by patient capital and cross-border collaboration.",
                    "培育和壯大一系列營運公司，保護工藝、支持創意社區和建立有意義的生活方式體驗——以耐心資本和跨境合作為動力。"
                  )}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="section-padding bg-background border-t border-border">
          <div className="section-container">
            <div className="gold-line mb-6" />
            <h2 className="heading-section mb-12">{t("Our Values", "我們的價值觀")}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
              {[
                { title: t("Integrity", "誠信正直"), desc: t("Principled conduct and transparency in every engagement and decision.", "在每一次合作與決策中堅守原則和透明度。") },
                { title: t("Long-Term Thinking", "長期思維"), desc: t("Patient capital and stewardship aligned with generational value creation.", "耐心資本和管理與世代價值創造一致。") },
                { title: t("Cultural Respect", "文化尊重"), desc: t("Honoring heritage, craftsmanship, and the communities that sustain them.", "尊重傳統、工藝和維護它們的社區。") },
                { title: t("Community Focus", "社區導向"), desc: t("Building businesses that strengthen and serve the communities around them.", "建設強化和服務周邊社區的企業。") },
                { title: t("Execution Excellence", "卓越執行"), desc: t("Delivering quality and attention to detail in every initiative and endeavor.", "在每個倡議和努力中提供品質和對細節的關注。") },
              ].map((value) => (
                <div key={value.title}>
                  <div className="w-8 h-[2px] bg-secondary mb-4" />
                  <h3 className="font-display text-lg font-semibold text-primary mb-3">{value.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed font-body">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default About;
