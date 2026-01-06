## 전제조건
- EC2 두개 준비

## 로드밸런서에 사용할 security group 작성
- EC2 > Security Groups > Create security group
- Security group name : LuckyALB-SG
- Description : ALB Allow HTTP, HTTPS
- VPC : 자동선택
- Inbound rules
  - HTTP TCP 80 Anywhere 0.0.0.0/0
  - HTTPS TCP 443 Anywhere 0.0.0.0/0

## Target Group 작성
- 정해진 인스턴스 그룹에 트래픽 분산을 설정 하기 위해
- EC2 > Target Group > Create target group
  - Target group name : LuckyTG
  - Protocol : HTTP 80
  - 나머지는 기본값
  - Next 버튼으로 작성

## Load balancer 작성
- EC2 > Load balancers > Select load balancer type
- Application Load Balancer 선택
- Load Balancer name : LuckyALB
- Scheme : Internet-facing
- NetWork Mapping
  - Mappings
    - 서울이면 가용영역 4개 표시되는데 실습에서는 2개 선택
    - ap-northeast-2a (apne2-az1)
    - ap-northeast-2b (apne2-az2)
- Security groups
  - LuckyALB-SG 선택
- Listenrs and routing
  - 어디서 들어와서 어떤 타겟으로 줄건지 설정
  - HTTP 80 -> LuckyTG
- 나머지는 기본값넣고 Create load balancer 버튼 선택
- 작성후 화면에서 state : Provisioning (할당중) 확인 가능