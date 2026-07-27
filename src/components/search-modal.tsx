import { Search } from "lucide-react";
import { useEffect, useRef } from "react";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";

interface SearchModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export function SearchModal({ isOpen, onClose }: SearchModalProps) {
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (isOpen) {
            setTimeout(() => inputRef.current?.focus(), 100);
        }
    }, [isOpen]);

    return (
        <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
            <DialogContent
                showCloseButton={true}
                className="rounded-2xl p-6 bg-white shadow-2xl border border-neutral-200"
            >
                <DialogHeader className="sr-only">
                    <DialogTitle>Pesquisar produtos</DialogTitle>
                </DialogHeader>

                <div className="flex items-center gap-3 pt-1 pr-8">
                    <Search size={22} strokeWidth={1.5} className="text-neutral-gray-700 shrink-0" />
                    <input
                        ref={inputRef}
                        type="text"
                        placeholder="O que você procura?"
                        className="flex-1 text-[16px] text-neutral-gray-900 placeholder:text-neutral-gray-500 outline-none bg-transparent font-medium"
                    />
                </div>

                <div className="h-px bg-neutral-200 my-2" />

                <div className="py-2">
                    <p className="text-[13px] font-medium text-neutral-gray-500 uppercase tracking-wider mb-4">
                        Pesquisas populares
                    </p>
                    <div className="flex flex-wrap gap-2">
                        {["Tênis", "Chinelos", "Sandálias", "Mizuno", "Sapatênis"].map((term) => (
                            <button
                                key={term}
                                onClick={onClose}
                                className="px-4 py-2 rounded-full border border-neutral-200 text-[13px] text-neutral-gray-700 hover:bg-primary hover:text-white hover:border-primary transition-all duration-200 cursor-pointer"
                            >
                                {term}
                            </button>
                        ))}
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
}
