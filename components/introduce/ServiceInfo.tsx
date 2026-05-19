/** @format */

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { introduce_services } from "@/utils/constants";

export function ServiceInfo() {
    return (
        <section className="mb-12!">
            <div className="mb-6! flex items-center justify-between border-b border-white/10 pb-4!">
                <div className="flex items-center gap-3">
                    <div className="h-5 w-1 rounded-full bg-blue-400" />
                    <h2 className="text-sm font-bold uppercase tracking-widest text-blue-400">Sản phẩm và dịch vụ</h2>
                </div>
                <Link href="/san-pham" className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-white/70 transition hover:text-blue-400">
                    Xem tất cả sản phẩm
                    <ArrowRight size={13} />
                </Link>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
                {introduce_services.map((svc) => {
                    const Icon = svc.icon;
                    return (
                        <div
                            key={svc.title}
                            className="group relative overflow-hidden rounded-2xl border border-blue-500/20 bg-blue-600/10 px-7! py-8! text-center backdrop-blur-sm transition hover:border-blue-400/40 hover:bg-blue-600/20"
                        >
                            <div className="pointer-events-none absolute inset-0 rounded-2xl bg-blue-500/5 opacity-0 transition group-hover:opacity-100" />

                            <div className="mb-5! inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-blue-400/20 bg-blue-500/15">
                                <Icon size={26} className="text-blue-300" />
                            </div>
                            <h3 className="mb-2.5! text-base font-bold text-white">{svc.title}</h3>
                            <p className="text-sm leading-relaxed text-white/70">{svc.desc}</p>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
