import { cdnBase } from '../config/index';

const images = [
  `${cdnBase}/goods/nz-08a.png`,
  `${cdnBase}/goods/nz-08b.png`,
  `${cdnBase}/goods/nz-17a.png`,
  `${cdnBase}/goods/nz-17b.png`,
  `${cdnBase}/goods/nz-05a.png`,
  `${cdnBase}/goods/nz-05b.png`,
];

const houses = Array.from({ length: 24 }, (_, i) => {
  const idx = i % images.length;
  return {
    id: String(i + 1),
    title: `特色民宿${i + 1}`,
    desc: '干净整洁，舒适温馨',
    image: images[idx],
    images: [images[idx]],
  };
});

export function getHousesList(pageIndex = 1, pageSize = 24) {
  const start = (pageIndex - 1) * pageSize;
  return houses.slice(start, start + pageSize);
}

export function getHouseDetail(id) {
  return houses.find((item) => item.id === id);
}
