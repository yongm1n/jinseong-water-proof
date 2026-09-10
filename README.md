# 진성방수설비

부산·양산 누수 탐지, 방수, 배관·설비 업체의 홈페이지입니다. 명함의 연락처와 공사 범위, 블로그 시공 기록 5건을 반영했습니다.

HTML, CSS, JavaScript와 이미지로 구성된 정적 사이트입니다. `dist/`에 배포할 파일이 모두 들어 있으며 별도 빌드, 데이터베이스, 환경 변수는 필요하지 않습니다.

## Cloudflare 연결

이 저장소는 **Cloudflare Workers Static Assets**로 배포하도록 준비했습니다. Cloudflare는 신규 정적 사이트에 이 방식을 권장합니다. [공식 안내](https://developers.cloudflare.com/workers/best-practices/workers-best-practices/#use-workers-static-assets-for-new-projects)

1. Cloudflare 대시보드에서 **Workers & Pages → Create application → Git 저장소 연결**을 선택합니다.
2. GitHub의 `yongm1n/jinseong-water-proof` 저장소를 선택합니다. 비공개 저장소이므로 Cloudflare GitHub 연결에 이 저장소의 접근 권한을 허용해야 합니다.
3. 아래 값을 확인하고 배포합니다.

| 항목 | 설정 |
| --- | --- |
| Worker 이름 | `jinseong-water-proof` |
| 운영 브랜치 | `main` |
| Root directory | 비워 둠 — 저장소 루트 |
| Build command | 비워 둠 — 빌드 불필요 |
| Deploy command | `npx wrangler deploy` |
| Non-production branch deploy command | 기본값 `npx wrangler versions upload` |
| 정적 파일 위치 | `wrangler.jsonc`에 지정된 `./dist` |

Worker 이름은 `wrangler.jsonc`의 `name`과 같아야 합니다. 별도의 Worker 스크립트나 Pages용 출력 디렉터리 설정은 필요하지 않습니다. [빌드 설정 안내](https://developers.cloudflare.com/workers/ci-cd/builds/configuration/)

배포가 성공하면 Cloudflare가 제공하는 `workers.dev` 주소로 접속할 수 있습니다. 실제 주소는 Cloudflare 프로젝트 생성 후 확인합니다. Git 연동을 완료하면 이후 `main`에 올린 변경 사항도 자동 배포됩니다. 자체 도메인은 나중에 연결할 수 있습니다.

## 수정할 파일

| 파일 | 내용 |
| --- | --- |
| `dist/index.html` | 업체 소개, 공사 범위, 시공 기록, 연락처 |
| `dist/style.css` | 디자인과 모바일 화면 |
| `dist/script.js` | 모바일 메뉴와 시공 기록 펼침 |
| `dist/assets/` | 사이트 이미지와 아이콘 |
| `SOURCES.md` | 업체 정보와 이미지의 출처 |
| `wrangler.jsonc` | Cloudflare 배포 설정 |

`dist/`는 실제 관리하는 사이트 소스이므로 지우거나 빌드 결과물로 제외하지 않습니다. 배포할 때는 이 디렉터리만 서비스됩니다.

## 주소 확정 후

이전 Sites 주소를 가리키던 `canonical`, `og:url`, 구조화 데이터의 `url`은 이 이전용 소스에서 제거했습니다. Cloudflare 운영 주소 또는 구매한 도메인이 확정되면 `dist/index.html`의 세 항목에 동일한 최종 주소를 추가합니다.

기존 Sites 사이트의 공개 설정이나 배포는 이 저장소에서 변경하지 않습니다. 전화·문자·이메일 상담은 기기의 해당 앱으로 연결되며, 홈페이지에서 별도 상담 내역을 수집하거나 저장하지 않습니다.

## 로컬 확인

저장소 루트에서 아래 명령을 실행하고 안내된 주소를 엽니다.

```sh
python3 -m http.server 8080 --directory dist
```

Cloudflare 구성만 확인하고 실제 배포를 하지 않으려면 다음 명령을 사용합니다.

```sh
npx wrangler deploy --dry-run
```
