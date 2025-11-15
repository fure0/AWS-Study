# IAM
AWS 내에서 유저를 만들고 Role과 Policy 관리

## 3가지 IAM Policy 유형

### Inline
> 유저, 그룹에 직접 policy를 심어줌
- 1:1 관계
- 다른 유저나 그룹에 inline policy 적용 x
- 유저나 그룹 삭제시 inline policy 역시 삭제됨

### Managed (AWS 관리형)
> AWS에서 생성되고 관리되어지는 Policies
- 우리가 직접 Polocy 만들 필요 없음
- Managed Policy는 다수의 유저와 그룹에 적용 가능
- Managed Policy는 수정 및 삭제 불가
- 예: AmazonDynamoDBFullAccess 

### Customer (고객 관리형)
> 우리들이 직접 새로운 Policy를 만들 수 있음
- 기존에 존재하는 Managed Policy 사용
- 원하는 요구사항에 맞게 수정하고 사용
- Managed Policy에서 원하는 Policy가 없을 때 사용

## 실습
> Customer 정책
- IAM 검색 > 정책 메뉴 선택
- 필터 선택
- 권한 탭 > 정책 편집

> Managed 정책
- IAM 검색 > 정책 메뉴 선택
- 필터 선택
- 권한 탭 > 수정이 안되야 한는데 최근에 될 지도?

> Inline 정책
- IAM 검색 > 사용자 메뉴 선택
- 그룹이나 유저 선택
- 권한 탭 > 권한 추가 > 인라인 정책 생성
- 시각적 or Json 형식 선택
- 서비스 선택 (예: S3)
  - 액세스 수준 선택 (나열, 읽기, 쓰기, 권한 관리, 태그 지정)
  - 리소스 선택 (S3의 경우)
  - 전책 이름 작성
- 인라인 정책은 1:1이라 정책을 만든 후에도 특정 유저안에서 말고는 검색이 안된다.