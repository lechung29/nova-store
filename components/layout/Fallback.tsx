/** @format */
"use client";

import { useEffect, useState } from "react";

export function PageLoaderView() {
    const MSGS = ["Đang tải", "Chờ chút bạn nhé", "Gần xong rồi"];
    const [msgIdx, setMsgIdx] = useState(0);

    useEffect(() => {
        const t = setInterval(() => setMsgIdx((i) => (i + 1) % MSGS.length), 2200);
        return () => clearInterval(t);
    }, []);

    return (
        <div
            style={{
                minHeight: 480,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                background: "#090909",
                position: "relative",
                overflow: "hidden",
            }}
        >
            <div
                style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    width: 340,
                    height: 340,
                    borderRadius: "50%",
                    transform: "translate(-50%, -50%)",
                    background: "radial-gradient(circle, rgba(41,151,255,0.14) 0%, transparent 68%)",
                    animation: "center-glow 2.8s ease-in-out infinite",
                    pointerEvents: "none",
                }}
            />

            {[
                { anim: "orbit 5s linear infinite", size: 7, color: "rgba(41,151,255,0.65)" },
                { anim: "orbit2 4s linear infinite", size: 5, color: "rgba(41,151,255,0.4)" },
            ].map((o, i) => (
                <div
                    key={i}
                    style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        width: o.size,
                        height: o.size,
                        borderRadius: "50%",
                        background: o.color,
                        boxShadow: `0 0 6px ${o.color}`,
                        animation: o.anim,
                    }}
                />
            ))}

            {[130, 170, 210].map((sz, i) => (
                <div
                    key={i}
                    style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        width: sz,
                        height: sz,
                        borderRadius: "50%",
                        border: "1px solid rgba(41,151,255,0.18)",
                        animation: `ring-pulse 2.4s ease-in-out ${i * 0.55}s infinite`,
                    }}
                />
            ))}

            <div style={{ animation: "float 3.2s ease-in-out infinite", marginBottom: 36, position: "relative", zIndex: 1 }}>
                <div
                    style={{
                        width: 68,
                        height: 124,
                        border: "1.5px solid rgba(41,151,255,0.55)",
                        borderRadius: 16,
                        position: "relative",
                        overflow: "hidden",
                        background: "rgba(41,151,255,0.04)",
                        boxShadow: "0 0 24px rgba(41,151,255,0.18), inset 0 0 16px rgba(41,151,255,0.06)",
                    }}
                >
                    <div style={{ display: "flex", justifyContent: "center", padding: "7px 0 4px" }}>
                        <div style={{ width: 22, height: 5, borderRadius: 3, background: "rgba(41,151,255,0.35)" }} />
                    </div>
                    <div
                        style={{
                            margin: "0 7px",
                            height: 76,
                            borderRadius: 6,
                            background: "rgba(41,151,255,0.07)",
                            position: "relative",
                            overflow: "hidden",
                        }}
                    >
                        <div
                            style={{
                                position: "absolute",
                                left: 0,
                                right: 0,
                                height: 2,
                                background: "linear-gradient(90deg, transparent, rgba(41,151,255,0.95) 50%, transparent)",
                                boxShadow: "0 0 10px rgba(41,151,255,0.9)",
                                animation: "scan 1.9s linear infinite",
                            }}
                        />
                        <div style={{ padding: "10px 6px", display: "flex", flexDirection: "column", gap: 5 }}>
                            {[70, 90, 55].map((w, i) => (
                                <div
                                    key={i}
                                    style={{
                                        height: 5,
                                        width: `${w}%`,
                                        borderRadius: 3,
                                        background: "rgba(41,151,255,0.15)",
                                    }}
                                />
                            ))}
                        </div>
                    </div>
                    <div style={{ display: "flex", justifyContent: "center", padding: "6px 0" }}>
                        <div style={{ width: 22, height: 3, borderRadius: 2, background: "rgba(41,151,255,0.25)" }} />
                    </div>
                    <div
                        style={{
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            width: 40,
                            height: 40,
                            borderRadius: "50%",
                            border: "1px solid rgba(41,151,255,0.3)",
                            transform: "translate(-50%,-50%)",
                            animation: "signal 2s ease-out infinite",
                            pointerEvents: "none",
                        }}
                    />
                </div>
            </div>

            <div
                key={msgIdx}
                style={{
                    color: "rgba(255,255,255,0.85)",
                    fontSize: 14,
                    fontWeight: 500,
                    letterSpacing: "0.3px",
                    marginBottom: 10,
                    zIndex: 1,
                    animation: "fade-up 0.4s ease",
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                }}
            >
                {MSGS[msgIdx]}
                <span style={{ display: "flex", gap: 4 }}>
                    {[0, 200, 400].map((d) => (
                        <span
                            key={d}
                            style={{
                                display: "inline-block",
                                width: 4,
                                height: 4,
                                borderRadius: "50%",
                                background: "#2997ff",
                                animation: `dot-bounce 1.2s ease-in-out ${d}ms infinite`,
                            }}
                        />
                    ))}
                </span>
            </div>

            <div
                style={{
                    width: 156,
                    height: 2,
                    borderRadius: 2,
                    background: "rgba(255,255,255,0.07)",
                    overflow: "hidden",
                    zIndex: 1,
                }}
            >
                <div
                    style={{
                        height: "100%",
                        borderRadius: 2,
                        background: "#2997ff",
                        boxShadow: "0 0 8px rgba(41,151,255,0.7)",
                        animation: "progress-fill 3.5s cubic-bezier(0.4,0,0.2,1) infinite",
                    }}
                />
            </div>

            <div style={{ marginTop: 12, color: "rgba(255,255,255,0.2)", fontSize: 11, letterSpacing: 2, zIndex: 1 }}>Nova Store</div>
        </div>
    );
}
