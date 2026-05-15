/** @format */

import { ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CartButtonProps {
    totalItems: number;
    onOpenCart: () => void;
}

export function CartButton({ totalItems, onOpenCart }: CartButtonProps) {
    return (
        <Button variant="ghost" size="icon" onClick={onOpenCart} className="relative text-text-primary hover:bg-transparent! hover:text-white">
            <ShoppingBag className="h-5! w-5!" />
            {totalItems > 0 && (
                <span className="absolute -right-0.5 -top-0.5 flex min-w-4.5 h-4.5 items-center justify-center rounded-full bg-text-primary/95 px-1 text-xs font-display font-bold text-white">
                    {totalItems}
                </span>
            )}
        </Button>
    );
}
