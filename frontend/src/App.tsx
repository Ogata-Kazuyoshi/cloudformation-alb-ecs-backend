import './App.css'
import {Button} from "./pages/Button.tsx";

function App() {

  return (
    <>
      <div>
          CloudFormationで環境を構築しました
      </div>
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
