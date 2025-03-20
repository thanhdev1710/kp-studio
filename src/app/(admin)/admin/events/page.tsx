import PhotoGallery from "@/components/PhotoGallery/PhotoGallery";
import { PhotoGallerySkeleton } from "@/components/Skeleton/PhotoGallerySkeleton";
import { getWeddingByType } from "@/services/wedding";
import { TabType } from "@/types/wedding";
import { Suspense } from "react";
import ButtonAndForm from "../../../../components/ButtonAndForm";
import { ErrorBoundary } from "next/dist/client/components/error-boundary";
import ErrorComponent from "@/components/ErrorComponent";
import { ReloadWedding } from "@/actions/wedding";

export default async function page() {
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
      <ErrorBoundary errorComponent={ErrorComponent}>
        <Suspense key={"events"} fallback={<PhotoGallerySkeleton />}>
          <FetchData type={"events"} />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}

async function FetchData({ type }: { type: TabType }) {
  const { data } = await getWeddingByType(type);
  return (
    <PhotoGallery isDelete={true} photos={data}>
      <ButtonAndForm typePage="events" />
    </PhotoGallery>
  );
}
