'use client'
import {CommentModal, getInfiniteNewsEv, NewsCard,} from "@/entities";
import {useEffect} from "react";

export const NewsCardFeature = () => {
    useEffect(() => {
        getInfiniteNewsEv({limit: 20, offset: 0})
    }, []);
    return (
        <div>
            <NewsCard/>
            <CommentModal/>
        </div>
    )
}