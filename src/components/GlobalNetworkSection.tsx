import { useLanguage } from "@/context/LanguageContext";
import { Globe } from "lucide-react";

const hubs = [
  { city: "Vancouver", lat: "49.28°N", lon: "123.12°W" },
  { city: "Singapore", lat: "1.35°N", lon: "103.82°E" },
  { city: "Tokyo", lat: "35.68°N", lon: "139.69°E" },
  { city: "San Francisco", lat: "37.77°N", lon: "122.42°W" },
];

const GlobalNetworkSection = () => {
  const { lang, t } = useLanguage();

  return (
    <section className="section-padding bg-card border-t border-border">
      <div className="section-container">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start">
          <div>
            <div className="gold-line mb-6" />
            <p className="label-uppercase mb-4">{t("Global Network", "全球網絡")}</p>
            <h2 className="heading-section mb-6">
              {t("Worldwide Presence", "全球佈局")}
            </h2>
            <p className="body-large">
              {t(
                "HH Nexus Capital connects North America and Asia through a network of partners, cultural institutions, and creative communities. Our platform bridges heritage industries with global opportunities.",
                "衡寰資本通過合作夥伴、文化機構和創意社區的網絡連結北美和亞洲。我們的平台將傳統產業與全球機會連接起來。"
              )}
            </p>
          </div>

          <div className="relative">
            <div className="relative w-full aspect-square max-w-md mx-auto flex items-center justify-center">
              <div className="absolute inset-0 rounded-full border border-border/50" />
              <div className="absolute inset-4 rounded-full border border-border/30" />
              <div className="absolute inset-8 rounded-full border border-border/20" />
              <Globe className="w-16 h-16 text-secondary/40" />
              <div className="absolute top-[20%] left-[15%] w-3 h-3 bg-secondary rounded-full animate-pulse" title="Vancouver" />
              <div className="absolute top-[55%] right-[20%] w-3 h-3 bg-secondary rounded-full animate-pulse" title="Singapore" />
              <div className="absolute top-[30%] right-[15%] w-3 h-3 bg-secondary rounded-full animate-pulse" title="Tokyo" />
              <div className="absolute top-[35%] left-[20%] w-3 h-3 bg-secondary rounded-full animate-pulse" title="San Francisco" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-border">
          {hubs.map((hub) => (
            <div key={hub.city}>
              <div className="w-8 h-[2px] bg-secondary mb-4" />
              <h3 className="font-display text-lg font-semibold text-primary mb-2">{hub.city}</h3>
              <p className="text-xs text-muted-foreground font-body tracking-wide">
                {hub.lat}, {hub.lon}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GlobalNetworkSection;
