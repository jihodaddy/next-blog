# 블로그 앱 (Blog App)

Next.js 14, MDX, Prisma, shadcn/ui를 사용하여 제작된 블로그 애플리케이션입니다. 이 애플리케이션은 Vercel을 통해 배포되었습니다.

## 주요 기능
- **MDX 지원**: Markdown과 React 컴포넌트를 함께 사용하여 유연한 콘텐츠 작성이 가능합니다.
- **Prisma**: 데이터베이스 관리를 위해 Prisma를 사용하여 직관적인 데이터 모델링 및 쿼리가 가능합니다.
- **shadcn/ui**: UI 컴포넌트 라이브러리를 사용하여 빠르고 일관된 UI 개발이 가능합니다.
- **Vercel 배포**: 간단하게 Vercel을 통해 배포할 수 있습니다.

## 시작하기 (Getting Started)

### 필수 요구 사항 (Prerequisites)
- Node.js (버전 16 이상)
- npm 또는 yarn
- Vercel CLI (선택사항)

### 설치 방법 (Installation)

1. 레포지토리를 클론합니다:

    ```bash
    git clone https://github.com/jihodaddy/next-blog.git
    cd next-blog
    ```

2. 의존성을 설치합니다:

    ```bash
    npm install
    # 또는
    yarn install
    ```

3. Prisma 데이터베이스를 설정합니다:
    ```bash
    npx prisma migrate dev
    ```

4. 환경 변수를 설정합니다:

    `.env` 파일을 생성하고 다음과 같은 환경 변수를 설정합니다:
    ```env
    # 프리즈마 연동시 자동 등록됨.
    DATABASE_URL=

    POSTGRES_URL=
    POSTGRES_PRISMA_URL=
    POSTGRES_URL_NO_SSL=
    POSTGRES_URL_NON_POOLING=
    POSTGRES_USER=
    POSTGRES_HOST=
    POSTGRES_PASSWORD=
    POSTGRES_DATABASE=
    ```
### 사용법 (Usage)
개발 서버 실행
개발 서버를 로컬에서 실행하려면:

```bash
npm run dev
# 또는
yarn dev
```
브라우저에서 http://localhost:3000으로 접속합니다.

빌드 및 배포
프로덕션 빌드를 생성하려면:

```bash
npm run build
# 또는
yarn build
```
빌드된 결과물을 로컬에서 확인하려면:

```bash
npm start
# 또는
yarn start
```

### Vercel을 통한 배포

Vercel CLI를 통해 쉽게 배포할 수 있습니다:

```bash
vercel
```
또는 GitHub 레포지토리와 연결하여 자동 배포를 설정할 수 있습니다.

### 기술 스택 (Tech Stack)
- Next.js 14: 최신 기능을 활용한 React 프레임워크
- MDX: Markdown과 React의 결합을 통한 콘텐츠 관리
- Prisma: 타입 안전한 ORM으로 데이터베이스 관리
- shadcn/ui: 빠른 UI 개발을 위한 컴포넌트 라이브러리
- Vercel: 간편한 배포와 서버리스 기능

### 프로젝트 설정 (Configuration)
환경 변수 파일 (.env)을 설정하여 프로젝트를 구성합니다. 필요한 주요 환경 변수는 다음과 같습니다:

- DATABASE_URL: Prisma가 연결할 데이터베이스의 URL
- NEXT_PUBLIC_API_URL: 클라이언트 사이드에서 접근할 API URL