import Menu from "../Menu/Menu";
import { useState } from "react";
import { CgDarkMode as BtnDark } from "react-icons/cg";
import "../../style/style.scss"


export default function Cabecalho(){

    const [tema, setTema] = useState<"light" | "dark">("dark");

    const lancadorTema = () => {
        setTema((prevTema) => (prevTema === "light" ? "dark" : "light"));
    }

    return(
        <header className={`app-${tema}`}>
            <BtnDark onClick={lancadorTema} className="btn-cg" />
            <h1>Cabeçalho</h1>
            <Menu />
        </header>
    )

}