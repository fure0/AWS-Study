## AWS Elastic Beanstlak
- 시작하기
- 어플리케이션 이름 : aws-learner-docker-eb-app
- 환경 이름 : Aws-learner-docker-eb-app-env
- 가용성 확인 버튼 클릭
- 플랫폼 : Docker
- 플랫폼 브랜치 : Docker running on 64bit Amazon Linux 2 (자동 선택이 현시점 최신이다.)
- 애플리케이션 코드 : 코드 업로드
  - 버전 레이블 : v1
  - 파일 선택 : docker-singlecontainer-v1.zip
- 구성 사전 설정 : 단일 인스턴스(프리 티어 사용 가능)
- 서비스 액세스 구성
  - 서비스 역할 : 기존 서비스 역할 사용
    - awslearner-ebsk-role
  - EC2 인스턴스 프로파일
    - awslearner-ebsk-role
- 생성
- 홈페이지 열어보기

## 버전업 시켜보기
- Elastic Beanstalk > 환경 > Awslearnerdockerapp-env
- 업로드 및 배포 버튼
  - 파일 선택 : docker-singlecontainer-v2.zip
- 홈페이지 열어보기

## 버전 되돌려보기
- 업로드 및 배폰 버튼 > 애플리케이션 버전 페이지
- 이전 버전 선택 > 작업 > 배포