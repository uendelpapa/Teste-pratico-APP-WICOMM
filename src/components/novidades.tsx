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
        installments: "ou 5x de R$ 100,00 sem juros"
    },
    {
        discount: "-20%",
        image: ImgTenis,
        brand: "MIZUNO",
        title: "Tênis Mizuno Wave Endeavor 3",
        oldPrice: "R$ 799,00",
        newPrice: "R$ 499,90",
        clubPrice: "R$ 399,00",
        installments: "ou 5x de R$ 100,00 sem juros"
    },
    {
        discount: "-20%",
        image: ImgTenis,
        brand: "MIZUNO",
        title: "Tênis Mizuno Wave Endeavor 3",
        oldPrice: "R$ 799,00",
        newPrice: "R$ 499,90",
        clubPrice: "R$ 399,00",
        installments: "ou 5x de R$ 100,00 sem juros"
    },
    {
        discount: "-20%",
        image: ImgTenis,
        brand: "MIZUNO",
        title: "Tênis Mizuno Wave Endeavor 3",
        oldPrice: "R$ 799,00",
        newPrice: "R$ 499,90",
        clubPrice: "R$ 399,00",
        installments: "ou 5x de R$ 100,00 sem juros"
    },
]

export function Novidades() {
    return (
        <section className="flex flex-col w-full py-10 overflow-hidden">
            {/* Título */}
            <h2 className="text-[22px] font-bold leading-tight tracking-wide uppercase mb-6 pl-4">
                NOVIDADES
            </h2>

            {/* Carrossel de produtos */}
            <div className="pl-4 relative">
                <Carousel opts={{ align: "start", dragFree: true }} className="w-full">
                    <CarouselContent className="-ml-[14px]">
                        {newProducts.map((product, index) => (
                            <CarouselItem key={index} className="pl-[14px] basis-auto">
                                <ProductCard {...product} />
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselNext className="size-7 absolute right-4 top-[35%] -translate-y-1/2 bg-white/90 hover:bg-white text-neutral-gray-700 border border-neutral-200 shadow-sm z-10" />
                </Carousel>
            </div>

            {/* Banner inferior */}
            <div className="w-full px-4 mt-8">
                <div className="w-full h-[280px] rounded-2xl overflow-hidden">
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
