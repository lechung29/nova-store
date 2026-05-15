/** @format */

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { formatVND } from "@/utils";

interface CartDrawerFooterProps {
    total: number;
    onClose: () => void;
}

export function CartDrawerFooter({ total, onClose }: CartDrawerFooterProps) {
    return (
        <div className="shrink-0 space-y-4! border-t border-text-primary/10 px-5! py-4!">
            <div className="flex items-center justify-between">
                <span className="text-base text-text-primary">Tạm tính</span>
                <span className="text-xl font-display font-bold text-text-primary">{formatVND(total)}</span>
            </div>
            <Link href="/gio-hang" onClick={onClose}>
                <Button className="gap-2 h-12 w-full rounded-2xl bg-white/90 text-lg font-display font-bold text-black shadow-lg shadow-text-primary/40 transition-colors hover:bg-text-primary hover:text-white/70">
                    Đặt hàng ngay
                    <ArrowRight size={16} />
                </Button>
            </Link>
        </div>
    );
}
