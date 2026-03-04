import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section
      className="relative bg-gray-300"
      style={{ clipPath: "polygon(0 0, 100% 0, 100% 88%, 0 100%)" }}
    >
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 right-20 w-80 h-80 bg-black rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-64 h-64 bg-black/70 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 pb-48 md:py-40 md:pb-64">
        <div className="max-w-3xl">
          <span className="inline-block px-4 py-1.5 bg-black/5 text-gray-900 text-sm font-medium rounded-none border-l-4 border-gray-900 mb-8 backdrop-blur-sm">
            2026년도 ICT 정책 연구 보고서 발표
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-6 tracking-tight">
            디지털 미래를 위한
            <br />
            <span className="text-kisdi-red">정보통신 연구</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-800 mb-10 leading-relaxed max-w-2xl">
            KISDI는 대한민국의 정보통신 정책을 선도하는 전문 연구기관입니다.
            디지털 경제, 미디어, 네트워크 사회의 변화를 분석하고 정책 방향을
            제시합니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/research"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-white text-kisdi-red font-bold rounded-none hover:bg-red-50 transition-colors duration-200 shadow-xl"
            >
              연구 보기
              <svg
                className="w-4 h-4 ml-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
