/** @format */

import { motion } from "framer-motion";
import Image from "next/image";

interface Photo {
    id: string;
    image: string;
    alt: string;
}

interface CustomerPhotoCardProps {
    photo: Photo;
    cardWidth: number;
}

export function CustomerPhotoCard({ photo, cardWidth }: CustomerPhotoCardProps) {
    return (
        <motion.div whileHover={{ scale: 1.02, y: -4 }} className="relative shrink-0 overflow-hidden rounded-2xl border-6 border-text-primary/50 shadow-lg transition-all" style={{ width: cardWidth }}>
            <div className="relative h-64 w-full overflow-hidden rounded-lg">
                <Image src={photo.image} alt={photo.alt} fill className="object-cover transition-transform duration-300 select-none" sizes={`${cardWidth}px`} />
            </div>
        </motion.div>
    );
}
