import { cn } from "@/lib/utils";

interface CategoryCardProps {
    image: string;
    title: string;
    className?: string;
}

export function CategoryCard({ image, title, className }: CategoryCardProps) {
    return (
        <div className={cn("relative w-[163.2px] h-[259.5px] rounded-[15.008px] overflow-hidden group cursor-pointer", className)}>
            <img
                src={image}
                alt={title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity" />

            <div className="absolute ml-3 bottom-3 flex justify-center">
                <div className="bg-white text-primary font-semibold text-sm px-[14.22px] py-[5.71px] rounded-full shadow-md uppercase leading-[18.826px] tracking-[0.28px] transition-transform group-hover:-translate-y-1">
                    {title}
                </div>
            </div>
        </div>
    );
}
