import { ProductCard } from "./product-card"
import ImgTenis from "@/assets/shoes.png"
import BannerOlympikus from "@/assets/brands/banner-olympikus.jpg"
import BannerKenner from "@/assets/brands/banner-kenner.jpg"
import BannerConverse from "@/assets/brands/banner-converse.jpg"
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
    }[]
}

const brandsData: BrandData[] = [
    {
        name: "MIZUNO",
        banner: BannerOlympikus, // placeholder
        products: [
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
                installments: "ou 5x de R$ 169,98 sem juros"
            },
            {
                discount: "-15%",
                image: ImgTenis,
                brand: "ADIDAS",
                title: "Tênis Adidas Ultraboost 22",
                oldPrice: "R$ 999,00",
                newPrice: "R$ 849,90",
                clubPrice: "R$ 749,00",
                installments: "ou 5x de R$ 169,98 sem juros"
            },
            {
                discount: "-15%",
                image: ImgTenis,
                brand: "ADIDAS",
                title: "Tênis Adidas Ultraboost 22",
                oldPrice: "R$ 999,00",
                newPrice: "R$ 849,90",
                clubPrice: "R$ 749,00",
                installments: "ou 5x de R$ 169,98 sem juros"
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
                installments: "ou 5x de R$ 55,98 sem juros"
            },
            {
                discount: "-30%",
                image: ImgTenis,
                brand: "OLYMPIKUS",
                title: "Tênis Olympikus Corre 3",
                oldPrice: "R$ 399,00",
                newPrice: "R$ 279,90",
                clubPrice: "R$ 249,00",
                installments: "ou 5x de R$ 55,98 sem juros"
            },
            {
                discount: "-30%",
                image: ImgTenis,
                brand: "OLYMPIKUS",
                title: "Tênis Olympikus Corre 3",
                oldPrice: "R$ 399,00",
                newPrice: "R$ 279,90",
                clubPrice: "R$ 249,00",
                installments: "ou 5x de R$ 55,98 sem juros"
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
                installments: "ou 5x de R$ 74,98 sem juros"
            },
            {
                discount: "-25%",
                image: ImgTenis,
                brand: "FILA",
                title: "Tênis Fila Racer T",
                oldPrice: "R$ 499,00",
                newPrice: "R$ 374,90",
                clubPrice: "R$ 349,00",
                installments: "ou 5x de R$ 74,98 sem juros"
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
                installments: "ou 5x de R$ 53,98 sem juros"
            },
            {
                discount: "-10%",
                image: ImgTenis,
                brand: "KENNER",
                title: "Sandália Kenner Kivah",
                oldPrice: "R$ 299,00",
                newPrice: "R$ 269,90",
                clubPrice: "R$ 239,00",
                installments: "ou 5x de R$ 53,98 sem juros"
            },
        ]
    },
]

export function OurBrands() {
    return (
        <section className="flex flex-col w-full overflow-hidden bg-primary">
            <Tabs defaultValue="MIZUNO" className="w-full gap-0">
                {/* Cabeçalho vermelho com título e abas */}
                <div className="bg-primary px-4 pt-8 pb-0">
                    <h2 className="text-white text-[22px] font-bold leading-tight tracking-wide uppercase mb-6">
                        NOSSAS MARCAS
                    </h2>
                    <TabsList
                        variant="line"
                        className="w-full justify-start gap-6 border-b border-white/30 h-auto pb-0 bg-transparent"
                    >
                        {brandsData.map((brand) => (
                            <TabsTrigger
                                key={brand.name}
                                value={brand.name}
                                className="text-[14px] tracking-wide uppercase font-medium pb-3 px-0 text-white/70 data-active:text-white data-active:font-bold data-active:after:bg-white"
                            >
                                {brand.name}
                            </TabsTrigger>
                        ))}
                    </TabsList>
                </div>

                {/* Conteúdo das abas */}
                {brandsData.map((brand) => (
                    <TabsContent key={brand.name} value={brand.name} className="mt-0">
                        {/* Banner da marca */}
                        <div className="w-full px-4 pt-4">
                            <div className="w-full h-[240px] rounded-2xl overflow-hidden">
                                <img
                                    src={brand.banner}
                                    alt={`Banner ${brand.name}`}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>

                        {/* Carrossel de produtos */}
                        <div className="pl-4 pt-6 pb-8">
                            <Carousel opts={{ align: "start", dragFree: true }} className="w-full">
                                <CarouselContent className="-ml-[14px]">
                                    {brand.products.map((product, index) => (
                                        <CarouselItem key={index} className="pl-[14px] basis-auto">
                                            <ProductCard {...product} />
                                        </CarouselItem>
                                    ))}
                                </CarouselContent>
                            </Carousel>
                        </div>
                    </TabsContent>
                ))}
            </Tabs>
        </section>
    )
}
