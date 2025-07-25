const YoutubePlayer = ({ videoId }: { videoId: string }) => {
  const embedUrl = `https://www.youtube.com/embed/${videoId}?rel=0&autplay=1`;
  return (
    <iframe
      src={embedUrl}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="YouTube video player"
      className="h-full w-full"
    />
  );
};

export default YoutubePlayer;
