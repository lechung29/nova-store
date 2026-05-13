/** @format */

import { useState } from "react";
import { findVariant } from "@/utils";
import type { IProduct, IProductColor, IProductVariant } from "@/types";

interface ProductSelection {
    selectedColorIdx: number;
    selectedStorageIdx: number;
    selectedColor: IProductColor;
    selectedStorage: string;
    variant: IProductVariant | undefined;
    setSelectedColorIdx: (idx: number) => void;
    setSelectedStorageIdx: (idx: number) => void;
}

export function useProductSelection(product: IProduct): ProductSelection {
    const [selectedColorIdx, setSelectedColorIdx] = useState(0);
    const [selectedStorageIdx, setSelectedStorageIdx] = useState(0);

    const selectedColor = product.colors[selectedColorIdx];
    const selectedStorage = product.storage[selectedStorageIdx];
    const variant = findVariant(product.variants, selectedColor.name, selectedStorage);

    return {
        selectedColorIdx,
        selectedStorageIdx,
        selectedColor,
        selectedStorage,
        variant,
        setSelectedColorIdx,
        setSelectedStorageIdx,
    };
}
