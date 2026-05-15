/** @format */

import { facebook_stats } from "@/utils/constants";
import { motion } from "framer-motion";
import { FacebookStats } from "./FacebookStats";
import { FacebookCTA } from "./FacebookCTA";

export function FacebookContent() {
    return (
        <>
            <h2 className="text-4xl font-display font-extrabold text-text-primary/80 sm:text-5xl">
                FANPAGE CHÍNH THỨC CỦA <span className="inline-block silver-text">NOVA STORE</span>
            </h2>
            <p className="text-base leading-relaxed text-text-primary">Theo dõi fanpage để cập nhật giá mới nhất, chương trình khuyến mãi và được hỗ trợ tư vấn trực tiếp từ đội ngũ của chúng tôi.</p>
            <FacebookStats stats={facebook_stats} />
            <FacebookCTA />
        </>
    );
}
