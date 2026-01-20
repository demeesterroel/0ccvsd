'use client';

import { useNavigation } from '../context/NavigationContext';

export default function MobileMenuTrigger() {
    const { setIsSidebarOpen } = useNavigation();

    return (
        <button
            onClick={() => setIsSidebarOpen(true)}
            className="fixed top-4 right-4 z-[60] md:hidden p-3 bg-ink text-white rounded-full shadow-lg hover:bg-black transition-all flex items-center justify-center"
            aria-label="Open menu"
        >
            <span className="material-symbols-outlined text-2xl">menu</span>
        </button>
    );
}
