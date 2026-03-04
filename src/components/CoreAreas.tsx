interface Area {
  icon: string
  title: string
  description: string
  tags: string[]
}

const areas: Area[] = [
  {
    icon: '📡',
    title: '정보통신 정책',
    description: '국내외 ICT 정책 동향을 분석하고 미래 정보통신 환경에 맞는 규제 및 진흥 정책을 연구합니다. 정부 정책 수립의 실증적 근거를 제공합니다.',
    tags: ['ICT정책', '규제연구', '정책분석'],
  },
  {
    icon: '🌐',
    title: '디지털 경제',
    description: '플랫폼 경제, 데이터 산업, 디지털 전환이 산업 생태계에 미치는 영향을 분석합니다. AI 경제학과 디지털 혁신의 경제적 파급효과를 연구합니다.',
    tags: ['플랫폼경제', '데이터산업', 'AI경제'],
  },
  {
    icon: '📱',
    title: '미디어 & 사회',
    description: '디지털 미디어의 사회적 영향, 미디어 리터러시, 정보 격차 문제를 연구합니다. 건강한 정보 생태계 조성을 위한 정책적 대안을 모색합니다.',
    tags: ['디지털미디어', '정보격차', '미디어정책'],
  },
]

export default function CoreAreas() {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-14">
          <span className="text-kisdi-red dark:text-red-400 font-semibold text-sm uppercase tracking-widest">
            Core Areas
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
            핵심 연구 분야
          </h2>
          <p className="mt-4 text-gray-500 dark:text-gray-400 max-w-xl">
            KISDI는 세 가지 핵심 영역에서 대한민국 ICT 발전을 이끕니다.
          </p>
        </div>

        <div className="space-y-6">
          {areas.map((area, index) => (
            <div
              key={area.title}
              className="flex gap-6 p-6 border border-gray-100 dark:border-gray-700 rounded-xl hover:shadow-lg transition-shadow duration-300 bg-white dark:bg-gray-800 border-l-4 border-l-kisdi-red"
            >
              <div className="w-16 h-16 bg-red-50 dark:bg-red-900/20 rounded-xl flex items-center justify-center text-3xl flex-shrink-0">
                {area.icon}
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xs font-bold text-kisdi-red dark:text-red-400 bg-red-50 dark:bg-red-900/20 px-2 py-0.5 rounded">
                    0{index + 1}
                  </span>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">{area.title}</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-3">{area.description}</p>
                <div className="flex flex-wrap gap-2">
                  {area.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs font-medium rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
