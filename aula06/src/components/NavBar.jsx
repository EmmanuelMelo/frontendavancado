import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav>
        <Link to="/">Inicial</Link><br/>
        <Link to="/contato">Contato</Link><br/>
        <Link to="/dpo-lgpd">DPO Lgpd</Link><br/>
        <Link to="/faculdade">A Faculdade</Link><br/>
        <Link to="/noticias">Notícias</Link>
    </nav>
  )
}

export default NavBar