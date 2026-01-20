import './globals.css';
import { NavigationProvider } from '../context/NavigationContext';
import Sidebar from '../components/Sidebar';

import MobileMenuTrigger from '../components/MobileMenuTrigger';

export const metadata = {
    title: 'CCVSD Guidebook',
    description: 'Care-Centered Value Sensitive Design Framework',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <head>
                <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,200..800;1,6..72,200..800&display=swap" rel="stylesheet" />
            </head>
            <body className="font-serif bg-cream text-ink antialiased flex flex-col md:flex-row min-h-screen">
                <NavigationProvider>
                    <Sidebar />
                    <MobileMenuTrigger />
                    <main className="flex-1 transition-all duration-300 transform">
                        {children}
                    </main>
                </NavigationProvider>
            </body>
        </html>
    )
}
