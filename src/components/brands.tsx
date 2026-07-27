import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";

import BannerConverse from "@/assets/brands/banner-converse.jpg"
import BannerOlympikus from "@/assets/brands/banner-olympikus.jpg"
import BannerKenner from "@/assets/brands/banner-kenner.jpg"

import LogoConverse from "@/assets/brands/converse.png"
import LogoOlympikus from "@/assets/brands/olympikus.png"
import LogoKenner from "@/assets/brands/kenner.png"
import { BrandCard } from "./brand-card";

interface BrandsProps {
    logo: string
    banner: string
    title: string
    url: string
}

const brandData: BrandsProps[] = [
    {
        logo: LogoConverse,
        banner: BannerConverse,
        title: "PRODUTOS CONVERSE",
        url: ""
    },
    {
        logo: LogoOlympikus,
        banner: BannerOlympikus,
        title: "PRODUTOS OLYMPKUS",
        url: ""
    },
    {
        logo: LogoKenner,
        banner: BannerKenner,
        title: "PRODUTOS KENNER",
        url: ""
    }
]



export function Brands() {
    return (
        <section className="flex w-full items-center pl-4 pb-3 bg-neutral-gray-100">
            <Carousel opts={{ align: "start", dragFree: true }} className="w-full relative">
                <CarouselContent className="-ml-1">
                    {brandData.map((brand, index) => (
                        <CarouselItem key={index} className="pl-[9px] basis-auto">
                            <BrandCard
                                image={brand.banner}
                                brandLogo={brand.logo}
                                altText={brand.title}
                            />
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </section>
    )
}
