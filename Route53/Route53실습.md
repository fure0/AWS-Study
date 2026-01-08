## Route53 실습
### Route53 
- Domains > Registerd domains
  - Register Domain
    - Choose a dmain name : luckyvanilla
    - 결제해서 구매 가능
  - Transfer Domain
    - 다른 서비스에서 구매한 도메인을 가져올 수 있음
- Hosted zones
  - 구매한 도메인 확인 가능
  - 도메인 선택하면 기본적으로 2개의 레코드 확인
  - Create record
    - Record name : [subdomain] luckyvanilla.com
    - Record type : A - Routes traffic to an IPv3 address and some AWS resources
    - Alias 체크 ON
    - Route Traffic to
      - Alias to Application and Classic Load Balancer
      - Asia Pacific (Seoul) [ap-northest-2]
      - 그다음 풀다운 자동선택
    - 생성 버튼 선택
### Certificate Manager (ACM)
  - HTTPS 부여 서비스
  - Request a certificate 버튼 선택
  - Request a public certificate 선택
  - Next 버튼
  - Domain names : luckyvanilla.com
  - Validation method
    - DNS validation - recommended 체크
  - Key algorithm
    - RSA 2048 체크
  - Request 버튼
  - 생성된 후 CNAME name이랑 CNAME value를 Route53에 등록해 줘야 함
    - Create records in Route 53 버튼
    - Create records 버튼
  - 발급이 되었으면 List certificates 에서 Status가 Issued 로 된것이 확인 됨

### 로드밸런서에 HTTPS 연결
- EC2 > Load Balancers
- 이전에 만들어둔 LuckyALB 선택
- 기존 80포트밖에 없음
- Listeners 에서 Add Listener
  - Protocol : HTTPS
  - Port : 443
  - Add Action > Forward 선택
    - Target group : LuckyTG
  - Secure listener settings
    - From ACM
    - luckyvanilla.com

### 접속 확인
- http://luckyvanilla.com
- https://luckyvanilla.com