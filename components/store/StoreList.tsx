/** @format */

import { IStoreInfo } from "@/types";
import { MapPin, Phone, Search } from "lucide-react";
import type { MutableRefObject } from "react";

interface StoreListProps {
    stores: IStoreInfo[];
    filtered: IStoreInfo[];
    activeIdx: number;
    query: string;
    onQuery: (q: string) => void;
    onSelect: (idx: number) => void;
    activeItemRef: MutableRefObject<HTMLDivElement | null>;
}

export function StoreList({ stores, filtered, activeIdx, query, onQuery, onSelect, activeItemRef }: StoreListProps) {
    return (
        <div className="flex w-full flex-col border-b border-white/10 lg:w-85 lg:border-b-0 lg:border-r">
            <div className="border-b border-white/10 px-4! py-3!">
                <div className="relative">
                    <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30" />
                    <input
                        type="text"
                        value={query}
                        onChange={(e) => onQuery(e.target.value)}
                        placeholder="Tìm theo tên hoặc thành phố..."
                        className="w-full rounded-xl border border-white/10 bg-white/5 py-2.5! pl-9! pr-3! text-base text-white placeholder:text-white/25 focus:border-blue-500/50 focus:outline-none focus:ring-1 focus:ring-blue-500/30 transition"
                    />
                </div>
            </div>
            <div className="px-4! pb-2! pt-3! text-xs font-semibold uppercase tracking-widest text-white/50">{filtered.length} cửa hàng</div>

            <div className="flex-1 overflow-y-auto" style={{ maxHeight: 500 }}>
                {filtered.length === 0 && (
                    <div className="flex flex-col items-center justify-center py-16! text-white/20">
                        <MapPin size={28} className="mb-2! opacity-40" />
                        <p className="text-[13px]">Không tìm thấy cửa hàng</p>
                    </div>
                )}

                {filtered.map((store) => {
                    const origIdx = stores.indexOf(store);
                    const isActive = origIdx === activeIdx;

                    return (
                        <div
                            key={store.name}
                            ref={isActive ? activeItemRef : null}
                            onClick={() => onSelect(origIdx)}
                            className={`cursor-pointer border-b border-white/5 px-4! py-4! transition-all ${
                                isActive ? "border-l-[3px] border-l-blue-500 bg-blue-500/10" : "border-l-[3px] border-l-transparent hover:bg-white/5"
                            }`}
                        >
                            <div className="mb-1.5! flex items-start justify-between gap-2">
                                <span className={`text-base font-semibold leading-snug ${isActive ? "text-blue-400" : "text-white/90"}`}>{store.name}</span>
                                {store.isNew && <span className="shrink-0 rounded-full bg-blue-500/20 px-2! py-0.5! text-sm font-semibold text-blue-400">Mới</span>}
                            </div>

                            <div className="mb-1! flex items-start gap-1.5">
                                <MapPin size={12} className="mt-0.5! shrink-0 text-white/70" />
                                <span className="text-sm leading-relaxed text-white/80">{store.address}</span>
                            </div>

                            <div className="flex items-center gap-1.5">
                                <Phone size={12} className="shrink-0 text-white/70" />
                                <a href={`tel:${store.phone.replace(/\s/g, "")}`} onClick={(e) => e.stopPropagation()} className="text-sm text-blue-400 hover:underline">
                                    {store.phone}
                                </a>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
