/** @format */

import { Minus, Plus, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { formatVND } from "@/utils";
import type { CartItem } from "@/types";

interface CartDrawerItemProps {
    item: CartItem;
    itemPrice: number;
    itemImage?: { url: string; alt: string };
    onRemove: () => void;
    onDecrement: () => void;
    onIncrement: () => void;
}

export function CartDrawerItem({ item, itemPrice, itemImage, onRemove, onDecrement, onIncrement }: CartDrawerItemProps) {
    return (
        <div className="flex gap-3 rounded-2xl bg-transparent! p-3! transition-colors duration-150 hover:bg-text-primary/10!">
            <div className="flex h-full w-20 shrink-0 items-center justify-center rounded-xl border border-black/5 bg-transparent shadow-sm">
                <img src={itemImage?.url ?? ""} alt={itemImage?.alt} className="w-full object-contain" />
            </div>

            <div className="flex flex-1 min-w-0 flex-col justify-between py-0.5!">
                <div className="flex items-start justify-between gap-2">
                    <div className="min-w-0">
                        <p className="truncate text-base font-semibold leading-tight text-text-primary">{item.product.name}</p>
                        <div className="mt-1! flex items-center gap-1.5">
                            <span className="h-2.5 w-2.5 shrink-0 rounded-full border border-black/10" style={{ background: item.selectedColor.hex }} />
                            <span className="text-sm text-text-primary/90">
                                {item.selectedColor.name} · {item.selectedStorage}
                            </span>
                        </div>
                    </div>
                    <Button variant="ghost" size="icon" onClick={onRemove} className="shrink-0 bg-transparent! p-1! text-text-primary transition-colors hover:bg-transparent! hover:text-red-500">
                        <Trash2 size={16} />
                    </Button>
                </div>
                <div className="mt-2! flex items-center justify-between">
                    <span className="text-sm font-display font-bold text-text-primary">{formatVND(itemPrice * item.quantity)}</span>
                    <div className="flex items-center gap-1 rounded-xl border border-white/10 bg-white/8 px-1! py-0.5!">
                        <Button variant="ghost" size="icon" onClick={onDecrement} className="h-6 w-6 rounded-lg bg-transparent! text-text-primary transition-colors hover:bg-white/15 hover:text-white">
                            <Minus size={11} />
                        </Button>
                        <span className="min-w-5 text-center font-display text-xs font-bold tabular-nums text-text-primary">{item.quantity}</span>
                        <Button variant="ghost" size="icon" onClick={onIncrement} className="h-6 w-6 rounded-lg bg-transparent! text-text-primary transition-colors hover:bg-white/15 hover:text-white">
                            <Plus size={11} />
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
