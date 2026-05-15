/** @format */

import { Grid3X3, LayoutList } from "lucide-react";

interface GridToggleProps {
    gridCols: number;
    onGridChange: (cols: 2 | 3) => void;
    options: readonly { value: 2 | 3; icon: "grid" | "list" }[];
}

export function GridToggle({ gridCols, onGridChange, options }: GridToggleProps) {
    return (
        <div className="hidden items-center gap-1 rounded-xl border border-white/10 bg-white/6 p-1! sm:flex">
            {options.map(({ value, icon }) => (
                <button
                    key={value}
                    onClick={() => onGridChange(value)}
                    className={`cursor-pointer rounded-lg p-1.5! transition-all ${gridCols === value ? "bg-white/15 text-white" : "text-text-primary hover:text-white"}`}
                >
                    {icon === "grid" ? <Grid3X3 size={15} /> : <LayoutList size={15} />}
                </button>
            ))}
        </div>
    );
}
