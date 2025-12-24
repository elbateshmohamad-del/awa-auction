"use client";

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { useNotifications } from '@/hooks/useNotifications';
import { Button } from '@/components/ui/Button';

export function NotificationCenter() {
    const { notifications, unreadCount, markAsRead, markAllAsRead } = useNotifications();
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    // Close when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <div className="relative" ref={dropdownRef}>
            {/* Bell Icon Trigger */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="relative p-2 text-gray-500 hover:text-[#0F4C81] transition-colors rounded-full hover:bg-gray-100"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
                    <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
                </svg>
                {unreadCount > 0 && (
                    <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-red-500 rounded-full border border-white animate-pulse"></span>
                )}
            </button>

            {/* Dropdown Panel */}
            {isOpen && (
                <div className="absolute right-0 mt-2 w-80 md:w-96 bg-white rounded-xl shadow-2xl border border-gray-100 z-50 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
                    <div className="flex items-center justify-between px-4 py-3 border-b border-gray-50 bg-gray-50/50">
                        <h3 className="font-bold text-gray-900 text-sm">Notifications</h3>
                        {unreadCount > 0 && (
                            <button onClick={markAllAsRead} className="text-xs text-blue-600 hover:underline">
                                Mark all as read
                            </button>
                        )}
                    </div>

                    <div className="max-h-[400px] overflow-y-auto">
                        {notifications.length === 0 ? (
                            <div className="p-8 text-center text-gray-400 text-sm">
                                No notifications yet.
                            </div>
                        ) : (
                            <div className="divide-y divide-gray-50">
                                {notifications.map((note) => (
                                    <div
                                        key={note.id}
                                        className={`p-4 hover:bg-gray-50 transition-colors ${!note.isRead ? 'bg-blue-50/30' : ''}`}
                                        onClick={() => markAsRead(note.id)}
                                    >
                                        <div className="flex gap-3">
                                            <div className={`mt-1 w-2 h-2 rounded-full flex-shrink-0 ${!note.isRead ? 'bg-blue-500' : 'bg-transparent'}`}></div>
                                            <div className="flex-1 space-y-1">
                                                <div className="flex justify-between items-start">
                                                    <p className={`text-sm ${!note.isRead ? 'font-bold text-gray-900' : 'font-medium text-gray-700'}`}>
                                                        {note.title}
                                                    </p>
                                                    <span className="text-[10px] text-gray-400 whitespace-nowrap ml-2">
                                                        {note.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                                    </span>
                                                </div>
                                                <p className="text-xs text-gray-500 leading-relaxed">
                                                    {note.message}
                                                </p>
                                                {note.link && (
                                                    <Link href={note.link} className="inline-block mt-2 text-xs font-bold text-blue-600 hover:underline">
                                                        View Details →
                                                    </Link>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    <div className="p-2 border-t border-gray-50 bg-gray-50 text-center">
                        <Link href="/dashboard" className="text-xs text-gray-500 hover:text-gray-900">
                            View all activity
                        </Link>
                    </div>
                </div>
            )}
        </div>
    );
}
