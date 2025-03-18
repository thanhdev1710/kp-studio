export function PhotoGallerySkeleton() {
  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-3">
      {Array.from({ length: 8 }).map((_, index) => (
        <div
          key={index}
          className="w-full h-auto aspect-[3/2] bg-gray-300 animate-pulse"
        ></div>
      ))}
    </div>
  );
}
