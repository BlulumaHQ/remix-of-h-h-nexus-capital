import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage } from "@/context/LanguageContext";
import heroImage from "@/assets/hero-skyline.jpg";

const categoriesEn = ["All", "AI & Technology", "Consumer", "Creative Economy", "Innovation"] as const;
const categoriesZh = ["全部", "AI 與科技", "消費", "創意經濟", "創新"] as const;

type Category = string;

const insightItems = [
  {
    title: "The Future of AI Investment: Infrastructure Over Applications",
    titleCn: "AI 投資的未來：基礎設施優於應用",
    category: "AI & Technology",
    categoryCn: "AI 與科技",
    date: "February 2026",
    excerpt: "Why the most durable returns in artificial intelligence will come from foundational infrastructure rather than consumer-facing applications.",
    excerptCn: "為什麼人工智能中最持久的回報將來自基礎設施而非面向消費者的應用。",
    content: [
      "The artificial intelligence sector has entered a critical inflection point. While consumer-facing AI applications capture headlines and user adoption metrics, the most compelling long-term investment opportunities reside in the infrastructure layer. Companies building model training platforms, data pipeline orchestration tools, and inference optimization systems are creating the foundational utilities that every AI application will depend upon.",
      "Our analysis of over 200 AI companies across growth stages reveals that infrastructure-layer investments demonstrate 3.2x higher capital efficiency and significantly stronger competitive moats compared to application-layer peers. The pattern mirrors previous technology cycles: the companies that built cloud infrastructure, database systems, and developer tools captured outsized returns as entire industries migrated to digital operations.",
    ],
    contentCn: [
      "人工智能領域已進入關鍵拐點。雖然面向消費者的 AI 應用佔據頭條新聞和用戶採用指標，但最具吸引力的長期投資機會存在於基礎設施層。構建模型訓練平台、數據管道編排工具和推理優化系統的公司正在創造每個 AI 應用都將依賴的基礎設施。",
      "我們對200多家不同成長階段 AI 公司的分析顯示，基礎設施層投資與應用層同行相比，資本效率高出3.2倍，競爭護城河也明顯更強。這種模式與之前的技術週期相呼應：構建雲基礎設施、數據庫系統和開發者工具的公司在整個行業遷移到數位營運時獲得了超額回報。",
    ],
  },
  {
    title: "Global Consumer Trends: The Rise of Community-Driven Commerce",
    titleCn: "全球消費趨勢：社群驅動商務的崛起",
    category: "Consumer",
    categoryCn: "消費",
    date: "January 2026",
    excerpt: "How consumer behaviour is shifting from transactional purchasing to community-embedded brand relationships.",
    excerptCn: "消費者行為如何從交易型購買轉變為社群嵌入式品牌關係。",
    content: [
      "The traditional consumer funnel is being fundamentally restructured by community-driven commerce models. Brands that cultivate authentic communities around shared values and experiences are demonstrating 4.7x higher customer lifetime value compared to traditional direct-to-consumer models. This shift represents a structural change in how consumers discover, evaluate, and commit to brands.",
      "Our research across emerging consumer brands in North America and Asia reveals three critical success factors: authentic community governance that gives members genuine influence over product development, hybrid digital-physical experiences that create memorable touchpoints, and transparent supply chain narratives that align with consumer values around sustainability and ethical production.",
    ],
    contentCn: [
      "傳統的消費者漏斗正在被社群驅動的商務模式從根本上重構。圍繞共同價值觀和體驗培養真實社群的品牌，其客戶終身價值比傳統的直接面向消費者模式高出4.7倍。這種轉變代表了消費者發現、評估和忠於品牌方式的結構性變化。",
      "我們對北美和亞洲新興消費品牌的研究揭示了三個關鍵成功因素：賦予會員對產品開發真正影響力的真實社群治理、創造難忘接觸點的數位-實體混合體驗，以及與消費者在可持續性和道德生產方面的價值觀一致的透明供應鏈敘事。",
    ],
  },
  {
    title: "The Cultural Economy: From Creative Output to Institutional Asset Class",
    titleCn: "文化經濟：從創意產出到機構資產類別",
    category: "Creative Economy",
    categoryCn: "創意經濟",
    date: "December 2025",
    excerpt: "Why the creative economy is emerging as a legitimate institutional asset class with predictable returns and scalable platforms.",
    excerptCn: "為什麼創意經濟正在成為具有可預測回報和可擴展平台的合法機構資產類別。",
    content: [
      "The global creative economy has grown to an estimated $2.25 trillion, yet institutional capital allocation to the sector remains dramatically underweight. This disconnect creates a significant opportunity for investors who understand how to structure cultural assets, creator platforms, and experience-based businesses as scalable, returns-generating portfolio companies.",
      "Leading cultural platforms are developing sophisticated monetization engines that transform creative output into recurring revenue streams. Subscription models for curated cultural experiences, licensing frameworks for digital art and media IP, and technology-enabled creator tools are building the infrastructure for institutional-grade cultural investment. The sector is evolving from project-based funding to platform-based capital deployment.",
    ],
    contentCn: [
      "全球創意經濟已增長到約2.25萬億美元，但機構資本對該行業的配置仍然嚴重不足。這種脫節為理解如何將文化資產、創作者平台和體驗型業務構建為可擴展、可產生回報的投資組合公司的投資者創造了重大機會。",
      "領先的文化平台正在開發精密的變現引擎，將創意產出轉化為經常性收入流。策展文化體驗的訂閱模式、數位藝術和媒體 IP 的授權框架，以及技術驅動的創作者工具正在構建機構級文化投資的基礎設施。該行業正在從基於項目的資金轉向基於平台的資本部署。",
    ],
  },
  {
    title: "Entrepreneurship in the Age of Platform Networks",
    titleCn: "平台網絡時代的創業精神",
    category: "Innovation",
    categoryCn: "創新",
    date: "November 2025",
    excerpt: "How platform network effects are reshaping startup strategy and creating new categories of venture-scale opportunity.",
    excerptCn: "平台網絡效應如何重塑創業策略並創造新類別的風險投資規模機會。",
    content: [
      "The most successful companies of the next decade will be platform businesses that create value by connecting participants in multi-sided networks. Unlike traditional linear businesses, platform companies benefit from network effects that compound with scale, creating winner-take-most dynamics in their respective categories. For founders, this means startup strategy must be fundamentally redesigned around network creation rather than product development.",
      "Our portfolio analysis reveals that platform-native companies achieve profitability 18 months faster than linear business models at comparable scale, while demonstrating 2.8x stronger retention metrics. The key insight is that successful platform founders think in terms of ecosystem design rather than product features. They identify critical network nodes, design incentive structures that encourage participation, and build technology infrastructure that reduces friction for all network participants.",
    ],
    contentCn: [
      "未來十年最成功的公司將是通過在多邊網絡中連接參與者來創造價值的平台企業。與傳統線性企業不同，平台公司受益於隨規模複合的網絡效應，在各自類別中創造贏家通吃的動態。對創業者而言，這意味著創業策略必須從根本上圍繞網絡創建而非產品開發重新設計。",
      "我們的投資組合分析顯示，平台原生公司在相同規模下比線性商業模式提前18個月實現盈利，同時展現出2.8倍更強的留存指標。關鍵洞察是成功的平台創業者以生態系統設計而非產品功能來思考。他們識別關鍵網絡節點，設計鼓勵參與的激勵結構，並構建減少所有網絡參與者摩擦的技術基礎設施。",
    ],
  },
];

const Insights = () => {
  const { lang, t } = useLanguage();
  const categories = lang === "en" ? categoriesEn : categoriesZh;
  const [active, setActive] = useState<Category>(categories[0]);

  const filtered = active === categories[0]
    ? insightItems
    : insightItems.filter((i) => (lang === "en" ? i.category : i.categoryCn) === active);

  return (
    <>
      <Header />
      <main>
        <section className="bg-primary pt-28 md:pt-36 pb-16 md:pb-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${heroImage})` }} />
          <div className="absolute inset-0 bg-primary/80" />
          <div className="section-container relative z-10">
            <div className="gold-line mb-6" />
            <p className="label-uppercase mb-4">{t("Insights", "洞察觀點")}</p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-primary-foreground tracking-tight leading-[1.1] max-w-3xl">
              {lang === "en" ? (
                <>Perspectives & <span className="text-secondary">Intelligence</span></>
              ) : (
                <>觀點與<span className="text-secondary">洞察</span></>
              )}
            </h1>
          </div>
        </section>

        <section className="section-padding bg-background">
          <div className="section-container">
            <div className="flex flex-wrap gap-3 mb-12">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActive(cat)}
                  className={`px-5 py-2 text-xs font-body tracking-[0.1em] uppercase transition-colors border ${
                    active === cat
                      ? "bg-primary text-primary-foreground border-primary"
                      : "bg-transparent text-muted-foreground border-border hover:border-secondary hover:text-secondary"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="space-y-8">
              {filtered.map((item, i) => (
                <article key={i} className="p-8 md:p-10 bg-card border border-border hover:border-secondary/30 transition-colors">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-4">
                    <span className="text-xs text-secondary tracking-[0.15em] uppercase font-body">
                      {lang === "en" ? item.category : item.categoryCn}
                    </span>
                    <span className="text-xs text-muted-foreground font-body">{item.date}</span>
                  </div>
                  <h2 className="font-display text-xl md:text-2xl font-semibold text-primary mb-4">
                    {lang === "en" ? item.title : item.titleCn}
                  </h2>
                  <p className="text-sm text-secondary/80 font-medium mb-4 font-body">
                    {lang === "en" ? item.excerpt : item.excerptCn}
                  </p>
                  <div className="space-y-3">
                    {(lang === "en" ? item.content : item.contentCn).map((para, j) => (
                      <p key={j} className="text-sm text-muted-foreground leading-relaxed font-body">
                        {para}
                      </p>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Insights;
