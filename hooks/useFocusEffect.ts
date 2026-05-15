/** @format */

"use client";

import { useRef } from "react";
import { useSpring } from "framer-motion";

interface IUseFocusEffectOptions {
    maxAngle?: number;
    stiffness?: number;
    damping?: number;
}

export function useFocusEffect({ maxAngle = 14, stiffness = 280, damping = 22 }: IUseFocusEffectOptions = {}) {
    const ref = useRef<HTMLDivElement>(null);

    const rotateX = useSpring(0, { stiffness, damping });
    const rotateY = useSpring(0, { stiffness, damping });

    function onMouseMove(e: React.MouseEvent<HTMLDivElement>) {
        const el = ref.current;
        if (!el) return;

        const rect = el.getBoundingClientRect();
        const nx = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
        const ny = ((e.clientY - rect.top) / rect.height - 0.5) * 2;

        rotateY.set(nx * maxAngle);
        rotateX.set(-ny * maxAngle);
    }

    function onMouseLeave() {
        rotateX.set(0);
        rotateY.set(0);
    }

    return { ref, rotateX, rotateY, onMouseMove, onMouseLeave };
}
