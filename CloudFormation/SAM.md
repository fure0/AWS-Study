## Serverless Application Model (SAM)
- Cloudformation의 연장선상
- 훨씬 간단한 Syntax 제공
- SAM CLI

## sam package
어플리케이션을 페킹하고 S3에 업로드 하는역할

## sam deploy
Cloud Formation을 사용하여 서버레스 앱을 배포하는 역할

```bash
sam package \
--template-file ./template.yml \
--output-template-file sam-template.yml \
--s3-bucket aws-learner-bucket

sam deploy \
--template-file sam-template.yml \
--stack-name aws-learner-sam-stack \
--capabilities CAPABILITY_IAM
```