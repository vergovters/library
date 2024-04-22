import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex flex-col items-center justify-center max-w-screen-lg mx-auto dark:bg-gray-800 bg-white dark:text-white">
      <div className="flex flex-col font-body gap-[85px] mb-6 md:flex-row">
        <div>
            <h3  className="text-pink-500 font-bold text-[25px]">
              READ.ME
            </h3>
            <p className="text-[20px]">Lorem ipsum dolor sit amet,<br/> consectetur adipiscing elit,<br/> sed do eiusmod tempor</p>
            <ul className="flex text-pink-500 gap-3 text-[22px] mt-2">
                <li>
                  <FaFacebookF/>
                </li>
                <li>
                  <FaTwitter/>
                </li>
                <li>
                  <FaInstagram/>
                </li>
            </ul>
        </div>
        <div>
          <h3  className="text-pink-500 font-bold text-[25px]">
            About Us
          </h3>
          <ul className="flex-col text-[18]">
                <li>
                  About Us
                </li>
                <li>
                  Service Us
                </li>
                <li>
                 Contact
                </li>
                <li>
                 Company
                </li>
            </ul>
        </div>
        <div>
          <h3  className="text-pink-500 font-bold text-[25px]">
            Company
          </h3>
          <ul className="flex-col text-[18]">
                <li>
                  Partnership
                </li>
                <li>
                  Terms of Use
                </li>
                <li>
                  Privacy
                </li>
                <li>
                  Sitemap
                </li>
            </ul>
        </div>
        <div>
            <h3  className="text-pink-500 font-bold text-[25px]">
               Get in touch
            </h3>
            <p className="mb-5">Lorem ipsum dolor sit amet, consectetur<br/> adipiscingelit, sed do eiusmod tempor</p>
            <button className="bg-pink-500 text-white py-3 px-6 rounded-[32px] transform hover:translate-y-[-3px] transition-all duration-300 h-fit mt-auto">
                      Subscribe
            </button>
        </div>
        
      </div>
      <p className="w-fit">Copyright © 2024 GastroHeaven.</p>
    </div>
  )
}
  
  export default Footer;