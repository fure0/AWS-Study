## 실습

## 먼저 Role 만들기
- IAM > Policies
  - ssm 필터 검색
  - AmazonEc2RoleforSSM 이름 복사
- IAM > Roles > Create role
  - Trusted entity type : AWS service
  - Service or use case : EC2
  - Next 버튼
  - Permissions policies
    - 복사한 AmazonEc2RoleforSSM 으로 필터
    - AmazonEc2RoleforSSM 체크
  - Next 버튼
  - Role name : AmazonEc2RoleforSSM
  - Create role 버튼

## Role 설정한 Instance 만들기
- EC2 > Instances > Launch an instance
  - name : luckyinstance
  - Instance type : t3.micro
  - key : Proceed without a key pair
  - 다른건 다 기본값
  - Advanced details
    - IAM instance profile
      - AmazonEc2RoleforSSM 선택
  - Launch Instance 버튼

## Systems Manager
- AWS Systems Manager > Run Command > Run a command
  - Command document
    - runshell 필터
    - AWS-RunShellScript 선택
  - Command parameters
    - commands
      - touch /tmp/lucky.tst
      - echo "luckyvanilla3" > /tmp/lucky.txt
  - Target selection
    - Choose instances manually
      - luckyinstance 체크
  - Run 버튼

## 적용되었나 확인
- EC2해당 인스턴스 Connect 버튼
- 터미널에서
  - cd /tmp
  - ls
  - cat lucky.txt