# KMS
- 암호키(Encryption Key) 생성
- 수많은 AWS Resourdes들과 상호작용
- 암호키를 사용하여 데이터를 암호화 하는 방법이 매우 단순함

## 언제 KMS를 사용해야 하나요?
- 고객 데이터
- DB Password & Credentials
- Secrets
- 등등

## KMS를 사용할 수 있는 AWS 리소스들
- S3
- EBS
- RDS
- EFS
- DynamoDB
- CloudTrail
- Lambda
- 등등

## CMK
- Customer Master Key
- 4KM에 해당하는 데이터 암호화 복호화
- Data Key를 생성, 암호화 복호화 할때 사용되어짐
- Data Key를 가지고 실제 Data를 암호화

## Envelope Encryption - 봉투 암호화
- 데이터 암호화 프로세싱
- ~ 4KB 데이터 압축

### 봉투 암호화 과정
- KMS (CMK) -> GenerateDataKeyAPI -> Data Key -> Data

### 봉투 복호화 과정
- Data Key -> KMS (CMK) -> DecryptAPI -> Decryped Data Key -> Data

### 왜 봉투 암호화 하는가?
- 데이터 전체 암호화 하면 네트워크가 무거우니까
- 데이터 키만 암호화