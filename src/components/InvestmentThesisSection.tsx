import { Link } from "react-router-dom";
import { useLanguage } from "@/context/LanguageContext";

const InvestmentThesisSection = () => {
  const { lang, t } = useLanguage();

  return (
    <section className="section-padding bg-background">
      <div className="section-container">
        {/* Platform Overview */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start">
          <div>
            <div className="gold-line mb-6" />
            <p className="label-uppercase mb-4">{t("Platform Overview", "平台概覽")}</p>
            <h2 className="heading-section mb-6">
              {lang === "en" ? (
                <>A Family-Backed <span className="text-secondary">Capital Platform</span></>
              ) : (
                <>家族支持的<span className="text-secondary">資本平台</span></>
              )}
            </h2>
          </div>
          <div>
            <p className="body-large mb-6">
              {t(
                "HH Nexus Capital operates as a family-backed capital platform focused on long-term value creation across culture, craftsmanship, lifestyle, and strategic partnerships.",
                "衡寰資本作為家族支持的資本平台運營，專注於文化、工藝、生活方式和戰略合作夥伴關係的長期價值創造。"
              )}
            </p>
            <p className="body-large">
              {t(
                "The platform connects operating companies, creative industries, and global networks into a cohesive ecosystem.",
                "平台將營運公司、創意產業和全球網絡連結成一個有凝聚力的生態系統。"
              )}
            </p>
          </div>
        </div>

        {/* Capital Philosophy */}
        <div className="mt-16 md:mt-24 pt-16 border-t border-border">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start">
            <div>
              <div className="gold-line mb-6" />
              <p className="label-uppercase mb-4">{t("Capital Philosophy", "資本理念")}</p>
              <h2 className="heading-section mb-6">
                {lang === "en" ? (
                  <>Patient Capital, <span className="text-secondary">Lasting Impact</span></>
                ) : (
                  <>耐心資本，<span className="text-secondary">持久影響</span></>
                )}
              </h2>
            </div>
            <div>
              <p className="body-large mb-6">
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
            </div>
          </div>
        </div>

        {/* Platform Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16 md:mt-24 pt-16 border-t border-border">
          {[
            {
              title: t("Craftsmanship & Heritage", "工藝與傳承"),
              desc: t(
                "Preserving and elevating traditional craftsmanship through modern business practices and long-term stewardship.",
                "通過現代商業實踐和長期管理，保護和提升傳統工藝。"
              ),
            },
            {
              title: t("Creative Industries", "創意產業"),
              desc: t(
                "Supporting art education, cultural programs, and creative skill development that strengthen communities.",
                "支持藝術教育、文化項目和創意技能發展，以強化社區。"
              ),
            },
            {
              title: t("Lifestyle & Community", "生活方式與社區"),
              desc: t(
                "Building hospitality and lifestyle brands rooted in quality sourcing, craftsmanship, and community engagement.",
                "建立以優質採購、工藝和社區參與為根基的餐飲和生活方式品牌。"
              ),
            },
            {
              title: t("Brand & Digital Strategy", "品牌與數位策略"),
              desc: t(
                "Providing brand identity, digital design, and strategic communications that empower the entire ecosystem.",
                "提供品牌識別、數位設計和策略傳播，以賦能整個生態系統。"
              ),
            },
          ].map((item) => (
            <div key={item.title}>
              <div className="w-8 h-[2px] bg-secondary mb-4" />
              <h3 className="font-display text-lg font-semibold text-primary mb-3">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed font-body">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/investment"
            className="inline-flex items-center text-secondary text-sm font-body tracking-wide hover:text-secondary/80 transition-colors"
          >
            {t("Learn More About Our Philosophy →", "了解更多我們的理念 →")}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default InvestmentThesisSection;
