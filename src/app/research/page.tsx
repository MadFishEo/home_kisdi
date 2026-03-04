import type { Metadata } from 'next'

interface ResearchArea {
  icon: string
  title: string
  projects: number
  desc: string
  tags: string[]
}

export const metadata: Metadata = {
  title: '연구 프로그램 | KISDI - 한국정보통신학술개발연구원',
  description: '대한민국 ICT 정책의 실증적 근거를 만들어가는 KISDI의 연구 프로그램과 연구 분야를 소개합니다.',
}

const researchAreas: ResearchArea[] = [
  {
    icon: '📡',
    title: 'ICT정책연구',
    projects: 38,
    desc: '정보통신 기술 발전에 따른 국내외 규제 동향 분석 및 진흥 정책 방향 연구',
    tags: ['ICT정책', '규제연구', '법제분석'],
  },
  {
    icon: '🌐',
    title: '디지털경제',
    projects: 30,
    desc: '플랫폼 경제, 데이터 산업, 디지털 전환이 산업 생태계에 미치는 영향과 경제적 파급효과 분석',
    tags: ['플랫폼경제', '데이터산업', 'AI경제'],
  },
  {
    icon: '📺',
    title: '방송·미디어',
    projects: 22,
    desc: '방송·통신 융합 환경에서의 미디어 정책, 콘텐츠 산업 진흥, OTT 규제 방안 연구',
    tags: ['방송정책', 'OTT', '콘텐츠산업'],
  },
  {
    icon: '🔌',
    title: '네트워크·인프라',
    projects: 18,
    desc: '5G/6G 이동통신, 주파수 정책, 초고속인터넷 인프라 구축 및 정책 지원 연구',
    tags: ['5G/6G', '주파수정책', '인프라'],
  },
  {
    icon: '🤖',
    title: '데이터·AI정책',
    projects: 26,
    desc: '개인정보 보호, 데이터 활용, 인공지능 윤리 및 거버넌스 정책 방향 연구',
    tags: ['개인정보', 'AI거버넌스', '데이터법'],
  },
  {
    icon: '🔐',
    title: '사이버보안',
    projects: 14,
    desc: '사이버 위협 대응 체계, 정보보호 산업 육성, 국가 사이버안보 전략 연구',
    tags: ['사이버보안', '정보보호', '보안정책'],
  },
]

export default function ResearchPage() {
  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen">
      <div className="bg-gradient-to-r from-kisdi-dark to-kisdi-red py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-white mb-4">연구 프로그램</h1>
          <p className="text-white/85 text-lg">대한민국 ICT 정책의 실증적 근거를 만들어갑니다</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {[
            { label: '진행중 프로젝트', value: '124+' },
            { label: '정책보고서', value: '4,500+' },
            { label: '정부자문', value: '230' },
            { label: '국제협력', value: '68+' },
          ].map((s) => (
            <div key={s.label} className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 text-center">
              <p className="text-3xl font-bold text-kisdi-red dark:text-red-400">{s.value}</p>
              <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">{s.label}</p>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">연구 분야</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {researchAreas.map((area) => (
            <div
              key={area.title}
              className="border border-gray-200 dark:border-gray-700 rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300 bg-white dark:bg-gray-800 border-l-4 border-l-kisdi-red"
            >
              <div className="text-3xl mb-4">{area.icon}</div>
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-bold text-gray-900 dark:text-white text-lg">{area.title}</h3>
                <span className="text-xs bg-kisdi-red/10 text-kisdi-red dark:text-red-400 px-2 py-1 rounded-full ml-2 flex-shrink-0">
                  {area.projects}개 프로젝트
                </span>
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4">{area.desc}</p>
              <div className="flex flex-wrap gap-2">
                {area.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-2 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

