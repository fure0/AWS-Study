# SES (Simple Email Service)
- 마케팅팀 혹은 개발자들에게 특정 이벤트를 발생시 email notification을 보낼 수 있음
- 이메일을 보내거나 받을 수 있음
- 이메일을 받을시 Lambda 혹은 SNS를 trigger시킬 수 있음

## SES 사용 용도

### Email 자동화
- 온라인쇼핑 (배송상태, 구매내역, 등등)
- 마케팅 이메일 (뉴스레터, 스페셜 오퍼, 등등)

## SES VS SNS

### SES
- Email Messageing Service
- 람다함수 & SNS Notification 호출
- 들어오고 나가는 이메일 처리 가능
- 메세지를 보내기 위해 이메일주소만 있으면 됨

### SNS
- PUB/SUB Messageing Service
- 람다함수 호출
- Notification을 받기위해 Consumer는 토픽을 꼭 Subscribe해야 함