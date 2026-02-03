## KMS 만들기
- KMS > Customer managed keys > Create key
  - Key type
    - Symmetric (대칭키) <-- 테스트에서는 이거
    - Asymmetric (비대칭키)
  - Key usage
    - Encrypt and decrypt
  - Next 버튼
  - Add labels
    - Alias : vanillakey
  - Next 버튼
  - Define key administrative permissions
    - admin 체크
  - Next 버튼
  - Define key usage permissions
    - admin 체크
  - Next 버튼
  - Finish 버튼

## KMS key 삭제
- KMS > Customer managed keys
  - 키 체크 > action > disable (먼저 해야됨)
  - 키 체크 > action > Schedule key deletion (스캐줄 설정해서 지워야됨)

## Key 교체 시키기
- 보안상 키를 주기적으로 변경해 줘야함
- KMS > Customer managed keys
  - 키 선택 > key rotation 탭
    - 옵션 체크 > Save

## EBS 암호화 해보기
- EC2 > Instances > Launch Instances
  - Configure storage 부분
    - advanced 메뉴 열기
      - EBS Volumes
        - Encrypted
        - KMS key : lukcykey

## S3 버킷 암호화 해보기
- Amazon S3 > Buckets > Create bucket
  - Default encryption
    - Encryption type
      - Server-side encryption with AWS key Management Service keys
    - AWS KMS key
      - Choose from your AWS KMS keys : lukcykey