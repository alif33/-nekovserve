import Image from "next/image";
import { useState } from "react";
import Link from 'next/link';

const Navbar = () => {
    const [toggle, setToggle] = useState(false)
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light d-none d-md-block neko-nav" style={{position: 'fixed', paddingTop: '30px'}}>
                <div className="container">
                    <div className="collapse navbar-collapse justify-content-center" id="navbarToggler">
                        <ul className="navbar-nav d-flex align-items-center justify-content-center mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link href="/">
                                    <a className="nav-link text-white" aria-current="page">Home</a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/">
                                    <a className="nav-link text-white" aria-current="page">Story</a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/">
                                    <a className="nav-link text-white">Whitepaper</a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/">
                                    <a>
                                        <img src="/images/logo.webp" alt="" className="src mx-2 my-2" style={{ maxWidth: '300px' }} />
                                    </a>
                                </Link>
                               
                            </li>
                            <li className="nav-item">
                                <Link href="/">
                                    <a className="nav-link text-white" >FAQ</a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/">
                                    <a className="nav-link text-white">Tokenomics</a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/">
                                    <a className="nav-link text-white">Store</a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <nav className="d-block d-lg-none mobile-menu">
                <div className="container">
                    <div className="d-flex justify-content-between">
                        <div className="logo">
                            <img src='/images/logo.webp' alt="" loading="lazy" />
                        </div>
                        <div className="menu">
                            <div onClick={() => setToggle(true)} className="icon"></div>
                        </div>
                    </div>
                </div>
                <div id="mobileMenu" className={`mobile-menu-expanded ${toggle ? 'show' : ''}`}>
                    {/* <!--show class add to mobile menu--> */}
                    <div onClick={() => setToggle(false)} className="close">
                        <div className="icon"></div>
                    </div>
                    <ul className="nav">
                        <li className="nav-item">
                            <Link href="/">
                                <a className="nav-link" aria-current="page">Home</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/">
                                <a className="nav-link" aria-current="page" >Story</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="">
                                <a className="nav-link">Whitepaper</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/">
                                <a className="nav-link">FAQ</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/">
                                <a className="nav-link">Tokenomics</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/">
                                <a className="nav-link">Store</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <div className="mt-5">
                                <div className="d-flex d-md-none justify-content-center join-to-us">
                                    <Link href="#">
                                        <a>Join Our Community</a>
                                    </Link>
                                </div>
                                <div className="social-contacts border-0">
                                    <Link href="">
                                        <a>
                                            <img className="me-2"
                                                src="/images/icon/twitter--v1.png"
                                                style={{ height: '30px' }} />
                                        </a>
                                    </Link>
                                    <Link href="">
                                        <a>
                                            <img className="me-2"
                                                src="/images/icon/twitter--v1.png"
                                                style={{ height: '30px' }} />
                                        </a>
                                    </Link>
                                    <Link href="">
                                        <a href="">
                                            <img className="me-2"
                                                src="/images/icon/instagram-new.png"
                                                style={{ height: '30px' }} />
                                        </a>
                                    </Link>
                                  
                                    
                                </div>

                            </div>
                        </li>


                    </ul>

                </div>
            </nav>


        </>
    );
};

export default Navbar;