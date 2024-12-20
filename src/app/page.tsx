import Brokerage from "@/components/Brokerage";
import HeroSection from "@/components/HeroSection";
import QRCodeSection from "@/components/QRCodeSection";
export default function Home() {
  return (
    <>
      <HeroSection />
      <div className="relative">
        <div className="absolute h-[120px] w-full bg-primary lg:block hidden bottom-0 left-0 -z-10"></div>
        <div className="bg-hero-face relative hidden lg:block bg-cover bg-center bg-no-repeat min-h-[280px] 2xl:container h-auto w-full" />
      </div>
      <QRCodeSection />
      <Brokerage />
    </>
  );
}
