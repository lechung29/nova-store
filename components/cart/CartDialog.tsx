/** @format */

import { ShoppingBag, X } from "lucide-react";
import { motion } from "framer-motion";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";
import { Button } from "../ui/button";
import { checkout_channels } from "@/utils/constants";

export function CheckoutDialog({ open, onOpenChange }: { open: boolean; onOpenChange: (v: boolean) => void }) {
    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent showCloseButton={false} className="rounded-2xl border border-white/10 bg-black/70 p-6! max-w-sm [&>button]:text-white/40 [&>button]:hover:text-white">
                <DialogHeader className="mb-2! w-full gap-3! text-center">
                    <div className="flex w-full items-center justify-between">
                        <div className="flex flex-1 items-center gap-3!">
                            <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/6">
                                <ShoppingBag size={22} className="text-white" />
                            </div>
                            <DialogTitle className="text-xl font-display font-black text-white">Đặt hàng ngay</DialogTitle>
                        </div>
                        <Button variant="ghost" size="icon" onClick={() => onOpenChange(false)} className="h-8! w-8! text-text-primary transition-all hover:bg-white/10 hover:text-white">
                            <X size={16} />
                        </Button>
                    </div>
                    <p className="text-sm font-normal leading-relaxed text-white/60">Liên hệ với chúng tôi qua kênh bên dưới để được tư vấn và xác nhận đơn hàng nhanh nhất.</p>
                </DialogHeader>

                <div className="flex gap-2.5!">
                    {checkout_channels.map(({ href, icon: Icon, label, iconSize }) => (
                        <motion.a
                            key={href}
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="flex flex-1 cursor-pointer items-center justify-center gap-2! rounded-2xl bg-blue-500 py-3! text-xs font-display font-bold text-white transition-colors hover:bg-blue-400"
                        >
                            <Icon size={iconSize} />
                            {label}
                        </motion.a>
                    ))}
                </div>
            </DialogContent>
        </Dialog>
    );
}
