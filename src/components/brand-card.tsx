interface BrandCardProps {
    image: string;
    brandLogo: string;
    altText: string;
}

export function BrandCard({ image, brandLogo, altText }: BrandCardProps) {
    return (
        <div className="relative w-[154.52px] h-[213px] rounded-[16.1px] overflow-hidden group cursor-pointer">
            <img
                src={image}
                alt={altText}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-90 transition-opacity group-hover:opacity-100" />

            <div className="absolute inset-x-0 bottom-[17.17px] flex justify-center items-end z-10 px-6">
                <img
                    src={brandLogo}
                    alt={`${altText} logo`}
                    className="h-[41px] object-contain object-bottom"
                />
            </div>
        </div>
    );
}
