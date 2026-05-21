/** @format */

import Image from "next/image";
import { Info } from "lucide-react";
import { introduce_shop_info } from "@/utils/constants";

export const NOVA_LOGO = <img src="/logo.jpg" alt="Nova logo" className="w-full object-contain" />;

export function HeroSection() {
    return (
        <section className="mb-12!">
            <div className="mb-8! inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5! py-2! text-sm font-medium tracking-widest text-white/70 uppercase backdrop-blur-sm">
                <Info size={13} className="text-blue-400" />
                Giới thiệu về Nova Store
            </div>
            <div className="flex flex-col gap-8 rounded-2xl border border-white/10 bg-[#111827]/80 p-8! backdrop-blur-sm shadow-2xl lg:flex-row lg:items-start lg:gap-12">
                <div className="flex shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/5 p-8! lg:w-64 lg:h-48">
                    <div className="flex flex-col items-center gap-2">
                        <div className="flex h-20 w-20 items-center justify-center rounded-full overflow-hidden bg-blue-500/20">
                            {NOVA_LOGO}
                        </div>
                        <span className="silver-text text-xl! font-extrabold! tracking-tight!">
                            NOVA<span className="text-blue-400"> STORE</span>
                        </span>
                        <span className="text-xs font-medium uppercase tracking-widest text-white/60">Đà Nẵng</span>
                    </div>
                </div>

                <div className="flex-1">
                    <p className="mb-1! text-xs font-semibold uppercase tracking-widest text-blue-400">Hộ kinh doanh</p>
                    <h1 className="mb-6! text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
                        Nova Store <span className="text-blue-400">Đà Nẵng</span>
                    </h1>

                    <div className="space-y-4!">
                        {introduce_shop_info.map((row) => {
                            const Icon = row.icon;
                            return (
                                <div key={row.label} className="flex items-start gap-3">
                                    <div className="mt-0.5! flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-blue-500/15">
                                        <Icon size={16} className="text-blue-400" />
                                    </div>
                                    <div>
                                        <span className="text-sm font-semibold text-white/70">{row.label}: </span>
                                        <span className="text-base leading-relaxed text-white/80">
                                            {row.highlight
                                                ? row.value
                                                      .replace(row.highlight, `@@${row.highlight}@@`)
                                                      .split("@@")
                                                      .map((part, i) =>
                                                          part === row.highlight ? (
                                                              <strong key={i} className="font-bold text-white">
                                                                  {part}
                                                              </strong>
                                                          ) : (
                                                              part
                                                          ),
                                                      )
                                                : row.value}
                                        </span>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
