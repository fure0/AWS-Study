## 인스턴스 60개 만들어 보기
- EC2 > Instances > Launch an instance
  - name : LuckyInstance
  - Quick Start : Amazon Linux
  - Key pair : Proceed without a key pair
  - Number of instances : 60
  - 다른 값은 기본값
  - Launch instance 버튼으로 생성
  - 실패함.

## 늘리기 신청하기
- Service Quotas
  - AWS services > Amazon EC2
    - Running On-Demand Standard (A, C, D, H, I, M, R, T, Z) instances 선택
      - Reuqest quota increase 버튼
        - Change quota value : 33
        - 한번 늘리면 줄일수가 없으니 주의
        - Request 버튼으로 신청