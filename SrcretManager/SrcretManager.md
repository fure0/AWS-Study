## IAM의 ROLE을 사용하니 KEY없이 서비스끼리 안전하게 접근할수 있었습니다. 하지만, DB도 USERNAME/PASSWORD가 있는데요
- IAM은 Role(역할) 덕분에 Key를 관리 안해도 되고, 혹시 코드에 키가 들어 가지 않아 키가 노출될 리스크도 해결 했음
- 하지만 잘 생각해보니 코드에는 DB접근을 하기 위한 username 과 password가 저장되어있음
- 노충되면 큰일남

## DB의 USERNAME/PASSWORD는 어떻게 코드에 안 넣고 사용할 수가 있죠?
- DB의 username/passowrd뿐만 아니라 중요한 key, password, text들을 안전하게 관리하는 방법이 있음
- 바로 Secret Manger가 해결
- 코드에서 DB에 접근 해야할 때, AWS API를 이용하여 Secrets manager에 DB password를 요청
- 요청후 받은 password를 DB에 보내주고 로그인하여 사용