/** @format */

import categoryShowcase from "@/data/categoryshowcase.json";

interface CategoryCardFeaturesProps {
    category: (typeof categoryShowcase)[0];
}

export function CategoryCardFeatures({ category }: CategoryCardFeaturesProps) {
    return (
        <div className="flex items-end justify-between">
            <div className="flex flex-wrap gap-2">
                {category.features.map((feature) => (
                    <span
                        key={feature}
                        className="rounded-full px-2.5! py-1! text-sm font-display font-semibold"
                        style={{
                            background: `${category.accentColor}15`,
                            color: category.accentColor,
                            border: `1px solid ${category.accentColor}25`,
                        }}
                    >
                        {feature}
                    </span>
                ))}
            </div>
        </div>
    );
}
