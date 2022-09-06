import React from 'react'
import { useState } from 'react';

const NavBar = ({isDark, setIsDark}) => {

    // const [isDark, setIsDark] = useState(false);

    // Change la couleur de fond de la <div> principale en fonction du changement d'état de isDark
    const bgColor = isDark ? "App bg-dark text-white" : "App";

    // Change la couleur de fond du switch en fonction du changement d'état de isDark
    const bgColorLabel = isDark ? "form-check-label bg-dark text-white" : "form-check-label bg-white text-dark";

    // Change le texte du label en fonction du changement d'état de isDark
    const colorUI = isDark ? 'dark' : 'white';

    console.log(`isDark (NavBar:17) = ${isDark}`);
    

    return (
        
        <div className={`${bgColor}`}>
            <div className='container-fluid'>
                <div className='pages row bg-white text-dark text-center'>
                    <h1>La boutique de nom/prénom </h1>
                </div>
                <nav className="navbar navbar-expand-lg bg-white">
                    <div className="container-fluid">

                        {/* ===== Début marque boutique ===== */}
                        <a className="navbar-brand" href="#">La boutique</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        {/* ===== Fin marque boutique ===== */}

                        {/* ===== Début liste navigation ===== */}
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#">Produits</a>
                                </li>
                            </ul>
                            {/* ===== Fin liste navigation ===== */}

                            {/* ===== Début switch =====     */}
                            <div className="Switch">
                                <div className="form-check form-switch">
                                    <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked={isDark} onChange={() => setIsDark(!isDark)} />
                                    <label className={`${bgColorLabel}`} htmlFor="flexSwitchCheckChecked">{colorUI}</label>
                                </div>
                            </div>
                            {/* ===== Fin switch ===== */}
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default NavBar