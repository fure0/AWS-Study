## Cloud9 만들기 (코드 편집애에 필요)
- AWS Cloud9 > Environments > Create environment
  - name : luckycloud9
  - instance type : t3.small
  - create 버튼으로 생성

## 실습파일 참조
- https://github.com/LuckyVanilla3/Architecture

## CloudFormation
- CloudFormation > Stacks > With new resources (standard)
  - Prepare template : Template is ready 선택
  - Template source : Upload a template file
  - Choose file : 실습파일 선택 (instance.yml)
  - Next 버튼
  - Stack name : luckystack
    - stack 이란? resource의 집합을 그룹으로 묶은 단위
  - Next
  - 나머지는 기본값으로 submit 버튼으로 생성
- CloudFormation > Stacks > luckystack
  - 간단하게 탭 설명
  - Stack info
    - 스택 정보 표시, 이름, 언제 만들어 졌는지
  - Events
    - 모든 이벤트의 출력. 만들어지고, 지워지고, 오류나고
  - Resources
    - 만들어진 리소스 표시
  - outputs
    - 다 만들어진 후 출력하고 싶은 메시지가 있는 경우
  - Paramters
    - 입력 받은 값이 있다면 표시해줌
  - Template
    - 사용한 템플릿을 표시해줌
  - Change sets
    - 인프라가 업데이트 될 때 그변화가 표시됨

## YMAL 작성형식 참고
- https://docs.aws.amazon.com/ko_kr/AWSCloudFormation/latest/UserGuide/template-formats.html
```yaml
AWSTemplateFormatVersion: 2010-09-09
Description: A sample CloudFormation template with YAML comments.
# Resources section
Resources:
  MyEC2Instance: 
    Type: AWS::EC2::Instance
    Properties: 
      # Linux AMI
      ImageId: ami-1234567890abcdef0 
      InstanceType: t2.micro
      KeyName: MyKey
      BlockDeviceMappings:
        - DeviceName: /dev/sdm
          Ebs:
            VolumeType: io1
            Iops: 200
            DeleteOnTermination: false
            VolumeSize: 20
```


## vpc.yml 작성후 명령어로 업로드
- aws cloudformation deploiy --stack-name "lucky" --template-file "vpc.yml"
- AWS VPC메뉴가서 생성 확인

## CloudFormation 지워보기
- CloudFormation > Stacks
  - 선택 > Delete 버튼
  - 클라우드 포메이션 하나만 지워도 관련 리소스가 다 지워짐
  - 명령어로도 지울수 있음
    - aws cloudformation delete-stack --stack-name "lucky"