## Nested Stack
- 스택 위에 스택 쌓임
- 반복적으로 쓰이는 것을 nested stack으로 사용
- Load Balancer, Security Group


```yml
Resources:
Type: AWS::CloudFormation::Stack
Properties:
  NotificationARNs:
    - String
  Parameters:
    AWS CloudFormation Stack Parameters
  Tags:
    - Resource Tag
  TemplateURL: https://s3.amazonaws.com/../template.yml
  TimeoutInMinutes: Integer
```