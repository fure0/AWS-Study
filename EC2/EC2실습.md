## EC2
- 먼저 보안 그룹 생성
- 인스턴새 생성
### Securoty Groups 생성
- Create security group
- Security group name : LuckyWEBAPP-SG
- Decrition : WEB,APP Server Allow HTTP, HTTPS, SSH
- Inbounds rules
  - SSH TCP 22 Anywhere 0.0.0/0
  - HTTP TCP 80 Anywhere 0.0.0/0
  - HTTPS TCP 443 Anywhere 0.0.0/0

### Instances 생성
- Launch an instance
- name : LuckyInstance
- AMI (Amazon Machine Image)
  - Amazon Linux
- Instance Type : t3.micro
- Key pair (login)
  - 여기선 그냥 안만듬 (Default value)
- Network settings
  - select existing security group
    - LuckyWEBAPP-SG

- User data - optional
```bash
#!/bin/bash
yum update -y
yum install -y nginx
systemctl enable nginx
systemctl start nginx
cd /usr/share/nginx/html
echo "<h1>Hello world</h1><h2>This is First Instance</h2>" > index.html
```

- 생성후 public ip로 접근해보기
- SSH 포트를 만들고 key를 만들지 않았기 때문에 내부에서 바로 접근 가능함
  - Connect > EC2 Instance Connect

- 비용 나가니까 테스트 후 삭제
  - 체크 > Instance State > Terminate instance