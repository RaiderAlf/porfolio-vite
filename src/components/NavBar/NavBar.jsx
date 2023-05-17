//ASSETS
import DarkLogo from '../../assets/logo_size_invert.jpg';
import lightLogo from '../../assets/logo_size.jpg'
//STYLES
import Style from './NavBar.module.css';

const NavBar = () => {
    return (
        <header className={Style.HeaderDiv}>
            <div>
                <a href=""><img className={Style.imgLogo} src={window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? DarkLogo : lightLogo} alt="" /></a>
            </div>
            <ul className={Style.navList} >
                <li><a href=""></a>Back-End Skills</li>
                <li><a href=""></a>Front-End Skills</li>
                <li><a href=""></a>Porfolio</li>
                <li><a href=""></a>Contact</li>
            </ul>
        </header>
    );
};

export default NavBar;