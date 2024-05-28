import Navbar from "./Navbar";
import styles from "./about.module.css"
import info from "../images/info.jpg"

export default function About() {
    return (
        <div>
            <Navbar />
            <div className={styles.details}>
                <div className={styles.img}>
                    <img src={info} alt="" />
                </div>
                <div className={styles.info}>
                    <h1>Learn What Matters</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Animi iure in neque facilis iusto excepturi aut praesentium,
                        incidunt error consectetur ratione dolorem, similique architecto
                        nam distinctio provident labore accusantium dolores.
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                        Similique, porro accusantium sequi ex autem tempore expedita,
                        optio, voluptate non placeat nemo quia neque tenetur
                        qui nobis voluptatem consequatur est nulla.
                    </p>
                    <button className={styles.btn}>Click</button>
                </div>
            </div>
        </div>
    );
}