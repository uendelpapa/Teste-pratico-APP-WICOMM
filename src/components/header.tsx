import { Search, ShoppingBag } from "lucide-react";
import { Button } from "./ui/button";

interface NotificationProps {
    count: number;
}

const notifications: NotificationProps = {
    count: 1,
}

export function Header() {
    return (
        <header className="flex w-full h-17 shrink-0 justify-between items-center bg-white pl-6 pr-4 py-3 gap-2">
            <Button
                variant="ghost"
                size="icon"
            >
                <Search strokeWidth={1} />
            </Button>

            <img
                className="invert w-[161.25px] h-[23.8px]"
                src="/logo.png"
                alt="Logotipo DI SANTINNI"
            />

            <Button
                className="relative"
                variant="ghost"
                size="icon"
            >
                <ShoppingBag strokeWidth={1} />
                {notifications &&
                    <div className="flex items-center justify-center size-3.25 absolute top-1 right-1 bg-red-700 text-white text-[10px] rounded-full">
                        <span className="text-center leading-0">{notifications.count}</span>
                    </div>
                }
            </Button>
        </header>
    )
}
