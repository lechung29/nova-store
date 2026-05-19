/** @format */

import { ShieldCheck, RefreshCcw, Truck, BadgeCheck } from "lucide-react";

const commits = [
    { icon: RefreshCcw, title: "Đổi trả 7 ngày", desc: "1 đổi 1 trong vòng 7 ngày với lỗi từ nhà sản xuất." },
    { icon: ShieldCheck, title: "Bảo hành 12 tháng", desc: "Bảo hành chính hãng, hỗ trợ sửa chữa tận nơi." },
    { icon: Truck, title: "Miễn phí vận chuyển", desc: "Freeship toàn quốc cho đơn hàng từ 5 triệu." },
    { icon: BadgeCheck, title: "100% chính hãng", desc: "Cam kết sản phẩm chính hãng, có hóa đơn VAT." },
];

export function CommitSection() {
    return (
        <section className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#111827]/80 px-8! py-12! shadow-2xl backdrop-blur-sm">
            <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-blue-500/10 blur-[80px]" />

            <div className="mb-8! flex items-center gap-3">
                <div className="h-5 w-1 rounded-full bg-blue-400" />
                <h2 className="text-sm font-bold uppercase tracking-widest text-blue-400">Cam kết của Nova Store</h2>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {commits.map((c) => {
                    const Icon = c.icon;
                    return (
                        <div key={c.title} className="flex flex-col gap-3">
                            <div className="flex items-center gap-3">
                                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500/15">
                                    <Icon size={20} className="text-blue-400" />
                                </div>
                                <p className="text-base font-bold text-white">{c.title}</p>
                            </div>

                            <div>
                                <p className="mt-1! text-sm leading-relaxed text-white/80">{c.desc}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
