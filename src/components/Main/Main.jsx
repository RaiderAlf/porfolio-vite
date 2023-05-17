//ASSETS
import Pattern from '../../assets/pattern.svg';
//STYLES
import Style from './Main.module.css';

const Main = () => {
    return(
        <main className={Style.MainDiv} >
            <section className={Style.ImgDiv} >
                <img src={Pattern} alt="pic" width='300px' />
            </section>
            <section>
                <h3>FullStack Web Developer</h3>
                <h1>Kevin Alfonzo</h1>
                <p>
                Hola, soy un desarrollador web FullStack autodidacta quien tiene una pasión por las ciencias y la tecnología desde joven. 
                Él comenzó su camino en el desarrollo en el año 2022 y ha tenido una serie de pequeñas victorias durante su aprendizaje.
                Siempre buscando aprender algo nuevo y compartir sus conocimientos con los demás, en cualquier situación.
                </p>
                <div className={Style.BtnDiv} >
                    <button className={Style.button2} role="button">Porfolio</button>
                    <button className={Style.button2} role="button">Contact</button>
                </div>


            </section>
        </main>
    )
};

export default Main;