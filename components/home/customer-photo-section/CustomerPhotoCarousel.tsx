/** @format */

import { motion } from "framer-motion";
import { animation_ease } from "@/utils/constants";
import { CustomerPhotoCard } from "./CustomerPhotoCard";

interface Photo {
    id: string;
    image: string;
    alt: string;
}

interface CustomerPhotosCarouselProps {
    photos: Photo[];
    cardWidth: number;
    step: number;
    gap: number;
    maxIndex: number;
    currentIndex: number;
    onDragEnd: (offset: number) => void;
}

export function CustomerPhotosCarousel({ photos, cardWidth, step, gap, maxIndex, currentIndex, onDragEnd }: CustomerPhotosCarouselProps) {
    return (
        <div className="cursor-grab overflow-hidden active:cursor-grabbing">
            <motion.div
                drag="x"
                dragConstraints={{ left: -(maxIndex * step), right: 0 }}
                dragElastic={0.06}
                animate={{ x: -(currentIndex * step) }}
                transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                    ease: animation_ease,
                }}
                onDragEnd={(_, info) => onDragEnd(info.offset.x)}
                className="flex select-none!"
                style={{ gap, width: photos.length * step - gap }}
            >
                {photos.map((photo) => (
                    <CustomerPhotoCard key={photo.id} photo={photo} cardWidth={cardWidth} />
                ))}
            </motion.div>
        </div>
    );
}
