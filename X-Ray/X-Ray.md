# X-Ray란?
- 분산 어플리케이션 분석 및 디버깅 용도로 사용되어짐
- 시각화 기능을 제공하여 쉽게 어플리케이션 흐름 이해

## R-Ray 통합
- X-Ray를 사용할 수 있는 AWS 리소스 : EC2, Lambda, DynamoDB, ELB, API Gateway, SNS, SQS, Elastic BeanStalk 등
- 자체 App과도 통합 가능 : Java, Node JS, Go, Ruby, Python으로 구현된 App
- API Call : AWS SDK로 구현된 App은 X-Ray SDK를 통하여 X-Ray로 정보 전송

## X-Ray 사용 방법
- X-Ray Agent 설치
- X-Ray SDK App 설정
- Http request status code latency 등 정보를 X-ray 로 보냄

## X-Ray 전송 개념
- ECS or EC2에 X-Ray SDK설치 -> X-Ray Daemon 에 전달 -> Queue에 담아뒀다가 X-Ray에 전달
- X-Ray Daemon에는 Queue가 존재하며 데이터를 Batch로 X-Ray에 전송함
- X-Ray SDK와 X-Ray Daemon이 인스턴스 안에 설치되어 있어야 함

## X-Ray Configuration
- EC2 인스턴스 : EC2인스턴스 안에 X-Ray SDK + Daemon 설치
- Elastic BeanStalk : Elastic BeanStalk안에서 돌아가고 있는 EC2인스턴스에 X-Ray SDK + Daemon 설치
- Docker Container & ECS : Application이 돌아갈 Docker Container안에 X-Ray SDK : Daemon을 직접 설치

## Annotation & Indexing
- Annotation : Application을 진단할때 Annotation을 사용하여 Request에 대한 추가적인 내용을 가져올 수 있음
- Key-Value : Annotation은 Key-Value 형태로 이루어져 있으며 Filter Expression을 사용하여 Annotation이 Indexing되어짐
- 예 : game_name=TicTacToe, game_id=81263

## 실습
- S3 버킷 생성
  - aws-learner-s3-lambda-xray-practice-9999
  - 생성
- Lambda 함수 생성
  - 블루프린트 사용 선택
  - 블루프린트 이름 : Get S3 object 선택
  - 함수 이름 : aws-learner-lambda-read-S3-metadaa
  - 실행 역할 : 기본 Lambda권한을 가진 새 역할 생성
  - S3 트리거
    - Bucket : 만들어둔 것 선택
    - Event Type : All object Creat Events
    - Suffix : .txt (어떠한 파일을 업로드 했을 때 실행되는가.)
    - 함수생성
- S3 해당 버킷 이벤트 알림 확인
  - Lambda와 연동 확인
- *Lambda 역할에 S3접근 권한이 없는 경우
  - Labmda 구성탭 -> 권한 -> 다음 정책 문은 이 정보를 Lambda 얻습니다.
    - 관리형 정책 복사
  - IAM 정책
    - 해당 권한에 S3 ReadOnly 추가
- Lambda 구성 탭 -> 모니터링 및 운영 도구
  - 편집 버튼
  - 활성화 On
- Lambda 모니터링 탭
  - CloudWatch Logs 보기
    - 클라우드 워치 로그 볼수 있음
  - X-Ray 트레이스 보기
    - 기록 부분 확인
      - ID 선택시 실행 흐름 확인 가능