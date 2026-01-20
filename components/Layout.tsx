import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Sidebar from './Sidebar';
import { useNavigation } from '../context/NavigationContext';

const Layout: React.FC = () => {
    const { isSidebarOpen, setIsSidebarOpen } = useNavigation();
    const location = useLocation();
    const showChrome = location.pathname !== '/export';

    return (
        <div className="flex flex-col md:flex-row min-h-screen relative">
            {/* Mobile Top Bar */}
            {showChrome && (
                <header className="md:hidden sticky top-0 z-40 bg-cream/95 backdrop-blur-sm border-b border-ink/10 px-6 py-4 flex items-center justify-between no-print">
                    <div className="flex items-center gap-2">
                        <div className="size-8 flex items-center justify-center border-2 border-ink">
                            <span className="material-symbols-outlined text-lg font-bold">robot_2</span>
                        </div>
                        <span className="text-xs font-bold uppercase tracking-tighter">CCVSD Guide</span>
                    </div>
                    <button
                        onClick={() => setIsSidebarOpen(true)}
                        className="size-10 flex items-center justify-center bg-white border-2 border-ink shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-y-0.5 active:shadow-none transition-all"
                    >
                        <span className="material-symbols-outlined">menu</span>
                    </button>
                </header>
            )}

            {showChrome && (
                <Sidebar />
            )}

            <main className={`flex-1 overflow-y-auto bg-cream ${!showChrome ? 'p-0' : ''}`}>
                <Outlet />
            </main>
        </div>
    );
};

export default Layout;
