## Provisioned Throughput

## Capacity Unit

### 쓰기 (Write Capacity Unit) = WCU
- 1 Write Capacity Unit = 1초에 1 KB 데이터 쓰기

### 읽기 (Read Capacity Unit) + RCU
- 1 Read Capacity Unit = 1초에 4KB SC 데이터 읽기
- 1 Read Capacity Unit = 1초에 2 * 4 KB EC 데이터 읽기 (디폴트)
- SC : Strongly Consistent
  - 가장 최신의 데이터를 불러오나 레이턴시가 발생
- EC : Eventually Consistent (디폴트)
  - 가장 최신의 데이터를 불러오지는 않음

- 5 * (2 * 4 KB EC 데이터) => 초당 40 KB 데이터 읽음
- 5 * (4 KB SC 데이터) => 초당 20 KB 데이터 읽음
- 5 * (1 KB 데이터) => 초당 5 KB 데이터 씀

## RCU 샘플 문제
- 초당 8-개의 데이터를 읽어와야함
- Stronglt Consistent 데이터
- 1개의 데이터 크기 = 3 KB
- 질문 : RCU의 크기는 얼마로 잡아야 할까요?

### 1.얼마나 많은 4 KB RCU가 필요한지 구함
- 3 KB / 4 KB = 0.75

### 2.정수로 떨어지지 않으면 반올림
- 0.75 -> 1

### 3.초당 얼마나 많은 데이터를 읽어오는지 계산
- 1 * 80 - 80 RCU

### Eventually Consistent 데이터의 경우
- 80 RCU / 2 = 40 RCU

## WCU 샘플 문제
- 초당 100개의 데이터를 써야함
- 1개의 데이터 크기 = 512 BYTES
- 질문 : WCU의 크기는 얼마로 잡아야 할까요?

### 1.얼마나 많은 1KB WCU 필요한지 구함
- 512 BYTES / 1 KB (1024 BYTES) = 0.5

### 2.정수로 떨어지지 않으면 반올림
- 0.5 -> 1

### 3.초당 얼마나 많은 데이터를 써야하는지 계산
- 1 * 100 = 100 WCU


## Access Contrll

### AWS IAM
- Users
- IAM 역할
- Groups
  - 역할과 그룹에 따라 유저들은 전혀 다른 권한을 가질 수 있음
  - 테이블 생성, 데이터 삽입 & 수정 & 삭제 등등..
- 테이블 별로 유저 권한 필터링 -> IAM Conditions

## TTL (Time To Live)
- 데이터에 유효기간을 설정
  - 불필요하거나 일시적인 데이터 (Session, Event Log) 삭제
  - 테이블 청소로 인하여 데이터 유지 비용 절감

| 유저아이디 | 세션아이디 | 세션생성시간 | TTL | 세션데이터 |
|-----------|-----------|------------|-----|----------|
| 84724 | 657381 | 1544031271 | 1544038471 | ... |
| 26495 | 758293 | 1544013196 | 1544020396 | ... |
| 92742 | 782938 | 1544008931 | 1544018723 | ... |

- Epoch Time / Unix Time : 1970년 1월 1일 오전 12시 기준, 얼마나 많은 초(seconds)가 지났는지 알려줌

## Provisioned Throughput Exceeded (PTE)

### PTE Exception
- 너무 많은 읽기/쓰기 요청 발생시 일어남

### AWS SDK
- 요청을 성공적으로 처리할때까지 계속 전송

### No AWS SDK
- Exponential Backoff
  - 실패할때 마다 재전송 시간을 늘려서 보냄