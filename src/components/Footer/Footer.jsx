//ASSETS
import GitHub from '../../assets/github_logo_icon_143772 (1).png';
import LinkedIn from '../../assets/sociallinkedin_member_30 (1).png';
//STYLES
import Style from './Footer.module.css';

const Footer = () => {
    return(
        <footer className={Style.FooterDiv} >
            <div>
                <ul className={Style.LinkDiv} >
                    <li><a href="https://www.linkedin.com/in/kalfonzoespinett/"><img src={LinkedIn} alt="LinkedIn" /></a></li>
                    <li><a href="https://github.com/RaiderAlf"> <img src={GitHub} alt="GitHub" /></a></li>
                </ul>
            </div>
            <div className={Style.RegDiv} >
                <span>Espinett Dev® 2023</span>
            </div>
        </footer>
    )
};

export default Footer;