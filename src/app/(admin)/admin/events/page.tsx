import PhotoGallery from "@/components/PhotoGallery/PhotoGallery";
import { PhotoGallerySkeleton } from "@/components/Skeleton/PhotoGallerySkeleton";
import { getWeddingByType } from "@/services/wedding";
import { Suspense } from "react";
import ButtonAndForm from "../../../../components/ButtonAndForm";
import Tabs from "@/components/Tabs/Tabs";
import { ErrorBoundary } from "next/dist/client/components/error-boundary";
import ErrorComponent from "@/components/ErrorComponent";
import { ReloadWedding } from "@/actions/wedding";
import { listTabEvent } from "@/constants/base";
import SubTabs from "@/components/Tabs/SubTabs";

export default async function page({
  searchParams,
}: {
  searchParams: Promise<{ type: string }>;
}) {
  const { type = "all" } = await searchParams;
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
    <div className="containerCustom py-12">
      <form action={ReloadWedding} className="flex justify-end mb-6">
        <button
          className="px-6 py-3 bg-green-500 text-green-50 font-bold uppercase 
               hover:bg-green-600 transition-all duration-300 cursor-pointer"
        >
          Làm mới ảnh
        </button>
      </form>
      <Tabs pathname="/admin/events" listTab={listTabEvent} type={type} />
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

  return (
    <PhotoGallery typePage="events" isDelete={true} photos={data}>
      <ButtonAndForm listTab={listTabEvent} typePage="events" />
    </PhotoGallery>
  );
}
