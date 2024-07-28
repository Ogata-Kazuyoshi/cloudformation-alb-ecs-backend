# AWS-cloudFormation-codepipeline

<details open="open">
<summary>目次</summary>


- [今回のシステム概要図](#今回のシステム概要図)
- [codecommit](#codecommit)
- [使用方法](#使用方法)

</details>

# 今回のシステム概要図
<details>
<summary> システム概要図</summary>

下記は既存の前提（cloudformationで立ち上げない）
- vpc
- サブネット
- igw
- ngw
- route53ホストゾーン
- ACM証明書

下記サービスを/cloudformation/cloudformation-template.ymlで立ち上げる
- ALB
- ALBのリスナー（設定時に既存のACM使用）
- Route53でAレコード追加してALBにルーティング
- ターゲットグループ（taskで立ち上がるコンテナへルーティング）
- ECSクラスター
- ECSサービス
- ECS task (ECRのイメージを使用)
- IAMロール（ECSのtask定義で使用）
- ALB/ECSのセキュリティーグループ

![](./assets/images/aws-architecher.png)

</details>


- githubにPushできなくなったら下記を打つ
- your_tokenの部分はsettingからとってくる

```zh
git remote set-url origin https://YOUR_TOKEN@github.com/your_username/your_repository.git 
```

# codecommit

<details>
<summary> 1. codecommitに直接Pushしたい場合の設定</summary>

- 下記の設定だけでもダメかも。２回目はPushできなかった。
- 下記コマンドでAWSの設定をする

```zh
git config credential.helper '!aws codecommit credential-helper $@'
git config credential.UseHttpPath true
```

- 下記コマンドでAWSのcodecommitのURL git remoteに追加する

```zh
   git remote add codecommit https://git-codecommit.ap-northeast-1.amazonaws.com/v1/repos/[codecommit_repository_name]
```

</details>

# 使用方法

<details>
<summary> 1. 環境変数の設定</summary>

下記環境変数が必要先に設定する
- AWS_ACCESS_KEY_ID
- AWS_SECRET_ACCESS_KEY
- AWS_SESSION_TOKEN
- AWS_DEFAULT_REGION
- VPC_ID (既存のVPC)
- SUBNET_ID1　（既存のパブリックサブネット１）
- SUBNET_ID2　（既存のパブリックサブネット２）
- SUBNET_PRIVATE_ID1　（既存のプライベートサブネット１）
- SUBNET_PRIVATE_ID2 （既存のプライベートサブネット２）
- EXISTING_ECS_TASK_ROLE_ARN　（cloudformationで作成するECStask用のIAMロールARN。make build-image-pushで使用）
- HOSTED_ZONE_ID (Aレコード追加したいホストゾーン)
- DOMAIN_NAME　(使用したいFQDN。サブドメインだけでなく、FQDNで指定)
- ACM_CERTIFICATE_ARN (使用したい証明書のARN)
- ECR_IMAGE　（ECRのイメージURI）
- ECR_ENDPOINT　（ECRの共通エンドポイント。リポジトリー名は含まない）
- ECR_REPOSITORY_NAME　（ECRのリポジトリー名）
- ECS_CLUSTER_NAME　（ECSのクラスター名）
- ECS_SERVICE_NAME　（ECSのサービス名）
- TASK_DEFINITION_FAMILY　（ECSのタスク定義名）
- CONTAINER_NAME　（ECSのタスクで立ち上げるコンテナ名）

```zh
export 変数名=変数値
```

</details>

<details>
<summary> 2. cloudFormationを使用して環境を立ち上げる</summary>

- 下記コマンドでcloudFormationを起動して環境を立ち上げる

```zh
make iac-deploy
```
</details>

<details>
<summary> 3. cloudFormationに変更があった場合</summary>

- 下記コマンドでcloudFormationを既存の環境にUPDATEをかける

```zh
make iac-update
```
</details>

<details>
<summary> 4. コードを変更してECSサービスを更新する</summary>

- ルートディレクトリのDockerfileを用いて、フロントエンドをバックエンドに巻き込んだDockerイメージを作成
- 下記コマンドにてイメージをECRにPush＆タスク定義をしてサービスの更新

```zh
make build-image-push
```

- task定義のCPUとメモリが小さいと、タスクは１００％完了してもターゲットグループのヘルスチェックで失敗してIPの付け替えができない事象が発生。
- 上記はデプロイされたりされなかったりで不安定だった。少し余裕持っても良いかも

</details>

