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