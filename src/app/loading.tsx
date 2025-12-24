export default function Loading() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-50">
            <div className="relative">
                {/* Spinner Ring */}
                <div className="w-16 h-16 border-4 border-[#0F4C81]/20 border-t-[#0F4C81] rounded-full animate-spin"></div>

                {/* Center Logo/Icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-xs font-bold text-[#0F4C81] animate-pulse">AWA</span>
                </div>
            </div>
        </div>
    );
}
