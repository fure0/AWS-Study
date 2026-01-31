# CloudFormation

## Infrastructure As Code (Iac)
- Template
  - YAML
  - JSON
- Template에 근거하여 AWS 자원들 생성
- Stack

## Cloud Formation 장점
- 일관성
- 속도 & 간편성
- Version Control
- 사용 비용 무료
- 쉬운 업데이트
- 용이한 이전 버전 롤백

## Cloud Formation 작동 원리
- Template Json 혹은 YAML
- Cloud Formation에 의해 S3에 업로드됨
- Cloud Formation에서 자동으로 필요한 API 호출
- 메모리 Stack이 쌓임 자원1.. 자원2.. 자원3

## Cloud Formation snippets 도 참고