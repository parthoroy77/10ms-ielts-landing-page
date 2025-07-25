"use client";
import PlayIcon from "@/assets/icons/play";
import { Media } from "@/types";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Button } from "./ui/button";
import YoutubePlayer from "./youtube-player";

interface Props {
  media: Media[];
}

const ProductTrailer = ({ media }: Props) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [playVideo, setPlayVideo] = useState(false);
  const thumbnailsRef = useRef<HTMLDivElement>(null);
  const activeThumbRef = useRef<HTMLDivElement>(null);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === media.length - 1 ? 0 : prevIndex + 1));
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? media.length - 1 : prevIndex - 1));
  };

  const currentMedia = media[currentIndex];

  // Scroll selected thumbnail into view
  useEffect(() => {
    if (activeThumbRef.current && thumbnailsRef.current) {
      const container = thumbnailsRef.current;
      const thumb = activeThumbRef.current;

      const containerRect = container.getBoundingClientRect();
      const thumbRect = thumb.getBoundingClientRect();

      const offset = thumbRect.left - containerRect.left;
      const scrollLeft = container.scrollLeft + offset - container.clientWidth / 2 + thumb.clientWidth / 2;

      container.scrollTo({ left: scrollLeft, behavior: "smooth" });
    }
    setPlayVideo(false);
  }, [currentIndex]);

  return (
    <div className="space-y-2 border p-2">
      {/* Main Preview */}
      <div className="relative aspect-video h-[250px] w-full overflow-hidden rounded-md border [&_button]:cursor-pointer">
        {/* Media preview or video player */}
        {currentMedia && playVideo ? (
          <YoutubePlayer videoId={currentMedia.resource_value} />
        ) : (
          <Image
            src={
              currentMedia.resource_type === "image"
                ? currentMedia.resource_value
                : ((currentMedia.thumbnail_url as string) ?? "/placeholder-image.png")
            }
            width={1920}
            height={1280}
            alt={currentMedia.name}
            className="size-full object-cover"
          />
        )}

        {/* Tinted overlay */}
        {!playVideo && <div className="absolute inset-0 z-10 bg-black opacity-30" />}

        {/* Navigation Buttons */}
        <Button
          onClick={handlePrev}
          variant="outline"
          size="icon"
          className="absolute top-1/2 left-2 z-20 size-fit -translate-y-1/2 rounded-full border p-1.5 shadow-md"
        >
          <ArrowLeft className="!size-4 text-[var(--color-bgGreen)]" />
        </Button>
        <Button
          onClick={handleNext}
          variant="outline"
          size="icon"
          className="absolute top-1/2 right-2 z-20 size-fit -translate-y-1/2 rounded-full border p-1.5 shadow-md"
        >
          <ArrowRight className="!size-4 text-[var(--color-bgGreen)]" />
        </Button>

        {/* Play button for video */}
        {currentMedia.resource_type === "video" && !playVideo && (
          <button
            onClick={() => setPlayVideo(true)}
            className="absolute top-1/2 left-1/2 z-20 size-fit -translate-x-1/2 -translate-y-1/2 cursor-pointer rounded-full p-0"
          >
            <PlayIcon className="size-16" />
          </button>
        )}
      </div>

      {/* Thumbnails */}
      <div className="flex flex-nowrap gap-4 overflow-hidden scroll-smooth" ref={thumbnailsRef}>
        {media.map((item, i) => {
          const isVideo = item.resource_type === "video";
          const thumbnailSrc = isVideo ? (item.thumbnail_url as string) : item.resource_value;

          return (
            <div
              key={i}
              className="relative min-w-16 cursor-pointer"
              ref={i === currentIndex ? activeThumbRef : null}
              onClick={() => setCurrentIndex(i)}
            >
              <Image
                src={thumbnailSrc}
                alt={item.name}
                width={64}
                height={52}
                className={`aspect-video rounded-md border-2 object-cover ${
                  i === currentIndex ? "border-bgGreen" : "border-transparent"
                }`}
              />
              {isVideo && (
                <PlayIcon className="absolute top-1/2 left-1/2 size-5 -translate-x-1/2 -translate-y-1/2 text-white" />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductTrailer;
