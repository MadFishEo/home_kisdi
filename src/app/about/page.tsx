import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "기관 소개 | KISDI - 한국정보통신학술개발연구원",
  description:
    "KISDI의 역사, 비전, 그리고 미래. 설립 1992년, 연구원 380+, 정책보고서 4,500+.",
};

interface Milestone {
  year: string;
  text: string;
}

const milestones: Milestone[] = [
  { year: "1992", text: "KISDI 설립 — 정보통신정책연구원 개원" },
  { year: "1998", text: "IMF 이후 IT 강국 기반 마련 — 인터넷 정책 연구 선도" },
  { year: "2007", text: "방송통신 융합 연구 — 미디어 정책 연구 확대" },
  { year: "2016", text: "4차 산업혁명 대응 — AI·빅데이터 정책 연구 시작" },
  { year: "2026", text: "디지털 경제 연구센터 확대 — 6G·메타버스 연구 강화" },
];

export default function AboutPage() {
  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen">
      <div className="bg-gradient-to-r from-kisdi-dark to-kisdi-red py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-white mb-4">기관 소개</h1>
          <p className="text-white/85 text-lg">
            KISDI의 역사, 비전, 그리고 미래
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
        <section className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-kisdi-red dark:text-red-400 font-semibold text-sm uppercase tracking-widest">
              Mission & Vision
            </span>
            <h2 className="mt-3 text-3xl font-bold text-gray-900 dark:text-white mb-6">
              사명과 비전
            </h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
              KISDI는 정보통신 정책 연구를 통해 대한민국의 디지털 전환과 ICT
              산업 발전에 기여합니다. 실증적 데이터와 심층적 분석을 바탕으로
              정부의 정보통신 정책 수립을 지원합니다.
            </p>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              우리는 디지털 경제, 방송·미디어, 네트워크 인프라, 데이터·AI 정책
              등 ICT 전 영역에 걸쳐 미래 사회가 필요로 하는 정책적 통찰을
              제공합니다.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { label: "설립연도", value: "1992" },
              { label: "연구원", value: "380+" },
              { label: "정책보고서", value: "4,500+" },
              { label: "정책자문", value: "230+" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 text-center"
              >
                <p className="text-3xl font-bold text-kisdi-red dark:text-red-400">
                  {stat.value}
                </p>
                <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-10">
            주요 연혁
          </h2>
          <div className="relative border-l-2 border-kisdi-red dark:border-red-600 pl-8 space-y-8">
            {milestones.map((m) => (
              <div key={m.year} className="relative">
                <div className="absolute -left-10 w-4 h-4 bg-kisdi-red dark:bg-red-500 rounded-full border-4 border-white dark:border-gray-900" />
                <span className="text-kisdi-red dark:text-red-400 font-bold text-sm">
                  {m.year}
                </span>
                <p className="text-gray-700 dark:text-gray-300 mt-1">
                  {m.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-10">
            핵심 비전
          </h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              {
                title: "증거 기반 ICT 정책",
                desc: "방대한 통계·조사 데이터를 바탕으로 디지털 전환과 ICT 산업 발전을 뒷받침하는 정책 근거를 만듭니다.",
                keywords: ["실증 분석", "정책평가", "데이터 거버넌스"],
              },
              {
                title: "포용적 디지털 사회",
                desc: "디지털 격차와 미디어 환경 변화를 분석하여 국민 모두가 혜택을 누리는 포용적 디지털 사회를 지향합니다.",
                keywords: ["디지털 포용", "미디어 다양성", "사회적 신뢰"],
              },
              {
                title: "미래 기술·시장 통찰",
                desc: "AI, 6G, 메타버스 등 미래 기술과 플랫폼 경제의 변화를 전망하고, 국가 전략과 글로벌 협력 방향을 제시합니다.",
                keywords: ["6G·네트워크", "플랫폼 경제", "국제 협력"],
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 flex flex-col"
              >
                <h3 className="font-bold text-gray-900 dark:text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4">
                  {item.desc}
                </p>
                <div className="mt-auto flex flex-wrap gap-2">
                  {item.keywords.map((k) => (
                    <span
                      key={k}
                      className="px-2 py-1 text-xs rounded-full bg-red-50 dark:bg-red-900/30 text-kisdi-red dark:text-red-300"
                    >
                      {k}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
