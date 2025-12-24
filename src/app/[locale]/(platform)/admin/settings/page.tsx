'use client';

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';

interface BDSSettings {
    username: string;
    password: string;
}

export default function AdminSettingsPage() {
    const t = useTranslations('admin.settingsPage');
    const tCommon = useTranslations('admin.common');
    const params = useParams();
    const locale = params.locale || 'en';

    // Saved values from server
    const [savedSettings, setSavedSettings] = useState<BDSSettings | null>(null);
    // Form values
    const [formUsername, setFormUsername] = useState('');
    const [formPassword, setFormPassword] = useState('');
    // UI state
    const [isEditing, setIsEditing] = useState(false);
    const [isSaving, setIsSaving] = useState(false);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    // Load saved settings on mount
    useEffect(() => {
        loadSettings();
    }, []);

    const loadSettings = async () => {
        setLoading(true);
        try {
            const res = await fetch('/api/settings/bds');
            const data = await res.json();
            if (data.settings && data.settings.username) {
                setSavedSettings(data.settings);
                setFormUsername(data.settings.username);
            }
            setLoading(false);
        } catch (err) {
            setError(t('bdsConnection.loadError'));
            setLoading(false);
        }
    };

    const handleSave = async () => {
        if (!formUsername || !formPassword) {
            setError(t('bdsConnection.inputError'));
            return;
        }

        setIsSaving(true);
        setError('');

        try {
            const res = await fetch('/api/settings/bds', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    username: formUsername,
                    password: formPassword,
                }),
            });

            const data = await res.json();

            if (res.ok && data.success) {
                setSavedSettings({ username: formUsername, password: '••••••••' });
                setFormPassword('');
                setIsEditing(false);
                setSuccessMessage(t('bdsConnection.saved'));
                setTimeout(() => setSuccessMessage(''), 3000);
            } else {
                setError(t('bdsConnection.saveError') + ': ' + (data.error || 'Unknown error'));
            }
        } catch (err) {
            setError(t('bdsConnection.saveError'));
        }
        setIsSaving(false);
    };

    const startEditing = () => {
        setIsEditing(true);
        setFormPassword('');
        setError('');
    };

    const cancelEditing = () => {
        setIsEditing(false);
        setFormUsername(savedSettings?.username || '');
        setFormPassword('');
        setError('');
    };

    if (loading) {
        return (
            <div className="flex items-center justify-center h-64">
                <p className="text-gray-500">{tCommon('loading')}</p>
            </div>
        );
    }

    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-2xl font-bold text-gray-900">{t('title')}</h1>
                <p className="text-sm text-gray-500">{t('subtitle')}</p>
            </div>

            {successMessage && (
                <div className="p-4 bg-green-50 text-green-800 rounded-lg font-medium">
                    ✓ {successMessage}
                </div>
            )}

            {error && (
                <div className="p-4 bg-red-50 text-red-800 rounded-lg">
                    ⚠️ {error}
                </div>
            )}

            <Card>
                <CardHeader>
                    <CardTitle>{t('bdsConnection.title')}</CardTitle>
                </CardHeader>
                <CardContent>
                    {savedSettings && !isEditing ? (
                        <div className="space-y-4">
                            <div className="p-4 bg-gray-50 rounded-lg space-y-3">
                                <div className="flex justify-between items-center">
                                    <span className="text-sm text-gray-500">{t('bdsConnection.userId')}</span>
                                    <span className="font-mono font-medium">{savedSettings.username}</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-sm text-gray-500">{t('bdsConnection.password')}</span>
                                    <span className="font-mono">••••••••</span>
                                </div>
                            </div>
                            <div className="flex gap-3">
                                <Button variant="secondary" onClick={startEditing}>
                                    {t('bdsConnection.change')}
                                </Button>
                            </div>
                        </div>
                    ) : (
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    {t('bdsConnection.userId')}
                                </label>
                                <Input
                                    type="text"
                                    placeholder={t('bdsConnection.placeholder')}
                                    value={formUsername}
                                    onChange={(e) => setFormUsername(e.target.value)}
                                    disabled={isSaving}
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    {t('bdsConnection.password')}
                                </label>
                                <Input
                                    type="password"
                                    placeholder={t('bdsConnection.passwordPlaceholder')}
                                    value={formPassword}
                                    onChange={(e) => setFormPassword(e.target.value)}
                                    disabled={isSaving}
                                />
                            </div>
                            <div className="flex gap-3 pt-2">
                                <Button
                                    variant="primary"
                                    onClick={handleSave}
                                    disabled={isSaving || !formUsername || !formPassword}
                                >
                                    {isSaving ? t('bdsConnection.saving') : t('bdsConnection.save')}
                                </Button>
                                {savedSettings && (
                                    <Button
                                        variant="ghost"
                                        onClick={cancelEditing}
                                        disabled={isSaving}
                                    >
                                        {t('bdsConnection.cancel')}
                                    </Button>
                                )}
                            </div>
                        </div>
                    )}
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>{t('invoice.title')}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                        <div>
                            <p className="font-medium text-gray-900">{t('invoice.simulatorTitle')}</p>
                            <p className="text-sm text-gray-500">{t('invoice.simulatorDesc')}</p>
                        </div>
                        <a href={`/${locale}/admin/settings/invoice`}>
                            <Button variant="primary">
                                {t('invoice.configure')} ⚙️
                            </Button>
                        </a>
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>{t('import.title')}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                        <div>
                            <p className="font-medium text-gray-900">{t('import.testMode')}</p>
                            <p className="text-sm text-gray-500">{t('import.testModeDesc')}</p>
                        </div>
                        <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium">
                            {t('import.enabled')}
                        </span>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
