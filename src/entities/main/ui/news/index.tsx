'use client'

import {useEffect} from "react";
import {$newsList, CommentModal, fetchInfiniteNewsFx, getInfiniteNewsEv} from "@/entities";
import {useUnit} from "effector-react";
import { NewsSingleCard } from "@/shared";
import { useLocale } from "next-intl";

export const News = () => {
    useEffect(() => {
        getInfiniteNewsEv({limit: 2, offset: 0})
    }, []);
    const [{results}, isLoading] = useUnit([$newsList, fetchInfiniteNewsFx.pending])
    const locale = useLocale()
    return (
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px'}}>
            
        {results &&
          !isLoading &&
          results.map((item) => {
            return <NewsSingleCard key={item.id} locale={locale} item={item} />;
          })}
          
          <CommentModal/>
        </div>
    )
}