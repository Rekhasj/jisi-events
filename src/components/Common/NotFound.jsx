import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="container text-center py-5" style={{ minHeight: "60vh" }}>
      <div className="display-1 mb-3">🎈</div>
      <h1 className="display-5 fw-bold mb-3">Page not found</h1>
      <p className="lead text-muted mb-4">
        The page you're looking for doesn't exist or has moved.
      </p>
      <Link to="/" className="btn btn-lg rounded-pill px-5 text-white btn-brand">
        Back to Home
      </Link>
    </div>
  );
}

export default NotFound;
