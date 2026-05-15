/** @format */

import { ShoppingBag, Trash2, X } from "lucide-react";
import { SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

interface CartDrawerHeaderProps {
    totalQty: number;
    itemsLength: number;
    onClearCart: () => void;
    onClose: () => void;
}

export function CartDrawerHeader({ totalQty, itemsLength, onClearCart, onClose }: CartDrawerHeaderProps) {
    return (
        <SheetHeader className="flex-row items-center justify-between shrink-0 space-y-0 border-b border-white/8 px-5! h-14">
            <div className="flex items-center gap-2.5">
                <ShoppingBag size={24} className="text-text-primary" />
                <SheetTitle className="text-xl font-display font-bold leading-none text-text-primary">Giỏ hàng</SheetTitle>
                {totalQty > 0 && <span className="rounded-full bg-text-primary px-2! py-1! text-xs font-display font-bold leading-none text-white">{totalQty}</span>}
            </div>
            <div className="flex items-center gap-1">
                {itemsLength > 0 && (
                    <Button
                        variant="ghost"
                        size="sm"
                        onClick={onClearCart}
                        className="gap-1.5 bg-transparent! h-8 px-2.5! text-sm text-text-primary transition-colors hover:bg-white/10 hover:text-white"
                    >
                        <Trash2 size={16} />
                        Xóa tất cả
                    </Button>
                )}
                <Button variant="ghost" size="icon" onClick={onClose} className="h-8 w-8 text-text-primary transition-colors hover:bg-white/10 hover:text-white">
                    <X size={16} />
                </Button>
            </div>
        </SheetHeader>
    );
}
