'use client'

import { useState } from 'react'

interface NewsItem {
  id: number
  title: string
  category: string
  date: string
  author: string
  desc: string
}

type CategoryColorMap = Record<string, string>

const allNews: NewsItem[] = [
  {
    id: 1,
    title: '6G 이동통신 표준화 대응 전략 연구 보고서 발간',
    category: 'ICT정책',
    date: '2026.02.28',
    author: '김정책',
    desc: 'KISDI 연구팀이 6G 시대를 대비한 국내 표준화 전략과 주파수 정책 방향을 담은 보고서를 발간했습니다.',
  },
  {
    id: 2,
    title: '플랫폼 경제의 독과점 규제 방안 연구',
    category: '디지털경제',
    date: '2026.02.24',
    author: '이디지털',
    desc: '빅테크 플랫폼의 시장 지배력 남용 사례를 분석하고 공정경쟁 환경 조성을 위한 규제 방안을 모색합니다.',
  },
  {
    id: 3,
    title: 'AI 기반 허위정보 탐지 시스템 연구',
    category: '미디어',
    date: '2026.02.20',
    author: '박미디어',
    desc: '딥페이크와 허위정보 확산 방지를 위한 AI 탐지 기술과 미디어 정책 방향을 연구합니다.',
  },
  {
    id: 4,
    title: '디지털 포용 정책 성과 평가 연구',
    category: '정책평가',
    date: '2026.02.15',
    author: '최포용',
    desc: '취약계층의 디지털 접근성 향상을 위한 정책 효과를 분석하고 개선 방향을 제시합니다.',
  },
  {
    id: 5,
    title: '데이터 산업 활성화를 위한 법제도 개선 방안',
    category: '법제연구',
    date: '2026.02.10',
    author: '정데이터',
    desc: '개인정보 보호와 데이터 활용의 균형을 위한 법제도 정비 방안을 연구합니다.',
  },
  {
    id: 6,
    title: '메타버스 산업 육성을 위한 정책 인프라 구축',
    category: '신산업',
    date: '2026.02.05',
    author: '한가상',
    desc: '국내 메타버스 산업의 경쟁력 강화를 위한 규제 샌드박스 확대와 지원 정책을 분석합니다.',
  },
]

const categories: string[] = ['전체', 'ICT정책', '디지털경제', '미디어', '법제연구', '신산업', '정책평가']

const categoryColors: CategoryColorMap = {
  ICT정책: 'bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-400',
  디지털경제: 'bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300',
  미디어: 'bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300',
  법제연구: 'bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-400',
  신산업: 'bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-400',
  정책평가: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/40 dark:text-yellow-300',
}

export default function NewsPage() {
  const [active, setActive] = useState<string>('전체')

  const filtered = active === '전체' ? allNews : allNews.filter((n) => n.category === active)

  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen">
      <div className="bg-gradient-to-r from-kisdi-dark to-kisdi-red py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-white mb-4">뉴스 & 공지</h1>
          <p className="text-white/85 text-lg">KISDI의 최신 연구 소식을 전해드립니다</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActive(cat)}
              className={`px-4 py-2 rounded-sm text-sm font-medium transition-colors ${
                active === cat
                  ? 'bg-kisdi-red text-white'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item) => (
            <article
              key={item.id}
              className="bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300 cursor-pointer border-t-2 border-t-kisdi-red"
            >
              <div className="flex items-center justify-between mb-4">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    categoryColors[item.category] ?? 'bg-gray-100 text-gray-700'
                  }`}
                >
                  {item.category}
                </span>
                <span className="text-gray-400 text-xs">{item.date}</span>
              </div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-2 line-clamp-2">{item.title}</h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm line-clamp-2 mb-4">{item.desc}</p>
              <p className="text-xs text-gray-400">by {item.author}</p>
            </article>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20 text-gray-400">
            <p className="text-lg">해당 카테고리의 소식이 없습니다.</p>
          </div>
        )}
      </div>
    </div>
  )
}

