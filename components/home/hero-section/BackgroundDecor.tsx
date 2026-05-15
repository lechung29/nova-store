/** @format */

import { motion } from "framer-motion";

interface BackgroundDecorProps {
    y: any;
}

export function BackgroundDecor({ y }: BackgroundDecorProps) {
    return (
        <motion.div style={{ y }} className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/4 left-1/4 h-150 w-150 rounded-full opacity-20 blur-[120px]">
                <div style={{ background: "radial-gradient(circle, #2997ff 0%, transparent 70%)" }} className="absolute inset-0" />
            </div>

            <div className="absolute bottom-1/4 right-1/4 h-125 w-125 rounded-full opacity-15 blur-[100px]">
                <div style={{ background: "radial-gradient(circle, #bf5af2 0%, transparent 70%)" }} className="absolute inset-0" />
            </div>

            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-100 w-200 opacity-10 blur-[120px]">
                <div style={{ background: "radial-gradient(ellipse, #6366f1 0%, transparent 70%)" }} className="absolute inset-0" />
            </div>
            <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage: `
                        linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)
                    `,
                    backgroundSize: "60px 60px",
                }}
            />
        </motion.div>
    );
}
