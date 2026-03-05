const milestones = [
  { year: '1992', text: 'KISDI 설립 — 정보통신정책연구원 개원' },
  { year: '1998', text: 'IMF 이후 IT 강국 기반 마련 — 인터넷 정책 연구 선도' },
  { year: '2007', text: '방송통신 융합 연구 — 미디어 정책 연구 확대' },
  { year: '2016', text: '4차 산업혁명 대응 — AI·빅데이터 정책 연구 시작' },
  { year: '2026', text: '디지털 경제 연구센터 확대 — 6G·메타버스 연구 강화' },
]

const leadership = [
  { name: '김정보', role: '원장', desc: 'ICT 정책 및 디지털 경제 전문가, 서울대학교 Ph.D.' },
  { name: '이통신', role: '부원장 (정책연구)', desc: '방송통신 정책 및 규제 전문가' },
  { name: '박미디어', role: '부원장 (디지털경제)', desc: '플랫폼 경제 및 데이터 정책 전문가' },
]

export default function About() {
  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen">
      {/* Page Header */}
      <div className="bg-gradient-to-r from-kisdi-dark to-kisdi-red py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-white mb-4">기관 소개</h1>
          <p className="text-white/85 text-lg">KISDI의 역사, 비전, 그리고 미래</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
        {/* Mission & Vision */}
        <section className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-kisdi-red dark:text-red-400 font-semibold text-sm uppercase tracking-widest">Mission & Vision</span>
            <h2 className="mt-3 text-3xl font-bold text-gray-900 dark:text-white mb-6">사명과 비전</h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
              KISDI는 정보통신 정책 연구를 통해 대한민국의 디지털 전환과 ICT 산업 발전에 기여합니다.
              실증적 데이터와 심층적 분석을 바탕으로 정부의 정보통신 정책 수립을 지원합니다.
            </p>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              우리는 디지털 경제, 방송·미디어, 네트워크 인프라, 데이터·AI 정책 등 ICT 전 영역에 걸쳐
              미래 사회가 필요로 하는 정책적 통찰을 제공합니다.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { label: '설립연도', value: '1992' },
              { label: '연구원', value: '380+' },
              { label: '정책보고서', value: '4,500+' },
              { label: '정책자문', value: '230+' },
            ].map((stat) => (
              <div key={stat.label} className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 text-center">
                <p className="text-3xl font-bold text-kisdi-red dark:text-red-400">{stat.value}</p>
                <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Timeline */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-10">주요 연혁</h2>
          <div className="relative border-l-2 border-kisdi-red dark:border-red-600 pl-8 space-y-8">
            {milestones.map((m) => (
              <div key={m.year} className="relative">
                <div className="absolute -left-10 w-4 h-4 bg-kisdi-red dark:bg-red-500 rounded-full border-4 border-white dark:border-gray-900" />
                <span className="text-kisdi-red dark:text-red-400 font-bold text-sm">{m.year}</span>
                <p className="text-gray-700 dark:text-gray-300 mt-1">{m.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Leadership */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-10">주요 인사</h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {leadership.map((person) => (
              <div key={person.name} className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-kisdi-dark to-kisdi-red rounded-full mx-auto mb-4 flex items-center justify-center text-white text-xl font-bold">
                  {person.name[0]}
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white">{person.name}</h3>
                <p className="text-kisdi-red dark:text-red-400 text-sm font-medium">{person.role}</p>
                <p className="text-gray-500 dark:text-gray-400 text-sm mt-2">{person.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
