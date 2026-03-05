import Link from 'next/link'

type ApiNewsItem = {
  _id: string
  title: string
  slug?: string
  content: string
  author: string
  visible?: boolean
  publishedAt?: string
  createdAt?: string
  hashtags?: string[]
}

function formatDate(value?: string) {
  if (!value) return ''
  const d = new Date(value)
  if (Number.isNaN(d.getTime())) return ''
  return d.toLocaleDateString('ko-KR', { year: 'numeric', month: '2-digit', day: '2-digit' })
}

function toDesc(content: string) {
  const plain = content.replace(/[#*_>`]/g, '').replace(/\n+/g, ' ').trim()
  return plain.length <= 120 ? plain : `${plain.slice(0, 120)}…`
}

async function fetchLatestNews(): Promise<ApiNewsItem[]> {
  const base = process.env.VITE_HOME_SERVER_BASE_URL
  const siteKey = process.env.VITE_SITE_KEY ?? 'kisdi'
  if (!base) return []
  try {
    const res = await fetch(`${base}/api/public/news?site=${siteKey}&limit=6`, {
      next: { revalidate: 60 },
    })
    if (!res.ok) return []
    const json = (await res.json()) as { success: boolean; data?: { items?: ApiNewsItem[] } }
    return json.success && json.data?.items ? json.data.items : []
  } catch {
    return []
  }
}

export default async function LatestNews() {
  const items = await fetchLatestNews()
  if (items.length === 0) return null

  const [featured, ...rest] = items

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
          <Link href="/news" className="inline-flex items-center text-kisdi-red dark:text-red-400 font-medium hover:underline">
            전체 보기
            <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        <Link href={`/news/${featured.slug || featured._id}`} className="block">
          <article className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300 mb-6">
            <div className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 rounded-none bg-kisdi-red text-white text-xs font-bold uppercase tracking-wide">
                  {featured.hashtags?.[0] ?? '소식'}
                </span>
                <span className="text-gray-400 dark:text-gray-500 text-sm">
                  {formatDate(featured.publishedAt ?? featured.createdAt)}
                </span>
              </div>
              <h3 className="font-bold text-gray-900 dark:text-white text-2xl leading-snug mb-4">{featured.title}</h3>
              <p className="text-gray-500 dark:text-gray-400 leading-relaxed mb-6">{toDesc(featured.content)}</p>
              <div className="flex items-center justify-between">
                <span className="text-gray-400 dark:text-gray-500 text-sm">by {featured.author}</span>
                <div className="flex gap-2 flex-wrap justify-end">
                  {featured.hashtags?.map((tag) => (
                    <span key={tag} className="text-sm text-kisdi-red dark:text-red-400">#{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          </article>
        </Link>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {rest.map((item) => (
            <Link key={item._id} href={`/news/${item.slug || item._id}`} className="flex">
              <article className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-shadow duration-300 flex flex-col flex-1">
                <div className="p-5 flex flex-col flex-1">
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-2 py-0.5 bg-red-50 dark:bg-red-900/20 text-kisdi-red dark:text-red-400 text-xs font-semibold rounded">
                      {item.hashtags?.[0] ?? '소식'}
                    </span>
                    <span className="text-gray-400 dark:text-gray-500 text-xs">
                      {formatDate(item.publishedAt ?? item.createdAt)}
                    </span>
                  </div>
                  <h3 className="font-bold text-gray-900 dark:text-white text-sm leading-snug mb-2 line-clamp-2">{item.title}</h3>
                  <p className="text-gray-500 dark:text-gray-400 text-xs leading-relaxed line-clamp-2 flex-1">{toDesc(item.content)}</p>
                  <div className="mt-3 pt-3 border-t border-gray-100 dark:border-gray-800">
                    <span className="text-gray-400 dark:text-gray-500 text-xs">by {item.author}</span>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
