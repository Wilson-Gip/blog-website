"use client";

import Link from "next/link";
import styles from "./comments.module.css";
import Image from "next/image";
import useSWR from "swr";
import { useSession } from "next-auth/react";
import { useState } from "react";

const fetcher = async (url) => {
    const res = await fetch(url);
  
    const data = await res.json();

    if (!res.ok) {
      const error = new Error(data.message);
      throw error;
    }
  
    return data;
  };

  
const Comments = ({postSlug}) => {
    const status = useSession()

    const {data, isLoading} = useSWR(`http://localhost:3000/api/comments?postSlug=${postSlug}`, 
    fetcher
    );

    return (
    <div className={styles.container}>
        <h1 className={styles.title}>Comments</h1>
        {status === "authenticated" ? (
            <div className={styles.write}>
                <textarea placeholder="write a comment..." className={styles.input}/>
                <button className={styles.button}>Send</button>
            </div>
        ) : (
            <Link href="/login">Login to write a comment</Link>
        )}
        <div className={styles.comments}>
            {/* {isLoading
            ?: "loading"
            : data?.map((item) => ( */}
            <div 
                className={styles.comment} 
                // key={item._id}
            >
                <div className={styles.user}>
                    {/* {item.user?.image && */}
                    <Image 
                        src="/p1.jpeg" 
                        // src={item.user.image}
                        alt="" 
                        width={50} 
                        height={50} 
                        className={styles.image}
                    />
                    {/* } */}
                    <div className={styles.userInfo}>
                        <span className={styles.username}>
                            John Doe
                            {/* {item.user.name} */}
                        </span>
                        <span className={styles.date}>
                            01.01.2023
                            {/* {items.createdAt} */}
                        </span>
                    </div>
                </div>
                <p className={styles.desc}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Cupiditate ullam earum iusto dolorum rerum, maxime ad non 
                    ratione quidem eaque ipsum, cumque corporis officia, tempora 
                    repellendus? Ducimus laboriosam fuga tenetur?
                    {/* {item.desc} */}
                </p>
            </div>
            {/* ))} */}
        </div>
    </div>
  );
};

export default Comments;