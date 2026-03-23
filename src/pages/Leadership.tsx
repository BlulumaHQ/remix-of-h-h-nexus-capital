import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage } from "@/context/LanguageContext";
import heroImage from "@/assets/hero-skyline.jpg";

const Leadership = () => {
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
            <p className="label-uppercase mb-4">{t("Leadership", "領導團隊")}</p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-primary-foreground tracking-tight leading-[1.1] max-w-3xl">
              {lang === "en" ? (
                <>Our <span className="text-secondary">Leadership</span></>
              ) : (
                <>我們的<span className="text-secondary">領導團隊</span></>
              )}
            </h1>
          </div>
        </section>

        {/* Founder */}
        <section className="section-padding bg-background">
          <div className="section-container max-w-4xl">
            <div className="gold-line mb-6" />
            <p className="label-uppercase mb-4">{t("Founder", "創辦人")}</p>
            <div className="grid md:grid-cols-3 gap-12 items-start">
              <div className="md:col-span-1">
                <div className="w-full aspect-[3/4] bg-primary/5 border border-border flex items-center justify-center">
                  <span className="text-6xl font-display text-secondary/30 font-bold">EL</span>
                </div>
              </div>
              <div className="md:col-span-2">
                <h2 className="font-display text-3xl font-semibold text-primary mb-2">Emily Lin</h2>
                <p className="text-secondary text-sm font-body tracking-wide mb-6">
                  {t("Founder & Managing Director", "創辦人兼執行董事")}
                </p>
                <div className="space-y-4">
                  <p className="body-large">
                    {t(
                      "Emily Lin is an entrepreneur, cultural strategist, and platform builder with experience across brand development, creative industries, and cross-border partnerships.",
                      "Emily Lin 是一位企業家、文化策略師和平台建設者，在品牌發展、創意產業和跨境合作方面擁有豐富經驗。"
                    )}
                  </p>
                  <p className="body-large">
                    {t(
                      "She founded HH Nexus Capital to build a family-backed platform connecting craftsmanship, creative industries, and lifestyle brands through long-term stewardship and global networks.",
                      "她創立衡寰資本，建立一個家族支持的平台，通過長期管理和全球網絡連結工藝、創意產業和生活方式品牌。"
                    )}
                  </p>
                  <p className="body-large">
                    {t(
                      "Under her leadership, the platform has grown to include five operating companies spanning art craftsmanship, creative education, event production, hospitality, and digital design — each contributing to a cohesive ecosystem rooted in cultural value and community engagement.",
                      "在她的領導下，平台已成長為包含五家營運公司，橫跨藝術工藝、創意教育、活動製作、餐飲和數位設計——每家公司都為植根於文化價值和社區參與的有凝聚力的生態系統做出貢獻。"
                    )}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Advisors */}
        <section className="section-padding bg-card border-t border-border">
          <div className="section-container">
            <div className="gold-line mb-6" />
            <p className="label-uppercase mb-4">{t("Advisors", "顧問")}</p>
            <h2 className="heading-section mb-12">{t("Strategic Advisors", "策略顧問")}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-8 bg-background border border-border">
                <h3 className="font-display text-xl font-semibold text-primary mb-1">Michael Turner</h3>
                <p className="text-secondary text-sm font-body tracking-wide mb-4">
                  {t("Global Strategy Advisor", "全球策略顧問")}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed font-body">
                  {t(
                    "Former executive advisor for international investment platforms. Michael brings decades of experience in cross-border strategy, institutional structuring, and global market development. He has advised family offices, cultural institutions, and private capital platforms across North America, Europe, and Asia.",
                    "前國際投資平台高管顧問。Michael 在跨境策略、機構架構和全球市場開發方面擁有數十年經驗。他曾為北美、歐洲和亞洲的家族辦公室、文化機構和私人資本平台提供諮詢。"
                  )}
                </p>
              </div>
              <div className="p-8 bg-background border border-border">
                <h3 className="font-display text-xl font-semibold text-primary mb-1">Kenji Tanaka</h3>
                <p className="text-secondary text-sm font-body tracking-wide mb-4">
                  {t("Asia Market Advisor", "亞洲市場顧問")}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed font-body">
                  {t(
                    "Expert in cross-border partnerships between North America and Asia. Kenji specializes in bridging Western creative industries with Asian markets and cultural landscapes. His network spans creative ventures in Tokyo, Singapore, and Seoul, with deep expertise in cultural adaptation and partnership development.",
                    "北美與亞洲跨境合作專家。Kenji 專注於將西方創意產業與亞洲市場和文化景觀連結起來。他的網絡遍及東京、新加坡和首爾的創意企業，在文化適應和合作夥伴關係發展方面擁有深厚的專業知識。"
                  )}
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Leadership;
