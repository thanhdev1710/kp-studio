import ErrorComponent from "@/components/ErrorComponent";
import { PhotoGallerySkeleton } from "@/components/Skeleton/PhotoGallerySkeleton";
import Tabs from "@/components/Tabs/Tabs";
import { getWeddingByType } from "@/services/wedding";
import { Metadata } from "next";
import { ErrorBoundary } from "next/dist/client/components/error-boundary";
import { Suspense } from "react";
import { listTabKhoangKhacDep } from "@/constants/base";
import SubTabs from "@/components/Tabs/SubTabs";
import { notFound } from "next/navigation";
import PhotoGalleryAndDelete from "@/components/PhotoGallery/PhotoGalleryAndDelete";
import ButtonAndForm from "@/components/button/ButtonAndForm";

export const metadata: Metadata = {
  title: "Ảnh thời trang",
};

export function generateStaticParams() {
  return listTabKhoangKhacDep.tabs.map((e) => ({ type: e.value }));
}

export default async function page({
  params,
  searchParams,
}: {
  params: Promise<{ type: string }>;
  searchParams: Promise<{ subType: string }>;
}) {
  const tabs = listTabKhoangKhacDep.tabs;
  const { type } = await params;
  const { subType } = await searchParams;

  if (tabs.findIndex((tab) => tab.value === type) === -1) {
    return notFound();
  }

  const subTabs = listTabKhoangKhacDep.tabs
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
      <Tabs pathname="/admin/khoang-khac-dep" listTab={{ tabs }} type={type} />
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
  const { data } = await getWeddingByType(type, "khoangkhacdep");
  return (
    <PhotoGalleryAndDelete typePage="khoangkhacdep" photos={data}>
      <ButtonAndForm listTab={listTabKhoangKhacDep} typePage="khoangkhacdep" />
    </PhotoGalleryAndDelete>
  );
}
