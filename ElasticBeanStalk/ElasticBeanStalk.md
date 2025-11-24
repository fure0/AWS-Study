# Elastic BeanStalk는 무엇인가요?
- 웹 어플리케이션 배포
- 호환 언어 : Java, .NET, PHP, Python, Go, NodeJS 등등
- 호환 플랫폼 : Apache Server, Nginx, TomCat 등등

## Elastic BeanStalk는
- Load Balancing, Auto-Scaling, Health Monitoring을 알아서 해줌
- 어플리케이션 플랫폼 인스톨 및 어플리케이션 스택을 직접 운용
  - 어플리케이션 스택 : OS 패치 및 업데이트
- 빠른 배포 가능케 해줌
- 사용시 추가적인 비용 생기지 않음
  - 배포중 생성되는 AWS리소스 사용시에만 비용 발생
    - 예 : S3 버켓, EC2 인스턴스

## Elastic BeanStalk 배포 방법
- All At Once
  - 모든 인스턴스를 동시에 업데이트
  - V1가 4개면, 4개 동시 업데이트
  - 인스턴스가 셧다운 됨, 실시간 서비스면 적합하지 않음
  - 프로덕션 버전에서는 사용 하면 부적합
- Rolling
  - 그룹을 나눠서 배치처리로 업데이트
  - 인스턴스가 4개면 2개씩 나눠서 처리
  - 성능면에서는 떨어지나, 안정성은 올라감
- Immutable
  - 기존의 인스턴스는 건드리지 않음
  - 새로운 인스턴스를 만들어 헬스 체크를 통과하면 기존의 인스턴스를 삭제함
  - 셧다운 신경 안써도 됨

## Elastic BeanStalk 커스터마이징
- Elastic BeanStalk COnfig 파일을 사용하여 환경설정 커스터마이징 가능

### 무엇이 가능한가?
- 페키지 설치
- 리눅스 유저 및 그룹 생성
- Shell command 정의
- AWS 서비스 Sync

### Config 파일 규칙
- 파일 확장자 : .config
- YAML 혹은 JSON 포멧
- .ebextensions 폴더 안에 들어있어야함