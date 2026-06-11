title: Flow Motion : ConnectWave

connectwave 사의 clone 웹사이트 입니다.

URL:"https://daehyeonkim0326-sys.github.io/wave/",
    
ScrollTrigger 기반의 스크롤 반응형 Flow Motion을 활용한 ConnectWave 사의 홈페이지를 구현하였습니다.

1.진행 기간:2025.10.15~ 2025.10.17 (3일)

2.개발 인원: FrontEnd 1인 (Solo Project)

3.사용 기술 스택: Language: JavaScript (ES6+) Framework: React.js\nStyling: SCSS Design & Tool: Figma, Git, GitHub, photoshop
 
4.Concept: 플로우 모션을 이용한 다양한 사용자 경험 제공

5.디렉토리 구조 src assets=이미지 components=재사용 가능한 컴포넌트 styles=각 페이지별 scss pages=라우터로 연결되는 실제 화면(페이지)들 layout=레이아웃 전체 공통 구조 App.js=라우터+전체 앱 구조

6.제작 과정 [기획 및 디자인] Figma를 활용한 전체 와이어프레임 및 프로토타입 제작 공통 컬러 팔레트 및 컴포넌트 스타일 가이드 정립 [구현] react library를 활용하여 각 라우트 페이지 생성 js에서 ScrollTrigger를 활용하여 스크롤을 내릴때에 맞춰 반응형 페이지 구현

7.주요 기능 ScrollTrigger를 활용한 다양한 반응형 페이지
8.트러블 슈팅 문제: 스크롤을 해도 글자가 나오지 않음  상황:스크롤을 내려도 ScrollTrigger 설정한 컴포넌트의 텍스트가 나오지 않는 상황 해결:video-txt에 opacity값을 줌으로써 서서히 글자가 등장하게 함 과정:스크롤 하는 과정에서 글자가 등장하지 않음 -> scss에서 처음에 글자가 보이지 않게 opacity가 0으로 설정되어 있었음 -> gsap라이브러리의 timeline을 활용하여 스크롤에 맞춰 글자가 서서히 나오게끔 opacity를 설정
