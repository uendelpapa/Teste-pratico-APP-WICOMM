import { useState } from "react";
import { Heart } from "lucide-react";
import { Button } from "./ui/button";
import { toast } from "sonner";
import { motion } from "framer-motion";

interface ProductCardProps {
    discount?: string;
    image: string;
    brand: string;
    title: string;
    oldPrice?: string;
    newPrice: string;
    clubPrice?: string;
    installments?: string;
    fees?: boolean;
    variant?: "sm" | "lg";
}

const variantStyles = {
    sm: {
        card: "w-[168.994px] rounded-[18.11px]",
        imageArea: "h-[156.169px] px-[13.5px] pt-[49.79px] pb-[29.42px]",
        discountBadge: "h-[15.843px]",
        discountText: "text-[10.562px] leading-[21.124px] tracking-[0.211px]",
        heartPosition: "right-4",
        heartSize: 18.861,
        content: "pt-[9.05px] pb-[9.07px] px-[9.05px]",
        header: "mb-[9.05px] gap-[3.02px]",
        brand: "text-[10px] tracking-[0.2px]",
        title: "text-xs tracking-[0.28px] leading-[15.089px]",
        priceGroup: "mb-[3.02px]",
        oldPrice: "text-[10px] font-semibold tracking-[0.2px] leading-[13.58px]",
        newPrice: "text-[15.089px] tracking-[0.302px] leading-[18.107px]",
        clubPrice: "text-[9.053px] leading-[16.598px] tracking-[0.181px]",
        installments: "text-[9.053px] leading-[16.598px] tracking-[0.181px]",
        button: "text-[10.562px] py-[5.83px] px-[27.94px] tracking-[0.211px] leading-[13.58px]",
    },
    lg: {
        card: "w-[224px] rounded-[24px]",
        imageArea: "h-[224px] px-[17px] pt-[66px] pb-[39px]",
        discountBadge: "h-[21px]",
        discountText: "text-[14px] leading-[28px] tracking-[0.28px]",
        heartPosition: "right-6",
        heartSize: 25,
        brand: "text-[12px] tracking-[0.24px]",
        title: "text-base tracking-[0.32px] leading-[20px]",
        content: "pt-3 pb-4 px-3",
        header: "mb-3 gap-[4px]",
        priceGroup: "mb-1",
        oldPrice: "text-[12px] font-normal tracking-[0.24px] leading-[18px]",
        newPrice: "text-[20px] tracking-[0.4px] leading-[24px]",
        clubPrice: "text-[12px] leading-[22px] tracking-[0.24px]",
        installments: "text-[12px] leading-[22px] tracking-[0.24px]",
        button: "text-[14px] py-[9px] px-[42px] tracking-[0.28px] leading-[18px]",
    },
} as const;

export function ProductCard({
    discount,
    image,
    brand,
    title,
    oldPrice,
    newPrice,
    clubPrice,
    installments,
    fees = false,
    variant = "sm",
}: ProductCardProps) {
    const [favorited, setFavorited] = useState(false);
    const s = variantStyles[variant];

    const handleFavorite = () => {
        const nextState = !favorited;
        setFavorited(nextState);
        if (nextState) {
            toast.success("Adicionado aos favoritos!", {
                description: title,
            });
        } else {
            toast.info("Removido dos favoritos", {
                description: title,
            });
        }
    };

    const handleBuy = () => {
        toast.success("Produto adicionado à sacola!", {
            description: `${title} - ${newPrice}`,
        });
    };

    return (
        <motion.div
            whileHover={{ y: -4 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className={`${s.card} flex flex-col bg-[#FAFAF8] overflow-hidden group`}
        >
            {/* Área da Imagem */}
            <div className={`relative w-full ${s.imageArea} bg-[#F6F6F6] flex`}>
                {discount && (
                    <div className={`absolute flex ${s.discountBadge} items-center justify-center top-4 left-3 px-[7.544px] bg-primary rounded-full z-10`}>
                        <span className={`${s.discountText} text-primary-foreground font-semibold uppercase`}>
                            {discount}
                        </span>
                    </div>
                )}

                <motion.button
                    whileTap={{ scale: 0.8 }}
                    whileHover={{ scale: 1.15 }}
                    onClick={handleFavorite}
                    className={`absolute top-4 ${s.heartPosition} text-neutral-gray-700 hover:text-primary transition-colors cursor-pointer z-10`}
                    aria-label="Adicionar aos favoritos"
                >
                    <Heart
                        size={s.heartSize}
                        strokeWidth={2}
                        className={`transition-all ${favorited ? "fill-primary text-primary" : "hover:fill-primary"}`}
                    />
                </motion.button>

                <motion.img
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    src={image}
                    alt={title}
                    className="w-full h-full object-contain mix-blend-multiply"
                />
            </div>

            {/* Detalhes do Produto */}
            <div className={`flex flex-col ${s.content}`}>
                <div className={`flex flex-col ${s.header}`}>
                    <span className={`${s.brand} text-neutral-gray-500 uppercase`}>
                        {brand}
                    </span>
                    <h3 className={`${s.title} text-ellipsis text-black line-clamp-2`}>
                        {title}
                    </h3>
                </div>

                <div className={`flex flex-col ${s.priceGroup}`}>
                    {oldPrice && (
                        <span className={`${s.oldPrice} text-neutral-gray-500 line-through`}>
                            {oldPrice}
                        </span>
                    )}
                    <span className={`${s.newPrice} font-semibold text-primary`}>
                        {newPrice}
                    </span>
                </div>

                <div className="flex flex-col mb-[9.05px]">
                    {clubPrice && (
                        <div className="flex items-center gap-1 mt-1">
                            <span className={`${s.clubPrice} text-acento-yellow-400`}>{clubPrice}</span>
                            <span className={`${s.clubPrice} text-neutral-gray-500`}>no Clube</span>
                        </div>
                    )}

                    {installments && (
                        <span className={`${s.installments} text-neutral-gray-500`}>
                            ou <strong>{installments}</strong> {fees ? "sem juros" : "com juros"}
                        </span>
                    )}
                </div>

                <motion.div whileTap={{ scale: 0.96 }} whileHover={{ scale: 1.02 }}>
                    <Button
                        size={variant}
                        onClick={handleBuy}
                        className={`${s.button} w-full font-bold text-white uppercase rounded-full cursor-pointer`}
                    >
                        COMPRAR AGORA
                    </Button>
                </motion.div>
            </div>
        </motion.div>
    );
}
