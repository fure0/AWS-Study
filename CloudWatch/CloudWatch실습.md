## EC2 모니터링
- EC2 > Instances > LuckyInstance > Monitoring 탭
  - 그래프가 보이는데 모두 클라우드 워치의 데이터를 표시해 주는 것임
  - 그래서 EC2 만들때 클라우드 워치 권한을 줘야함

## RDS 모니터링
- RDS > Databases > luckydb > Monitoring 탭
  - 그래프가 보이는데 모두 클라우드 워치의 데이터를 표시해 주는 것임

## CloudWatch
### Metrics
- CloudWatch > Metrics > All metrics
  - 모든 서비스의 지표를 볼수 있음
  - 5분단위의 지표는 무료
  - 1분단위는 과금
### Alarms
- CloudWatch > Alarms > In alarm
  - Create alarm
    - Select metric
      - EC2 > CPUUtilization
      - Select metric 버튼
      - Period : 5 minutes
      - Conditions
      - Threshold type : Static
      - Wheneber CPUUtilization is...
        - Greater
      - then : 1
      - Next 버튼
    - Notification
      - Alarm state trigger : In alarm
      - Send a notification to the following SNS topic
        - Create new topic
        - Create a new topic... 
          - CPUUtilization
        - Email endpoints that will receive the notification...
          - 본인 이메일
      - Create topic 버튼
      - Next 버튼
      - Alarm name : CPUUtilization
      - Next 버튼
      - Create Alarm 버튼
### Log
- CloudWatch > Log groups
  - Create Log groups
  - Log group name : luckyloggroup
  - create 버튼
- 프로그래밍 언어에서 남긴 로그를 CloudWatch에 보내는 방법
  - 방법1 CloudWatch Agent 설치 (가장많이 쓰임)
  - 방법2 SDK 설치

### Event
- CloudWatch > Event
- EventBridge 메뉴로 이동됨.
  - 기능이 많아지면서 별도 서비스로 분리됨
- Aamazon EventBridge > Ruls > Create rule
  - Name : luckyrule
  - Rule type : rule with an event pattern
  - Next 버튼
  - Event Pattern
    - Event source : AWS service
    - AWS service : EC2
    - Event type : EC2 INstance State-change Notification
    - Specific state : stopped, stopping, terminated, shutting-down
  - Next 버튼
  - Select target(s)
    - Target types : AWS service
    - Select a target : SNS topic
    - Topic : CPUUtilzation
  - Next 버튼
  - Next 버튼
  - Create rule 버튼


- Aamazon EventBridge > Ruls > Create rule
  - Name : luckyschedule
  - Rule type : Schedule
  - Continue in EventBridge Scheduler 버튼
  - Schedule pattern
    - One-time schedule 한번만
    - Recurring schedule 주기적으로
  - 뒷부분은 똑같음