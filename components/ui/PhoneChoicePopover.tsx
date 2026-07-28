/** @format */

"use client";

import { Phone } from "lucide-react";
import { Popover, PopoverTrigger, PopoverContent } from "./popover";
import { STORE_PHONES, getPhoneActionHref, type PhoneActionType } from "@/utils/constants";

interface PhoneChoicePopoverProps {
    /** Which action the chosen phone number will be used for: open Zalo chat, send SMS, or place a call. */
    actionType: PhoneActionType;
    /** The trigger element (button/link) that opens the phone picker. */
    children: React.ReactNode;
    align?: "start" | "center" | "end";
}

const ACTION_TITLE: Record<PhoneActionType, string> = {
    zalo: "Chọn số Zalo",
    sms: "Chọn số nhắn tin",
    tel: "Chọn số để gọi",
};

export function PhoneChoicePopover({ actionType, children, align = "center" }: PhoneChoicePopoverProps) {
    const handleChoice = (raw: string) => {
        const href = getPhoneActionHref(actionType, raw);

        if (actionType === "zalo") {
            window.open(href, "_blank", "noopener,noreferrer");
        } else {
            window.location.assign(href);
        }
    };

    return (
        <Popover>
            <PopoverTrigger asChild>{children}</PopoverTrigger>
            <PopoverContent align={align}>
                <p className="px-2.5! py-1.5! text-[11px] font-display font-semibold uppercase tracking-widest text-white/40">{ACTION_TITLE[actionType]}</p>
                <div className="flex flex-col gap-0.5!">
                    {STORE_PHONES.map((phone) => (
                        <button
                            key={phone.raw}
                            type="button"
                            onClick={() => handleChoice(phone.raw)}
                            className="flex w-full cursor-pointer items-center gap-2.5! rounded-xl px-2.5! py-2.5! text-left text-sm font-semibold text-white/85 transition-colors hover:bg-white/8 hover:text-white"
                        >
                            <Phone size={14} className="shrink-0 text-blue-400" />
                            {phone.label}
                        </button>
                    ))}
                </div>
            </PopoverContent>
        </Popover>
    );
}
