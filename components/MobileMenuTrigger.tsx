'use client';

import { useNavigation } from '../context/NavigationContext';

export default function MobileMenuTrigger() {
    const { setIsSidebarOpen } = useNavigation();

    return (
        <button
            onClick={() => setIsSidebarOpen(true)}
            className="fixed top-4 right-4 z-40 md:hidden p-2 bg-white/80 backdrop-blur border border-ink/10 rounded-full shadow-sm text-ink hover:bg-white hover:shadow-md transition-all"
            aria-label="Open menu"
        >
            <span className="material-symbols-outlined text-2xl">menu</span>
        </button>
    );
}
