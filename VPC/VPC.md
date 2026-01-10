# VPC

## CIDR 이란
- CIDR는 IP주소를 관리하는 체계
- 10.0.0.0/16 이라고 사용하면 16은 prefix라고 부름
- prefix의 의미는 10.0.0.0의 IP를 2진수로 나타내면 00001010.00000000/.00000000.00000000
- 16은 앞에서부터 16번째 숫자까지 고정하겠다는 의미
- 그 얘기는 저 10.0.0.0/16 으로 VPC를 만들면 이 VPC에서 만들어지는 모든 인스턴스의 아이피는 10.0으로 시작하고 뒤에는 가변적으로 바뀌는 거라고 보면 됨
- IP는 0 ~255 숫자를 사용할수 있으니 지금 VPC에서는 256x256=65536개의 Private IP를 사용할 수 있음

## SUBNET 이란
- VPC라는 큰 네트워크에서 용도 별로 네트워크를 쪼개서 사용하기 위한 Sub Network
- Subnet은 보통 외부에서 접근 가능한 public subnet과 외부에서 접근 안되는 private subnet을 각 가용 영역마다 1개씩 만듬
- 왜냐하면 하나의 가용영역이 장애가 나더라도 다른 쪽으로 버틸 수 있게 하기 위해서
- Subnet 만들때도 CIDR를 입력해야 함, 서로 겹치지만 않게 넣어 주면 됨

## INTERNET GATEWAY란?
- 이름만 public Subnet이라고 했다고 외부에서 접근이 가능한건 아님
- 인터넷이 가능하도록 internet gatewat를 붙이고 Route Table 설정을 해야 됨
  
## Rotte Table
- Route Table은 트래픽을 어디로 보내줄지를 직접 설정
- 들어오는 트래픽은 VPC가 알아서 Instance에 전달해 주겠지만, 처리가 되고나서 나가야 되는 트래픽들은 인테넛으로 내보내야 하는지 내부에서 사용하는지 구분이 안됨
- Route Table로 Internet Gatewat로 가라고 알려줘야 함
- 2개의 public subnet을 하나의 Public Route Table로 관리 해보자

## NAT GATEWAY
- Private Subnet은 외부에서 접근이 안되는 영역
- 인터넷이 안된다는 말
- Private Subnet에 있는 Instance들도 보안 업데이트나 뭔가 다은받아야 할 때가 있음
- Private Subnet에 있는 Instance들이 인터넷을 할 수 있도록 NAT Gateway를 Public Subnet에 만듬
- NAT Gatewat는 들어 오는 트래픽은 차단하고 나가는 트래픽만 허용해 주기때문에 Private Subnet에 외부에서 접근 불가
- IP 공유기가 이런 역할을 함
- NAT Gateway를 만들고 각 Private Subnet의 Instance들이 NAT Gateway를 통해 인터넷을 할 수 있도록 Private Route table을 설정

## VPC에 NAT 설치하고 ROUTE TABLE을 설정함. NAT를 가용영역마다 만들어야 안전.