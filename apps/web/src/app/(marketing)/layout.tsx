import { MarketingNav } from "@/components/marketing/nav";
import { MarketingFooter } from "@/components/marketing/final-cta";

export default function MarketingLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="min-h-screen bg-[#05060f] text-white antialiased selection:bg-indigo-500/30">
      <MarketingNav />
      <main>{children}</main>
      <MarketingFooter />
    </div>
  );
}
