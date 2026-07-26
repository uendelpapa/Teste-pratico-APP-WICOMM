import { ProductCard } from "./product-card"
import ImgTenis from "@/assets/shoes.png"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel"

const mockProducts = [
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

function ProductCarousel() {
    return (
        <Carousel opts={{ align: "start", dragFree: true }} className="w-full">
            <CarouselContent className="-ml-[14px]">
                {mockProducts.map((product, index) => (
                    <CarouselItem key={index} className="pl-[14px] basis-auto">
                        <ProductCard {...product} />
                    </CarouselItem>
                ))}
            </CarouselContent>
        </Carousel>
    )
}

export function DisplayWindow() {
    return (
        <section className="relative flex flex-col w-full py-12 pl-4 overflow-hidden">
            <div className="w-full absolute h-24 bg-neutral-gray-100 right-0 bottom-0 top-0 z-10" />
            <Tabs defaultValue="masculino" className="w-full gap-4 z-20">
                <TabsList
                    variant="line"
                    className="w-full justify-start gap-6 border-b-3 border-white h-auto pb-0 mb-2.5"
                >
                    <TabsTrigger
                        value="masculino"
                        className="text-[16px] md:text-[18px] tracking-wide uppercase font-medium pb-3 px-0 data-active:text-primary data-active:font-bold data-active:after:bg-primary"
                    >
                        MASCULINO
                    </TabsTrigger>
                    <TabsTrigger
                        value="feminino"
                        className="text-[16px] md:text-[18px] tracking-wide uppercase font-medium pb-3 px-0 text-neutral-gray-700 data-active:text-primary data-active:font-bold data-active:after:bg-primary"
                    >
                        FEMININO
                    </TabsTrigger>
                    <TabsTrigger
                        value="infantil"
                        className="text-[16px] md:text-[18px] tracking-wide uppercase font-medium pb-3 px-0 text-neutral-gray-700 data-active:text-primary data-active:font-bold data-active:after:bg-primary"
                    >
                        INFANTIL
                    </TabsTrigger>
                    <TabsTrigger
                        value="baby"
                        className="text-[16px] md:text-[18px] tracking-wide uppercase font-medium pb-3 px-0 text-neutral-gray-700 data-active:text-primary data-active:font-bold data-active:after:bg-primary"
                    >
                        BABY
                    </TabsTrigger>
                    <TabsTrigger
                        value="lifestyle"
                        className="text-[16px] md:text-[18px] tracking-wide uppercase font-medium pb-3 px-0 text-neutral-gray-700 data-active:text-primary data-active:font-bold data-active:after:bg-primary"
                    >
                        LIFESTYLE
                    </TabsTrigger>
                </TabsList>

                <TabsContent value="masculino">
                    <ProductCarousel />
                </TabsContent>

                <TabsContent value="feminino">
                    <ProductCarousel />
                </TabsContent>

                <TabsContent value="infantil">
                    <ProductCarousel />
                </TabsContent>

                <TabsContent value="baby">
                    <ProductCarousel />
                </TabsContent>

                <TabsContent value="lifestyle">
                    <ProductCarousel />
                </TabsContent>
            </Tabs>
        </section>
    )
}
