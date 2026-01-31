## SAM CLI 설치
- 구글에서 aws sam cli 검색
- 운영체제에 따라 링크 선택
- 여기서는 MAC 기준

## 터미널에서
- brew --version 확인 (brew 설치 안되어 있으면 설치)
- aws iam get-user 로 유저 확인
  - 예 : ccuser
  - 해당 유저가 S# 권한 있어야함
  - 없으면 AmazonS3FullAccess 권한 추가
- aws s3 mb s3://aws-learner-cf-sam-bucket --region ap-northeast-2
- brew tap aws/tap
- brew install aws-sam-cli
- sam --version 으로 설치되었는지 확인
- lambda.yml이 있는 경로에서
  - sam package --template-file lambda.yml --output-template-file sam-template.yml --s3-bucket aws-learner-cf-sam-bucket
- 잘 실행되면 sam-template.yml이 생성됨
- sam deploy --template-file sam-template.yml --stack-name aws-learner-cf-sam-stack --capabilities CAPABILITY_IAM

## AWS애서
- CloudFormation > 스택
- 스택 선택해서 내용 학인
- Lambda > 함수 도 잘 만들어 졌는지 확인