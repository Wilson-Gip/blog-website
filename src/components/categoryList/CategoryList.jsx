import React from 'react';
import styles from "./categoryList.module.css";
import Link from 'next/link';
import Image from 'next/image';

const getData = async () => {
  const res = await fetch("http://localhost:3000/api/categories", {
    cache: "no-store",
  });

  if (!res.ok) {
    console.error("Failed");
  }

  return res.json();
};

const CategoryList = async () => {
  // const data = await getData();
  // let dataKeys = Object.values(data)

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Popular categories</h1>
      <div className={styles.categories}>
        {/* attempt to connect categories to a database using prisma and display the same thing as the hard coded version below
        {dataKeys?.map((item) => (
          <Link 
            href="/blog?cat=style" 
            className={`${styles.category} ${styles.slug}`}
            key={item._id}
          >
            {{item.img && (
              <Image
                src={item.img}
                alt=""
                width={32}
                height={32}
                className={styles.image}
              />
            )}
            {items.title}
          </Link>
        ))} */}
        <Link 
            href="/blog?cat=style" 
            className={`${styles.category} ${styles.style}`}
          >
            <Image 
              src="/style.png" 
              alt="" 
              width={32} 
              height={32} 
              className={styles.image}
            />
            style
        </Link>
        <Link href="/blog" className={`${styles.category} ${styles.fashion}`}>
          <Image 
            src="/fashion.png" 
            alt="" 
            width={32} 
            height={32} 
            className={styles.image}
          />
          fashion
        </Link>
        <Link href="/blog" className={`${styles.category} ${styles.food}`}>
          <Image 
            src="/food.png" 
            alt="" 
            width={32} 
            height={32} 
            className={styles.image}
          />
          food
        </Link>
        <Link href="/blog" className={`${styles.category} ${styles.travel}`}>
          <Image 
            src="/travel.png" 
            alt="" 
            width={32} 
            height={32} 
            className={styles.image}
          />
          travel
        </Link>
        <Link href="/blog" className={`${styles.category} ${styles.culture}`}>
          <Image 
            src="/culture.png" 
            alt="" 
            width={32} 
            height={32} 
            className={styles.image}
          />
          culture
        </Link>
        <Link href="/blog" className={`${styles.category} ${styles.coding}`}>
          <Image 
            src="/coding.png" 
            alt="" 
            width={32} 
            height={32} 
            className={styles.image}
          />
          coding
        </Link>
        
      </div>
    </div>
  )
}

export default CategoryList;