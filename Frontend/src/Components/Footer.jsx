/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faInstagram, faWhatsapp, faThreads } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <div>
    <hr />
      <footer className="footer footer-center p-10 text-base-content rounded  dark:bg-slate-900 dark:text-white ">
  <nav className="grid grid-flow-col gap-4">
   <Link to="/"><a className="link link-hover">Home</a></Link>
   <Link to="/Menswatch"><a className="link link-hover">Mens Watch</a></Link>
   <Link to="/Contact"><a className="link link-hover">Contact us</a></Link>
   <Link to="/About"><a className="link link-hover">About</a></Link>
  </nav>
  <nav>
  <div className="flex justify-center space-x-5">
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faFacebook} className="text-blue-600 text-2xl" />
                    </a>
                    <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faTwitter} className="text-blue-400 text-2xl" />
                    </a>
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faInstagram} className="text-pink-600 text-2xl" />
                    </a>
                    <a href="https://www.whatsapp.com" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faWhatsapp} className="text-green-500 text-2xl" />
                    </a>
                    <a href="https://www.threads.net" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faThreads} className="text-gray-700 text-2xl" /> {/* Replace with appropriate icon */}
                    </a>
                </div>
  </nav> 
  <aside>
    <p>Copyright © 2024 - All right reserved by Rolex Industries Ltd</p>
  </aside>
</footer>
    </div>
  )
}

export default Footer
