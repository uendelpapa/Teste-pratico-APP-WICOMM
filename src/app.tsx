import { Brands } from "#components/brands";
import CarouselHero from "#components/carousel-hero";
import { DisplayWindow } from "#components/display-window";
import { OfferBanner } from "#components/offer-banner";
import { OurProducts } from "#components/our-products";
import { Header } from "./components/header";
import { ShopBySize } from "./components/shop-by-size";
import { OurBrands } from "./components/our-brands";
import { News } from "./components/news";
import { BottomNav } from "./components/bottom-nav";
import { Toaster } from "./components/ui/sonner";
import { motion } from "framer-motion";

export default function App() {
  return (
    <div className="pb-[60px]">
      <Header />
      <CarouselHero />
      <OfferBanner />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <OurProducts />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <ShopBySize />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <Brands />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <DisplayWindow />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <OurBrands />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <News />
      </motion.div>

      <BottomNav />
      <Toaster position="top-right" richColors />
    </div>
  )
}