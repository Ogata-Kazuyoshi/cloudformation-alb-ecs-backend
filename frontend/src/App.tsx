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
      <div>
        一旦、リソースの作成、ECRPush後の自動デプロイはOK。次はCodePipeline組もう！！
      </div>
      <div>deployが成功したり、失敗したりで安定しないのはなんで？</div>
      <div>CPU,memoryを増やしたら安定するって聞いた</div>
      <div>
        なんか、githubから直接ECRにPushかけて、それを元にECSにデプロイするっぽい
      </div>
      <div>あんまりGithubActionsからの動きうまくいってなさそう</div>
      <div>task定義をgithub-ci.ymlに書くのは後でやめたいね</div>
      <div>やっぱりデプロイの自動化は難しいね。早く次のステップに行きたい</div>
      <div>
        CPUメモリのサイズの問題ではなさそう。なぜデプロイが失敗するのか。。。
      </div>
      <div>terminalから直接。。。</div>
      <div>タスクロールが抜けてたかも。。。。</div>
      <div>なぜかimage_uriが取れてなかっただけ</div>
      <div>色々環境変数化してみた</div>
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
