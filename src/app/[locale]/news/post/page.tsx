"use client";
import { NewsCardFeature } from "@/features";
import { NewsLayout } from "@/widgets/layout";
import {  useTranslations } from "next-intl";

const PostPage = () => {
  const tr = useTranslations("Main");

  return (
    <NewsLayout title={tr("news")}>
      <NewsCardFeature />
    </NewsLayout>
  );
};

export default PostPage;
