import './App.css'
import {Button} from "./pages/Button.tsx";

function App() {

  return (
    <>
      <div>
          CloudFormationで環境を構築しました
      </div>
        <div>めっちゃいい感じに出来あがた😃</div>
        <br/>
        <br/>
        <div>
            コードはBuildされたものをECRへPushしてます
        </div>
        <br/>
        <br/>
        <Button />
    </>
  )
}

export default App
