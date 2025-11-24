# Lambda Versions
- Lambda Function을 처음 만들면 Version은 $LATEST가 됨
- 변경된 Lambda Functiond을 업로드하면 그 Version이 $LATEST가 됨
- Version은 우리가 Alias를 부텨할 수 있음
  - 다른 Lambda Version을 가질 수 있음
  - 다른 Lambda Version은 다른 ARN이 존재함
- Alias는 다른 Version으로 변환시 사용되어짐

## 실습

- AWS Lambda 메뉴
- 함수 생성
  - 함수 이름 지정
  - 런타임 선택
- 코드 탭
  - 코드 소스
  - 에서 업로드 버튼
  - 1 zip 업로드
- 테스트 탭
  - 이름 입력
  - 변경 사항 저장
  - 테스트 버튼
- 작업 버튼
  - 새 버전 발행 1
- 작업 버튼
  - 별칭 생성
    - 이름 지정
    - 버전 선택 1 or LATEST
- 코드 탭
  - 코드 소스
  - 에서 업로드 버튼
  - 2 zip 업로드
- 테스트 탭
  - 이름 입력
  - 변경 사항 저장
  - 테스트 버튼
- 작업 버튼
  - 새 버전 발행 2
- 작업 버튼
  - 별칭 생성
    - 이름 지정
    - 버전 선택 2 or LATEST
- 별칭 탭
  - 버전 확인 가능
- 버전 탭


# VPC 안에 Lambda가 접근을 하려면?

- Lambda함수가 Private Subnet에 접근할 수 있게 허용해줘야 함
- Lambda함수는 아래와 같은 VPC Configuration이 요구됨
  - Private Subnet ID
  - Security Group ID
- Lambda함수는 Private Subnet으로부터 사용 가능한 IP주소를 부여해주는 ENI(Elastic Network Interface)를 셋업함