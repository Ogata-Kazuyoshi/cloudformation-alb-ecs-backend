import './App.css';
import { Button } from './pages/Button.tsx';

function App() {
  return (
    <>
      <div>CloudFormationで環境を構築しました</div>
      <div>ふざけるのをやめました</div>
      <div>ECRにPushして自動でデプロイかかったら最高</div>
      <div>なかなかうまくいかんね！！</div>
        <div>IAMロール既存の使うと怒られる。自分で作った</div>
        <div>一旦、リソースの作成、ECRPush後の自動デプロイはOK。次はCodePipeline組もう！！</div>
        <div>deployが成功したり、失敗したりで安定しないのはなんで？</div>
        <div>CPU,memoryを増やしたら安定するって聞いた</div>
        <div>なんか、githubから直接ECRにPushかけて、それを元にECSにデプロイするっぽい</div>
        <div>あんまりGithubActionsからの動きうまくいってなさそう</div>
        <div>task定義をgithub-ci.ymlに書くのは後でやめたいね</div>
      <br />
      <br />
      <div>コードはBuildされたものをECRへPushしてます</div>
      <br />
      <br />
      <Button />
    </>
  );
}

export default App;
