/** @format */

"use client";

import { Sheet, SheetContent } from "@/components/ui/sheet";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { useCartStore } from "@/store/cartStore";
import { getCartItemKey, getItemImage, getItemPrice } from "@/utils";
import type { CartItem } from "@/types";
import { CartDrawerHeader } from "./CartDrawerHeader";
import { CartDrawerEmpty } from "./CartDrawerEmpty";
import { CartDrawerItem } from "./CartDrawerItem";
import { CartDrawerFooter } from "./CarDrawerFooter";

export function CartDrawer() {
    const { items, isOpen, closeCart, removeItem, updateQuantity, getTotalPrice, clearCart } = useCartStore();

    const total = getTotalPrice();
    const totalQty = items.reduce((sum, item) => sum + item.quantity, 0);

    const handleRemoveItem = (item: CartItem) => {
        removeItem(item.product.id, item.selectedColor.name, item.selectedStorage);
    };

    const handleDecrementQuantity = (item: CartItem) => {
        if (item.quantity === 1) {
            handleRemoveItem(item);
        } else {
            updateQuantity(item.product.id, item.selectedColor.name, item.selectedStorage, item.quantity - 1);
        }
    };

    const handleIncrementQuantity = (item: CartItem) => {
        updateQuantity(item.product.id, item.selectedColor.name, item.selectedStorage, item.quantity + 1);
    };

    return (
        <Sheet open={isOpen} onOpenChange={(open) => !open && closeCart()}>
            <SheetContent showCloseButton={false} side="right" className="flex max-h-screen w-[88%]! max-w-md! flex-col overflow-x-hidden border-0! bg-black/90 p-0!">
                <CartDrawerHeader totalQty={totalQty} itemsLength={items.length} onClearCart={clearCart} onClose={closeCart} />
                {items.length === 0 ? (
                    <CartDrawerEmpty onClose={closeCart} />
                ) : (
                    <ScrollArea className="flex-1 overflow-y-hidden px-4! py-3!">
                        <div className="flex flex-col gap-3">
                            {items.map((item) => (
                                <CartDrawerItem
                                    key={getCartItemKey(item)}
                                    item={item}
                                    itemPrice={getItemPrice(item)}
                                    itemImage={getItemImage(item)}
                                    onRemove={() => handleRemoveItem(item)}
                                    onDecrement={() => handleDecrementQuantity(item)}
                                    onIncrement={() => handleIncrementQuantity(item)}
                                />
                            ))}
                        </div>
                        <ScrollBar />
                    </ScrollArea>
                )}
                {items.length > 0 && <CartDrawerFooter total={total} onClose={closeCart} />}
            </SheetContent>
        </Sheet>
    );
}
