import React from "react";
import Carousel from "../../Carousel/Carousel";
import { carouselData, galleryData } from "../../data/galleryData";

function Gallery() {
  return (
    <main>
      <div className="container py-4">
        {/* <h2 className="h2 fw-bold mb-4">Gallery</h2> */}

        {/* Bootstrap Carousel */}
        <Carousel carouselData={carouselData} />

        {/* Loop each category */}
        {Object.keys(galleryData).map((category) => (
          <div key={category} className="mb-5">
            <h2 className="h3 fw-bold mb-3">{category}</h2>

            <div className="row g-4">
              {galleryData[category].map((item, i) => (
                <div key={i} className="col-sm-6 col-md-4">
                  <div
                    className="rounded-4 overflow-hidden shadow-sm hover-lift hover-zoom"
                    style={{
                      // height: "300px",
                      cursor: "pointer",
                      transition: "all 0.3s ease",
                    }}
                  >
                    <img
                      src={item.img ? item.img : item}
                      alt={item.title || `${category} decoration ${i + 1}`}
                      loading="lazy"
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
