import type { Metadata } from "next";

interface Program {
  level: string;
  icon: string;
  duration: string;
  departments: string[];
  desc: string;
}

interface OnlineProgram {
  title: string;
  duration: string;
  enrolled: string;
  level: string;
}

export const metadata: Metadata = {
  title: "교육 프로그램 | KISDI - 한국정보통신학술개발연구원",
  description:
    "ICT 정책 전문가를 육성하는 KISDI의 교육 과정과 온라인 강좌 정보를 제공합니다.",
};

const programs: Program[] = [
  {
    level: "전문연수",
    icon: "🎓",
    duration: "3~6개월",
    departments: [
      "ICT 정책 전문가 과정",
      "디지털 경제 분석 과정",
      "방송통신 규제 과정",
      "데이터 거버넌스 과정",
    ],
    desc: "정부 부처 및 공공기관 담당자를 위한 ICT 정책 전문 연수 프로그램",
  },
  {
    level: "위탁교육",
    icon: "📜",
    duration: "1~3개월",
    departments: [
      "디지털 정책 입문",
      "AI·빅데이터 정책 이해",
      "사이버보안 정책 과정",
    ],
    desc: "기업 및 기관 임직원을 위한 맞춤형 ICT 정책 위탁교육 프로그램",
  },
  {
    level: "국제연수",
    icon: "🌐",
    duration: "2~4주",
    departments: [
      "해외 ICT 정책 벤치마킹",
      "국제 디지털 협력 과정",
      "개도국 ICT 정책 지원",
    ],
    desc: "국제 ICT 정책 협력 및 개발도상국 역량 강화를 위한 국제 연수 과정",
  },
];

const onlinePrograms: OnlineProgram[] = [
  {
    title: "ICT 정책 입문",
    duration: "6주",
    enrolled: "8,500+",
    level: "입문",
  },
  {
    title: "디지털 경제의 이해",
    duration: "8주",
    enrolled: "6,200+",
    level: "중급",
  },
  {
    title: "데이터 정책과 개인정보보호",
    duration: "6주",
    enrolled: "9,100+",
    level: "입문",
  },
  {
    title: "6G 시대의 통신 정책",
    duration: "4주",
    enrolled: "3,800+",
    level: "고급",
  },
];

export default function EducationPage() {
  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen">
      <div className="bg-gradient-to-r from-kisdi-dark to-kisdi-red py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-white mb-4">교육 프로그램</h1>
          <p className="text-white/85 text-lg">
            ICT 정책 전문가를 육성하는 교육을 제공합니다
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
        <section>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
            교육 과정
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {programs.map((p) => (
              <div
                key={p.level}
                className="border border-gray-200 dark:border-gray-700 rounded-2xl p-6 bg-white dark:bg-gray-800 border-t-4 border-t-kisdi-red"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">{p.icon}</span>
                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-white text-xl">
                      {p.level}
                    </h3>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      기간: {p.duration}
                    </span>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                  {p.desc}
                </p>
                <div className="space-y-2">
                  {p.departments.map((dep) => (
                    <div
                      key={dep}
                      className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300"
                    >
                      <span className="w-1.5 h-1.5 bg-kisdi-red dark:bg-red-400 rounded-full flex-shrink-0" />
                      {dep}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
            온라인 강좌
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {onlinePrograms.map((course) => (
              <div
                key={course.title}
                className="flex items-center gap-4 p-6 border border-gray-200 dark:border-gray-700 rounded-2xl hover:shadow-md transition-shadow bg-white dark:bg-gray-800"
              >
                <div className="w-14 h-14 bg-kisdi-red/10 dark:bg-red-900/30 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-kisdi-red dark:text-red-400 font-bold text-lg">
                    K
                  </span>
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-gray-900 dark:text-white mb-1">
                    {course.title}
                  </h3>
                  <div className="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400">
                    <span>{course.duration}</span>
                    <span>•</span>
                    <span>{course.enrolled} 수강</span>
                    <span className="px-2 py-0.5 bg-red-50 dark:bg-red-900/40 text-kisdi-red dark:text-red-400 rounded-full text-xs">
                      {course.level}
                    </span>
                  </div>
                </div>
                <button className="px-4 py-2 bg-kisdi-red text-white text-sm rounded-sm hover:bg-kisdi-dark transition-colors flex-shrink-0">
                  수강하기
                </button>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
