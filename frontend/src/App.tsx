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
