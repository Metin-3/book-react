import React from 'react'
import '../style/footer.css'
const Footer = () => {
    return (
        <>
            <footer>
                <div>
                    <ul className='list'>
                        <li className='list-item'>
                            <a href="/"><i class="fa-brands fa-github"></i></a>
                        </li>
                        <li className='list-item'>
                            <a href="/"><i class="fa-brands fa-linkedin"></i></a>
                        </li>
                        <li className='list-item'>
                            <a href="/"><i class="fa-brands fa-instagram"></i></a>
                        </li>
                        <li className='list-item'>
                            <a href="/"><i class="fa-brands fa-facebook"></i></a>
                        </li>
                        <li className='list-item'>
                            <a href="/"><i class="fa-brands fa-twitter"></i></a>
                        </li>
                    </ul>

                    <p><a href="/">Designed & Built by
                        Suleyman Dadashov</a></p>
                </div>
            </footer>
        </>
    )
}

export default Footer