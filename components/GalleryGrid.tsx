"use client";

import { useState } from "react";
import Image from "next/image";

type GalleryImage = { src: string; alt: string; width: number; height: number; category: string };
type GalleryFilter = { label: string; value: string };

export default function GalleryGrid({
  images,
  filters,
  filterLabel,
}: {
  images: GalleryImage[];
  filters: GalleryFilter[];
  filterLabel: string;
}) {
  const [activeFilter, setActiveFilter] = useState(filters[0]?.value ?? "all");
  const visibleImages = images.filter((image) => activeFilter === "all" || image.category === activeFilter);

  return (
    <div>
      <div className="gallery-filters" role="group" aria-label={filterLabel}>
        {filters.map((filter) => (
          <button
            className={activeFilter === filter.value ? "is-active" : ""}
            type="button"
            aria-pressed={activeFilter === filter.value}
            key={filter.value}
            onClick={() => setActiveFilter(filter.value)}
          >
            {filter.label}
          </button>
        ))}
      </div>
      <ul className="gallery-grid">
        {visibleImages.map((image) => (
          <li className="gallery-image" key={image.src}>
            <Image src={image.src} alt={image.alt} width={image.width} height={image.height} sizes="(max-width: 600px) 46vw, (max-width: 960px) 30vw, 390px" />
          </li>
        ))}
      </ul>
    </div>
  );
}
