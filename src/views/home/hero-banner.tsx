import heroDesktop from "@/assets/hero-desktop.webp";
import heroMobile from "@/assets/hero-mobile.webp";

export default function HeroBanner() {
  return (
    <picture className="contents">
      <source media="(min-width: 48rem)" srcSet={heroDesktop.src} />
      <img
        src={heroMobile.src}
        alt="The Mastercraft Bamboo Monitor Riser lifting a monitor to eye level above a wooden desk."
        width={heroMobile.width}
        height={heroMobile.height}
        fetchPriority="high"
        className="h-75 w-full object-cover md:h-100"
      />
    </picture>
  );
}
