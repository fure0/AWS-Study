# SQS (Simple Queue Service)
- Message Queue 서비스
- Queue : Message들을 보관 하는 서비스

## SQS 특징

### 어플리케이션 컴포넌트 분리
- 컴포넌트 분리로 인해 어플리케이션을 독립적으로 실행
- 컴포넌트 사이에서 매우 용이한 메세지 운용 가능

### 메세지 보관
- 최대 256KB에 해당하는 text 포멧 메세지 보관 가능
- XML, JSON, TXT

### 메세지 가져오기
- AWS SQS API를 통한 모세지 꺼내오기

### Buffer
- 프로세싱을 위한 데이터를 전달받는 컴포넌트와 데이터를 만들어내는 컴포넌트 사이에 존재하는 버퍼
- 람다 -> SQS <- App

## Queue 두가지 종류
- Standard Queue
- FIFO (First In First Out)

### Standard Queue
- 초당 메세지를 주고받는 횟수가 거의 무제한
- 최소 한번은 꼭 메세지를 전달시킴
- 최대한 메세지가 들어온 순서대로 메세지가 나갈 수 있게 해줌
- 아무 가끔 중복 메세지가 전달될 수도 있음, 그리고 순서가 어긋날 수도 있음

### FIFO Queue
- 메세지가 들어온 순서대로 메세지가 밖으로 나감
- 딱 한번만 메세지를 전달함
  - 메세지 중복 허용 X
  - Consumer가 다시 요청 할때까지 특정시간동안 Queue에 들어있음
- 초당 메세지를 주고받는 횟수가 정해져있음
  - 300 TPS

### Visibility Timeout
- Queue에서 빠져나간 메세지를 Consumer가 읽은 후 Queue안에서 그 메세지가 invisible상태로 유지되는 시간
- 기본 30초, 최대 12시간

### Polliong
- Customer가 Queue에 세로운 메세지가 들어왔는지 정기적으로 확인

### Short Polling
- Queue가 비어있어도 즉시 response를 반환함
- Queue가 비어있을때 빈 response가 반환됨
- 빈 response에 대해서도 비용을 지불해야함

### Long Polling
- 정기적으로 Queue를 검사함
- Long poll timeout이 되거나 Queue에 메세지가 들어가면 response가 반환됨
- 비용을 절감할 수 있음, 따라서 Short Polling보다 선호됨