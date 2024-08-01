import './App.css';
import { Button } from './pages/Button.tsx';
import axios from "axios";
import {useState} from "react";

function App() {

    type ResponseUser = {
        id : string
        name : string
        nickname : string
        age : number
    }

    const [users, setUsers] = useState<ResponseUser[]>([])
    const getUserInfoClick = async () => {
        const res = await axios.get<ResponseUser[]>('api/users').then(res => res.data)
        setUsers(res)
    }

  return (
    <>
      <div>CloudFormationで環境を構築しました</div>
      <br />
        <div>無茶苦茶良い感じ。ちゃんとDB、シークレットも含めて環境をCloudFormationで作成完了</div>
        <div>ちゃんと更新してるんよねーーーー！！！</div>
        <div>古いVerからでもOKKKKKK</div>
      <br />
        <div>
            <button onClick={getUserInfoClick}> Get User Info</button>
        </div>
      <br />
      <br />
        {users.map(user => {
            return (
                <div key={user.id}>
                    {`id : ${user.id} , name : ${user.name} , nickname : ${user.nickname} , age : ${user.age}`}
                </div>
            )
        })}
      <Button />
    </>
  );
}

export default App;
