# 진성방수설비

부산·양산 누수 탐지, 방수, 배관·설비 업체의 정적 홈페이지입니다. 빌드나 별도 환경 변수 없이 `docs/` 폴더를 GitHub Pages에서 바로 서비스합니다.

## GitHub Pages 설정

GitHub Free에서 Pages를 쓰려면 저장소가 공개 상태여야 합니다. 소유자가 **Settings → General → Danger Zone → Change repository visibility → Public**에서 직접 공개로 전환합니다.

그다음 **Settings → Pages**에서 아래처럼 설정합니다.

1. **Build and deployment**에서 **Deploy from a branch**를 선택합니다.
2. Branch를 `main`, 폴더를 `/docs`로 선택합니다.
3. **Save**를 누릅니다.

배포 후 예상 주소: `https://yongm1n.github.io/jinseong-water-proof/`

ChatGPT에서 파일을 수정한 뒤 `main`에 커밋하고 GitHub에 push하면 GitHub Pages가 변경 사항을 자동으로 발행합니다. 이 저장소는 아직 Pages를 켜거나 배포하지 않았습니다.

## 폴더 구성

| 경로 | 내용 |
| --- | --- |
| `docs/index.html` | 업체 소개, 공사 범위, 시공 기록, 연락처 |
| `docs/style.css` | 디자인과 모바일 화면 |
| `docs/script.js` | 모바일 메뉴와 시공 기록 펼침 |
| `docs/assets/` | 사이트 이미지와 아이콘 |
| `SOURCES.md` | 업체 정보와 이미지의 출처 |
| `wrangler.jsonc` | Cloudflare 정적 파일 경로 설정 |

`docs/`에는 서비스할 정적 파일만 둡니다. README, 출처 문서, Cloudflare 설정은 저장소 루트에 둡니다.

## 로컬 확인

저장소 루트에서 실행한 뒤 `http://localhost:8080`을 엽니다.

```sh
python3 -m http.server 8080 --directory docs
```

## Cloudflare 대안

기존 `wrangler.jsonc`도 정적 파일 경로를 `./docs`로 가리킵니다. Cloudflare Workers Static Assets로 옮길 경우 별도 빌드나 자동 배포 워크플로는 추가하지 않습니다.

## 자체 도메인 연결 후

최종 자체 도메인을 연결하면 `docs/index.html`의 `canonical`, `og:url`, 구조화 데이터의 `url`을 모두 그 주소로 함께 바꿉니다.
