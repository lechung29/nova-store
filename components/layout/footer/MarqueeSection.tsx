/** @format */

interface MarqueeSectionProps {
    items: readonly string[];
}

export function MarqueeSection({ items }: MarqueeSectionProps) {
    const repeatedItems = [...items, ...items, ...items, ...items];

    return (
        <div className="overflow-hidden border-b border-white/8 py-3!">
            <div className="mx-auto! max-w-7xl">
                <div className="flex whitespace-nowrap" style={{ animation: "marquee 30s linear infinite" }}>
                    {repeatedItems.map((item, index) => (
                        <span key={index} className="mx-4! inline-flex items-center gap-4 font-display text-sm text-text-primary">
                            {item}
                            <span className="h-1 w-1 rounded-full bg-white/40" />
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}
