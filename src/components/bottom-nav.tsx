import { useState, useEffect, useRef } from "react"
import { Home, ShoppingBag, CreditCard, Wallet, User } from "lucide-react"

const navItems = [
    { id: "home", icon: Home, label: "Início" },
    { id: "bag", icon: ShoppingBag, label: "Sacola" },
    { id: "card", icon: CreditCard, label: "Cartão" },
    { id: "wallet", icon: Wallet, label: "Carteira" },
    { id: "profile", icon: User, label: "Perfil" },
]

export function BottomNav() {
    const [active, setActive] = useState("home")
    const [hidden, setHidden] = useState(false)
    const lastScrollY = useRef(0)

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY
            setHidden(currentScrollY > lastScrollY.current && currentScrollY > 80)
            lastScrollY.current = currentScrollY
        }

        window.addEventListener("scroll", handleScroll, { passive: true })
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <nav
            className={`fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-neutral-200 transition-transform duration-300 ${
                hidden ? "translate-y-full" : "translate-y-0"
            }`}
        >
            <div className="flex items-center justify-around h-[60px] max-w-lg mx-auto">
                {navItems.map((item) => {
                    const isActive = active === item.id
                    return (
                        <button
                            key={item.id}
                            onClick={() => setActive(item.id)}
                            className="flex flex-col items-center justify-center gap-0.5 w-full h-full transition-colors"
                            aria-label={item.label}
                        >
                            <item.icon
                                size={24}
                                strokeWidth={1.5}
                                className={isActive ? "text-primary fill-primary" : "text-neutral-gray-700"}
                                fill={isActive ? "currentColor" : "none"}
                            />
                        </button>
                    )
                })}
            </div>
        </nav>
    )
}
