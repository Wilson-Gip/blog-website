import Image from "next/image";
import styles from "./card.module.css";
import Link from "next/link";

const Card = ({key, item}) => {
  return (
    <div className={styles.container} key={key}>
         {/* {item.img && (
        <div className={styles.imageContainer}>
          <Image src={item.img} alt="" fill className={styles.image} />
        </div>
        )} */}
        <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="" fill/>
        </div>
        <div className={styles.textContainer}>
            <div className={styles.detail}>
                <span className={styles.date}>
                    11.02.2023 - {" "}
                    {/* {item.createdAt.substring(0, 10)} -{" "} */}
                </span>
                <span className={styles.category}>
                    CULTURE
                    {/* {styles.catSlug} */}
                </span>
            </div>
            <Link href="/">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</Link>
            <h1>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                {/* {item.title} */}
            </h1>
            {/* <p className={styles.desc}>{item.desc.substring(0, 60)}</p> */}
            <p className={styles.desc}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                Fugiat iure earum excepturi quis alias cupiditate minima, 
                accusantium doloribus cumque necessitatibus numquam repudiandae 
                aperiam, fugit placeat. In earum necessitatibus sunt vero.
            </p>
            <Link href="/posts/${item.slug}" className={styles.link}>Read More</Link>
        </div>
    </div>
  )
}

export default Card