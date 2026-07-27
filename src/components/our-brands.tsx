import { motion } from "framer-motion"
import { ProductCard } from "./product-card"
import ImgTenis from "@/assets/shoes.png"
import BannerOlympikus from "@/assets/brands/banner-olympikus.jpg"
import BannerKenner from "@/assets/brands/banner-kenner.jpg"
import BannerConverse from "@/assets/brands/banner-converse.jpg"
import BannerMizuno from "@/assets/banner-mizuno.png"
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

interface BrandData {
    name: string
    banner: string
    products: {
        discount?: string
        image: string
        brand: string
        title: string
        oldPrice?: string
        newPrice: string
        clubPrice?: string
        installments?: string
        fees?: boolean
    }[]
}

const brandsData: BrandData[] = [
    {
        name: "MIZUNO",
        banner: BannerMizuno, // placeholder
        products: [
            {
                discount: "-20%",
                image: ImgTenis,
                brand: "MIZUNO",
                title: "Tênis Mizuno Wave Endeavor 3",
                oldPrice: "R$ 799,00",
                newPrice: "R$ 499,90",
                clubPrice: "R$ 399,00",
                installments: "5x de R$ 100,00",
                fees: true
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
                fees: true
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
                fees: true
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
                fees: true
            },
        ]
    },
    {
        name: "ADIDAS",
        banner: BannerConverse,
        products: [
            {
                discount: "-15%",
                image: ImgTenis,
                brand: "ADIDAS",
                title: "Tênis Adidas Ultraboost 22",
                oldPrice: "R$ 999,00",
                newPrice: "R$ 849,90",
                clubPrice: "R$ 749,00",
                installments: "5x de R$ 169,98",
                fees: true
            },
            {
                discount: "-15%",
                image: ImgTenis,
                brand: "ADIDAS",
                title: "Tênis Adidas Ultraboost 22",
                oldPrice: "R$ 999,00",
                newPrice: "R$ 849,90",
                clubPrice: "R$ 749,00",
                installments: "5x de R$ 169,98",
                fees: true
            },
            {
                discount: "-15%",
                image: ImgTenis,
                brand: "ADIDAS",
                title: "Tênis Adidas Ultraboost 22",
                oldPrice: "R$ 999,00",
                newPrice: "R$ 849,90",
                clubPrice: "R$ 749,00",
                installments: "5x de R$ 169,98",
                fees: true
            },
        ]
    },
    {
        name: "OLYMPIKUS",
        banner: BannerOlympikus,
        products: [
            {
                discount: "-30%",
                image: ImgTenis,
                brand: "OLYMPIKUS",
                title: "Tênis Olympikus Corre 3",
                oldPrice: "R$ 399,00",
                newPrice: "R$ 279,90",
                clubPrice: "R$ 249,00",
                installments: "5x de R$ 55,98",
                fees: true
            },
            {
                discount: "-30%",
                image: ImgTenis,
                brand: "OLYMPIKUS",
                title: "Tênis Olympikus Corre 3",
                oldPrice: "R$ 399,00",
                newPrice: "R$ 279,90",
                clubPrice: "R$ 249,00",
                installments: "5x de R$ 55,98",
                fees: true
            },
            {
                discount: "-30%",
                image: ImgTenis,
                brand: "OLYMPIKUS",
                title: "Tênis Olympikus Corre 3",
                oldPrice: "R$ 399,00",
                newPrice: "R$ 279,90",
                clubPrice: "R$ 249,00",
                installments: "5x de R$ 55,98",
                fees: true
            },
        ]
    },
    {
        name: "FILA",
        banner: BannerKenner,
        products: [
            {
                discount: "-25%",
                image: ImgTenis,
                brand: "FILA",
                title: "Tênis Fila Racer T",
                oldPrice: "R$ 499,00",
                newPrice: "R$ 374,90",
                clubPrice: "R$ 349,00",
                installments: "5x de R$ 74,98",
                fees: true
            },
            {
                discount: "-25%",
                image: ImgTenis,
                brand: "FILA",
                title: "Tênis Fila Racer T",
                oldPrice: "R$ 499,00",
                newPrice: "R$ 374,90",
                clubPrice: "R$ 349,00",
                installments: "5x de R$ 74,98",
                fees: true
            },
        ]
    },
    {
        name: "KENNER",
        banner: BannerKenner,
        products: [
            {
                discount: "-10%",
                image: ImgTenis,
                brand: "KENNER",
                title: "Sandália Kenner Kivah",
                oldPrice: "R$ 299,00",
                newPrice: "R$ 269,90",
                clubPrice: "R$ 239,00",
                installments: "5x de R$ 53,98",
                fees: true
            },
            {
                discount: "-10%",
                image: ImgTenis,
                brand: "KENNER",
                title: "Sandália Kenner Kivah",
                oldPrice: "R$ 299,00",
                newPrice: "R$ 269,90",
                clubPrice: "R$ 239,00",
                installments: "5x de R$ 53,98",
                fees: true
            },
        ]
    },
]

export function OurBrands() {
    return (
        <section className="flex flex-col w-full overflow-hidden bg-primary">
            <Tabs defaultValue="MIZUNO" className="w-full gap-0">
                {/* Cabeçalho vermelho com título e abas */}
                <div className="bg-primary px-4 pt-8 mb-[28px]">
                    <h2 className="text-white text-[22px] font-semibold leading-7 tracking-[0.48px] uppercase mb-6">
                        NOSSAS MARCAS
                    </h2>
                    <TabsList
                        variant="line"
                        className="w-full justify-start gap-6 border-white overflow-x-auto no-scrollbar flex-nowrap cursor-grab active:cursor-grabbing"
                    >
                        {brandsData.map((brand) => (
                            <TabsTrigger
                                key={brand.name}
                                value={brand.name}
                                className="text-[14px] tracking-wide uppercase font-medium pb-2 px-0 text-white/70 data-active:text-white data-active:font-bold data-active:after:bg-black"
                            >
                                {brand.name}
                            </TabsTrigger>
                        ))}
                    </TabsList>
                    <div className="w-full h-0.5 bg-white -mt-[2px]" />
                </div>

                {/* Conteúdo das abas */}
                {brandsData.map((brand) => (
                    <TabsContent key={brand.name} value={brand.name} className="mt-0">
                        <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.35, ease: "easeOut" }}
                        >
                            {/* Banner da marca */}
                            <div className="w-full px-4 pt-4">
                                <div className="w-full h-[296px] rounded-[24px] overflow-hidden">
                                    <img
                                        src={brand.banner}
                                        alt={`Banner ${brand.name}`}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>

                            {/* Carrossel de produtos */}
                            <div className="pl-4 pt-5 pb-[38px]">
                                <Carousel opts={{ align: "start", dragFree: true }} className="w-full">
                                    <CarouselContent className="-ml-[14px] pt-1">
                                        {brand.products.map((product, index) => (
                                            <CarouselItem key={index} className="pl-[14px] basis-auto">
                                                <ProductCard variant="lg" {...product} />
                                            </CarouselItem>
                                        ))}
                                    </CarouselContent>
                                </Carousel>
                            </div>
                        </motion.div>
                    </TabsContent>
                ))}
            </Tabs>
        </section>
    )
}
