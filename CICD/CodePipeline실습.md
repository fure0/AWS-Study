# CodePipeline

- CloudFormation으로 EC2 인스턴스 생성
- S3 Bucket 어플리케이션 버전1 업데이트
- Code Deploy로 버전1 배포
- Code Pipeline으로 버전2 배포
- 자동으로 버전3 배포할 수 있는 기능 구현


## S3 버킷 만들기
- 버킷이름 :  aws-learner-code-pipeline-practice
- 지역 : 강의 시점에는 기능이 제한되어 미국 동부(버지니아 북부) us-east-1 을 선택
- 생성
- 버킷에 업로드
  - CF_Template.json
- CF_Commands.txt 파일 수정
  - --template-url  위의 S3에 업로드한 버킷
  - keypiar : ec2에서 생성 (linux의 경우 pem 선택, 윈도우의 경우 Putty선택)
  - chmod 400 pem 파일
    - ex: chmod 400 aws-learner-cp.pem

## 터미널에서
- aws cli가 설치되었다는 전제하에
- aws iam get-user
  - 테스트 유저가 있다는 가정 aws_learner_cd_user
  - 유저가 나온다면 성공, 안나온다면 권한 IAM FullAccess을 줘라
- aws configure list
- 테스트를 위해 유저의 지역을 바꿔야 한다
  - aws configure
  - region name : us-east-1
- IAM 에서 정책 생성
  - JSON탭에 실습자료의 CloudFormation_IAM_정책.txt 을 붙여넣어라
  - 정책 이름 : aws_learner_cloudformation_policy
  - aws_learner_cd_user 유저에 권한부여
    - 기존 정책 직접 연결 aws_learner_cloudformation_policy
- CloudFormation 명령어 실행
  - CF_Commands.txt
  - StackId 가 뜨면 실행성공, 진행 시간이 좀 걸림
  - aws cloudformation describe-stacks --stack-name CodeDeployDemoStack --query "Stacks[0].StackStatus" --output text 입력해서
  - CREATE_COMPLETE 라고 뜨면 성공

## S3 버킷 만들기
  - 버킷이름 : aws-learner-code-pipeline-app
  - 지역 : 강의 시점에는 기능이 제한되어 미국 동부(버지니아 북부) us-east-1 을 선택
  - 버킷 버전 관리 : 화성화
  - 생성
  - 해당 버킷에 파일 업로드
    - mywebapp_1.0/mywebapp.zip

## CodeDeploy 에이전트 확인
  - EC2 실행중인 인스턴스
  - 퍼블릭 IP주소 복사
  - 실습 1 에서 .pem 이있는 주소에서 이하 입력
    - ssh -i aws-learner-cp.pem ec2=user@ip주소
    - 윈도우는 putty 사용

## 접속한 aws 터미널에서
  - sudo service codedeploy-agent status 입력
    - running 확인

## AWS CodeDeploy 배포
  - AWS CodeDeploy > 배포
  - 애플리케이션 > 생성
    - 애플리케이션 이름 : mywebapp
    - 컴퓨팅 플랫폼 : EC2/온프레미스
    - 생성
  - mywebapp > 배포 그룹 생성
    - 배포 그룹 이름 : aws-learner-deploy-group
    - 서비스 역할 : aws_learner_code_deploy_role
    - 배포 유형 : 현재 위치
    - 환경 구성 : EC2 인스턴스
    - EC2인스턴스 태그 태그탭 에서 태그 확인
      - 키 : name
      - 값 : CodeDeployDemo
    - 로드 밸런서 : 비활성화 (이번 실습에서는)
    - 배포 그룹 생성 버튼
  - mywebapp > 배포 생성
    - 배포 그룹 : aws-learner-deploy-group
    - 개정 유형 : 애플리케이션을 Amazon S3에 저장
    - 개정 위치 : s3://aws-learner-code-pipeline-app/mywebapp.zip
    - 배포 만들기 버튼

## 테스트 확인
  - ec2 인스턴스의 퍼블릭 IP를 브라우저에서 실행
  - ver 1.0확인
  - S3에 ver2.0 업로드

## 파이프라인
  - CodePipeline > 시작하기 > 파이프라인 생성
  - 파이프라인 생성
    - 파이프라인 이름 : aws-learner-code-pipeline
    - 서비스 역할 : 새 서비스 역할
    - 역할 이름 : 자동으로 지정됨
  - 소스 스테이지 추가
    - 소스 : Amazon S3
    - 버킷 : aws-learner-code-pipeline-app
    - S3 객체 키 : mywebapp.zip
    - 변경 감지 옵션 : Amazon CLoudWatch Events(권장)
  - 빌드 스테이지 추가
    - 빌드 공급자 : 빌드 스테이지 건너뛰기
  - 배포 스테이지 추가
    - 배포 공급자 : AWS CodeDeploy
    - 리전 : 미국동부 (버지니아 북부)
    - 애플리케이션 이름 : mywebapp
    - 배포 그룹 : aws-learner-deploy-group
  - 파이프 라인 생성 버튼

## 테스트 확인
  - ec2 인스턴스의 퍼블릭 IP를 브라우저에서 실행
  - ver 2.0확인
  - S3에 ver 3.0업로드
  - ec2 인스턴스의 퍼블릭 IP를 브라우저에서 실행
  - ver 3.0확인