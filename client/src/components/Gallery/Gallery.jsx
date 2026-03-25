function Gallery() {
  return (
    <div className="container-fluid px-4 pb-5">
      <div className="row g-3">
        {[1, 2, 3, 4, 5, 6].map((img) => (
          <div className="col-md-4 overflow-hidden" key={img}>
            <img
              src={`/gallery${img}.jpg`}
              alt="gallery"
              className="img-fluid image-hover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;

