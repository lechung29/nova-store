/** @format */

import { motion } from "framer-motion";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { FilterState } from "@/types";

interface SortDropdownProps {
    value: string;
    onSort: (value: FilterState["sortBy"]) => void;
    options: Readonly<Record<string, string>>;
}

export function SortDropdown({ value, onSort, options }: SortDropdownProps) {
    return (
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Select value={value} onValueChange={onSort}>
                <SelectTrigger className="w-auto rounded-xl border-white/10 bg-white/10 px-3! py-2.5! text-sm text-text-primary focus:border-text-primary/50 focus:ring-0">
                    <SelectValue />
                </SelectTrigger>
                <SelectContent position="popper" className="rounded-xl border-white/10 bg-black/80 text-white!">
                    {Object.entries(options).map(([val, label]) => (
                        <SelectItem key={val} value={val} className="cursor-pointer rounded-lg px-3! py-1.5! text-sm focus:bg-white/70 focus:text-white!">
                            {label}
                        </SelectItem>
                    ))}
                </SelectContent>
            </Select>
        </motion.div>
    );
}
