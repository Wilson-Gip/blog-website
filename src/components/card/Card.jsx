import Image from "next/image";
import styles from "./card.module.css";
import Link from "next/link";

const Card = () => {
  return (
    <div className={styles.container}>
        <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="" fill/>
        </div>
        <div className={styles.textContainer}>
            <div className={styles.detail}>
                <span className={styles.date}>11.02.2023 - </span>
                <span className={styles.category}>CULTURE</span>
            </div>
            <Link href="/">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</Link>
            <p className={styles.desc}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                Fugiat iure earum excepturi quis alias cupiditate minima, 
                accusantium doloribus cumque necessitatibus numquam repudiandae 
                aperiam, fugit placeat. In earum necessitatibus sunt vero.
            </p>
            <Link href="/" className={styles.link}>Read More</Link>
        </div>
    </div>
  )
}

export default Card