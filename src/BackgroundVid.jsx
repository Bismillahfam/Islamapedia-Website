function BackgroundVid() {
  return (
    <div className="fixed top-0 right-0 w-1/2 h-screen z-0 [clip-path:polygon(20%_0,100%_0,100%_100%,0%_100%)]">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover"
      >
        <source src="/assets/Islamapedia Background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default BackgroundVid;
