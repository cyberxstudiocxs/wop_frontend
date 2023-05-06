import { Link } from "react-router-dom";
import "../styles/footer.css";
import { FaEnvelope} from "react-icons/fa";
import logo from '../assets/images/Logo-Web-2.whitevvvvvv.png'
import { BsFacebook, BsTwitter } from "react-icons/bs";

const Footer  = () =>{
    return(
        <section className="footer-main-box">

        
        <div className='container'>
        <div className='row'>
            <div className='col-lg-4'>
                <div className="footer-logo">
                <img src={logo} className="img-fluid" alt="wop-logo" />
                </div>


                </div>
                <div className='col-lg-4'>
                <div className="footer-links">
                    <h3> Links</h3>
                    <div className="common-link">
                    <ul>
                        <li>   <Link  className="f-links" >About Us</Link>  </li>
                        <li>   <Link  className="f-links" >Contact Us </Link>  </li>
                        <li>   <Link  className="f-links" >Skills </Link>  </li>
                    </ul>
                    </div>
                </div>


                </div>

                <div className='col-lg-4'>
                <div className="socials-links">
                    <h3> Socials Links</h3>
                    <div className="common-link">
                    <ul>
                        <li>   <Link  className="f-links" >  <   FaEnvelope />  Info@gmail.com</Link>   </li>
                        <li>   <Link  className="f-links" >  <BsFacebook />  Facebook.com</Link>  </li>
                        <li>   <Link  className="f-links" > <BsTwitter /> twitter.com</Link>  </li>
                    </ul>
                    </div>
                   
                </div>


                </div>


                </div>
                </div>
                </section>
    )
}

export default Footer