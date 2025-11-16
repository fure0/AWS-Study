# SNS SQS 실습

## Amazon SQS > 대기열 > 대기열 생성

### 대기열 생성
- 유형선택
  - 표준
  - FIFO
- 이름 지정
- 구성
  - 표시 제한 시간
    - invisible 시간
  - 메시지 보존 기간
    - 읽히지 않은 메시지가 얼마나 보존되는 지
- 액세스 정책
  - 기본 / 고급
  - 오너만 접근 할수 있는지 등
- 암호화

## Amazon SNS > 주제 > 주제 생성

### 주제 생성 (Topic)
- 유형 선택
  - 표준
  - FIFO
  - SQS가 표준이라면 SNS도 표준을 선택해야 한다. 그렇지 않으면 구독을 할수 없다.
- 이름 지정

## Amazon SNS > 구독 > 구독 생성

### 구독 생성

- 주제(Topic) ARN 선택
  - 만든 Topic ARN 선택
- 프로토콜 선택
  - Amazon SQS
- 엔드포인트
  - 만들어둔 SQS ARN 선택

### SQS 액세스 정책 수정

- 만들어둔 Queue 액세스 정책 탭
  - Json 형태 편집 버튼 클릭
  - 정책 생성기 선택
    - Select Type of Policy : SQS Queue Policy 선택
    - Add Statement
      - Effect : Allow
      - Principal : *
      - Actions : SendMessage
      - Amazon Resource Name (ARN) : SQS ARN 주소 를 붙여넣는다.
      - Add Conditions 선택 후 조건 추가
        - COndition : AmEquals
        - key : aws:SourceArn
        - value : SNS 토픽 ARN 을 붙여 넣는다
    - Add Statement 버튼 클릭 으로 생성
    - Ganerate policy 버튼 클릭
      - Json으로 새로운 전책 생성
      - 복사후에 SQS 정책에 덮어쓰기
  - 저장

### 테스트
- 만들어둔 SNS 주제 선택
- 메시지 게시 버튼 선택
  - 재목 입력
  - 메시지 본문 작성
  - 메시지 게시 버튼 클릭
- SQS애 매사자가 들어갔는지 확인
  - Queue 선택후 메시지 전송 및 수신 버튼 선택
  - 메시지 수신 메뉴에서 메시지 풀링 버튼 선택