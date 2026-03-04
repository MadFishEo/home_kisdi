import { Link } from 'react-router-dom'

const newsData = [
  {
    id: 1,
    title: '6G 이동통신 표준화 대응 전략 연구 보고서 발간',
    author: '김정책',
    date: '2026.02.28',
    description:
      'KISDI 연구팀이 6G 시대를 대비한 국내 표준화 전략과 주파수 정책 방향을 담은 보고서를 발간했습니다. 2030년 6G 상용화를 위한 기술·정책 과제를 제시합니다.',
    tags: ['#6G', '#표준화', '#주파수정책'],
    category: 'ICT정책',
    featured: true,
  },
  {
    id: 2,
    title: '플랫폼 경제의 독과점 규제 방안 연구',
    author: '이디지털',
    date: '2026.02.24',
    description: '빅테크 플랫폼의 시장 지배력 남용 사례를 분석하고 공정경쟁 환경 조성을 위한 규제 방안을 모색합니다.',
    tags: ['#플랫폼', '#공정경쟁', '#빅테크'],
    category: '디지털경제',
  },
  {
    id: 3,
    title: 'AI 기반 허위정보 탐지 시스템 연구',
    author: '박미디어',
    date: '2026.02.20',
    description: '딥페이크와 허위정보 확산 방지를 위한 AI 탐지 기술과 미디어 정책 방향을 연구합니다.',
    tags: ['#허위정보', '#딥페이크', '#미디어'],
    category: '미디어',
  },
  {
    id: 4,
    title: '디지털 포용 정책 성과 평가 연구',
    author: '최포용',
    date: '2026.02.15',
    description: '취약계층의 디지털 접근성 향상을 위한 정책 효과를 분석하고 개선 방향을 제시합니다.',
    tags: ['#디지털포용', '#취약계층', '#접근성'],
    category: '정책평가',
  },
  {
    id: 5,
    title: '데이터 산업 활성화를 위한 법제도 개선 방안',
    author: '정데이터',
    date: '2026.02.10',
    description: '개인정보 보호와 데이터 활용의 균형을 위한 법제도 정비 방안을 연구합니다.',
    tags: ['#데이터법', '#개인정보', '#데이터경제'],
    category: '법제연구',
  },
  {
    id: 6,
    title: '메타버스 산업 육성을 위한 정책 인프라 구축',
    author: '한가상',
    date: '2026.02.05',
    description: '국내 메타버스 산업의 경쟁력 강화를 위한 규제 샌드박스 확대와 지원 정책을 분석합니다.',
    tags: ['#메타버스', '#XR', '#산업정책'],
    category: '신산업',
  },
]

export default function LatestNews() {
  const [featured, ...rest] = newsData

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-kisdi-red dark:text-red-400 font-semibold text-sm uppercase tracking-widest">
              Latest News
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
              최신 소식
            </h2>
          </div>
          <Link
            to="/news"
            className="inline-flex items-center text-kisdi-red dark:text-red-400 font-medium hover:underline"
          >
            전체 보기
            <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        {/* Featured Article */}
        <article className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300 mb-6">
          <div className="p-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 rounded-none bg-kisdi-red text-white text-xs font-bold uppercase tracking-wide">
                {featured.category}
              </span>
              <span className="text-gray-400 dark:text-gray-500 text-sm">{featured.date}</span>
              <span className="text-xs text-white bg-gray-400 dark:bg-gray-600 px-2 py-0.5 rounded-full">주요 보고서</span>
            </div>
            <h3 className="font-bold text-gray-900 dark:text-white text-2xl leading-snug mb-4">
              {featured.title}
            </h3>
            <p className="text-gray-500 dark:text-gray-400 leading-relaxed mb-6">
              {featured.description}
            </p>
            <div className="flex items-center justify-between">
              <span className="text-gray-400 dark:text-gray-500 text-sm">by {featured.author}</span>
              <div className="flex gap-2">
                {featured.tags.map((tag) => (
                  <span key={tag} className="text-sm text-kisdi-red dark:text-red-400 hover:underline cursor-pointer">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </article>

        {/* Smaller Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {rest.map((item) => (
            <article
              key={item.id}
              className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-shadow duration-300 flex flex-col"
            >
              <div className="p-5 flex flex-col flex-1">
                <div className="flex items-center justify-between mb-3">
                  <span className="px-2 py-0.5 bg-red-50 dark:bg-red-900/20 text-kisdi-red dark:text-red-400 text-xs font-semibold rounded">
                    {item.category}
                  </span>
                  <span className="text-gray-400 dark:text-gray-500 text-xs">{item.date}</span>
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white text-sm leading-snug mb-2 line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-gray-500 dark:text-gray-400 text-xs leading-relaxed line-clamp-2 flex-1">
                  {item.description}
                </p>
                <div className="mt-3 pt-3 border-t border-gray-100 dark:border-gray-800">
                  <span className="text-gray-400 dark:text-gray-500 text-xs">by {item.author}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
