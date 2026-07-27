import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

const sizes = [33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44]

export function ShopBySize() {
    return (
        <section className="flex flex-col w-full pt-8 pb-10 items-center bg-neutral-gray-100">
            <h2 className="text-[20px] font-bold leading-tight tracking-wide uppercase mb-5 text-[#0C0C0C]">
                COMPRE POR TAMANHO
            </h2>

            <div className="w-full max-w-[274.93px] relative">
                <Carousel opts={{ align: "center", dragFree: true }} className="w-full">
                    <CarouselContent className="-ml-3.5">
                        {sizes.map((size) => (
                            <CarouselItem key={size} className="pl-[13.8px] basis-auto">
                                <button className="size-[58px] flex items-center justify-center rounded-full border-[1.5px] border-primary bg-transparent text-primary text-[20px] font-medium transition-colors hover:bg-primary hover:text-white">
                                    {size}
                                </button>
                            </CarouselItem>
                        ))}
                    </CarouselContent>

                    <CarouselPrevious className="size-6 absolute -left-9 top-1/2 -translate-y-1/2 bg-white text-primary hover:text-primary/50 border-none shadow-lg" />
                    <CarouselNext className="size-6 absolute -right-9 top-1/2 -translate-y-1/2 bg-white text-primary hover:text-primary/50 border-none shadow-lg" />
                </Carousel>
            </div>
        </section>
    )
}
