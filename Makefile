
frontend-test:
# 	cd frontend && npm run lint
	cd frontend && npm run test

backend-test:
# 	cd backend && ./gradlew ktlintFormat && ./gradlew ktlintCheck
	cd backend && ./gradlew test

all:
	make backend-test
	make frontend-test

build-image-push:
	aws ecr get-login-password --region ap-northeast-1 | docker login --username AWS --password-stdin $(ECR_ENDPOINT)
	docker build --platform linux/amd64 -t $(ECR_REPOSITORY_NAME) .
	docker tag $(ECR_REPOSITORY_NAME):latest $(ECR_ENDPOINT)/$(ECR_REPOSITORY_NAME):latest
	docker push $(ECR_ENDPOINT)/$(ECR_REPOSITORY_NAME):latest

iac-deploy:
	aws cloudformation create-stack --stack-name ogata-cloudformation-app-try \
	--template-body file://cloudformation/cloudformation-template.yml \
	--parameters ParameterKey=SubnetId1,ParameterValue=$(SUBNET_ID1) \
	             ParameterKey=SubnetId2,ParameterValue=$(SUBNET_ID2) \
	             ParameterKey=SubnetPrivateId1,ParameterValue=$(SUBNET_PRIVATE_ID1) \
	             ParameterKey=SubnetPrivateId2,ParameterValue=$(SUBNET_PRIVATE_ID2) \
	             ParameterKey=VpcId,ParameterValue=$(VPC_ID) \
	             ParameterKey=ExistingECSTaskRoleArn,ParameterValue=$(EXISTING_ECS_TASK_ROLE_ARN) \
	             ParameterKey=ECRImage,ParameterValue=$(ECR_IMAGE) \
	             ParameterKey=HostedZoneId,ParameterValue=$(HOSTED_ZONE_ID) \
	             ParameterKey=DomainName,ParameterValue=$(DOMAIN_NAME) \
	             ParameterKey=ACMCertificateArn,ParameterValue=$(ACM_CERTIFICATE_ARN)

iac-update:
	aws cloudformation update-stack --stack-name ogata-cloudformation-app-try \
	--template-body file://cloudformation/cloudformation-template.yml \
	--parameters ParameterKey=SubnetId1,ParameterValue=$(SUBNET_ID1) \
	             ParameterKey=SubnetId2,ParameterValue=$(SUBNET_ID2) \
	             ParameterKey=SubnetPrivateId1,ParameterValue=$(SUBNET_PRIVATE_ID1) \
	             ParameterKey=SubnetPrivateId2,ParameterValue=$(SUBNET_PRIVATE_ID2) \
	             ParameterKey=VpcId,ParameterValue=$(VPC_ID) \
	             ParameterKey=ExistingECSTaskRoleArn,ParameterValue=$(EXISTING_ECS_TASK_ROLE_ARN) \
	             ParameterKey=ECRImage,ParameterValue=$(ECR_IMAGE) \
	             ParameterKey=HostedZoneId,ParameterValue=$(HOSTED_ZONE_ID) \
	             ParameterKey=DomainName,ParameterValue=$(DOMAIN_NAME) \
	             ParameterKey=ACMCertificateArn,ParameterValue=$(ACM_CERTIFICATE_ARN)