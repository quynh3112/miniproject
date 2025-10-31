import { Button, Input } from "antd";
import Item from "antd/es/list/Item";
import { useState } from "react";

export default function Focustodo(){
    const [plan,setPlan]=useState<String []>(["Bài tập toán"])
    const [newplan,setNewPlan]=useState<string>("")
    const [error,setError]=useState<string>("")
    const handleadd=()=>{
        if(newplan){
            setPlan([...plan,newplan])
            setNewPlan("")
        }
        else{
            setError("Chưa nhập đủ thông tin")
        }
    }
    const handleremove=(index:number)=>{
        setPlan(plan.filter((_,item)=>item!=index))
    }
    return(
        <>
        <div>
            <Input type="text"  onChange={(e)=>{setNewPlan(e.target.value);setError("")}} value={newplan}/>
            <Button onClick={handleadd}>Thêm</Button>
        </div>
        {error && <p style={{ color: "red" }}>{error}</p>}

        <ul>
            {plan.map((item,index)=>(
                <div key={index}>
                    <li>{item} <Button onClick={()=>handleremove(index)}>Hoàn Thành</Button></li>
                   
                   
                </div>
            ))}
        </ul>
        </>
    )
}