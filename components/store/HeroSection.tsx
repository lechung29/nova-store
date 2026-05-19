/** @format */

import { MapPin } from "lucide-react";

export function HeroSection() {
    return (
        <section className="flex flex-col items-center text-center pb-10! pt-4!">
            <div className="mb-6! inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5! py-2! text-sm font-medium tracking-widest text-white/60 uppercase backdrop-blur-sm">
                <MapPin size={16} className="text-blue-400" />
                Hệ thống cửa hàng
            </div>

            <h1 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
                Tìm <span className="text-blue-400">cửa hàng</span>
            </h1>
            <p className="mt-4! max-w-lg text-base text-white/70">Ghé thăm trực tiếp — Trải nghiệm sản phẩm — Được hỗ trợ tận tình.</p>
        </section>
    );
}
