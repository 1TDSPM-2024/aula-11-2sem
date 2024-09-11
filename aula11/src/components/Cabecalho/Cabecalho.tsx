import Menu from "../Menu/Menu";
import { useState } from "react";
import { CgDarkMode as BtDark } from "react-icons/cg";
import "../../style/style.scss"

export default function Cabecalho(){

    const [tema, setTema] = useState<"light" | "dark">("light");

    const lancadorTema = () => {
        setTema((prevTema) => (prevTema === "light" ? "dark" : "light"))
    }

    return(
        <header className={`app ${tema}`}>
            <button onClick={lancadorTema} className="btn-cg">DarkMode</button>
            <BtDark />
            <h1>Cabeçalho</h1>
            <Menu/>
        </header>
        
    )

}