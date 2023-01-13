import React from 'react'
import '../style/header.css'
const Header = () => {
    return (
        <>
            <header>
                <div>
                    <h1 className='header-search'>Dada Book Seraching App</h1>
                    <input />
                    <i class="fa-solid fa-magnifying-glass"></i>
                </div>
            </header>
        </>
    )
}

export default Header