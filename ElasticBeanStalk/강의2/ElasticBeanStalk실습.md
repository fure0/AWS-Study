## 먼저 Role 만들기
- IAM > Roles > Create Role
  - Trusted entity type : AWS service
  - Use case
    - EC2
  - Next 버튼
  - Add permissions
    - awselastic 으로 필터
    - AWSElasticBeanstalkWebTier 선택
  - Next 버튼
  - Role name : luckyrole
  - Create role 버튼

## ElasticBeansTalk
- Create applocation
  - Environment tier : Web server environment
  - Application name : luckyapp
  - Platform : Python
  - Application code : Sample application
  - Presets : Hith availability
  - Next 버튼
  - Service role : Create and use new service role
    - aws-elasticbeanstalk-service-role
  - EC2 instance profile
    - luckyrole
  - Skip to revice 버튼 (기본설정으로 사용)

## 배포 확인
- Elastic Beanstalk > Environments > Luckyapp-env
- Domain URL 주소 복사해서 들어가보기