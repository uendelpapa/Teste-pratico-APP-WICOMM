import { motion } from "framer-motion"
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
        <div className="pt-6 relative">
            <Carousel
                opts={{
                    align: "start",
                    loop: true,
                }}
                className="w-full"
            >
                <CarouselContent className="-ml-3">
                    {mockProducts.map((product, index) => (
                        <CarouselItem key={index} className="pl-3 basis-auto">
                            <ProductCard {...product} />
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </div>
    );
}

export function DisplayWindow() {
    return (
        <section className="relative w-full py-9 px-4 overflow-hidden">
            <div className="absolute w-screen h-[90px] bg-neutral-gray-100 top-0 left-1/2 -translate-x-1/2 z-10" />
            <Tabs defaultValue="masculino" className="w-full relative">
                <TabsList
                    variant="line"
                    className="w-full justify-start gap-4 border-neutral-gray-900 overflow-x-auto no-scrollbar flex-nowrap cursor-grab active:cursor-grabbing z-20"
                >
                    <TabsTrigger
                        value="masculino"
                        className="text-[16px] md:text-[18px] tracking-wide uppercase font-medium pb-3 px-0 text-neutral-gray-900 data-active:text-primary data-active:font-bold data-active:after:bg-primary"
                    >
                        MASCULINO
                    </TabsTrigger>
                    <TabsTrigger
                        value="feminino"
                        className="text-[16px] md:text-[18px] tracking-wide uppercase font-medium pb-3 px-0 text-neutral-gray-900 data-active:text-primary data-active:font-bold data-active:after:bg-primary"
                    >
                        FEMININO
                    </TabsTrigger>
                    <TabsTrigger
                        value="infantil"
                        className="text-[16px] md:text-[18px] tracking-wide uppercase font-medium pb-3 px-0 text-neutral-gray-900 data-active:text-primary data-active:font-bold data-active:after:bg-primary"
                    >
                        INFANTIL
                    </TabsTrigger>
                    <TabsTrigger
                        value="baby"
                        className="text-[16px] md:text-[18px] tracking-wide uppercase font-medium pb-3 px-0 text-neutral-gray-900 data-active:text-primary data-active:font-bold data-active:after:bg-primary"
                    >
                        BABY
                    </TabsTrigger>
                    <TabsTrigger
                        value="lifestyle"
                        className="text-[16px] md:text-[18px] tracking-wide uppercase font-medium pb-3 px-0 text-neutral-gray-900 data-active:text-primary data-active:font-bold data-active:after:bg-primary"
                    >
                        LIFESTYLE
                    </TabsTrigger>
                </TabsList>

                <div className="absolute w-full h-[3px] bg-white mt-[34px] rounded-full z-10" />

                <TabsContent value="masculino">
                    <motion.div initial={{ opacity: 0, x: 15 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.3, ease: "easeOut" }}>
                        <ProductCarousel />
                    </motion.div>
                </TabsContent>

                <TabsContent value="feminino">
                    <motion.div initial={{ opacity: 0, x: 15 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.3, ease: "easeOut" }}>
                        <ProductCarousel />
                    </motion.div>
                </TabsContent>

                <TabsContent value="infantil">
                    <motion.div initial={{ opacity: 0, x: 15 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.3, ease: "easeOut" }}>
                        <ProductCarousel />
                    </motion.div>
                </TabsContent>

                <TabsContent value="baby">
                    <motion.div initial={{ opacity: 0, x: 15 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.3, ease: "easeOut" }}>
                        <ProductCarousel />
                    </motion.div>
                </TabsContent>

                <TabsContent value="lifestyle">
                    <motion.div initial={{ opacity: 0, x: 15 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.3, ease: "easeOut" }}>
                        <ProductCarousel />
                    </motion.div>
                </TabsContent>
            </Tabs>
        </section>
    )
}
