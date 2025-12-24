"use client";

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Input } from '@/components/ui/Input';
import { Modal } from '@/components/ui/Modal';

type ContentItem = {
    id: number;
    title: string;
    type: string;
    status: string;
    lastUpdated: string;
    author: string;
};

export default function AdminContentPage() {
    const t = useTranslations('admin.contentPage');
    const tCommon = useTranslations('admin.common');
    const [activeFilter, setActiveFilter] = useState('All');
    const [items, setItems] = useState<ContentItem[]>([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

    // Stats with translations
    const contentStats = [
        { label: t('stats.published'), count: 24, icon: '✅' },
        { label: t('stats.draft'), count: 8, icon: '📝' },
        { label: t('stats.scheduled'), count: 3, icon: '📅' },
        { label: t('stats.totalPages'), count: 35, icon: '📄' },
    ];

    // Filter tabs with translations
    const filterTabs = [
        { key: 'All', label: t('filters.all') },
        { key: 'Banners', label: t('filters.banners') },
        { key: 'News', label: t('filters.news') },
        { key: 'Guides', label: t('filters.guides') },
        { key: 'FAQ', label: t('filters.faq') },
        { key: 'Legal', label: t('filters.legal') },
    ];

    const getStatusTranslation = (status: string) => {
        const statusMap: Record<string, string> = {
            'Published': t('status.published'),
            'Draft': t('status.draft'),
            'Scheduled': t('status.scheduled'),
        };
        return statusMap[status] || status;
    };

    const getTypeTranslation = (type: string) => {
        const typeMap: Record<string, string> = {
            'Banner': t('filters.banners'),
            'News': t('filters.news'),
            'Guide': t('filters.guides'),
            'FAQ': t('filters.faq'),
        };
        return typeMap[type] || type;
    };

    // Filter Logic
    const filteredItems = items.filter(item => {
        const matchesFilter = activeFilter === 'All' || item.type === (activeFilter === 'Banners' ? 'Banner' : activeFilter === 'News' ? 'News' : activeFilter === 'Guides' ? 'Guide' : activeFilter);
        const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) || item.author.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesFilter && matchesSearch;
    });

    // Delete Logic
    const handleDelete = (id: number) => {
        if (confirm(t('deleteConfirm'))) {
            setItems(items.filter(item => item.id !== id));
        }
    };

    const [contentType, setContentType] = useState('News');
    const [title, setTitle] = useState('');
    const [details, setDetails] = useState('');

    // Mock Create Logic
    const handleCreate = () => {
        const newItem = {
            id: items.length + 1,
            title: title || 'New Content Entry',
            type: contentType,
            status: 'Draft',
            lastUpdated: new Date().toISOString().split('T')[0],
            author: 'Admin'
        };
        setItems([newItem, ...items]);
        setIsModalOpen(false);
        setTitle('');
        setDetails('');
        setContentType('News');
    };

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">{t('title')}</h1>
                    <p className="text-sm text-gray-500">{t('subtitle')}</p>
                </div>
                <div className="flex gap-2">
                    <Button variant="secondary" onClick={() => alert("Simulating Import...")}>{t('importContent')}</Button>
                    <Button variant="primary" onClick={() => setIsModalOpen(true)}>+ {t('createNew')}</Button>
                </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {contentStats.map((stat, i) => (
                    <Card key={i}>
                        <CardContent className="p-4 flex items-center gap-3">
                            <span className="text-2xl">{stat.icon}</span>
                            <div>
                                <p className="text-2xl font-bold text-gray-900">{stat.count}</p>
                                <p className="text-xs text-gray-500">{stat.label}</p>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>

            {/* Content Types Filter Buttons */}
            <div className="flex gap-2 flex-wrap">
                {filterTabs.map((tab) => (
                    <button
                        key={tab.key}
                        onClick={() => setActiveFilter(tab.key)}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeFilter === tab.key
                            ? 'bg-[#0F4C81] text-white'
                            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                            }`}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>

            <Card>
                <CardContent className="p-0">
                    {/* Search */}
                    <div className="p-4 border-b border-gray-100 flex gap-4 bg-gray-50/50">
                        <div className="flex-1 max-w-sm">
                            <Input
                                placeholder={t('searchPlaceholder')}
                                className="bg-white"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                        <select className="h-10 rounded-md border-gray-300 text-sm focus:ring-[#0F4C81] focus:border-[#0F4C81]">
                            <option>{t('allStatus')}</option>
                            <option>{t('status.published')}</option>
                            <option>{t('status.draft')}</option>
                            <option>{t('status.scheduled')}</option>
                        </select>
                    </div>

                    {/* Table */}
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm text-left">
                            <thead className="bg-gray-50 text-gray-500 font-medium">
                                <tr>
                                    <th className="px-6 py-3">{t('table.title')}</th>
                                    <th className="px-6 py-3">{t('table.type')}</th>
                                    <th className="px-6 py-3">{t('table.status')}</th>
                                    <th className="px-6 py-3">{t('table.author')}</th>
                                    <th className="px-6 py-3">{t('table.lastUpdated')}</th>
                                    <th className="px-6 py-3 text-right">{t('table.actions')}</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {filteredItems.length === 0 ? (
                                    <tr>
                                        <td colSpan={6} className="px-6 py-8 text-center text-gray-400">
                                            {t('noContent')}
                                        </td>
                                    </tr>
                                ) : (
                                    filteredItems.map((item) => (
                                        <tr key={item.id} className="hover:bg-blue-50/50 transition-colors group">
                                            <td className="px-6 py-4">
                                                <span className="font-bold text-gray-900">{item.title}</span>
                                            </td>
                                            <td className="px-6 py-4">
                                                <Badge variant="secondary">{getTypeTranslation(item.type)}</Badge>
                                            </td>
                                            <td className="px-6 py-4">
                                                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
                                                    ${item.status === 'Published' ? 'bg-green-100 text-green-800' :
                                                        item.status === 'Draft' ? 'bg-gray-100 text-gray-800' :
                                                            'bg-yellow-100 text-yellow-800'}`}>
                                                    {getStatusTranslation(item.status)}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 text-gray-600">{item.author}</td>
                                            <td className="px-6 py-4 text-gray-500">{item.lastUpdated}</td>
                                            <td className="px-6 py-4 text-right">
                                                <Button variant="ghost" size="sm" className="text-gray-400 group-hover:text-[#0F4C81]" onClick={() => alert(`Edit ${item.title}`)}>
                                                    {t('edit')}
                                                </Button>
                                                <Button variant="ghost" size="sm" className="text-gray-400 group-hover:text-red-500" onClick={() => handleDelete(item.id)}>
                                                    {t('delete')}
                                                </Button>
                                            </td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                    </div>

                    <div className="p-4 border-t border-gray-100 flex justify-center">
                        <Button variant="ghost" size="sm" className="text-gray-500">{t('loadMore')}</Button>
                    </div>
                </CardContent>
            </Card>

            {/* Create Content Modal */}
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title={t('modal.title')}>
                <div className="space-y-4">
                    <div className="grid gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">{t('modal.contentType')}</label>
                            <select
                                className="w-full border-gray-300 rounded-md h-10 px-3 bg-white"
                                value={contentType}
                                onChange={(e) => setContentType(e.target.value)}
                            >
                                <option value="News">{t('modal.types.news')}</option>
                                <option value="Banner">{t('modal.types.banner')}</option>
                                <option value="Guide">{t('modal.types.guide')}</option>
                                <option value="FAQ">{t('modal.types.faq')}</option>
                            </select>
                        </div>

                        <Input
                            label={t('modal.inputTitle')}
                            placeholder={contentType === 'Banner' ? t('modal.titlePlaceholderBanner') : t('modal.titlePlaceholderDefault')}
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />

                        {/* Dynamic Fields */}
                        {contentType === 'News' && (
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">{t('modal.newsBody')}</label>
                                <textarea
                                    className="w-full border-gray-300 rounded-md p-3 min-h-[100px] text-sm"
                                    placeholder={t('modal.newsPlaceholder')}
                                    value={details}
                                    onChange={(e) => setDetails(e.target.value)}
                                />
                            </div>
                        )}

                        {contentType === 'Banner' && (
                            <div className="space-y-4">
                                <Input
                                    label={t('modal.imageUrl')}
                                    placeholder="https://..."
                                    value={details}
                                    onChange={(e) => setDetails(e.target.value)}
                                />
                                <div className="aspect-video bg-gray-100 rounded border border-dashed border-gray-300 flex items-center justify-center text-gray-400 text-sm">
                                    {t('modal.previewArea')}
                                </div>
                            </div>
                        )}

                        {contentType === 'FAQ' && (
                            <div className="space-y-3">
                                <Input label={t('modal.question')} placeholder={t('modal.questionPlaceholder')} />
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">{t('modal.answer')}</label>
                                    <textarea
                                        className="w-full border-gray-300 rounded-md p-3 min-h-[80px] text-sm"
                                        placeholder={t('modal.answerPlaceholder')}
                                    />
                                </div>
                            </div>
                        )}

                        {contentType === 'Guide' && (
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">{t('modal.guideContent')}</label>
                                <textarea
                                    className="w-full border-gray-300 rounded-md p-3 min-h-[150px] text-sm font-mono"
                                    placeholder={t('modal.guidePlaceholder')}
                                />
                            </div>
                        )}
                    </div>
                    <div className="flex justify-end gap-2 pt-4">
                        <Button variant="ghost" onClick={() => setIsModalOpen(false)}>{t('modal.cancel')}</Button>
                        <Button variant="primary" onClick={handleCreate}>{t('modal.create')} {getTypeTranslation(contentType)}</Button>
                    </div>
                </div>
            </Modal>
        </div>
    );
}
