import Foto from './eu.svg'
import './Sobre.css'


function Sobre (){
    return(
        <div>
            <div className='sobre'>
                <div>
                    <img className="sobre-img" src={Foto} alt='Banner' title='Banner'/>
                </div>
                
                <div>
                    
                    <p className="sobre-p">
                        Me chamo Douglas, uma pessoa apaixonada desde de pequeno por tecnologia no geral. Desde pequeno sempre tive facilidade com software básicos justamente pelo meu espirito explorador, desde do próprio Windows em que eu era obrigado a formatar sempre até instalar e modificar jogos em PC. Os jogos não me ajudaram somente com a parte do software, também me ajudaram bastante a aprender sobre a área do hardware, justamente para conseguir melhorar o meu computador e para melhor rodar os jogos. Hoje em dia faço Análise e Desenvolvimento de Sistemas na Universidade Veiga de Almeida, atrelado a isso, estudo também no Alura Cursos Online de Tecnologia para aprender e aprimorar minhas habilidades de programação e desenvolvimento. Atualmente domino as linguagens para desenvolvimento web: HTML, CSS, Javascript, ReactJS e WordPress.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Sobre