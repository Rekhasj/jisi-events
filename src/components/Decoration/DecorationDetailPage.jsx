import React, { useState } from "react";
import { decorationData } from "../../data/decorationData";
import { useNavigate, useParams } from "react-router-dom";

const DecorationDetailPage = ({ category, onBack }) => {
  const { item } = useParams();
  const navigate = useNavigate();
  const [hoveredProduct, setHoveredProduct] = useState(null);

  const data = decorationData[category];
  console.log("DecorationDetailPage category:", category, data);
  if (!data) {
    return (
      <div className="min-vh-100 d-flex align-items-center justify-content-center">
        <div className="text-center">
          <h2 className="display-5 fw-bold text-dark mb-4">
            Category not found
          </h2>
          <button
            onClick={onBack}
            className="btn btn-lg shadow"
            style={{
              background: "linear-gradient(to right, #9333ea, #7c3aed)",
              color: "white",
              border: "none",
            }}
            onMouseEnter={(e) =>
              (e.target.style.background =
                "linear-gradient(to right, #7c3aed, #6d28d9)")
            }
            onMouseLeave={(e) =>
              (e.target.style.background =
                "linear-gradient(to right, #9333ea, #7c3aed)")
            }
          >
            Back to Decorations
          </button>
        </div>
      </div>
    );
  }

  return (
    <div
      style={{
        background:
          "linear-gradient(135deg, #fdf2f8 0%, #ffffff 50%, #faf5ff 100%)",
        minHeight: "100vh",
      }}
    >
      {/* Hero Section */}
      <div
        className="position-relative overflow-hidden"
        style={{ height: "400px" }}
      >
        <img
          src={data.bgImage}
          alt={data.title}
          className="w-100 h-100"
          style={{ objectFit: "cover" }}
        />
        <div
          className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center"
          style={{
            background:
              "linear-gradient(to right, rgba(0,0,0,0.7), rgba(0,0,0,0.4))",
          }}
        >
          <div className="container">
            <button
              onClick={onBack}
              className="btn btn-link text-white text-decoration-none mb-3 p-0 d-flex align-items-center"
              style={{ fontSize: "1rem" }}
              onMouseEnter={(e) => (e.target.style.color = "#fbcfe8")}
              onMouseLeave={(e) => (e.target.style.color = "white")}
            >
              <svg
                className="me-2"
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Back to Categories
            </button>
            <h1 className="display-2 fw-bold text-white mb-3">{data.title}</h1>
            <p className="text-white fs-5" style={{ opacity: 0.9 }}>
              Premium decoration items for your special occasion
            </p>
          </div>
        </div>
      </div>

      {/* Products Section */}
      <div className="container py-5">
        {/* <div className="d-flex justify-content-between align-items-center mb-4">
          <h2 className="h2 fw-bold text-dark">Available Products</h2>
          <span className="text-muted">{data.products.length} items</span>
        </div> */}

        <div className="row g-4">
          {data.products.map((product) => (
            <div key={product.id} className="col-12 col-sm-6 col-md-4 col-lg-3">
              <div
                className="card border-0 shadow-sm h-100"
                style={{ transition: "all 0.3s ease" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-5px)";
                  e.currentTarget.style.boxShadow =
                    "0 1rem 3rem rgba(0,0,0,.175)";
                  setHoveredProduct(product.id);
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 0.125rem 0.25rem rgba(0,0,0,.075)";
                  setHoveredProduct(null);
                }}
              >
                <div
                  className="position-relative overflow-hidden"
                  style={{ height: "250px" }}
                >
                  {/* <img
                    src={product.image}
                    alt={product.name}
                    className="card-img-top h-100"
                    style={{
                      objectFit: "cover",
                      transition: "transform 0.5s ease",
                      transform:
                        hoveredProduct === product.id
                          ? "scale(1.1)"
                          : "scale(1)",
                    }}
                  /> */}
                  {/* {hoveredProduct === product.id && (
                    <div
                      className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
                      style={{ background: "rgba(0,0,0,0.2)" }}
                    >
                      <button className="btn btn-light fw-semibold rounded-pill px-4 py-2 shadow">
                        Quick View
                      </button>
                    </div>
                  )} */}
                </div>

                {/* <div className="card-body">
                  <h5 className="card-title fw-semibold text-dark mb-3">
                    {product.name}
                  </h5>
                  {product.price && (
                    <div className="d-flex justify-content-between align-items-center">
                      <span
                        className="h4 fw-bold mb-0"
                        style={{ color: "#9333ea" }}
                      >
                        ₹{product.price}
                      </span>
                      <button
                        className="btn btn-sm text-white shadow-sm"
                        style={{
                          background:
                            "linear-gradient(to right, #ec4899, #9333ea)",
                          border: "none",
                          transition: "all 0.3s ease",
                        }}
                        onMouseEnter={(e) => {
                          e.target.style.background =
                            "linear-gradient(to right, #db2777, #7c3aed)";
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.background =
                            "linear-gradient(to right, #ec4899, #9333ea)";
                        }}
                      >
                        Add to Cart
                      </button>
                    </div>
                  )}
                </div> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DecorationDetailPage;
