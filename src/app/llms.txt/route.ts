export function GET() {
  const content = `# KISDI - 한국정보통신학술개발연구원

> KISDI(한국정보통신학술개발연구원)는 1992년 설립된 정보통신 정책 전문 연구기관으로, 디지털 경제·미디어·네트워크 사회의 변화를 분석하고 정책 방향을 제시합니다. 연구원 380+, 정책보고서 4,500+, 진행 중 프로젝트 124+.

## Pages

- [홈](https://kisdi.cultzup.com/): 메인 페이지. 히어로 섹션(2026년도 ICT 정책 연구 보고서 발표), 핵심 연구 분야(정보통신 정책, 디지털 경제, 미디어 & 사회) 소개, 최신 소식 목록을 제공합니다.

- [기관 소개](https://kisdi.cultzup.com/about): KISDI의 사명과 비전, 주요 연혁(1992~2026), 핵심 비전(증거 기반 ICT 정책, 포용적 디지털 사회, 미래 기술·시장 통찰)을 소개합니다. 설립 1992년, 연구원 380+, 정책보고서 4,500+, 정책자문 230+.

- [연구 프로그램](https://kisdi.cultzup.com/research): 6개 연구 분야를 소개합니다. ICT정책연구(38개 프로젝트), 디지털경제(30개), 방송·미디어(22개), 네트워크·인프라(18개), 데이터·AI정책(26개), 사이버보안(14개). 정부자문 230, 국제협력 68+.

- [교육 프로그램](https://kisdi.cultzup.com/education): 교육 과정(전문연수 3~6개월, 위탁교육 1~3개월, 국제연수 2~4주)과 온라인 강좌(ICT 정책 입문, 디지털 경제의 이해, 데이터 정책과 개인정보보호, 6G 시대의 통신 정책) 정보를 제공합니다.

- [소식](https://kisdi.cultzup.com/news): KISDI의 최신 뉴스, 정책 연구 발표, 공지사항 목록 페이지입니다.

- [소식 상세](https://kisdi.cultzup.com/news/[id]): 개별 소식의 상세 내용을 마크다운 형식으로 보여줍니다.

- [연락처](https://kisdi.cultzup.com/contact): KISDI 연락처 및 문의 정보를 제공합니다.
`;

  return new Response(content, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
}
