import './style.css'
import { useState } from 'react'

export default function RandonNumber(){
    const [randonNum, setNumber] = useState(0)
    return <div>
        <h3 className='NumeroRandomico'>{randonNum}</h3>
        <button className='botao' onClick={function(){
            setNumber(Math.floor(Math.random() * 500 + 1))
            const botao = document.querySelector('.botao')
            botao.classList.add('anima')
            const tiraAnimacao = setInterval(() => {
                botao.classList.remove('anima')
                clearInterval(tiraAnimacao)
            },900)
        }}>Gerar número aleatório</button>
    </div>
}