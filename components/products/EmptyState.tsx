/** @format */

import { motion } from "framer-motion";
import { LuSearch } from "react-icons/lu";

export function EmptyState() {
    return (
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col items-center justify-center py-24! text-center">
            <LuSearch className="mb-4! text-6xl" />
            <h3 className="mb-2! text-xl font-display font-bold text-white">Không tìm thấy sản phẩm</h3>
            <p className="text-sm text-text-primary">Thử thay đổi bộ lọc hoặc từ khóa tìm kiếm</p>
        </motion.div>
    );
}
