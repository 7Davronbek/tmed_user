'use client'
import {CommentModal, NewsCard, useNewsStore} from "@/entities";
import {useEffect} from "react";

export const NewsCardFeature = () => {
    const getNews = useNewsStore(state => state.getNews)

    useEffect(() => {
        getNews()
    }, [])
    return (
        <div>
            <NewsCard  />
            <CommentModal />
        </div>
    )
}