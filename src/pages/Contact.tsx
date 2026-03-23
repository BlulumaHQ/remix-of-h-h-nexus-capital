import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/context/LanguageContext";
import heroImage from "@/assets/hero-skyline.jpg";

const inquiryTypesEn = [
  "Investment Inquiry",
  "Partnership Opportunity",
  "Pitch Deck Submission",
  "Media Inquiry",
  "General Inquiry",
];

const inquiryTypesZh = [
  "投資諮詢",
  "合作機會",
  "商業計劃書提交",
  "媒體諮詢",
  "一般諮詢",
];

const Contact = () => {
  const { toast } = useToast();
  const { lang, t } = useLanguage();
  const [submitting, setSubmitting] = useState(false);
  const inquiryTypes = lang === "en" ? inquiryTypesEn : inquiryTypesZh;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      toast({
        title: t("Inquiry Submitted", "已提交諮詢"),
        description: t(
          "Thank you. Our team will review your inquiry and respond within 48 hours.",
          "感謝您。我們的團隊將在 48 小時內審閱並回覆您的諮詢。"
        ),
      });
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <>
      <Header />
      <main>
        <section className="bg-primary pt-28 md:pt-36 pb-16 md:pb-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${heroImage})` }} />
          <div className="absolute inset-0 bg-primary/80" />
          <div className="section-container relative z-10">
            <div className="gold-line mb-6" />
            <p className="label-uppercase mb-4">{t("Contact", "聯絡我們")}</p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-primary-foreground tracking-tight leading-[1.1] max-w-3xl">
              {lang === "en" ? (
                <>Get in <span className="text-secondary">Touch</span></>
              ) : (
                <>與我們<span className="text-secondary">聯繫</span></>
              )}
            </h1>
            <p className="text-primary-foreground/60 text-base md:text-lg leading-relaxed mt-6 max-w-2xl">
              {t(
                "For investment inquiries, partnership opportunities, or to submit a pitch deck, please complete the form below. Our team will respond within 48 hours.",
                "如有投資諮詢、合作機會或提交商業計劃書，請填寫以下表單。我們的團隊將在 48 小時內回覆。"
              )}
            </p>
          </div>
        </section>

        <section className="section-padding bg-background">
          <div className="section-container">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Contact Info */}
              <div>
                <div className="gold-line mb-6" />
                <h2 className="font-display text-2xl font-semibold text-primary mb-8">
                  {t("Contact Information", "聯絡資訊")}
                </h2>
                <div className="space-y-6">
                  <div>
                    <p className="text-xs text-muted-foreground tracking-[0.15em] uppercase mb-1 font-body">
                      {t("Company", "公司")}
                    </p>
                    <p className="text-foreground font-body">HH Nexus Capital Ltd.</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground tracking-[0.15em] uppercase mb-1 font-body">
                      {t("Headquarters", "總部")}
                    </p>
                    <p className="text-foreground font-body">Vancouver, Canada</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground tracking-[0.15em] uppercase mb-1 font-body">
                      {t("Email", "電子信箱")}
                    </p>
                    <p className="text-foreground font-body">info@hhnexuscapital.com</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground tracking-[0.15em] uppercase mb-1 font-body">
                      {t("Inquiries", "諮詢類型")}
                    </p>
                    <ul className="space-y-1">
                      <li className="text-sm text-muted-foreground font-body">{t("Investment inquiries", "投資諮詢")}</li>
                      <li className="text-sm text-muted-foreground font-body">{t("Partnership opportunities", "合作機會")}</li>
                      <li className="text-sm text-muted-foreground font-body">{t("Pitch deck submissions", "商業計劃書提交")}</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Form */}
              <div className="lg:col-span-2">
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div>
                    <p className="label-uppercase mb-6">{t("Your Information", "您的資訊")}</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-sm font-body text-foreground">{t("Name *", "姓名 *")}</Label>
                        <Input id="name" name="name" required placeholder={t("Full name", "全名")} className="bg-card border-border" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-sm font-body text-foreground">{t("Email *", "電子信箱 *")}</Label>
                        <Input id="email" name="email" type="email" required placeholder="name@company.com" className="bg-card border-border" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="organization" className="text-sm font-body text-foreground">{t("Organization", "機構")}</Label>
                        <Input id="organization" name="organization" placeholder={t("Company or fund", "公司或基金")} className="bg-card border-border" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="inquiryType" className="text-sm font-body text-foreground">{t("Inquiry Type *", "諮詢類型 *")}</Label>
                        <Select name="inquiryType" required>
                          <SelectTrigger className="bg-card border-border">
                            <SelectValue placeholder={t("Select type", "選擇類型")} />
                          </SelectTrigger>
                          <SelectContent>
                            {inquiryTypes.map((type) => (
                              <SelectItem key={type} value={type}>{type}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-sm font-body text-foreground">{t("Message *", "訊息 *")}</Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      placeholder={t(
                        "Describe your inquiry, investment interest, or partnership proposal.",
                        "請描述您的諮詢、投資興趣或合作提案。"
                      )}
                      className="bg-card border-border resize-none"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="attachments" className="text-sm font-body text-foreground">{t("Attachments", "附件")}</Label>
                    <Input
                      id="attachments"
                      name="attachments"
                      type="file"
                      multiple
                      accept=".pdf,.doc,.docx,.ppt,.pptx"
                      className="bg-card border-border file:text-secondary file:font-body"
                    />
                    <p className="text-xs text-muted-foreground font-body">PDF, DOC, PPT — Max 10MB each</p>
                  </div>

                  <div className="flex gap-4">
                    <button
                      type="submit"
                      disabled={submitting}
                      className="inline-flex items-center justify-center px-10 py-3.5 bg-secondary text-secondary-foreground text-sm font-medium tracking-wide hover:bg-secondary/90 transition-colors font-body disabled:opacity-50"
                    >
                      {submitting ? t("Submitting...", "提交中...") : t("Contact Us", "聯絡我們")}
                    </button>
                    <button
                      type="submit"
                      disabled={submitting}
                      className="inline-flex items-center justify-center px-10 py-3.5 border border-border text-foreground text-sm font-medium tracking-wide hover:border-secondary hover:text-secondary transition-colors font-body disabled:opacity-50"
                    >
                      {t("Submit Pitch Deck", "提交商業計劃書")}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Contact;
