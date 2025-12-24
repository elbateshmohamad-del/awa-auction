"use client";

import { useState, useEffect, useCallback } from 'react';

export type NotificationType = 'info' | 'success' | 'warning' | 'error';

export interface Notification {
    id: string;
    title: string;
    message: string;
    type: NotificationType;
    timestamp: Date;
    isRead: boolean;
    link?: string;
}

const INITIAL_NOTIFICATIONS: Notification[] = [
    {
        id: '1',
        title: 'Welcome to AWA',
        message: 'Your account has been verified. You can now start bidding.',
        type: 'success',
        timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24), // 1 day ago
        isRead: true,
    }
];

export function useNotifications() {
    const [notifications, setNotifications] = useState<Notification[]>(INITIAL_NOTIFICATIONS);
    const [unreadCount, setUnreadCount] = useState(0);

    useEffect(() => {
        setUnreadCount(notifications.filter(n => !n.isRead).length);
    }, [notifications]);

    // Mark a single notification as read
    const markAsRead = useCallback((id: string) => {
        setNotifications(prev => prev.map(n =>
            n.id === id ? { ...n, isRead: true } : n
        ));
    }, []);

    // Mark all as read
    const markAllAsRead = useCallback(() => {
        setNotifications(prev => prev.map(n => ({ ...n, isRead: true })));
    }, []);

    // Simulate receiving a new notification (Mock)
    const triggerMockNotification = useCallback((type: NotificationType = 'info') => {
        const newNote: Notification = {
            id: Math.random().toString(36).substr(2, 9),
            title: type === 'warning' ? 'Outbid Alert' : 'System Update',
            message: type === 'warning'
                ? 'Someone placed a higher bid on 2022 Kawasaki Ninja.'
                : 'Maintenance scheduled for tonight at 02:00 AM.',
            type,
            timestamp: new Date(),
            isRead: false,
            link: type === 'warning' ? '/bike/1' : undefined
        };

        setNotifications(prev => [newNote, ...prev]);
        // Optional: Play sound
    }, []);

    // Auto-trigger a mock notification after 10 seconds for demo
    useEffect(() => {
        const timer = setTimeout(() => {
            triggerMockNotification('warning');
        }, 10000);
        return () => clearTimeout(timer);
    }, [triggerMockNotification]);

    return {
        notifications,
        unreadCount,
        markAsRead,
        markAllAsRead,
        triggerMockNotification
    };
}
