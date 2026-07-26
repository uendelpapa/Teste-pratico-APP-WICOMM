import { CategoryCard } from "./category-card";
import ImgChinelos from "@/assets/nossos-produtos/img-chinelos.jpg"
import ImgTenis from "@/assets/nossos-produtos/img-tenis.jpg"
import ImgSapatenis from "@/assets/nossos-produtos/img-sapatenis.jpg"
import ImgTreino from "@/assets/nossos-produtos/img-treino.png"
import ImgSandalias from "@/assets/nossos-produtos/img-sandalia.jpg"
import ImgMocassim from "@/assets/nossos-produtos/img-mocassim.jpg"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

interface OurProductsProps {
    title: string
    image: string
    url: string
}

const ourProductsData: OurProductsProps[] = [
    {
        title: "CHINELOS",
        image: ImgChinelos,
        url: ""
    },
    {
        title: "TÊNIS",
        image: ImgTenis,
        url: ""
    },
    {
        title: "SAPATÊNIS",
        image: ImgSapatenis,
        url: ""
    },
    {
        title: "TREINO",
        image: ImgTreino,
        url: ""
    },
    {
        title: "SANDÁLIAS",
        image: ImgSandalias,
        url: ""
    },
    {
        title: "MOCASSINS",
        image: ImgMocassim,
        url: ""
    },
]

export function OurProducts() {
    return (
        <section className="relative flex flex-col w-full py-12 pl-4 overflow-hidden">
            <div className="w-full absolute h-full bg-neutral-gray-100 right-0 bottom-0 top-40 z-10" />
            <h1 className="text-[22px] font-semibold leading-6 tracking-[0.4px] uppercase mb-8 ml-2 z-20">
                Nossos Produtos
            </h1>

            <Carousel opts={{ align: "start", dragFree: true }} className="w-full relative z-20">
                <CarouselContent className="-ml-1">
                    {ourProductsData.map((product, index) => (
                        <CarouselItem key={index} className="pl-[9px] basis-auto">
                            <CategoryCard
                                image={product.image}
                                title={product.title}
                            />
                        </CarouselItem>
                    ))}
                </CarouselContent>

                {/* As setas flutuando nas pontas, igual a referência */}
                <CarouselPrevious className="size-6 absolute -left-2 top-6 -translate-y-1/2 bg-white/90 hover:bg-white text-primary border-none shadow-md z-10" />
                <CarouselNext className="size-6 absolute right-2 top-6 -translate-y-1/2 bg-white/90 hover:bg-white text-primary border-none shadow-md z-10" />
            </Carousel>
        </section>
    )
}
