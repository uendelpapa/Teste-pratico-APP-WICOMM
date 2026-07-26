import { Brands } from "#components/brands";
import CarouselHero from "#components/carousel-hero";
import { DisplayWindow } from "#components/display-window";
import { OfferBanner } from "#components/offer-banner";
import { OurProducts } from "#components/our-products";
import { Header } from "./components/header";
import { ShopBySize } from "./components/shop-by-size";
import { OurBrands } from "./components/our-brands";
import { Novidades } from "./components/novidades";
import { BottomNav } from "./components/bottom-nav";

export default function App() {
  return (
    <div className="pb-[60px]">
      <Header />
      <CarouselHero />
      <OfferBanner />
      <OurProducts />
      <ShopBySize />
      <Brands />
      <DisplayWindow />
      <OurBrands />
      <Novidades />
      <BottomNav />
    </div>
  )
}