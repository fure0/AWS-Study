## 작업 지우기
- 의존관계 때문에 지우는 순서가 있음
- 오래걸리는 삭제먼저 삭제

### RDS 삭제
- Amazon RDS
  - Databases
    - instance 체크 > Actions > Delete
      - luckydb
      - newlickydb
  - Snapshot
    - snapshot 체크 > Actions > Delete snapshot

### 로드 발란서 삭제
- EC2
  - Load Balancers
    - 이름 체크 > Actions > Delete load balancer
  - Target Groups
    - 이름 체크 > Actions > Delete
  - Auto Scaling groups
    - 이름 체크 > Actions > Delete
  - Launch templates
    - 이름 체크 > Actions > Delete
  - Images > Amazon Machine Images (AMIs)
    - 이름 체크 > Actions > Deregister AMI 
  - Elastic Block Store > Snapshots
    - 이름 체크 > Actions > Delete snapshot
  - Network & Security > SecurityGroups

### DB Subnet Group 삭제
- Amazon RDS
  - Subnet groups
    - 이름 체크 > Delete

### 보안그룹 삭제
- EC2
  - Network & Security > SecurityGroups
    - Security group name : default 는 제외
    - 이름 체크 > Actions > Delete security groups

## VPC 지우기
- 지우려고 하면 순서가 있어서 잘 안지워짐
- NAT gateways > Actions > Delete NAT gateway
- Elastic IPs
  - Elastic IP 두개 다 선택
  - Actions > Release Elastic IP addresses
- Your VPCs
  - LuckyVPC 체크 > Actions > Delete VPC