## 실습
- CloudFront > Distributions > Create
  - Origin
    - Origin domain : luckybucket1.s3
  - 나머지 설정은 그대로
  - Setting
    - Price class
      - use all edge locations (best performance) 체크
  - Create distribution 버튼
- 생성후 Distribution domain name 의 URL + S3의 파일이름 으로 이미지가 브라우저에서 접속되는지 확인