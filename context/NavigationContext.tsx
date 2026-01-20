"use client";
import React, { createContext, useContext, useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';


interface NavigationContextType {
    visitedPages: Set<string>;
    progress: number;
    isSidebarOpen: boolean;
    setIsSidebarOpen: (isOpen: boolean) => void;
    markVisited: (id: string) => void;
    resetProgress: () => void;
}

const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

const TOTAL_PAGES = [
    'intro', 'philosophy', 'overview',
    'phase1', 'p1-s1', 'p1-s2', 'p1-s3', 'p1-s4', 'p1-s5', 'p1-s6',
    'phase2', 'p2-s1', 'p2-s2', 'p2-s3', 'p2-s4', 'p2-s5',
    'phase3', 'p3-s1', 'p3-s2', 'p3-s3', 'p3-s4', 'p3-s5',
    'glossary', 'pdf-guide'
];

export const NavigationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [visitedPages, setVisitedPages] = useState<Set<string>>(new Set(['intro']));
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        // Close sidebar on route change
        setIsSidebarOpen(false);
    }, [pathname]);

    const markVisited = (id: string) => {
        setVisitedPages(prev => {
            if (prev.has(id)) return prev;
            const next = new Set(prev);
            next.add(id);
            return next;
        });
    };

    const resetProgress = () => {
        setVisitedPages(new Set(['intro']));
    };

    const progress = Math.round((TOTAL_PAGES.filter(page => visitedPages.has(page)).length / TOTAL_PAGES.length) * 100);

    return (
        <NavigationContext.Provider value={{ visitedPages, progress, isSidebarOpen, setIsSidebarOpen, markVisited, resetProgress }}>
            {children}
        </NavigationContext.Provider>
    );
};

export const useNavigation = () => {
    const context = useContext(NavigationContext);
    if (!context) {
        throw new Error('useNavigation must be used within a NavigationProvider');
    }
    return context;
};
