## VPC 만들기
- 첫번째
- VPC > Your VPC > Create VPC
  - VPC settings
    - Resources to create : VPC and more
    - Name : LuckyVPC
    - Auto-generate : 체크
    - IPv4 CIDR block : 10.0.0.0/16
    - Number of Availability Zones(AZs) : 1
    - VPC endpoint : None
    - Create VPC 버튼
- VPC > Subnets > Lucky-subnet-public1-ap-northeast-2a
  - Edit subnet setting
    - Enable auto-assign public IPv4 address
    - Save 버튼

- 두번째
- VPC > Your VPC > Create VPC
  - VPC settings
    - Resources to create : VPC and more
    - Name : Vanilla
    - Auto-generate : 체크
    - IPv4 CIDR block : 10.1.0.0/16
    - Number of Availability Zones(AZs) : 1
    - VPC endpoint : None
    - Create VPC 버튼
- VPC > Subnets > Vanilla-subnet-public1-ap-northeast-2a
  - Edit subnet setting
    - Enable auto-assign public IPv4 address
    - Save 버튼

## 인스턴스 만들기
- 첫번째
- EC2 > Instances > Launch an instance
  - Name : LuckyInstance
  - Instance type : t3.mocro
  - Key pair : Proceed without a key pair
  - vpc : Lucky-vpc
  - subnet : Lucky-subnet-public1-ap-northeast-2a
  - Inbound Securoty Group Rules 추가 (Ping확인용)
    - Type : IPv4
    - Source type : Anywhere
  - Launch instance

- 두번째
- EC2 > Instances > Launch an instance
  - Name : VanillaInstance
  - Instance type : t3.mocro
  - Key pair : Proceed without a key pair
  - vpc : Vanilla-vpc
  - subnet : Vanilla-subnet-public1-ap-northeast-2a
  - Inbound Securoty Group Rules 추가 (Ping확인용)
    - Type : IPv4
    - Source type : Anywhere
  - Launch instance

## VPC Peering Connetction 만들기
- VPC > Peering connections > Create peering connection
  - Name : LuckyVanillaPeeringConnection
  - Select a local VPC to peer with
    - VPC ID : Lucky-vpc
  - Select another VPC to peer with
    - Account : My account
    - Region : This Region (ap-northeast-2)
  - Create peerong connection 버튼

## 요청 받기
- VPC > Peering connections
  - LuckyVanillaPeeringConnection 체크 > Actions > Acception request

## Route table 설정
- VPC > Route tables
  - Lucky-rtb-public > Edit routes
  - Add route
    - Destination : 10.1.0.0/16
    - Target : Peering Connection
      - LuckyVanillaPeeringConnection 선택
  - Vanilla-rtb-public > Edit routes
  - Add route
    - Destination : 10.0.0.0/16
    - Target : Peering Connection
      - LuckyVanillaPeeringConnection 선택
  
## Ping 날려보기
- VanillaInstance의 IP복사
  - LuckyInstance의 터미널에 접속
  - ping 날리기
- 반대로도 해보기