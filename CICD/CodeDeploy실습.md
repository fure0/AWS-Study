# CodeDeploy실습

## IAM 역할 생성
- 역할
  - 새 역할
    - s3 필터
    - AmazonS3FUllAccess 선택
    - 역할 이름 : aws_learner_s3_access_role (임의)
    - 역할 만들기 버튼 으로 작성
  - 새 역할
    - CodeDeploy 선택
    - 역할 이름 : aws_learner_code_deploy_role (임의)
    - 역할 만들기 버튼 으로 작성

## EC2 생성
  - 머신 이미지
    - Amazon Linux 2 AMI (HVM), SSD Volume Type 선택 (실습에는 충분)
  - 인스턴스 유형 선택
    - 그룹 : t2
    - 유형 : t2.micro 프리 티어 사용 가능
    - 인스턴스 세부 정보 구성
      - 거의 모두 디폴트 선택
      - 퍼블릭 IP 자동 할당 : 서브넷 사용 설정(활성화) 필요
      - IAM 역할 : 위에서 생성한 S3역할 선택
  - 스토리지 선택
    - 디폴트
  - 태그 추가
    - 키: AppName
    - 값: AwsLearnerApp
  - 보안 그룹 구성
    - SSH - TCP - 22 - 사용자 지정 - 0.0.0.0/0
    - HTTP - TCP - 80 - 사용자 지정 - 0.0.0.0/0, ::/0
  - 시작 하기 버튼
  - 기존 키 페어 선택 또는 새 키 페어 생성
    - 있으면 기존
    - 없으면 새로 : aws_learner_code_deploy
  - 인스턴스 시작
  - 인스턴스 상태 대기중에서 몇분 기달리면 실행중으로 변함
  - 터미널 연결
    - .pem파일이 있는 경로
    - chomd 400 aws_learner_code_deploy.pem
    - ssh -i aws_learner_code_deploy.pem ec2-user@[ec2의 IPv4주소]
    - 접속 가능한지 확인
  - 접속 후
    - sudo yum update
    - yes
    - sudo yum install ruby
    - sudo yum install wget
    - cd /hone/ec2-user
    - wget https://aws-codedeploy-ap-northeast-2.s3.amazonaws.com/latest/install
    - chmod +x install
    - sudo ./install auto
    - sudo service codedeploy-agent status 로 잘 설치 되었는지 확인

## IAM 사용자 생성
  - 사용자 추가
    - 사용자 이름 : aws_learner_cd_user
    - AWS 엑세스 유형 선택 : 프로그래밍 방식 엑세스
  - 권한 선택
    - 기존 정책 직접 연결
      - AWSCodeDeployFullAccess 선택
      - AmazonS3FullAccess 선택
    - 사용자 만들기 버튼 선택
  - Ec2인스턴스가 아닌 로컬 머신에서 aws configure
    - 액세스 키
    - 비밀 엑세스 키
    - 리전 선택
    - 디폴트 포멧 선택
  - 강의에 포함된 mywebapp.zip 파일 압축 해제
    - appspec.yaml
    - index.html
    - scripts
      - install_dependencies.sh
      - start_server.sh
      - stop_server.sh

## S3버킷 생성
  - 버킷 이름 : aws-learner-code-deploy-bucket
  - 다른 설정은 디폴트
  - 버킷 만들기 버튼 선택

## 어플리케이션 생성 & 배포 구현
> S3에 업로드 하면 배포되게 끔
  - 터미널에서
    - 어플리케이션 생성
      - aws deploy create-application --application-name mywebapp
    - 파일 푸시
      - aws deploy push --application-name mywebapp --s3-location s3://aws-learner-code-deploy-bucket/webapp.zip --ignore-hidden-files
      - ymal파일이 위 명령어 참조
      - s3에서 업로드 확인
  - CodeDeploy에서
    - 애플리케이션 메뉴 확인
      - mywebapp 추가된 것 확인
    - mywebapp 선택
      - 배포 그룹 생성 (필수)
        - 배포 그룹 이름 : aws_learner_deploy_group
      - 서비스 역할
        - aws_learner_code_deploy_role 선택
      - 배포 유형
        - 현재 위치 (롤링) <- 선택
          - 배포중 정지됨
        - 블루 그린
          - 스위칭
      - 환경 구성
        - 배포를 진행하는데 어떤 종류의 인스턴스를 사용할지
          - Amazon EC2 인스턴스 체크
        - 태그로 검색
          - AwsLearnerApp
      - AWS Systems Manager를 사용한 에이전트 구성
        - CodeDeploy를 인스턴스에서 사용하려면 CodeDeploy에이전트가 설치 되어있어야 함
        - 위에서 설치 하였기 때문에 안함 선택
        - 여러개의 인스턴스를 사용하면 자금 업데이트 및 업데이트 일정 예약 선택
      - 배포 설정
        - 배포 구성
          - 모든 인스턴스를 한번에 다할지 <-- 선택
          - 반반으로 나눠서 할지 <-- 프로덕션 에서 권장
          - 하나씩 할지 <-- 프로덕션 에서 권장
      - 로드 밸런서
        - 체크 해제
  - 배포 생성 버튼 선택
    - 배포 그룹 선택
      - aws_learner_deploy_group
    - 개정 유형
      - 애플리케이션을 Amazon S3에 저장
    - 개정 위치
      - S3위치
  - 배포

## ec2인스턴스
  - public url을 복사해서 브라우저에서 확인

## 갱신내용 배포
  - 갱신 대상 파일 (HTML)수정
  - 파일 푸시 명령어 똑같이 실행
    - aws deploy push --application-name mywebapp --s3-location s3://aws-learner-code-deploy-bucket/webapp.zip --ignore-hidden-files
  - AWS CodeDeploy 메뉴
    - 애플리케이션 > mywebapp > 배포 그룹 (aws_learner_deploy_group)
    - 배포 생성
      - 개정 위치 : 새로 업데이트된 S3위치