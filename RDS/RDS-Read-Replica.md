## CloudWatch로 모니터링 하고 있는데, RDS의 CPU 사용률이 60%를 넘어 갔네요.
- RDS의 CPU사용율이 계속 증가 할것 같음
- RDS가 장애가 나기전에 인스턴스 타입을 좋은걸로 바꿔야 할듯 (Scale-up)
- Multi-AZ 기능이 있는데 장애 나면 FailOver하지 않나? 굳이 Scale up 해서 비용을 낭비할 필요가 있나?
- FailOver은 리소스가 부족해서 장애가 나기 때문에 Secondary DB가 작동해도 트래픽을 못 버텨서 또 죽게 됨

## 다시 고민합니다.
- RDS에서 Scale-up 할수 있는 인스턴스는 한계가 있음
- 스팩을 넘어가는 트래픽이 오면 어떻게 해야 하나?

## 앗! 찾았어요. 쉽게 성능을 올릴 수 있는 방법이 있네요. READ REPLICA (읽기 전용 복제본) 이란 기능이 있다네요
- RDS에서 Mysql은 Read Replica를 5개 만들수 있음
- Read Replica는 읽기만 할 수 있는 DB라고 함
- 쓰기는 Primary DB에 하고 읽기는 Read Replica 에서 하면 성능이 많이 좋아 질것 같음