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
        <SheetHeader className="flex-row! items-center justify-between shrink-0 space-y-0! border-b border-white/8 px-4! h-14 min-w-0 overflow-hidden">
            <div className="flex min-w-0 items-center gap-2">
                <ShoppingBag size={20} className="shrink-0 text-text-primary" />
                <SheetTitle className="text-base font-display font-bold leading-none text-text-primary">Giỏ hàng</SheetTitle>
                {totalQty > 0 && <span className="shrink-0 rounded-full bg-text-primary px-1.5! py-0.5! text-xs font-display font-bold leading-none text-white">{totalQty}</span>}
            </div>
            <div className="flex shrink-0 items-center gap-1">
                {itemsLength > 0 && (
                    <Button
                        variant="ghost"
                        size="sm"
                        onClick={onClearCart}
                        className="gap-1.5 bg-transparent! h-8 px-2! text-sm text-text-primary transition-colors hover:bg-white/10 hover:text-white"
                    >
                        <Trash2 size={15} />
                        <span className="inline">Xóa tất cả</span>
                    </Button>
                )}
                <Button variant="ghost" size="icon" onClick={onClose} className="h-8 w-8 shrink-0 text-text-primary transition-colors hover:bg-white/10 hover:text-white">
                    <X size={16} />
                </Button>
            </div>
        </SheetHeader>
    );
}
