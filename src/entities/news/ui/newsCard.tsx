"use client";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { MiniLoader, NewsSingleCard, NoData } from "@/shared";
import { $newsList, fetchInfiniteNewsFx, getInfiniteNewsEv } from "@/entities";
import { useLocale } from "next-intl";
import { useUnit } from "effector-react";
import InfiniteScroll from "react-infinite-scroll-component";

export const NewsCard = () => {
  const [{ results, next, next_offset }, isLoading] = useUnit([
    $newsList,
    fetchInfiniteNewsFx.pending,
  ]);
    console.log(results)
  const locale = useLocale();
  return (
    <div>
      <InfiniteScroll
        dataLength={next_offset}
        style={{ overflow: "visible" }}
        next={() => getInfiniteNewsEv({ limit: 20, offset: next_offset })}
        hasMore={!isLoading && !!next}
        loader={<MiniLoader />}
        scrollableTarget="processStatusAll"
      >
        {results &&
          !isLoading &&
          results.map((item) => {
            return <NewsSingleCard key={item.id} locale={locale} item={item} />;
          })}
      </InfiniteScroll>
      <NoData show={results.length === 0 || isLoading} loading={isLoading} />
    </div>
  );
};
