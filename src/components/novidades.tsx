import { ProductCard } from "./product-card"
import ImgTenis from "@/assets/shoes.png"
import BannerNovidades from "@/assets/banner-novidades.png"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
} from "@/components/ui/carousel"

const newProducts = [
    {
        discount: "-20%",
        image: ImgTenis,
        brand: "MIZUNO",
        title: "Tênis Mizuno Wave Endeavor 3",
        oldPrice: "R$ 799,00",
        newPrice: "R$ 499,90",
        clubPrice: "R$ 399,00",
        installments: "5x de R$ 100,00",
        fees: true,

    },
    {
        discount: "-20%",
        image: ImgTenis,
        brand: "MIZUNO",
        title: "Tênis Mizuno Wave Endeavor 3",
        oldPrice: "R$ 799,00",
        newPrice: "R$ 499,90",
        clubPrice: "R$ 399,00",
        installments: "5x de R$ 100,00",
        fees: true,
    },
    {
        discount: "-20%",
        image: ImgTenis,
        brand: "MIZUNO",
        title: "Tênis Mizuno Wave Endeavor 3",
        oldPrice: "R$ 799,00",
        newPrice: "R$ 499,90",
        clubPrice: "R$ 399,00",
        installments: "5x de R$ 100,00",
        fees: true,
    },
    {
        discount: "-20%",
        image: ImgTenis,
        brand: "MIZUNO",
        title: "Tênis Mizuno Wave Endeavor 3",
        oldPrice: "R$ 799,00",
        newPrice: "R$ 499,90",
        clubPrice: "R$ 399,00",
        installments: "5x de R$ 100,00",
        fees: true,
    },
]

export function Novidades() {
    return (
        <section className="flex flex-col w-full py-10 overflow-hidden">
            {/* Título */}
            <h2 className="text-[20px] text-[#0C0C0C] font-semibold leading-6 tracking-[0.4px] uppercase mb-5 pl-4">
                NOVIDADES
            </h2>

            {/* Carrossel de produtos */}
            <div className="pl-4 relative">
                <Carousel opts={{ align: "start", dragFree: true }} className="w-full">
                    <CarouselContent className="-ml-[14px]">
                        {newProducts.map((product, index) => (
                            <CarouselItem key={index} className="pl-[14px] basis-auto">
                                <ProductCard variant="lg" {...product} />
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselNext className="size-6 absolute right-4 top-4 -translate-y-1/2 border-none bg-white text-primary hover:text-primary/50 shadow-lg z-10" />
                </Carousel>
            </div>

            {/* Banner inferior */}
            <div className="w-full px-[17px] mt-8">
                <div className="w-full h-[431px] rounded-[24px] overflow-hidden">
                    <img
                        src={BannerNovidades}
                        alt="Novidades - Nova coleção"
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>
        </section>
    )
}
