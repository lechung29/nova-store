/** @format */

import { ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CartDrawerEmptyProps {
    onClose: () => void;
}

export function CartDrawerEmpty({ onClose }: CartDrawerEmptyProps) {
    return (
        <div className="flex flex-1 flex-col items-center justify-center gap-4 px-6! text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-transparent!">
                <ShoppingBag size={64} className="text-text-primary" />
            </div>
            <p className="mt-1! text-base text-text-primary">Chưa có sản phẩm trong giỏ hàng</p>
            <Button onClick={onClose} className="mt-2! h-10 rounded-2xl bg-white/90 px-6! py-3! text-base text-black transition-colors hover:bg-text-primary hover:text-white/70">
                Tiếp tục mua sắm
            </Button>
        </div>
    );
}
