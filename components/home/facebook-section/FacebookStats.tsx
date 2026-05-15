/** @format */

interface FacebookStatsProps {
    stats: readonly { value: string; label: string }[];
}

export function FacebookStats({ stats }: FacebookStatsProps) {
    return (
        <div className="flex flex-wrap items-center justify-center gap-6 tracking-wide lg:justify-start">
            {stats.map(({ value, label }) => (
                <div key={label}>
                    <p className="text-xl font-display font-bold text-white">{value}</p>
                    <p className="mt-0.5! text-base text-text-primary">{label}</p>
                </div>
            ))}
        </div>
    );
}
