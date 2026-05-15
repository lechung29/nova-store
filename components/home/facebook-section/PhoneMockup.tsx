/** @format */

export function PhoneMockup() {
    return (
        <div className="relative w-100 sm:w-120">
            <div className="absolute -inset-6 rounded-[50%] bg-blue-500/10 blur-3xl" />
            <div className="relative rounded-[44px] border-[7px] border-text-primary/50 bg-text-primary/50 shadow-2xl shadow-black/60">
                <div className="absolute left-1/2 top-0 z-10 h-6 w-24 -translate-x-1/2 rounded-b-2xl bg-text-primary" />
                <div className="overflow-hidden rounded-[38px] bg-white">
                    <img src="/fan_page.png" alt="fan page Nova" />
                </div>
            </div>
            <div className="absolute right-0 top-24 h-10 w-1.25 -translate-x-2.75 rounded-r-md bg-text-primary/50" />
            <div className="absolute left-0 top-20 h-7 w-1.25 translate-x-2.75 rounded-l-md bg-text-primary/50" />
            <div className="absolute left-0 top-32 h-7 w-1.25 translate-x-2.75 rounded-l-md bg-text-primary/50" />
        </div>
    );
}
