'use client'

import {useEffect} from "react";
import {$newsList, getInfiniteNewsEv} from "@/entities";
import {useUnit} from "effector-react";

export const News = () => {
    useEffect(() => {
        getInfiniteNewsEv({limit: 5, offset: 0})
    }, []);
    const [{results}] = useUnit([$newsList])
    return (
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px'}}>
            info
        </div>
    )
}