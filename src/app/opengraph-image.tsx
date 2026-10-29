import {
  createShareImage,
  shareImageContentType,
  shareImageSize,
} from "@/lib/share-image";

export const alt =
  "Nagasubramaniam G — AI Solutions Engineer & Full-Stack Developer";
export const size = shareImageSize;
export const contentType = shareImageContentType;

export default function OpenGraphImage() {
  return createShareImage();
}
