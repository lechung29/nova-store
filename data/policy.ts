/** @format */

import { CreditCard, RotateCcw, Shield, Truck } from "lucide-react";

export const policies = [
    {
        id: "doi-tra",
        icon: RotateCcw,
        accent: "#2997ff",
        label: "Đổi trả & Thu cũ",
        title: "Chính sách đổi trả & thu cũ lên đời",
        summary: "Bao test 1 đổi 1 trong 7 ngày với lỗi từ nhà sản xuất",
        items: [
            {
                type: "main",
                text: "Bao test 1 đổi 1 trong vòng 7 ngày đối với các lỗi từ nhà sản xuất như: nguồn, màn hình, Face ID, vân tay và các lỗi nặng trên main (treo táo, mất sóng, mất IMEI, lỗi CPU, hỏng ổ cứng).",
            },
            {
                type: "main",
                text: "Sau 7 ngày, Nova Store tiếp tục hỗ trợ sửa chữa theo chính sách bảo hành.",
            },
            { type: "bullet", text: "Gói bảo hành vàng 12 tháng (tìm hiểu thêm)" },
            {
                type: "bullet",
                text: "Nova Store hỗ trợ thu cũ lên đời nếu khách hàng có nhu cầu, giá thiết bị sẽ được định đội ngũ kĩ thuật định giá theo tình trạng thực tế, độ mới và khả năng sử dụng. Đảm bảo giá thu minh bạch, hợp lý, đảm bảo quyền lợi cho khách hàng.",
            },
            {
                type: "bullet",
                text: "Nova Store không áp dụng chính sách thu lại máy ngang giá trong trường hợp Quý khách không có nhu cầu sử dụng sau khi đã hoàn tất thanh toán.",
            },
        ],
    },
    {
        id: "bao-hanh",
        icon: Shield,
        accent: "#30d158",
        label: "Bảo hành",
        title: "Chính sách bảo hành",
        summary: "Bảo hành chính hãng Apple 12 tháng, hỗ trợ toàn quốc",
        items: [
            {
                type: "main",
                text: "Tất cả sản phẩm tại Nova Store được bảo hành chính hãng 12 tháng theo tiêu chuẩn Apple Việt Nam.",
            },
            { type: "bullet", text: "Hỗ trợ kiểm tra máy miễn phí trước khi mua" },
            { type: "bullet", text: "Sản phẩm lỗi phần cứng được đổi máy mới trong 7 ngày đầu tiên" },
            { type: "bullet", text: "Bảo hành tại tất cả TGDĐ, FPT Shop và Apple Premium Reseller toàn quốc" },
            { type: "bullet", text: "Máy đã kích hoạt bảo hành Apple Care+ được hưởng đầy đủ quyền lợi" },
        ],
    },
    {
        id: "thanh-toan",
        icon: CreditCard,
        accent: "#ff9f0a",
        label: "Thanh toán",
        title: "Chính sách thanh toán",
        summary: "Nhiều hình thức thanh toán linh hoạt, an toàn và tiện lợi",
        items: [
            {
                type: "main",
                text: "Nova Store hỗ trợ đa dạng hình thức thanh toán để mang lại trải nghiệm mua sắm tiện lợi nhất cho Quý khách.",
            },
            { type: "bullet", text: "Thanh toán tiền mặt trực tiếp tại cửa hàng" },
            { type: "bullet", text: "Chuyển khoản ngân hàng – xác nhận đơn ngay khi nhận tiền" },
            { type: "bullet", text: "Quét mã QR VietQR / MoMo / ZaloPay / VNPay" },
            { type: "bullet", text: "Trả góp 0% qua thẻ tín dụng các ngân hàng (điều kiện áp dụng)" },
            { type: "bullet", text: "Mọi giao dịch đều có hóa đơn VAT theo yêu cầu" },
        ],
    },
    {
        id: "van-chuyen",
        icon: Truck,
        accent: "#bf5af2",
        label: "Vận chuyển",
        title: "Chính sách vận chuyển",
        summary: "Giao hàng nhanh trong ngày tại Đà Nẵng, toàn quốc 1–3 ngày",
        items: [
            {
                type: "main",
                text: "Nova Store giao hàng toàn quốc với đội ngũ đối tác vận chuyển uy tín. Hàng được đóng gói cẩn thận, có bảo hiểm vận chuyển.",
            },
            { type: "bullet", text: "Nội thành Đà Nẵng: giao trong ngày nếu đặt trước 17:00, phí 20.000đ" },
            { type: "bullet", text: "Toàn quốc: 1–3 ngày làm việc qua GHN / GHTK / J&T" },
            { type: "bullet", text: "Miễn phí vận chuyển cho đơn hàng từ 5.000.000đ trở lên" },
            { type: "bullet", text: "Cho phép khách kiểm tra hàng trước khi thanh toán khi nhận COD" },
            { type: "bullet", text: "Hàng hỏng trong quá trình vận chuyển được đổi mới 100%" },
        ],
    },
];
