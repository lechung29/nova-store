/** @format */

import Link from "next/link";
import { Home, Search, PhoneCall } from "lucide-react";
import { BackgroundDecor } from "@/components/policy";

export default function NotFound() {
    return (
        <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden text-white px-4!">
            <BackgroundDecor />
            <div className="relative z-10 flex flex-col items-center text-center">
                <div className="relative mb-10!">
                    <div className="absolute inset-0 -m-6 rounded-[40px] border border-blue-500/10 animate-pulse" />
                    <div className="relative flex h-52 w-28 flex-col items-center justify-between rounded-[28px] border border-white/10 bg-[#111827] px-2! py-3! shadow-2xl">
                        <div className="h-1 w-10 rounded-full bg-white/20" />
                        <div className="flex flex-1 w-full my-2! flex-col items-center justify-center rounded-[18px] bg-[#0a0f1e] border border-white/5">
                            <span className="text-4xl font-extrabold text-blue-400">4</span>
                            <span className="text-4xl font-extrabold text-white">0</span>
                            <span className="text-4xl font-extrabold text-blue-400">4</span>
                        </div>
                        <div className="h-1 w-8 rounded-full bg-white/20" />
                    </div>
                    <div className="absolute -right-1 top-16 h-10 w-1 rounded-full bg-white/10" />
                    <div className="absolute -left-1 top-12 h-7 w-1 rounded-full bg-white/10" />
                    <div className="absolute -left-1 top-22 h-7 w-1 rounded-full bg-white/10" />
                </div>
                <div className="mb-2! inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4! py-1.5! text-xs font-medium tracking-widest text-white/70 uppercase">
                    Trang không tồn tại
                </div>

                <h1 className="mt-4! text-3xl font-extrabold tracking-tight sm:text-4xl">Oops! Lạc đường rồi</h1>
                <p className="mt-3! max-w-sm text-base leading-relaxed text-white/70">Đường dẫn bạn truy cập không hợp lệ hoặc đã bị xoá. Hãy quay lại trang chủ để tiếp tục mua sắm.</p>

                <div className="mt-8! flex flex-wrap items-center justify-center gap-3">
                    <Link href="/" className="inline-flex items-center gap-2 rounded-xl bg-blue-500 px-6! py-3! text-base font-semibold transition hover:bg-blue-400 active:scale-95">
                        <Home size={15} />
                        Về trang chủ
                    </Link>

                    <Link
                        href="/san-pham"
                        className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6! py-3! text-base font-semibold text-white/70 transition hover:border-white/20 hover:bg-white/10 active:scale-95"
                    >
                        <Search size={15} />
                        Xem sản phẩm
                    </Link>

                    <Link
                        href="/chinh-sach?lien-he=true"
                        className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6! py-3! text-base font-semibold text-white/70 transition hover:border-white/20 hover:bg-white/10 active:scale-95"
                    >
                        <PhoneCall size={15} />
                        Liên hệ hỗ trợ
                    </Link>
                </div>
            </div>
        </main>
    );
}
