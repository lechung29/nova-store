/** @format */

import { introduce_stats } from "@/utils/constants";

export function StatsSection() {
    return (
        <section className="mb-12!">
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                {introduce_stats.map((stat) => {
                    const Icon = stat.icon;
                    return (
                        <div key={stat.label} className="flex flex-col items-center gap-3 rounded-2xl border border-white/10 bg-[#111827]/80 py-3! px-4! text-center backdrop-blur-sm">
                            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500/15">
                                <Icon size={20} className="text-blue-400" />
                            </div>
                            <div>
                                <p className="text-2xl font-extrabold tracking-tight text-white">{stat.value}</p>
                                <p className="mt-0.5! text-sm text-white/60">{stat.label}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
