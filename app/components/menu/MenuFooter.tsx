export default function MenuFooter() {
  return (
    <footer className="relative mt-32 bg-black text-white py-24 overflow-hidden">
      {/* Background text */}
      <h2 className="absolute inset-0 text-[120px] font-extrabold text-white/5 text-center">
        REVIEWS
      </h2>

      <div className="relative max-w-7xl mx-auto px-6 text-center">
        <h3 className="text-4xl font-semibold mb-4">
          Loved by Food Lovers
        </h3>
        <p className="text-gray-400 max-w-xl mx-auto">
          Thousands trust BiteBox for premium taste & fast delivery
        </p>

        <div className="mt-12 flex justify-center gap-10 text-[#D4AF37] text-sm">
          <span>★ 4.9 Rating</span>
          <span>10k+ Reviews</span>
          <span>Premium Quality</span>
        </div>
      </div>
    </footer>
  );
}
