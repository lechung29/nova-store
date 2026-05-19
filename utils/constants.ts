/** @format */

import { Ip17Feature, Ip17FeaturedCard } from "@/types";
import {
    Shield,
    Truck,
    RotateCcw,
    MessageCircle,
    Clock,
    Star,
    Cpu,
    Camera,
    Aperture,
    Battery,
    Zap,
    MapPinHouse,
    Mail,
    Phone,
    Calendar,
    ShoppingBag,
    Users,
    Building2,
    MapPin,
    FileText,
    Smartphone,
    Wrench,
    RefreshCcw,
    ShieldCheck,
    BadgeCheck,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { FaFacebookF, FaFacebookMessenger, FaTiktok } from "react-icons/fa";
import { SiZalo } from "react-icons/si";

export const product_specs_map = [
    { label: "Chip", key: "chip" },
    { label: "Màn hình", key: "display" },
    { label: "Camera", key: "camera" },
    { label: "Pin", key: "battery" },
    { label: "RAM", key: "ram" },
    { label: "Trọng lượng", key: "weight" },
    { label: "Kháng nước", key: "waterResistance" },
    { label: "Kết nối", key: "connectivity" },
] as const;

export interface ProductPolicy {
    icon: LucideIcon;
    label: string;
}

export const product_policies: ProductPolicy[] = [
    { icon: Shield, label: "Bảo hành Apple 12 tháng" },
    { icon: Truck, label: "Miễn phí giao hàng" },
    { icon: RotateCcw, label: "Đổi trả 7 ngày" },
];

export const social_links = {
    zalo: "https://zalo.me/0385535606",
    facebook: "https://m.me/dinhnhanh140220",
} as const;

export const category_filters = [
    { key: "all", label: "Tất cả sản phẩm" },
    { key: "iphone", label: "iPhone" },
    { key: "ipad", label: "iPad" },
    { key: "airpods", label: "AirPods" },
    { key: "watch", label: "Apple Watch" },
] as const;

export const sort_map: Record<string, "price-asc" | "popular"> = {
    discount: "price-asc",
    popular: "popular",
};

export const checkout_channels = [
    { href: "https://zalo.me/0385535606", icon: SiZalo, label: "Mua qua Zalo", iconSize: 18 },
    { href: "https://m.me/dinhnhanh140220", icon: FaFacebookF, label: "Nhắn qua Facebook", iconSize: 18 },
] as const;

export const contact_buttons = [
    {
        href: "https://zalo.me/0385535606",
        icon: SiZalo,
        label: "Chat Zalo",
        iconSize: 18,
        className: "border border-blue-600/40 bg-blue-600",
        external: true,
    },
    {
        href: "https://m.me/dinhnhanh140220",
        icon: FaFacebookMessenger,
        label: "Messenger",
        iconSize: 16,
        className: "border border-blue-500/40 bg-blue-500",
        external: true,
    },
    {
        href: "sms:0385535606",
        icon: MessageCircle,
        label: "Nhắn tin SMS",
        iconSize: 16,
        className: "border border-white/10 bg-white/6 text-white/75",
        external: false,
    },
] as const;

export const policies_hero_stats = [
    { icon: Clock, label: "7 ngày", sub: "đổi trả" },
    { icon: Shield, label: "12 tháng", sub: "bảo hành" },
    { icon: Truck, label: "Miễn phí", sub: "đơn từ 5tr" },
    { icon: Star, label: "100%", sub: "chính hãng" },
] as const;

export const hero_section_images = [
    { src: "/ip17_orange_logo.png", label: "iPhone 17 Pro Max" },
    { src: "/ipad_pro_2018_logo.png", label: "iPad Pro 2018" },
    { src: "/airpod_logo.png", label: "AirPods" },
    { src: "/apple_watch_11_logo.png", label: "Apple Watch 11" },
] as const;

export const hero_section_stats = [
    { value: "20+", label: "Sản phẩm" },
    { value: "1K+", label: "Khách hàng" },
    { value: "4.9★", label: "Đánh giá" },
] as const;

export const animation_ease = [0.22, 1, 0.36, 1] as const;

export const facebook_stats = [
    { value: "17K+", label: "Người theo dõi" },
    { value: "4.9★", label: "Đánh giá" },
    { value: "24/7", label: "Hỗ trợ inbox" },
] as const;

export const testimonials_stats = [
    { value: "4.9/5", label: "Điểm đánh giá trung bình" },
    { value: "1.000+", label: "Khách hàng hài lòng" },
    { value: "99.9%", label: "Giao hàng đúng hẹn" },
    { value: "24/7", label: "Hỗ trợ khách hàng" },
] as const;

export const nav_links = [
    {
        label: "iPhone",
        href: "/san-pham?loai-san-pham=iphone",
        src: "/ip17_orange_logo.png",
    },
    {
        label: "iPad",
        href: "/san-pham?loai-san-pham=ipad",
        src: "/ipad_pro_2018_logo.png",
    },
    {
        label: "AirPods",
        href: "/san-pham?loai-san-pham=airpods",
        src: "/airpod_logo.png",
    },
    {
        label: "Apple Watch",
        href: "/san-pham?loai-san-pham=watch",
        src: "/apple_watch_11_logo.png",
    },
    { label: "Bảo hành", href: "/chinh-sach?loai-chinh-sach=bao-hanh"},
    { label: "Vận chuyển", href: "/chinh-sach?loai-chinh-sach=van-chuyen"},
    { label: "Liên hệ", href: "/chinh-sach?lien-he=true"},
] as const;

export const footer_links = {
    "Sản phẩm": [
        { label: "iPhone", href: "/san-pham?loai-san-pham=iphone" },
        { label: "iPad", href: "/san-pham?loai-san-pham=ipad" },
        { label: "AirPods", href: "/san-pham?loai-san-pham=airpods" },
        { label: "Apple Watch", href: "/san-pham?loai-san-pham=watch" },
    ],
    "Hỗ trợ": [
        { label: "Bảo hành", href: "/chinh-sach?loai-chinh-sach=bao-hanh" },
        { label: "Thanh toán", href: "/chinh-sach?loai-chinh-sach=thanh-toan" },
        { label: "Vận chuyển", href: "/chinh-sach?loai-chinh-sach=van-chuyen" },
        { label: "Liên hệ", href: "/chinh-sach?lien-he=true" },
        { label: "FAQ", href: "/?faq=true" },
        { label: "Chính sách đổi trả", href: "/chinh-sach?loai-chinh-sach=doi-tra" },
    ],
    "Về chúng tôi": [
        { label: "Giới thiệu", href: "/gioi-thieu" },
        { label: "Cửa hàng", href: "/cua-hang" },
    ],
} as const;

export const marquee_items = ["iPhone 16 Pro Max", "iPad Pro M4", "Apple Intelligence", "AirPods Pro 2", "Apple Watch Ultra 2", "MacBook Pro M4", "Vision Pro"] as const;

export const contact_info = [
    { icon: MapPinHouse, label: "49/1 Đường Đà Sơn, Phường Hòa Khánh, TP Đà Nẵng" },
    { icon: Mail, label: "info@applehousedanang.vn" },
    { icon: Phone, label: "0385 535 606" },
];

export const social_media = [
    {
        name: "Facebook",
        icon: FaFacebookF,
        href: "https://facebook.com/applehousedanang",
        color: "text-blue-500",
    },
    {
        name: "TikTok",
        icon: FaTiktok,
        href: "https://www.tiktok.com/@applehousedanang",
        color: "text-white",
    },
] as const;

export const footer_legal = [
    { label: "Chính sách bảo mật", href: "#" },
    { label: "Điều khoản sử dụng", href: "#" },
] as const;

export const price_presets = [
    { label: "Dưới 10tr", min: 0, max: 10000000 },
    { label: "10-20tr", min: 10000000, max: 20000000 },
    { label: "20-30tr", min: 20000000, max: 30000000 },
    { label: "Trên 30tr", min: 30000000, max: 50000000 },
] as const;

export const price_range = {
    MIN: 0,
    MAX: 50000000,
    STEP: 1000000,
} as const;

export const sort_options = {
    newest: "Mới nhất",
    "price-asc": "Giá tăng dần",
    "price-desc": "Giá giảm dần",
    popular: "Phổ biến nhất",
} as const;

export const grid_col_options = [
    { value: 3, icon: "grid" },
    { value: 2, icon: "list" },
] as const;

export const gallery_config = {
    gap: 16,
    visibleCounts: {
        desktop: 4,
        tablet: 2,
        mobile: 1,
    },
} as const;

export const facebook_url = "https://facebook.com/applehousedanang";

export const ip17FeaturedCard: Ip17FeaturedCard = {
    icon: Cpu,
    title: "Sức Mạnh Vượt Trội Từ Chip A19 Pro",
    description: "Trang bị chip A19 Pro — thế hệ tiên tiến nhất của Apple. Hiệu năng GPU tăng 40%, xử lý các tác vụ AI tại chỗ như chỉnh ảnh, dịch thuật, tóm tắt văn bản mà không cần kết nối mạng.",
    accentColor: "#3B82F6",
};

export const ip17Features: Ip17Feature[] = [
    {
        id: "camera",
        icon: Camera,
        title: "Camera 200MP ProVision",
        description: 'Cảm biến 1/1.14" với khẩu độ f/1.6, chụp ảnh đêm sắc nét không tưởng và quay 8K ProRes trực tiếp.',
        badge: "Mới",
    },
    {
        id: "display",
        icon: Aperture,
        title: "Màn Hình ProMotion 120Hz",
        description: 'Super Retina XDR 6.9", tần số quét thích ứng 1–120Hz, đạt 2000 nits khi xem ngoài trời.',
    },
    {
        id: "battery",
        icon: Battery,
        title: "Pin Siêu Bền Cả Ngày",
        description: "Pin 4685mAh cùng với hỗ trợ sạc MagSafe 30W, đủ dùng 33 giờ phát video liên tục.",
    },
    {
        id: "titanium",
        icon: Shield,
        title: "Khung Titan Cấp 5",
        description: "Titan Grade 5 cứng hơn 50% thép không gỉ, nhẹ hơn mà vẫn chịu va đập vượt chuẩn MIL-SPEC.",
    },
    {
        id: "charging",
        icon: Zap,
        title: "Sạc Nhanh & Sạc Không Dây",
        description: "MagSafe 30W sạc đầy 0–50% trong 25 phút. Qi2 không dây 15W, không cần tháo ốp.",
    },
];

export const stores = [
    {
        name: "Nova Store Đà Nẵng",
        address: "49/1 Đường Đà Sơn, Phường Hòa Khánh, TP Đà Nẵng",
        phone: "0385 535 606",
        city: "Đà Nẵng",
        isNew: false,
        shortAddr: "Đà Sơn, Hòa Khánh, TP Đà Nẵng",
        mapSrc: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3834.274276078581!2d108.1519996!3d16.0512508!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3142193761a67ff9%3A0x79c7eb1ed34717b4!2zNDkgxJDDoCBTxqFuLCBIw7JhIEtow6FuaCwgxJDDoCBO4bq1bmcgNTUwMDAwLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1779182309678!5m2!1svi!2s",
    },
];

// Introduce Page
export const introduce_stats = [
    { icon: Calendar, value: "2026", label: "Năm thành lập" },
    { icon: ShoppingBag, value: "3.000+", label: "Sản phẩm đã bán" },
    { icon: Users, value: "1.000+", label: "Khách hàng tin dùng" },
    { icon: Star, value: "4.9 / 5", label: "Đánh giá trung bình" },
];

export const introduce_shop_info = [
    {
        icon: Building2,
        label: "Tên thương hiệu",
        value: "Nova Store",
    },
    {
        icon: MapPin,
        label: "Địa chỉ",
        value: "49/1 Đường Đà Sơn, Phường Hòa Khánh, TP. Đà Nẵng",
    },
    {
        icon: FileText,
        label: "Giấy CNĐKKD",
        value: "Số 32B8019880 do UBND Phường Hòa Khánh cấp ngày 18/06/2026",
        highlight: "32B8019880",
    },
];

export const introduce_services = [
    {
        icon: Smartphone,
        title: "Sản phẩm chính hãng",
        desc: "Chuyên cung cấp các sản phẩm Apple chính hãng như: iPhone, iPad, Macbook, iMac,... và phụ kiện chính hãng đi kèm.",
    },
    {
        icon: Wrench,
        title: "Dịch vụ sửa chữa",
        desc: "Cung cấp giải pháp dịch vụ sửa chữa ủy quyền chính hãng, phần mềm bản quyền chuyên nghiệp.",
    },
    {
        icon: Users,
        title: "Lợi ích khách hàng",
        desc: "Luôn đi đầu về lợi ích khách hàng — tư vấn tận tâm, hậu mãi chu đáo và chính sách bảo hành minh bạch.",
    },
];

export const introduce_commits = [
    { icon: RefreshCcw, title: "Đổi trả 7 ngày", desc: "1 đổi 1 trong vòng 7 ngày với lỗi từ nhà sản xuất." },
    { icon: ShieldCheck, title: "Bảo hành 12 tháng", desc: "Bảo hành chính hãng, hỗ trợ sửa chữa tận nơi." },
    { icon: Truck, title: "Miễn phí vận chuyển", desc: "Freeship toàn quốc cho đơn hàng từ 5 triệu." },
    { icon: BadgeCheck, title: "100% chính hãng", desc: "Cam kết sản phẩm chính hãng, có hóa đơn VAT." },
];
