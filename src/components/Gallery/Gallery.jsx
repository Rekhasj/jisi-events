import React from "react";
import Carousel from "../../Carousel/Carousel";
import { carouselData, galleryData } from "../../data/galleryData";

function Gallery() {
  return (
    <main>
      <div className="container">
        {/* <h2 className="h2 fw-bold mb-4">Gallery</h2> */}

        {/* Bootstrap Carousel */}
        <Carousel carouselData={carouselData} />

        {/* Loop each category */}
        {Object.keys(galleryData).map((category) => (
          <div key={category} className="mb-5">
            <h3 className="fw-bold text-capitalize mb-3">{category}</h3>

            <div className="row g-4">
              {galleryData[category].map((item, i) => (
                <div key={i} className="col-sm-6 col-md-4">
                  <div
                    className="rounded overflow-hidden shadow-sm"
                    style={{
                      // height: "300px",
                      cursor: "pointer",
                      transition: "all 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateY(-5px)";
                      e.currentTarget.style.boxShadow =
                        "0 1rem 3rem rgba(0,0,0,.175)";
                      const img = e.currentTarget.querySelector("img");
                      if (img) img.style.transform = "scale(1.1)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.boxShadow =
                        "0 0.125rem 0.25rem rgba(0,0,0,.075)";
                      const img = e.currentTarget.querySelector("img");
                      if (img) img.style.transform = "scale(1)";
                    }}
                  >
                    <img
                      src={item.img ? item.img : item}
                      alt="gallery"
                      className="w-100 img-fluid"
                      style={{ height: "250px", objectFit: "cover" }}
                    />
                    {item.title && (
                      <p className="text-center mt-2 fw-semibold">
                        {item.title}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

export default Gallery;
