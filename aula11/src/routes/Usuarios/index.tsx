import { useEffect, useState } from "react";
import { TipoUsuario } from "../../types";

export default function Usuarios(){

    const [usuarios, setUsuarios] = useState<TipoUsuario[]>([{
      id: 0,
      login: "",
      avatar_url: "",
      url: ""
    }])

    //ASYNC e AWAIT

    useEffect(() => {
      async function usersGit() {
        try{
          const response = await fetch("https://api.github.com/users");
          if (!response.ok) {
            throw new Error("Dados solicitados incorretos!");
          }
          const data =  await response.json();
          setUsuarios(data);
        }catch (err){
          console.log(err);
        }
}
usersGit();
    }, [])
    
    return(
      <div>
        <h1>Bem Vindos Usuários</h1>

            <ul>
          {usuarios.map((u)=>(
            <li key={u.id}>{u.login} - <img style={{width:"2%",cursor:"pointer"}} src={u.avatar_url} alt={u.login}/></li>
          ))}
          </ul>
      </div>
    );

  }