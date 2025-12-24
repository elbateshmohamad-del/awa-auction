import { Card, CardContent } from "@/components/ui/Card";
import { cn } from "@/lib/utils";

interface StatCardProps {
    title: string;
    value: string | number;
    icon: string;
    trend?: string;
    trendUp?: boolean;
    className?: string;
}

export function StatCard({ title, value, icon, trend, trendUp, className }: StatCardProps) {
    return (
        <Card className={cn("border-l-4", className)}>
            <CardContent className="p-6">
                <div className="flex items-center justify-between">
                    <div>
                        <p className="text-sm font-medium text-gray-500">{title}</p>
                        <p className="text-2xl font-bold text-gray-900 mt-1">{value}</p>
                    </div>
                    <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center text-2xl">
                        {icon}
                    </div>
                </div>
                {trend && (
                    <div className="mt-4 flex items-center text-sm">
                        <span className={cn(
                            "font-medium",
                            trendUp ? "text-green-600" : "text-red-600"
                        )}>
                            {trendUp ? "↑" : "↓"} {trend}
                        </span>
                        <span className="text-gray-400 ml-2">vs last month</span>
                    </div>
                )}
            </CardContent>
        </Card>
    );
}
