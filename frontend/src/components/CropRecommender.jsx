
import React, { useState } from "react";
import "./CropRecommender.css";

function CropRecommender() {
  const [formData, setFormData] = useState({
    latitude: "",
    longitude: "",
    crop: "",
    year: new Date().getFullYear(),
    season: "",
    state: "",
    area: "",
    fertilizer: "",
    pesticide: "",
    N: "",
    P: "",
    K: "",
    pH: "",
    rainfall: "",
  });

  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [locationLoading, setLocationLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const getLocation = () => {
    if (!navigator.geolocation) {
      setError("Geolocation is not supported by your browser.");
      return;
    }

    setLocationLoading(true);
    setError("");

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setFormData((prev) => ({
          ...prev,
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        }));

        setLocationLoading(false);
      },
      (err) => {
        console.error(err);
        setError(
          "Unable to get your location. Please allow location access."
        );
        setLocationLoading(false);
      }
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError("");
    setResult(null);

    try {
      const response = await fetch("http://127.0.0.1:5000/recommend", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Prediction failed.");
      }

      setResult(data.predicted_yield);
    } catch (err) {
      console.error(err);
      setError(err.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="crop-page">

      <div className="crop-header">
        <h1>Crop Yield Predictor</h1>
        <p>
          Provide your farm and soil details to estimate the expected crop
          yield.
        </p>
      </div>

      <form className="crop-form" onSubmit={handleSubmit}>

        {/* Location */}
        <div className="form-section">
          <h2>📍 Location</h2>

          <div className="location-row">

            <div className="form-group">
              <label>Latitude</label>
              <input
                type="number"
                step="any"
                name="latitude"
                value={formData.latitude}
                onChange={handleChange}
                placeholder="Latitude"
                required
              />
            </div>

            <div className="form-group">
              <label>Longitude</label>
              <input
                type="number"
                step="any"
                name="longitude"
                value={formData.longitude}
                onChange={handleChange}
                placeholder="Longitude"
                required
              />
            </div>

            <button
              type="button"
              className="location-button"
              onClick={getLocation}
              disabled={locationLoading}
            >
              {locationLoading
                ? "Getting Location..."
                : "Use My Location"}
            </button>

          </div>
        </div>

        {/* Crop Information */}
        <div className="form-section">
          <h2>🌱 Crop Information</h2>

          <div className="form-grid">

            <div className="form-group">
              <label>Crop</label>
              <input
                type="text"
                name="crop"
                value={formData.crop}
                onChange={handleChange}
                placeholder="e.g. Rice"
                required
              />
            </div>

            <div className="form-group">
              <label>State</label>
              <input
                type="text"
                name="state"
                value={formData.state}
                onChange={handleChange}
                placeholder="e.g. Assam"
                required
              />
            </div>

            <div className="form-group">
              <label>Year</label>
              <input
                type="number"
                name="year"
                value={formData.year}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Season</label>
              <select
                name="season"
                value={formData.season}
                onChange={handleChange}
                required
              >
                <option value="">Select Season</option>
                <option value="Kharif">Kharif</option>
                <option value="Rabi">Rabi</option>
                <option value="Whole Year">Whole Year</option>
                <option value="Summer">Summer</option>
                <option value="Winter">Winter</option>
              </select>
            </div>

          </div>
        </div>

        {/* Farm Information */}
        <div className="form-section">
          <h2>🚜 Farm Information</h2>

          <div className="form-grid">

            <div className="form-group">
              <label>Area</label>
              <input
                type="number"
                step="any"
                name="area"
                value={formData.area}
                onChange={handleChange}
                placeholder="Enter area"
                required
              />
            </div>

            <div className="form-group">
              <label>Fertilizer</label>
              <input
                type="number"
                step="any"
                name="fertilizer"
                value={formData.fertilizer}
                onChange={handleChange}
                placeholder="Fertilizer amount"
                required
              />
            </div>

            <div className="form-group">
              <label>Pesticide</label>
              <input
                type="number"
                step="any"
                name="pesticide"
                value={formData.pesticide}
                onChange={handleChange}
                placeholder="Pesticide amount"
                required
              />
            </div>

            <div className="form-group">
              <label>Rainfall (mm)</label>
              <input
                type="number"
                step="any"
                name="rainfall"
                value={formData.rainfall}
                onChange={handleChange}
                placeholder="Expected rainfall"
                required
              />
            </div>

          </div>
        </div>

        {/* Soil Information */}
        <div className="form-section">
          <h2>🌍 Soil Information</h2>

          <div className="form-grid">

            <div className="form-group">
              <label>Nitrogen (N)</label>
              <input
                type="number"
                step="any"
                name="N"
                value={formData.N}
                onChange={handleChange}
                placeholder="N value"
                required
              />
            </div>

            <div className="form-group">
              <label>Phosphorus (P)</label>
              <input
                type="number"
                step="any"
                name="P"
                value={formData.P}
                onChange={handleChange}
                placeholder="P value"
                required
              />
            </div>

            <div className="form-group">
              <label>Potassium (K)</label>
              <input
                type="number"
                step="any"
                name="K"
                value={formData.K}
                onChange={handleChange}
                placeholder="K value"
                required
              />
            </div>

            <div className="form-group">
              <label>Soil pH</label>
              <input
                type="number"
                step="0.01"
                name="pH"
                value={formData.pH}
                onChange={handleChange}
                placeholder="e.g. 6.5"
                required
              />
            </div>

          </div>
        </div>

        <button
          type="submit"
          className="predict-button"
          disabled={loading}
        >
          {loading ? "Predicting..." : "Predict Yield"}
        </button>

      </form>

      {error && (
        <div className="error-box">
          {error}
        </div>
      )}

      {result !== null && (
        <div className="result-card">

          <span className="result-label">
            Predicted Yield
          </span>

          <div className="yield-value">
            {Number(result).toFixed(2)}
          </div>

          <p>
            Estimated crop yield based on the provided farm,
            soil and weather conditions.
          </p>

        </div>
      )}

    </div>
  );
}

export default CropRecommender;

