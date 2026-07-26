import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"

interface OfferBannerProps {
    title: React.ReactNode
}

const offerBannerData: OfferBannerProps[] = [
    {
        title: <span><strong>10%</strong> Na primeira compra</span>,
    },
    {
        title: <span>Frete grátis para todo o Brasil</span>,
    },
    {
        title: <span>Pague em até 12x sem juros</span>,
    }
]

export function OfferBanner() {
    return (
        <section className="w-full py-2.5 px-4 bg-primary flex items-center justify-center overflow-hidden">
            <Carousel
                opts={{ loop: true, align: "center" }}
                plugins={[
                    Autoplay({
                        delay: 3000,
                    }),
                ]}
                className="w-full max-w-md"
            >
                <CarouselContent className="ml-0">
                    {offerBannerData.map((offer, index) => (
                        <CarouselItem key={index} className="pl-0 flex items-center justify-center">
                            <div className="text-primary-foreground text-center leading-6 tracking-[0.32px]">
                                {offer.title}
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </section>
    )
}
