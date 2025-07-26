import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    window.addEventListener('scroll', function() {
        if (scrollY > 50) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    }
)

    return (
        <div>
            <nav className={`navbar navbar-expand-sm bg-main text-white fixed-top text-uppercase fs-3 ${isScrolled?'':'py-3'}`}>
                <div className="container">
                    <Link className="navbar-brand fw-bolder text-white" href="/">START FRAMEWORK</Link>
                    <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="collapsibleNavId">
                        <ul className="navbar-nav ms-auto m-2 ">
                            <li className="nav-item">
                                <NavLink className="nav-link rounded-4 text-white nav-font-size" to="/about" aria-current="page">ABOUT
                                    <span className="visually-hidden">(current)</span>
                                </NavLink>
                            </li>

                            <li className="nav-item mx-3">
                                <NavLink className="nav-link text-white rounded-4 nav-font-size" to="/portfolio" aria-current="page">PORTFOLIO
                                    <span className="visually-hidden">(current)</span>
                                </NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink className="nav-link text-white rounded-4 nav-font-size" to="/contact" aria-current="page">CONTACT
                                    <span className="visually-hidden">(current)</span>
                                </NavLink>
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
