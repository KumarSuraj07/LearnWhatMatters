import Navbar from "./Navbar";
import styles from "./home.module.css";
import figma from "../images/figma.png"
import HCJ from "../images/HCJ.webp"
import Me from "../images/Me.jpeg"
import react from "../images/react.png"

export default function Home() {

    function skill() {
        console.log('hello there!');
    }

    return (
        <div className={styles.content}>
            <Navbar />
            <div className={styles.search}>
                <input type="text" placeholder="Search..." />
                <img onClick={skill} src="https://www.freepnglogos.com/uploads/search-png/search-icon-clip-art-clkerm-vector-clip-art-online-8.png" alt="searchIcon" />
            </div>
            <div className={styles.cards}>
                <div className={styles.cardBorder}>
                    <div className={styles.card1}>
                        <img src={figma} alt="skill" />
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                            Facere consequuntur error non voluptates omnis? In inventore sed,
                            ut porro omnis officiis quod commodi veritatis quos assumenda
                            ratione harum doloremque necessitatibus.</p>
                        <button>Learn</button>
                    </div>
                </div>
                <div className={styles.cardBorder}>
                    <div className={styles.card2}>
                        <img src={HCJ} alt="skill" />
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                            Facere consequuntur error non voluptates omnis? In inventore sed,
                            ut porro omnis officiis quod commodi veritatis quos assumenda
                            ratione harum doloremque necessitatibus.</p>
                        <button>Learn</button>
                    </div>
                </div>
                <div className={styles.cardBorder}>
                    <div className={styles.card3}>
                        <img src={Me} alt="skill" />
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                            Facere consequuntur error non voluptates omnis? In inventore sed,
                            ut porro omnis officiis quod commodi veritatis quos assumenda
                            ratione harum doloremque necessitatibus.</p>
                        <button>Learn</button>
                    </div>
                </div>
                <div className={styles.cardBorder}>
                    <div className={styles.card4}>
                        <img src={react} alt="skill" />
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                            Facere consequuntur error non voluptates omnis? In inventore sed,
                            ut porro omnis officiis quod commodi veritatis quos assumenda
                            ratione harum doloremque necessitatibus.</p>
                        <button>Learn</button>
                    </div>
                </div>
            </div>
        </div>
    );
}