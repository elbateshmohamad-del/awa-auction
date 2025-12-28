'use client';

import { useEffect, useState } from 'react';

export default function YourTurnOverlay() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // セッションで1回だけ表示
        const hasShown = sessionStorage.getItem('yourTurnShown');
        if (hasShown) {
            return;
        }

        sessionStorage.setItem('yourTurnShown', 'true');
        setIsVisible(true);

        // 5秒後に非表示にする
        const timer = setTimeout(() => {
            setIsVisible(false);
        }, 5000);
        return () => clearTimeout(timer);
    }, []);

    if (!isVisible) return null;

    return (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white pointer-events-none splash-overlay">
            <h1 className="text-[#007AFF] text-[12vw] font-black tracking-widest uppercase text-center w-full splash-text">
                YOUR TURN
            </h1>
        </div>
    );
}
