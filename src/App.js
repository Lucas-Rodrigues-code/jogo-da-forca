import { useState } from "react";

import palavras from "./palavras";

import forca0 from "./assets/forca0.png"
import forca1 from "./assets/forca1.png"
import forca2 from "./assets/forca2.png"
import forca3 from "./assets/forca3.png"
import forca4 from "./assets/forca4.png"
import forca5 from "./assets/forca5.png"
import forca6 from "./assets/forca6.png"



const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
const imagens = [forca0, forca1, forca2, forca3, forca4, forca5, forca6]
export default function App() {

    const [clicou, setClicou] = useState(true) //DESABILITA INPUT E BOTOES 
    const [erros, setErros] = useState(0)
    const [palavraEscolhida, setPalavraEscolhida] = useState([]) // plavra sorteada
    const [palavraDojogo, setPalavraDoJogo] = useState([])

    function inicioJogo() {
        setClicou(false)
        sortearPalavras()

    }

    function sortearPalavras() {
        const palavra = palavras[Math.floor(Math.random() * palavras.length)];
        const palavraArray= palavra.split("")
        setPalavraEscolhida(palavraArray)
        console.log(palavraArray)

        let tracos = []
        palavraArray.forEach((letra )=> tracos.push(" _"));
        setPalavraDoJogo(tracos)
    }


// funcçoes de componente 
    function Botao() {




        return (
            <div className="words">
                {alfabeto.map(a => <button key={a} className="abc" disabled={clicou}>{a}</button>)}
            </div>
        )
    }



 
 
    return (
        <>
            <div className="gameScreen">
                <img className="imgGallow" src={imagens[erros]} alt="forca" />
                <div className="secret-word">
                    <h1>{palavraDojogo}</h1>
                
                </div>
                <button className="game-word" onClick={inicioJogo}>Escolher Palavra</button>
            </div>
            <Botao />
            <div className="answer">
                <h1>Já sei a palavra !</h1> <input className="input-kick" disabled={clicou} /> <input type="submit" value="Chutar" className="submit" disabled={clicou} />

            </div>
        </>

    )
}

