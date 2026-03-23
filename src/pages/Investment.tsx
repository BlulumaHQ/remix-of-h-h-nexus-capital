import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage } from "@/context/LanguageContext";
import heroImage from "@/assets/hero-skyline.jpg";

const Investment = () => {
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
            <p className="label-uppercase mb-4">{t("Capital Philosophy", "資本理念")}</p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-primary-foreground tracking-tight leading-[1.1] max-w-3xl">
              {lang === "en" ? (
                <>Capital <span className="text-secondary">Philosophy</span></>
              ) : (
                <>資本<span className="text-secondary">理念</span></>
              )}
            </h1>
          </div>
        </section>

        {/* Philosophy */}
        <section className="section-padding bg-background">
          <div className="section-container max-w-4xl">
            <div className="gold-line mb-6" />
            <h2 className="heading-section mb-8">{t("Our Philosophy", "我們的理念")}</h2>
            <div className="space-y-6">
              <p className="body-large">
                {t(
                  "HH Nexus Capital believes that meaningful value is created through patience, cultural relevance, and strong brand stewardship.",
                  "衡寰資本相信，有意義的價值是通過耐心、文化相關性和強大的品牌管理來創造的。"
                )}
              </p>
              <p className="body-large">
                {t(
                  "Rather than short-term financial engineering, the platform focuses on nurturing businesses, creative ecosystems, and community-driven initiatives that generate lasting impact.",
                  "平台不追求短期金融工程，而是專注於培育企業、創意生態系統和社區驅動的倡議，以產生持久的影響。"
                )}
              </p>
              <p className="body-large">
                {t(
                  "Our operating companies span craftsmanship, creative industries, lifestyle experiences, and brand strategy — each contributing to a cohesive platform ecosystem built on heritage and innovation.",
                  "我們的營運公司橫跨工藝、創意產業、生活方式體驗和品牌策略——每家公司都為建立在傳統和創新基礎上的有凝聚力的平台生態系統做出貢獻。"
                )}
              </p>
            </div>
          </div>
        </section>

        {/* Platform Pillars */}
        <section className="section-padding bg-card border-t border-border">
          <div className="section-container">
            <div className="gold-line mb-6" />
            <h2 className="heading-section mb-12">{t("Platform Pillars", "平台支柱")}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: t("Craftsmanship & Heritage", "工藝與傳承"),
                  desc: t(
                    "Preserving and elevating traditional craftsmanship through modern business practices and long-term stewardship. Our heritage companies represent decades of expertise in art presentation, custom framing, and material excellence — values that anchor the entire platform.",
                    "通過現代商業實踐和長期管理，保護和提升傳統工藝。我們的傳統公司代表了數十年在藝術展示、定制裝裱和材料卓越性方面的專業知識——這些價值觀是整個平台的錨。"
                  ),
                },
                {
                  title: t("Creative Industries", "創意產業"),
                  desc: t(
                    "Supporting art education, cultural programs, and creative skill development that strengthen communities. Through workshops, mentorship, and community engagement, our creative platforms develop the next generation of artists and craftspeople while sustaining cultural heritage.",
                    "支持藝術教育、文化項目和創意技能發展，以強化社區。通過工作坊、導師計劃和社區參與，我們的創意平台培養下一代藝術家和工匠，同時維護文化遺產。"
                  ),
                },
                {
                  title: t("Lifestyle & Community", "生活方式與社區"),
                  desc: t(
                    "Building hospitality and lifestyle brands rooted in quality sourcing, craftsmanship, and community engagement. Our lifestyle ventures create physical spaces where community, craftsmanship, and culture converge in daily life.",
                    "建立以優質採購、工藝和社區參與為根基的餐飲和生活方式品牌。我們的生活方式企業創建社區、工藝和文化在日常生活中匯聚的實體空間。"
                  ),
                },
                {
                  title: t("Brand & Digital Strategy", "品牌與數位策略"),
                  desc: t(
                    "Providing brand identity, digital design, and strategic communications that empower the entire ecosystem. Our digital capabilities ensure that every portfolio company communicates its vision effectively and builds a strong, modern brand presence.",
                    "提供品牌識別、數位設計和策略傳播，以賦能整個生態系統。我們的數位能力確保每家投資組合公司有效傳達其願景，建立強大的現代品牌形象。"
                  ),
                },
              ].map((item) => (
                <div key={item.title} className="p-8 md:p-10 bg-background border border-border">
                  <div className="w-8 h-[2px] bg-secondary mb-4" />
                  <h3 className="font-display text-xl font-semibold text-primary mb-4">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed font-body">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Future Investment Direction */}
        <section className="section-padding bg-primary">
          <div className="section-container max-w-4xl">
            <div className="gold-line mb-6" />
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-primary-foreground tracking-tight mb-8">
              {t("Future Investment Direction", "未來投資方向")}
            </h2>
            <div className="space-y-6">
              <p className="text-primary-foreground/70 text-base md:text-lg leading-relaxed font-body">
                {t(
                  "HH Nexus Capital intends to expand its platform toward venture investment opportunities in emerging industries including artificial intelligence, consumer innovation, and cultural technology.",
                  "衡寰資本計劃將其平台擴展至新興產業的風險投資機會，包括人工智能、消費創新和文化科技。"
                )}
              </p>
              <p className="text-primary-foreground/70 text-base md:text-lg leading-relaxed font-body">
                {t(
                  "This expansion will be supported through strategic partnerships and global investor collaboration, building on the operational expertise and cultural networks established through our current portfolio.",
                  "這一擴展將通過戰略合作夥伴關係和全球投資者協作來支持，建立在我們目前投資組合所建立的營運專業知識和文化網絡基礎之上。"
                )}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              {[
                {
                  title: t("AI & Technology", "AI 與科技"),
                  desc: t("Exploring opportunities in artificial intelligence, automation, and next-generation platforms.", "探索人工智能、自動化和下一代平台的機會。"),
                },
                {
                  title: t("Consumer Innovation", "消費創新"),
                  desc: t("Identifying community-driven brands and digital consumer ecosystems with lasting potential.", "發掘具有持久潛力的社區驅動品牌和數位消費生態系統。"),
                },
                {
                  title: t("Cultural Technology", "文化科技"),
                  desc: t("Investing in platforms that bridge cultural industries with modern technology and global distribution.", "投資於連結文化產業與現代技術和全球分銷的平台。"),
                },
              ].map((item) => (
                <div key={item.title} className="border border-primary-foreground/10 p-8">
                  <div className="w-8 h-[2px] bg-secondary mb-4" />
                  <h3 className="font-display text-lg font-semibold text-primary-foreground mb-3">{item.title}</h3>
                  <p className="text-primary-foreground/50 text-sm leading-relaxed font-body">{item.desc}</p>
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

export default Investment;
