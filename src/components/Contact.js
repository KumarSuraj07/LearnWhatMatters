import Navbar from "./Navbar";
import styles from "./contact.module.css";
import info from "../images/info.jpg"

export default function Contact() {

    return (
        <div>
            <Navbar />
            <div className={styles.form}>
                <form className={styles.details} action="">
                    {/* <label htmlFor="name"> Name </label> */}
                    <input type="text" id="name" placeholder="Your Name...." />
                    {/* <label htmlFor="Email"> Email </label> */}
                    <input type="text" id="email" placeholder="Your Email...." />
                    <textarea name="message" id="message" cols="30" rows="5" placeholder="Any Query? Feel free to ask."></textarea>
                    <button className={styles.btn} >Submit</button>
                </form>
                <div className={styles.img}>
                    <img src={info} alt="" />
                </div>
            </div>
        </div>
    );
}