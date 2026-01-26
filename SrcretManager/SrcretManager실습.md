## 실습용 DB 만들기
- RDS > Create Database
  - MariaDB 선택
  - Templates : Dev/Test 선택
  - DB instance identifier : luckydb
  - Master username : admin
  - DB instance class : Burstable classes (include t classes)
    - db.t3.micro
  - 나머지는 그대로
  - Create database 버튼으로 생성


## Cloud9
- AWS Cloud9 > Environments > Create environment
  - name : luckycloud9
  - instance type : t3.small
  - create 버튼으로 생성
- EC2 > Instances > xxxxx > Modify IAM role
  - IAM role 이름확인
- IAM > Roles > xxxx
  - Permissions 탭
  - Add Permissions > Attach policies
    - SecretsManagerReadWrite 체크
    - Add permissions 버튼

## Secrets Manager
- AWS Secrets Manager > Secrets > Store a new secret
  - Credentials for Amazon RDS database
  - Username : DB만들때 입력한것
  - Password : DB만들때 입력한것
  - database : luckydb 선택
  - Next
  - Configure secret
    - Secret name : luckysecret
  - Next
  - Next
  - Sample code (javascript) 복사
  - Store 버튼으로 생성
  

## Cloud9
- open버튼으로 열기
- 새로운 파일에 Sample code 붙여넣기
  - LuckySecret (폴더 만들기) 
  - 파일이름 : SecretSample.js
- 저장
- Download AWS SDK for Javascript 에서 Node.js sample 복사
- LuckySecret 폴더에 package.json 만들고 내용 붙여넣기
- 터미널에서 npm install 실행해서 동작하는지 확인
- npm install @aws-sdk/client-secrets-manager 실행
- SecretSample.js 에 console.log를 넣어서 node SecretSample.js 로 실행시켜서 확인