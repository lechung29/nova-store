/** @format */

import Link from "next/link";
import { footer_legal } from "@/utils/constants";

export function FooterBottom() {
    const currentYear = new Date().getFullYear();

    return (
        <div className="mx-auto! max-w-7xl border-t border-white/8 px-8! pt-6! pb-8! sm:px-12!">
            <div className="flex flex-col items-center justify-between gap-4 text-sm tracking-wider text-text-primary sm:flex-row">
                <p>© {currentYear} Nova Store Đà Nẵng.</p>

                <div className="flex items-center gap-4">
                    {footer_legal.map((item, index) => (
                        <div key={item.label} className="flex items-center gap-4">
                            <Link href={item.href} className="transition-colors hover:text-white">
                                {item.label}
                            </Link>
                            {index < footer_legal.length - 1 && <span>·</span>}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
