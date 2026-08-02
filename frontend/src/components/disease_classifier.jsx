import React, { useState } from 'react';

const DiseaseUploader = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  // Handle image selection
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
      setPreviewUrl(URL.createObjectURL(file));
      setResult(null);
      setError(null);
    }
  };

  // Submit image to Flask API
  const handleAnalyze = async () => {
    if (!selectedFile) return;

    setLoading(true);
    setError(null);

    const formData = new FormData();
    formData.append('image', selectedFile);

    try {
      const response = await fetch('http://localhost:5000/api/disease_predict', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to analyze image');
      }

      setResult(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      <h2>🌿 AI Leaf Disease Classifier</h2><br />
      <p>Upload a photo of an infected leaf to get an instant diagnosis.</p><br />

      {/* File Upload Box */}
      <div style={styles.uploadCard}>
        <input 
          type="file" 
          accept="image/*" 
          onChange={handleFileChange} 
          id="leaf-input"
          style={{ display: 'none' }}
        />
        <label htmlFor="leaf-input" style={styles.uploadBtn}>
          {selectedFile ? '📁 Change Image' : '📷 Browse Photo'}
        </label>

        {/* Compact Image Preview */}
        {previewUrl && (
          <div style={styles.previewContainer}>
            <img src={previewUrl} alt="Leaf preview" style={styles.previewImage} />
            <p style={styles.fileName}>{selectedFile.name}</p>
          </div>
        )}

        {/* Action Button */}
        {selectedFile && (
          <button 
            onClick={handleAnalyze} 
            disabled={loading} 
            style={loading ? styles.submitBtnDisabled : styles.submitBtn}
          >
            {loading ? '🔍 Analyzing Leaf...' : '🚀 Diagnose Leaf'}
          </button>
        )}
      </div>

      {/* Error Message */}
      {error && <div style={styles.errorBox}>⚠️ {error}</div>}

      {/* Diagnosis Results */}
      {result && (
        <div style={styles.resultCard}>
          <h3>✅ Diagnostic Result</h3>
          <div style={styles.metricRow}>
            <strong>Predicted Disease:</strong>
            <span style={styles.metricValue}>{result.prediction}</span>
          </div>
          <div style={styles.metricRow}>
            <strong>Confidence Score:</strong>
            <span style={styles.metricValue}>{result.confidence}%</span>
          </div>

          {result.confidence < 60 && (
            <p style={styles.warningText}>
              ⚠️ Low confidence detection. Ensure the image is well-lit and focused on the leaf anomaly.
            </p>
          )}
        </div>
      )}
    </div>
  );
};

// Clean Inline CSS Styles
const styles = {
  container: {
    maxWidth: '500px',
    margin: '0 auto',
    padding: '20px',
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif'
  },
  uploadCard: {
    border: '2px dashed #4CAF50',
    borderRadius: '12px',
    padding: '24px',
    backgroundColor: '#F9FBF9',
    marginBottom: '20px'
  },
  uploadBtn: {
    display: 'inline-block',
    padding: '10px 20px',
    backgroundColor: '#4CAF50',
    color: '#fff',
    borderRadius: '6px',
    cursor: 'pointer',
    fontWeight: 'bold',
    marginBottom: '15px'
  },
  previewContainer: {
    margin: '15px 0'
  },
  previewImage: {
    width: '280px',
    maxHeight: '280px',
    objectFit: 'cover',
    borderRadius: '8px',
    border: '1px solid #ddd'
  },
  fileName: {
    fontSize: '12px',
    color: '#666',
    marginTop: '5px'
  },
  submitBtn: {
    width: '100%',
    padding: '12px',
    backgroundColor: '#2E7D32',
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    fontSize: '16px',
    fontWeight: 'bold',
    cursor: 'pointer'
  },
  submitBtnDisabled: {
    width: '100%',
    padding: '12px',
    backgroundColor: '#A5D6A7',
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    fontSize: '16px',
    cursor: 'not-allowed'
  },
  errorBox: {
    padding: '12px',
    backgroundColor: '#FFEBEE',
    color: '#C62828',
    borderRadius: '6px',
    marginBottom: '15px'
  },
  resultCard: {
    padding: '20px',
    backgroundColor: '#E8F5E9',
    borderRadius: '10px',
    border: '1px solid #C8E6C9',
    textAlign: 'left'
  },
  metricRow: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '10px 0',
    fontSize: '15px'
  },
  metricValue: {
    fontWeight: 'bold',
    color: '#1B5E20'
  },
  warningText: {
    fontSize: '12px',
    color: '#E65100',
    marginTop: '10px'
  }
};

export default DiseaseUploader;