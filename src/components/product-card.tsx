import { Heart } from "lucide-react";
import { Button } from "./ui/button";

interface ProductCardProps {
    discount?: string;
    image: string;
    brand: string;
    title: string;
    oldPrice?: string;
    newPrice: string;
    clubPrice?: string;
    installments?: string;
}

export function ProductCard({
    discount,
    image,
    brand,
    title,
    oldPrice,
    newPrice,
    clubPrice,
    installments,
}: ProductCardProps) {
    return (
        <div className="flex flex-col w-[168.994px] bg-[#FAFAF8] rounded-[18.11px] overflow-hidden">
            <div className="relative w-full h-[156.17px] bg-[#F6F6F6] flex items-center justify-center p-2">
                {discount && (
                    <div className="absolute flex h-[15.843px] items-center justify-center top-4 left-4 px-[7.544px] bg-primary rounded-full">
                        <span className="text-primary-foreground text-[10.562px] font-semibold leading-[21.124px] tracking-[0.211px] uppercase">
                            {discount}
                        </span>
                    </div>
                )}
                <button
                    className="absolute top-4 right-4 text-neutral-gray-700 hover:text-primary transition-colors"
                    aria-label="Adicionar aos favoritos"
                >
                    <Heart size={18.861} strokeWidth={1.5} />
                </button>
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-contain mix-blend-multiply"
                />
            </div>

            <div className="flex flex-col pt-[9.05px] pb-[9.07px] px-[9.05px]">
                <div className="flex flex-col mb-[9.05px] gap-[3.02px]">
                    <span className="text-[10px] text-neutral-gray-500 uppercase tracking-[0.2px]">
                        {brand}
                    </span>
                    <h3 className="text-xs text-ellipsis tracking-[0.28px] leading-[15.089px] text-black line-clamp-2">
                        {title}
                    </h3>
                </div>

                <div className="flex flex-col mb-[3.02px]">
                    {oldPrice && (
                        <span className="text-[10px] font-semibold text-neutral-gray-500 tracking-[0.2px] leading-[13.58px] line-through">
                            {oldPrice}
                        </span>
                    )}
                    <span className="text-[15.089px] font-semibold text-primary tracking-[0.302px] leading-[18.107px]">
                        {newPrice}
                    </span>
                </div>

                <div className="flex flex-col mb-[9.05px]">
                    {clubPrice && (
                        <div className="flex items-center gap-1 mt-1">
                            <span className="text-acento-yellow-400 text-[9.053px] leading-[16.598px] tracking-[0.181px]">{clubPrice}</span>
                            <span className="text-neutral-gray-500 text-[9.053px] leading-[16.598px] tracking-[0.181px]">no Clube</span>
                        </div>
                    )}

                    {installments && (
                        <span className="text-neutral-gray-500 text-[9.053px] leading-[16.598px] tracking-[0.181px]">
                            {installments}
                        </span>
                    )}
                </div>

                <Button size="sm" className="w-full font-bold text-white text-[10.562px] py-[5.83px] px-[27.94px] uppercase tracking-[0.211px] leading-[13.58px] rounded-full">
                    COMPRAR AGORA
                </Button>
            </div>
        </div>
    );
}
