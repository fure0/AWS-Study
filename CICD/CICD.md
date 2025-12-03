# CICD

## Life Cycle Event Hooks

### Run Order
```yaml
version: 0.2
os: linux

files:
  - source: config/config.txt
    destination: /webapps/Config
  - source: Source
    destination: /webapps/myApp

hooks:
  BeforeInstall:
    - location: Scripts/UnzipResourceBundles.sh
    - location: Scripts/UnzipDataBundles.sh
  AfterInstall:
    - location: Scripts/RunResourcesTests.sh
      timeout: 360
  ApplicationStart:
    - location: Scripts/RunFunctionalTests.sh
  ValidateService:
    - location: Scripts/ValidateService.sh
      timeout: 3600
```

### 디플로이 절차 (라이프 사이클)
- ELB
- ApplicationStop
- DownloadBundle
- BeforeInstall
- Install
- AfterInstall
- ApplocationStart
- ValidateService
- ELB