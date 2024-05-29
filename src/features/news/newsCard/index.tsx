'use client'
import CommentModal from "@/entities/news/ui/commentModal";
import NewsCard from "@/entities/news/ui/newsCard";
import {useEffect} from "react";
import {getInfiniteNewsEv} from "@/entities";

export async function NewsCardFeature() {
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