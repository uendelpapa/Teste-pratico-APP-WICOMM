import {
    Carousel,
    CarouselContent,
    CarouselItem,
    type CarouselApi,
} from "@/components/ui/carousel"
import { Button } from "@/components/ui/button"
import { useEffect, useState, useRef } from "react"
import Autoplay from "embla-carousel-autoplay"

import imgCarousel1 from "../assets/img-carousel-1.png"

export default function CarouselHero() {
    const [api, setApi] = useState<CarouselApi>()
    const [current, setCurrent] = useState(0)
    const [count, setCount] = useState(0)

    const plugin = useRef(
        Autoplay({ delay: 4000, stopOnInteraction: false })
    )

    useEffect(() => {
        if (!api) {
            return
        }

        setCount(api.scrollSnapList().length)
        setCurrent(api.selectedScrollSnap())

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap())
        })
    }, [api])

    const slides = [
        {
            id: 1,
            image: imgCarousel1,
            oldPrice: "R$ 799,00",
            discount: "20% OFF",
            newPrice: "R$ 350,00",
        },
        {
            id: 2,
            image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1920&auto=format&fit=crop",
            oldPrice: "R$ 599,00",
            discount: "30% OFF",
            newPrice: "R$ 419,00",
        },
        {
            id: 3,
            image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?q=80&w=1920&auto=format&fit=crop",
            oldPrice: "R$ 299,00",
            discount: "10% OFF",
            newPrice: "R$ 269,00",
        },
    ]

    return (
        <section className="relative w-full overflow-hidden">
            <Carousel
                setApi={setApi}
                plugins={[plugin.current]}
                className="w-full"
                opts={{ loop: true }}
                onMouseEnter={plugin.current.stop}
                onMouseLeave={plugin.current.reset}
            >
                <CarouselContent className="ml-0">
                    {slides.map((slide) => (
                        <CarouselItem key={slide.id} className="pl-0">
                            <div className="relative w-full h-[590px] flex flex-col justify-end items-center pb-[74px] text-white bg-black">
                                {/* Imagem de Fundo */}
                                <img
                                    src={slide.image}
                                    alt="Promo"
                                    className="absolute inset-0 w-full h-full object-cover"
                                />

                                {/* Overlay de Gradiente Escuro para contraste */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/20 to-black/10" />

                                {/* Conteúdo (Textos e Botão) */}
                                <div className="relative z-10 flex flex-col">
                                    <div className="flex items-center gap-[7.77px] mb-[12.23px]">
                                        <span className="text-[18.344px] font-normal leading-[18.111px] tracking-[0.734px] line-through capitalize">
                                            {slide.oldPrice}
                                        </span>
                                        <span className="h-[19.873px] flex items-center bg-primary text-primary-foreground text-[10.701px] text-center font-semibold px-[8.41px] py-[7.643px] rounded-full uppercase leading-[21.401px] tracking-[0.214px]">
                                            {slide.discount}
                                        </span>
                                    </div>
                                    <h1 className="text-[55.032px] tracking-[1.101px] leading-[37.332px] font-black mb-[18.77px] drop-shadow-lg">
                                        {slide.newPrice}
                                    </h1>
                                    <div className="flex justify-center">
                                        <Button className="h-[32px] py-[13.495px] px-[26.991px]">
                                            CONFIRA
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>

            {/* Navegação por Dots (Paginação) */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-[2.67px] z-20">
                {Array.from({ length: count }).map((_, index) => (
                    <button
                        key={index}
                        className={`size-2 rounded-full transition-colors shadow-sm ${current === index ? "bg-primary" : "bg-white/80 hover:bg-white"
                            }`}
                        onClick={() => api?.scrollTo(index)}
                        aria-label={`Ir para o slide ${index + 1}`}
                    />
                ))}
            </div>
        </section>
    )
}
