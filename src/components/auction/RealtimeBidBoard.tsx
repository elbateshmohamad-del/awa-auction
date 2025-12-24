"use client";

import { useRef } from 'react';
import { Card, CardHeader } from '@/components/ui/Card';
import { Bid } from '@/hooks/useAuction';

interface RealtimeBidBoardProps {
    bids: Bid[];
}

export function RealtimeBidBoard({ bids }: RealtimeBidBoardProps) {
    const scrollRef = useRef<HTMLDivElement>(null);

    return (
        <Card className="h-full max-h-[400px] flex flex-col">
            <CardHeader className="py-3 px-4 border-b border-gray-100 bg-gray-50 flex flex-row justify-between items-center sticky top-0 bg-opacity-95 backdrop-blur-sm z-10">
                <h3 className="font-bold text-gray-700 text-sm flex items-center gap-2">
                    <span>Live Bid History</span>
                    <span className="flex h-2 w-2 relative">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                    </span>
                </h3>
                <span className="flex items-center gap-1.5 px-2 py-0.5 bg-green-100 text-green-700 text-[10px] font-bold uppercase rounded-full tracking-wider animate-pulse border border-green-200 shadow-sm">
                    Live Connection
                </span>
            </CardHeader>
            <div className="flex-1 overflow-y-auto p-0 scroll-smooth" ref={scrollRef}>
                {bids.length === 0 ? (
                    <div className="h-full flex flex-col items-center justify-center text-gray-400 text-sm p-8">
                        <p>No bids yet.</p>
                        <p className="text-xs">Be the first to bid!</p>
                    </div>
                ) : (
                    <table className="w-full text-sm">
                        <tbody className="divide-y divide-gray-50">
                            {bids.map((bid, index) => (
                                <tr
                                    key={bid.id}
                                    className={`
                                        transition-colors duration-500
                                        ${index === 0 ? 'bg-blue-50/80 animate-in slide-in-from-top-2 fade-in duration-300' : 'bg-white'} 
                                        ${bid.isMine ? 'bg-yellow-50/50' : ''}
                                    `}
                                >
                                    <td className="px-4 py-3 text-gray-400 text-xs w-16">
                                        {bid.timestamp.toLocaleTimeString([], { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' })}
                                    </td>
                                    <td className="px-4 py-3">
                                        <div className="flex items-center gap-2">
                                            <span className={`font-bold ${bid.isMine ? 'text-orange-600' : 'text-gray-700'}`}>
                                                {bid.bidder}
                                            </span>
                                            {bid.isMine && <span className="text-[10px] bg-orange-100 text-orange-700 px-1.5 rounded font-medium">YOU</span>}
                                            {index === 0 && <span className="text-[10px] bg-blue-100 text-blue-700 px-1.5 rounded font-medium">LEAD</span>}
                                        </div>
                                    </td>
                                    <td className="px-4 py-3 text-right font-mono font-bold text-gray-900">
                                        ¥{bid.amount.toLocaleString()}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
        </Card>
    );
}
