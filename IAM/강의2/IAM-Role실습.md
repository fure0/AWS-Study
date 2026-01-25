## Admin 권한으로 CLI 사용해보기

- IAM > Users > admin
- Security credentionals 탭
  - Create access key 버튼
  - use case : Command Line Interface (CLI)
  - 동의 체크, Next 버튼
  - Create access key 버튼
- admin 으로 로그인

- EC2 > Instances > Launch an instance
  - Name : LuckyInstance
  - 나머지는 기본값
  - Launch Instance 버튼
- AWS CLI 검색해서 설치에 따라 설치하기


## CLI 접속해보기
- EC2 > Instances > 인스턴스 선택
- Connect 버튼
- EC2 Instance Connect 탭
- Connect 버튼
- Terminal 접솓됨
  - aws --version
  - aws s3 ls 입력
    - 접속저보 없어서 실패
    - aws configure
      - access key 랑 secret access key 입력
      - region 정보 입력
      - 출력 형태 입력 (aws의 요청 결과가 출력되는 형태를 말함)
  - aws s3 ls 입력
    - 이제 잘 동작 함

## access key 설정 방법은 어떤 문제가 있는가?
- 터미널에서
- cd .aws
- cat credentials 로 정보 확인가능
- cat config 로 정보 확인가능
- 만약 해커가 터미널에 접속하면 정보가 노출됨

## 테스트 credentials 삭제
- rm credentials
- aws s3 ls 입력해도 에러남

## Role 만들기
- IAM > Roles > Create role
  - Trusted entity type 설명
    - AWS service
      - 하나의 서비스에서 다른 서비스에 접근할 권한
      - 각각 독립적이기 때문에 권한이 필요함
    - AWS account
      - 상대방의 어카운트를 롤에 추가하여 신뢰하겠다는 뜻
      - 자신의 어카운트 번호를 상대에게 알려줘서 상대가 롤 스위칭을 하게 해서 사용가능하게 함
      - 현재 어카운트의 권한을 버리고 다른 어카운트로 넘어가면서 권한을 얻는 기능
      - 이 기능이 어카운트를 따로 발급해 주는 것보다 안전
    - Web identity
      - 페이스북이나 구글 아마존의 통합 인증을 대신 사용하여 인증하는 방법
    - SAML 2.0 federation
      - XML을 이용한 인증방법중 하나
  - Trusted entity type 선택
    - AWS service 선택
    - Use case
      - EC2 > EC2
  - Next 선택
  - Permissions policies
    - AmazonS3FullAccess 선택
  - Next 선택
  - Role name : luckyrole
  - Create role 버튼으로 생성

## EC2에 Role 적용하기
- EC2 > Instances > 롤 선택
  - Action > Security > Modify IAM role
  - luckyrole 선택
  - Update IAM role 버튼
- 터미널 으로 넘어가서 aws s3 ls 입력으로 실행 확인

## 그럼 Access key는 필요없나?
- 개인 노트북 터미널이나 프로그래밍에서는 사용해야 함
- Role는 AWS기능이라 웹에서 로그인한 전제임