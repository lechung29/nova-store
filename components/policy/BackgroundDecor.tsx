/** @format */

export function BackgroundDecor() {
    return (
        <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-1/2 top-0 h-100 w-175 -translate-x-1/2 rounded-full bg-blue-500 opacity-20 blur-[60px]" />
            <div
                className="absolute inset-0 opacity-[0.025]"
                style={{
                    backgroundImage: "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
                    backgroundSize: "60px 60px",
                }}
            />
        </div>
    );
}
