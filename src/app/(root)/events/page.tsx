import PhotoGallery from "@/components/PhotoGallery/PhotoGalleryV2";
import ErrorComponent from "@/components/ErrorComponent";
import { PhotoGallerySkeleton } from "@/components/Skeleton/PhotoGallerySkeleton";
import { Metadata } from "next";
import { ErrorBoundary } from "next/dist/client/components/error-boundary";
import { Suspense } from "react";
import Tabs from "@/components/Tabs/Tabs";
import SubTabs from "@/components/Tabs/SubTabs";
import { listTabEvent } from "@/constants/base";
import { getWeddingByType } from "@/services/wedding";

export const metadata: Metadata = {
  title: "Events",
};

export default async function page({
  searchParams,
}: {
  searchParams: Promise<{ type: string }>;
}) {
  const tabs = listTabEvent.tabs.slice(1);
  const { type = tabs[0].value } = await searchParams;
  const subTabs = listTabEvent.tabs
    .map((tmp) => {
      if (tmp.value !== type) {
        return undefined;
      }

      if (tmp.children?.tabs.length === 0) {
        return undefined;
      }

      return tmp;
    })
    .filter((tmp) => tmp)[0]?.children;

  return (
    <div className="containerCustom fontMontserrat py-12">
      <Tabs pathname="/events" listTab={{ tabs }} type={type} />
      {subTabs && <SubTabs pathname="/events" listTab={subTabs} type={type} />}
      <ErrorBoundary errorComponent={ErrorComponent}>
        <Suspense key={type} fallback={<PhotoGallerySkeleton />}>
          <FetchData type={type} />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}

async function FetchData({ type }: { type: string }) {
  const { data } = await getWeddingByType(type, "events");
  return <PhotoGallery photos={data} />;
}
