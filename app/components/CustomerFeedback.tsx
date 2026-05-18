"use client";

import { Star, Quote } from "lucide-react";
import { Reveal } from "./Shared";

const reviews = [
  { name: "Minh Anh", location: "TP. Hồ Chí Minh", rating: 5, product: "Đầm Linen Mira", text: "Vải linen mềm, mát và rất thoải mái cho ngày làm việc. Form đầm vừa vặn, tôn dáng. Đóng gói cẩn thận, giao nhanh — sẽ ủng hộ dài dài.", avatar: "MA" },
  { name: "Thúy Ngân", location: "Hà Nội", rating: 5, product: "Áo Ren Thêu Nơ", text: "Mua lần thứ 3 ở Zamy rồi, chất lượng luôn ổn định. Áo ren rất xinh, chi tiết nơ điểm nhấn thanh lịch. Bạn bè ai cũng hỏi mua ở đâu.", avatar: "TN" },
  { name: "Hương Giang", location: "Đà Nẵng", rating: 5, product: "Set Croptop & Chân Váy", text: "Set đồ trẻ trung và rất tôn dáng. Vải co giãn thoải mái, mặc dạo phố hay đi cafe đều hợp. Giá hợp lý cho chất lượng này.", avatar: "HG" },
  { name: "Thu Trang", location: "Cần Thơ", rating: 5, product: "Đầm Trắng Voan", text: "Đầm mặc đi đám cưới bạn, được khen rất nhiều. Voan mềm, dáng A-line che khuyết điểm tốt. Đáng đồng tiền bát gạo.", avatar: "TT" },
  { name: "Ngọc Trinh", location: "Bình Dương", rating: 4, product: "Đầm Hoa Nhí Vintage", text: "Phong cách retro rất đúng gu mình. Chỉ hơi rộng so với size thường mặc — gợi ý các bạn chọn nhỏ hơn 1 size để vừa nhất.", avatar: "NT" },
  { name: "Kim Ngân", location: "Hải Phòng", rating: 5, product: "Váy Liền Thân A-line", text: "Lần đầu mua online mà ưng quá! Váy đẹp y hình, chất vải dày dặn. Tư vấn size chuẩn — cảm ơn Zamy nhiều!", avatar: "KN" },
];

export function CustomerFeedback() {
  return (
    <section className="bg-gradient-to-b from-petal/40 to-white">
      <div className="max-w-[1280px] mx-auto px-5 py-16 lg:py-24">
        <Reveal>
          <div className="text-center mb-12">
            <p className="text-[10px] tracking-[0.32em] text-warm-gray uppercase mb-3">Customer Feedback</p>
            <h2 className="font-display text-3xl lg:text-[42px] text-charcoal italic">Khách hàng nói về Zamy</h2>
            <div className="w-10 h-[2px] bg-peony mx-auto mt-4" />
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {reviews.map((r, i) => (
            <Reveal key={i} delay={i * 80}>
              <div className="relative bg-white rounded-sm p-7 h-full flex flex-col shadow-[0_2px_12px_rgba(196,136,122,0.07)] hover:shadow-[0_4px_20px_rgba(196,136,122,0.12)] transition-shadow">
                <Quote size={28} className="text-peony/15 absolute top-5 right-5" strokeWidth={1.5} />
                <div className="flex items-center gap-0.5 mb-4">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} size={13} className={s <= r.rating ? "fill-gold text-gold" : "text-warm-gray-light"} />
                  ))}
                </div>
                <p className="text-[13.5px] text-charcoal-light leading-[1.7] flex-1 mb-5">{r.text}</p>
                <p className="text-[11px] text-peony mb-4 italic">— {r.product}</p>
                <div className="flex items-center gap-3 pt-4 border-t border-petal/70">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blush-light to-rose-mist-light flex items-center justify-center text-[12px] font-medium text-peony-deep">{r.avatar}</div>
                  <div>
                    <p className="text-[13px] font-medium text-charcoal leading-tight">{r.name}</p>
                    <p className="text-[11px] text-warm-gray">{r.location}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="text-center mt-10">
            <a href="#" className="text-[11px] tracking-[0.22em] uppercase text-peony font-medium border-b border-peony/40 pb-0.5 hover:border-peony">
              Xem thêm đánh giá
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
