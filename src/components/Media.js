const isVideo = (src) => /\.(mp4|webm|ogg)$/i.test(src);

const Media = ({ src, alt, poster, className }) =>
  isVideo(src) ? (
    <video
      src={src}
      poster={poster}
      className={className}
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      aria-label={alt}
    />
  ) : (
    <img src={src} alt={alt} className={className} loading="lazy" />
  );

export default Media;
