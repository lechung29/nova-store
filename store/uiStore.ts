/** @format */

import { create } from "zustand";

interface UIStore {
    navScrolled: boolean;
    mobileMenuOpen: boolean;
    setNavScrolled: (v: boolean) => void;
    setMobileMenuOpen: (v: boolean) => void;
}

export const useUIStore = create<UIStore>()((set) => ({
    navScrolled: false,
    mobileMenuOpen: false,
    setNavScrolled: (navScrolled) => set({ navScrolled }),
    setMobileMenuOpen: (mobileMenuOpen) => set({ mobileMenuOpen }),
}));
