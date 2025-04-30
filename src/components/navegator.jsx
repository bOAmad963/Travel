import style from '../styles/index.module.css'
import { showMenu, closeMenu } from '../functions/toggle-sidebar'
import { Link } from 'react-router-dom'

function Navegator() {

  return (
    <>
      <button onClick={showMenu} id='showNavegator' className={style.showNavegator}>
        <img src="public/icons/menu.png" alt="" />
      </button>
      <nav className={style.navegator}>
        <ul className={style.hNavegator}>
          <li>
            <Link to='/' className={style.links}>Home</Link>
          </li>
          <li>
            <Link to='/services' className={style.links}>Serveces</Link>
          </li>
          <li>
            <Link to='/about' className={style.links}>About us</Link>
          </li>
          <li>
            <img className={style.logo} src="public/images/logo.jpg" alt="logo" />
          </li>
        </ul>
        <ul id='vNavegator' className={style.vNavegator}>
          <li className={style.closeMenu}>
            <Link onClick={closeMenu} className={style.links}>X</Link>
          </li>
          <li>
            <Link to='/' className={style.links}>Home</Link>
          </li>
          <li>
            <Link to='/services' className={style.links}>Serveces</Link>
          </li>
          <li>
            <Link to='/about' className={style.links}>About us</Link>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Navegator