export default function Footer() {
  return (
    <footer className="bg-[#0B0B0B] border-t border-white/10 py-16">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">

        <div>
          <h4 className="text-xl font-semibold text-[#D4AF37]">
            BiteBox
          </h4>
          <p className="mt-4 text-gray-400">
            Premium food delivery experience.
          </p>
        </div>

        {["Company", "Explore", "Support"].map((title) => (
          <div key={title}>
            <h5 className="text-white font-semibold mb-4">{title}</h5>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>About</li>
              <li>Menu</li>
              <li>Contact</li>
            </ul>
          </div>
        ))}
      </div>

      <p className="mt-12 text-center text-gray-500 text-sm">
        © 2025 BiteBox. All rights reserved.
      </p>
    </footer>
  );
}
