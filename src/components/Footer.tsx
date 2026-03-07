import Link from 'next/link'

const navItems = [
  { label: '홈', path: '/' },
  { label: '소개', path: '/about' },
  { label: '연구', path: '/research' },
  { label: '교육', path: '/education' },
  { label: '소식', path: '/news' },
  { label: '문의', path: '/contact' },
]

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 text-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid md:grid-cols-2 gap-10 mb-10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-kisdi-red rounded-sm flex items-center justify-center">
                <span className="text-white font-bold text-xs">KI</span>
              </div>
              <div>
                <p className="text-gray-900 font-bold text-lg leading-tight">KISDI</p>
                <p className="text-kisdi-red text-xs">한국정보통신학술개발연구원</p>
              </div>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              대한민국의 정보통신 정책을 선도하는 전문 연구기관입니다.
              디지털 경제, 미디어, 네트워크 사회의 변화를 분석하고 정책 방향을 제시합니다.
            </p>
          </div>

          <div>
            <h4 className="text-gray-900 font-semibold mb-4">사이트 메뉴</h4>
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              {navItems.map((item) => (
                <li key={item.path} className="flex-shrink-0">
                  <Link href={item.path} className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500">© 2026 KISDI. All rights reserved.</p>
          <div className="flex gap-6 text-xs text-gray-500">
            <a href="#" className="hover:text-gray-900 transition-colors">개인정보처리방침</a>
            <a href="#" className="hover:text-gray-900 transition-colors">이용약관</a>
            <a href="#" className="hover:text-gray-900 transition-colors">접근성 정책</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
