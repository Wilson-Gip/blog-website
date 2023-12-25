"use client";

import React, { useContext, useEffect, useState } from 'react';
import { ThemeContext } from '@/context/ThemeContext';

const ThemeProvider = ({children}) => {
    const {theme} = useContext(ThemeContext)
    const [mounted, setMounted]=useState(false)

    //use effect and hooks make things client sided
    useEffect(()=>{
        setMounted(true);
    }, []);

    if(mounted){
        return <div className={theme}>{children}</div>
    }

};

export default ThemeProvider