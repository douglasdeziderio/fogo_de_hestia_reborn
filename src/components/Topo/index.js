import Logo from './fogo.svg'
import './Topo.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

function Topo() {
    return(
        <div className='topo'>
            <img src={Logo} alt='Logo' title='Logo'/>
            <div className='pesquisa'>
                <input placeholder='Pesquisa'></input>
                <a><FontAwesomeIcon icon={faMagnifyingGlass} className='awe'/></a>
            </div>
            <button>Doar</button>
        </div>
    )
}

export default Topo