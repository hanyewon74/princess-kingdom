# 나는 무슨 나라의 공주? — 배포 가이드

클로드 계정 없이 아무나 쓸 수 있게 만드는 방법이에요. 무료로 가능하고, 개발 지식 없이 따라할 수 있어요.

## 준비물
1. Anthropic API 키 (console.anthropic.com에서 발급, 클로드 로그인 계정과는 별개)
2. GitHub 계정 (무료)
3. Vercel 계정 (무료, GitHub으로 바로 가입 가능)

---

## 1단계. Anthropic API 키 발급받기
1. https://console.anthropic.com 접속 후 회원가입/로그인
2. 좌측 메뉴에서 **API Keys** 클릭
3. **Create Key** 클릭 → 키 이름 아무거나 입력 → 생성된 키 복사 (sk-ant-로 시작)
4. ⚠️ 이 키는 한 번만 보여줘요. 메모장 등에 잠깐 저장해두세요.
5. **Billing** 탭에서 소액 충전 필요 (사용한 만큼만 과금, 이미지 분석 1회당 몇 원~몇십 원 수준)

## 2단계. GitHub에 코드 올리기
1. https://github.com 에서 새 저장소(Repository) 생성 (이름 예: `princess-kingdom`)
2. 이 폴더 안의 파일 전체(`index.html`, `api/analyze.js`)를 그 저장소에 업로드
   - GitHub 웹사이트에서 "Add file → Upload files"로 드래그해서 올리면 됩니다

## 3단계. Vercel로 배포하기
1. https://vercel.com 접속 → GitHub 계정으로 가입/로그인
2. **Add New → Project** 클릭
3. 방금 만든 GitHub 저장소(`princess-kingdom`) 선택 → **Import**
4. **Environment Variables** 항목에서:
   - Name: `ANTHROPIC_API_KEY`
   - Value: (1단계에서 복사한 키 붙여넣기)
5. **Deploy** 클릭 → 1~2분 기다리면 완료
6. 배포 완료 후 나오는 주소 (예: `princess-kingdom.vercel.app`)가 공개 링크입니다

이 링크는 클로드 계정이 전혀 필요 없고, 누구나 바로 사진 올리고 결과를 받아볼 수 있어요.

## 이후 수정하고 싶을 때
- `index.html`을 수정한 뒤 GitHub에 다시 업로드하면 Vercel이 자동으로 재배포해줍니다.

## 비용 관리 팁
- 갑자기 사용자가 몰리면 API 비용이 늘어날 수 있으니, console.anthropic.com의 **Billing → Usage limits**에서 월 한도를 미리 설정해두는 걸 추천해요.
