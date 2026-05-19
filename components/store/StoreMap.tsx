/** @format */

import { IStoreInfo } from "@/types";
import { MapPin } from "lucide-react";;

interface StoreMapProps {
    store: IStoreInfo;
}

export function StoreMap({ store }: StoreMapProps) {
    return (
        <div className="relative flex-1">
            <iframe
                key={store.mapSrc}
                src={store.mapSrc}
                className="h-full min-h-100 w-full border-none lg:min-h-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`Bản đồ ${store.name}`}
            />

            <div className="absolute left-3 top-3 max-w-60 rounded-xl border border-white/10 bg-[#0d1321]/90 px-4! py-3! backdrop-blur-md shadow-lg">
                <div className="mb-1! flex items-center gap-1.5">
                    <MapPin size={14} className="text-blue-400 shrink-0" />
                    <p className="text-sm font-semibold text-white leading-tight">{store.name}</p>
                </div>
                <p className="text-xs text-white/70 pl-4.75!">{store.shortAddr}</p>
            </div>
        </div>
    );
}
