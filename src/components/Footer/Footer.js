import Link from "next/link";
import Image from 'next/image'

const Footer = () => {
    return (
        <>
        <footer className="footer-sec">
        <div className="container">
          <div className="
                d-flex
                justify-content-between
                align-items-center
                footer-first-line
              ">
            <Link href="/">
              <a className="logo">
                <img
                  src="/images/logo.webp"
                  alt="image"
                />
              </a>
            </Link>
          </div>
          <div className="
                d-flex
                justify-content-between
                align-items-center
                footer-second-line
              ">
            <div className="d-flex d-md-none justify-content-center join-to-us">
              <Link href="#">
                <a>Join Our Community</a>
              </Link>
            </div>
            <div className="social-contacts">
              <Link href="https://twitter.com/Nekoverse_NFT">              
                <a>
                  <img 
                      className="me-2" 
                      src="/images/footer/twitter--v1.png" 
                      alt="image"
                  />
                </a>
              </Link>
              <Link href="https://discord.gg/nekoverse">              
                <a>
                  <img 
                    className="me-2" 
                    src="/images/footer/discord-logo.png" 
                    alt="image"
                    />
                </a>
              </Link>
              <Link href="https://www.instagram.com/nekoverse.nft/">
                <a>
                  <img 
                    className="me-2" 
                    src="/images/footer/instagram-new.png" 
                    alt="image" 
                  />
                 </a>
              </Link>
            </div>
            <ul className="footer-menu">
              <li className="menu-item">
                <Link href="#"><a>Terms of Service</a></Link>
              </li>
              <li className="menu-item">
                <Link  href="#"><a>Privacy Policy</a></Link>
              </li>
              <li className="menu-item">
                <Link  href="#"><a>Help</a></Link>
              </li>
              <li className="menu-item">
                <Link href="#"><a>User Generated Content Policies</a></Link>
              </li>
            </ul>
          </div>
        </div>
      </footer>
        </>
    );
};

export default Footer;