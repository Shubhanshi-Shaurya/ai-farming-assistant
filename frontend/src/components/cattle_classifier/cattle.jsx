import React, { useState } from "react";
import styles from "./cattle.module.css";
import { predictBreed } from "./api";

export default function CattleClassifier({
  apiBaseUrl = "http://localhost:5000",
  showWiki = true,
  onPrediction = null
}) {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [result, setResult] = useState(null);

  const handleFile = (file) => {
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      setError("Please upload an image.");
      return;
    }

    setError(""); 

    setImage(file);

    setPreview(URL.createObjectURL(file));

    setResult(null);
  };

  const handleInputChange = (e) => {
    handleFile(e.target.files[0]);
  };



  const handleDrop = (e) => {
    e.preventDefault();

    const file = e.dataTransfer.files[0];

    handleFile(file);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };



  const removeImage = () => {
    setImage(null);
    setPreview(null);
    setResult(null);
    setError("");
  };

  
  const handlePredict = async () => {
    if (!image) {
      setError("Please upload an image first.");
      return;
    }

    try {
      setLoading(true);
      setError("");

      const data = await predictBreed(image, apiBaseUrl);

      setResult(data);

      if (onPrediction) {
        onPrediction(data);
      }

    } catch (err) {
      console.error(err);

      setError(
        err?.response?.data?.message ||
        "Prediction failed."
      );

    } finally {
      setLoading(false);
    }
  };

 

  return (
    <div className={styles.container}>

      <div className={styles.card}>

        <h2 className={styles.title}>
          🐄 Cattle Breed Classifier
        </h2>

        <p className={styles.subtitle}>
          Upload an image of cattle or buffalo
        </p>

        

        {!preview && (
          <div
            className={styles.uploadBox}
            onDrop={handleDrop}
            onDragOver={handleDragOver}
          >
            <div className={styles.uploadIcon}>
              📷
            </div>

            <p>
              Drag & Drop Image
            </p>

            <span>or</span>

            <label className={styles.button}>
              Browse Image

              <input
                type="file"
                accept="image/*"
                hidden
                onChange={handleInputChange}
              />
            </label>
          </div>
        )}

    

        {preview && (
          <div className={styles.previewContainer}>

            <img
              src={preview}
              alt="preview"
              className={styles.preview}
            />

            <div className={styles.actionRow}>

              <button
                className={styles.predictBtn}
                onClick={handlePredict}
                disabled={loading}
              >
                {loading
                  ? "Predicting..."
                  : "Predict Breed"}
              </button>

              <button
                className={styles.removeBtn}
                onClick={removeImage}
              >
                Remove
              </button>

            </div>
          </div>
        )}

  

        {error && (
          <div className={styles.error}>
            {error}
          </div>
        )}

    

        {loading && (
          <div className={styles.loaderArea}>
            <div className={styles.loader}></div>

            <p>
              Analyzing Image...
            </p>
          </div>
        )}

    

        {result && (
          <div className={styles.resultCard}>

        

            <div className={styles.resultHeader}>

              <h3>
                {result.breed}
              </h3>

              <span>
                {result.confidence}%
              </span>

            </div>

        

            <div className={styles.progressBar}>

              <div
                className={styles.progress}
                style={{
                  width: `${result.confidence}%`
                }}
              />

            </div>

            

            {showWiki &&
             result.details?.image && (

              <img
                src={result.details.image}
                alt={result.breed}
                className={styles.breedImage}
              />
            )}

          

            <div className={styles.infoGrid}>

              <InfoItem
                label="Origin"
                value={
                  result.details?.origin
                }
              />

              <InfoItem
                label="Purpose"
                value={
                  result.details?.purpose
                }
              />

              <InfoItem
                label="Milk Yield"
                value={
                  result.details?.milkYield
                }
              />

              <InfoItem
                label="Color"
                value={
                  result.details?.color
                }
              />

            </div>

        

            <div className={styles.description}>

              <h4>Description</h4>

              <p>
                {
                  result.details?.description
                }
              </p>

            </div>

            {/* Wikipedia */}

            {showWiki &&
             result.details?.wikipedia && (

              <a
                href={
                  result.details.wikipedia
                }
                target="_blank"
                rel="noreferrer"
                className={styles.wikiBtn}
              >
                View on Wikipedia
              </a>
            )}

          </div>
        )}

      </div>
    </div>
  );
}



function InfoItem({ label, value }) {
  return (
    <div className={styles.infoItem}>
      <span>{label}</span>

      <strong>
        {value || "Not Available"}
      </strong>
    </div>
  );
}