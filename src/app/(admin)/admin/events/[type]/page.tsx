import ErrorComponent from "@/components/ErrorComponent";
import { PhotoGallerySkeleton } from "@/components/Skeleton/PhotoGallerySkeleton";
import Tabs from "@/components/Tabs/Tabs";
import { getWeddingByType } from "@/services/wedding";
import { ErrorBoundary } from "next/dist/client/components/error-boundary";
import { Suspense } from "react";
import { listTabEvent } from "@/constants/base";
import SubTabs from "@/components/Tabs/SubTabs";
import { notFound } from "next/navigation";
import ButtonAndForm from "@/components/button/ButtonAndForm";
import PhotoGalleryAndDelete from "@/components/PhotoGallery/PhotoGalleryAndDelete";

export function generateStaticParams() {
  return listTabEvent.tabs.map((e) => ({ type: e.value }));
}

export default async function page({
  params,
  searchParams,
}: {
  params: Promise<{ type: string }>;
  searchParams: Promise<{ subType: string }>;
}) {
  const tabs = listTabEvent.tabs;
  const { type } = await params;
  const { subType } = await searchParams;

  if (tabs.findIndex((tab) => tab.value === type) === -1) {
    return notFound();
  }

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

  if (
    subTabs?.tabs &&
    subType &&
    subTabs.tabs.findIndex((tab) => tab.value === subType) === -1
  ) {
    return notFound();
  }

  return (
    <div className="containerCustom fontMontserrat py-12">
      <Tabs pathname="/admin/events" listTab={{ tabs }} type={type} />
      {subTabs && <SubTabs listTab={subTabs} type={type} />}
      <ErrorBoundary errorComponent={ErrorComponent}>
        <Suspense key={subType || type} fallback={<PhotoGallerySkeleton />}>
          <FetchData type={subType || type} />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}

async function FetchData({ type }: { type: string }) {
  const { data } = await getWeddingByType(type, "events");
  return (
    <PhotoGalleryAndDelete typePage="anhthoitrang" photos={data}>
      <ButtonAndForm listTab={listTabEvent} typePage="events" />
    </PhotoGalleryAndDelete>
  );
}
