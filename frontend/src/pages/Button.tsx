import {useState} from "react";
import axios from "axios";

type ResponseDemo = {
    message: string
}
export const Button: React.FC = () => {

    const [text, setText] = useState<string | undefined>(undefined)

    const handleClick = async () => {
        const res = await axios.get<ResponseDemo>('api/demo').then(res => res.data)
        setText(res.message)
    }

    return (
        <>
            <div>
                <button onClick={handleClick}>バックエンドからデータ取得</button>
            </div>
            <br/>
            {text && <div>
                {text}
            </div>}
        </>
    );
};


