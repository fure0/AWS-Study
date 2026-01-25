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