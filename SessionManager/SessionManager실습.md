## EC2 Instance Connect
- Public IP랑 SSH랑 권한만 있으면 접근할 수 있음
- 서버가 Private서버에 있으면 접근할 수 없음

- EC2 > Instance > 인스턴스 선택(Public Subnet에 있는것) > Connect to instance
  - EC2 Instance Connect 탭
  - Connect 버튼 선택


## SessionManeger
- 권한이 먼저 필요함
  - IAM > Roles > Create role
  - Trusted entity type
    - AWS Service 선택
  - Use case
    - EC2
  - Nent 버튼
  - SSM 으로 검색 필터
    - AmazonSSMManagedInstanceCore 체크
    - Nent 버튼
    - Role name : LuckyRole
    - Create role 버튼
- 역할 부여
  - EC2 > Instance > 대상 체크 > Actions > Security > Modify IAM role
  - IAM role : LuckyRole
  - Update Role 버튼

- 하려고 하는데 아직도 안됨
  - 그냥 인스턴스 하나 더 만드는게 나을듯 함
  - 웹서버 먼저
    - EC2 > Launch templates > 대상 template 체크 (newLuckyWEB-LT) > Action > Modify template
    - Template version description : 2
    - Advanced details
      - IAM instance profile : LuckyRole
    - Create template version
  - 앱서버도 동일하게
    - EC2 > Launch templates > 대상 template 체크 (newLuckyAPP-LT) > Action > Modify template
    - Template version description : 2
    - Advanced details
      - IAM instance profile : LuckyRole
    - Create template version
  - Auto Scaling Groups 도 변경적용 해야함
    - EC2 > Auto Scaling groups > newLuckyWEB-ASG > EDIT
    - Lunch template
      - Version : 2
    - Update 버튼
    - EC2 > Auto Scaling groups > newLuckyAPP-ASG > EDIT
    - Lunch template
      - Version : 2
    - Update 버튼
- 기존 인스턴스 삭제
  - EC2 > Instance
    - 새 인스턴스를 만들거기 때문에 기존 인스턴스들은 다 삭제
    - 몇 분후 Auto Scaling에 의해 새 인스턴스가 만들어짐
- Session Manager 접속 
  - EC2 > Instance > 인스턴스 선택(Private Subnet에 있는것) > Connect to instance
  - Session Manager 탭
    - Connect 버튼

## AWS System Manager 에서도 접속 가능
  - 닫을때 Terminate 버튼으로 안닫으면 살아있으니 여기서 Terminate로 닫아도 됨