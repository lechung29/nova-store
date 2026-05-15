/** @format */

import { product_policies } from "@/utils/constants";

export function ProductPolicies() {
    return (
        <div className="grid grid-cols-3 gap-3">
            {product_policies.map(({ icon: Icon, label }) => (
                <div key={label} className="flex flex-col items-center gap-1.5 rounded-xl bg-white/10 p-3! text-center">
                    <Icon size={24} className="text-blue-600" />
                    <span className="text-sm leading-tight text-text-primary">{label}</span>
                </div>
            ))}
        </div>
    );
}
