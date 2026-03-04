'use client'

import Link from 'next/link'
import { useMemo, useState } from 'react'

export interface NewsItem {
  id: string
  title: string
  category: string
  date: string
  author: string
  desc: string
}

const categoryColors: Record<string, string> = {
  ICT정책: 'bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-400',
  디지털경제: 'bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300',
  미디어: 'bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300',
  법제연구: 'bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-400',
  신산업: 'bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-400',
  정책평가: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/40 dark:text-yellow-300',
  기타: 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300',
}

interface Props {
  initialItems: NewsItem[]
}

export default function NewsClient({ initialItems }: Props) {
  const [active, setActive] = useState('전체')

  const categories = useMemo(() => {
    const set = new Set<string>()
    initialItems.forEach((n) => {
      if (n.category) set.add(n.category)
    })
    return ['전체', ...Array.from(set)]
  }, [initialItems])

  const filtered =
    active === '전체' ? initialItems : initialItems.filter((n) => n.category === active)

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
            <Link
              key={item.id}
              href={`/news/${item.id}`}
              className="block bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300 cursor-pointer border-t-2 border-t-kisdi-red"
            >
              <div className="flex items-center justify-between mb-4">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    categoryColors[item.category] ?? categoryColors['기타']
                  }`}
                >
                  {item.category}
                </span>
                <span className="text-gray-400 text-xs">{item.date}</span>
              </div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-2 line-clamp-2">
                {item.title}
              </h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm line-clamp-2 mb-4">
                {item.desc}
              </p>
              <p className="text-xs text-gray-400">by {item.author}</p>
            </Link>
          ))}

          {filtered.length === 0 && (
            <div className="text-center py-20 text-gray-400">
              <p className="text-lg">해당 카테고리의 소식이 없습니다.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

