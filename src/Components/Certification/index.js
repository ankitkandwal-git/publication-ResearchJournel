import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './index.css';

const Certification = () => {
    const [uploadedFile, setUploadedFile] = useState(null);
    const [uploadMessage, setUploadMessage] = useState('');

    const handleFileUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            // Check file type (accept PDF, JPG, PNG)
            const validTypes = ['application/pdf', 'image/jpeg', 'image/png', 'image/jpg'];
            if (!validTypes.includes(file.type)) {
                setUploadMessage('Please upload a PDF, JPG, or PNG file.');
                setUploadedFile(null);
                return;
            }

            // Check file size (max 5MB)
            if (file.size > 5 * 1024 * 1024) {
                setUploadMessage('File size should not exceed 5MB.');
                setUploadedFile(null);
                return;
            }

            setUploadedFile(file);
            setUploadMessage(`File "${file.name}" selected successfully!`);
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!uploadedFile) {
            setUploadMessage('Please select a file to upload.');
            return;
        }

        // In a real application, you would upload the file to a server here
        setUploadMessage(`Certificate "${uploadedFile.name}" uploaded successfully! Our team will review it shortly.`);
        
        // Reset after 3 seconds
        setTimeout(() => {
            setUploadedFile(null);
            setUploadMessage('');
            event.target.reset();
        }, 3000);
    };

    return (
        <div className="certification-page">
            <nav className="certification-nav">
                <h1 className="certification-nav-logo">Certification</h1>
                <ul className="certification-nav-links">
                    <li><Link to="/">Home</Link></li>
                </ul>
            </nav>
            <div className="certification-content">
                <div className="certification-container">
                    <h2>Professional Certification Programs</h2>
                    <p className="intro-text">
                        The Society for Promoting Academic Collaboration and Engagement (S.P.A.C.E.) offers 
                        various certification programs to enhance professional skills and academic excellence.
                    </p>

                    <div className="certification-section">
                        <h3>Available Certifications</h3>
                        <div className="certification-cards">
                            <div className="certification-card">
                                <h4>Research Methodology Certification</h4>
                                <p>Comprehensive training in research design, data collection, and analysis techniques.</p>
                                <ul>
                                    <li>Duration: 3 months</li>
                                    <li>Format: Online/Offline</li>
                                    <li>Certification: Upon successful completion</li>
                                </ul>
                            </div>

                            <div className="certification-card">
                                <h4>Academic Writing Certification</h4>
                                <p>Master the art of academic writing, publication standards, and peer review processes.</p>
                                <ul>
                                    <li>Duration: 2 months</li>
                                    <li>Format: Online</li>
                                    <li>Certification: Upon successful completion</li>
                                </ul>
                            </div>

                            <div className="certification-card">
                                <h4>Conference Presentation Skills</h4>
                                <p>Develop effective presentation and communication skills for academic conferences.</p>
                                <ul>
                                    <li>Duration: 1 month</li>
                                    <li>Format: Workshop-based</li>
                                    <li>Certification: Upon successful completion</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="certification-section">
                        <h3>How to Apply</h3>
                        <div className="application-process">
                            <div className="process-step">
                                <div className="step-number">1</div>
                                <div className="step-content">
                                    <h4>Submit Application</h4>
                                    <p>Fill out the online application form with required documents</p>
                                </div>
                            </div>
                            <div className="process-step">
                                <div className="step-number">2</div>
                                <div className="step-content">
                                    <h4>Review Process</h4>
                                    <p>Your application will be reviewed by our academic committee</p>
                                </div>
                            </div>
                            <div className="process-step">
                                <div className="step-number">3</div>
                                <div className="step-content">
                                    <h4>Enrollment</h4>
                                    <p>Upon approval, complete the enrollment and payment process</p>
                                </div>
                            </div>
                            <div className="process-step">
                                <div className="step-number">4</div>
                                <div className="step-content">
                                    <h4>Start Learning</h4>
                                    <p>Access course materials and begin your certification journey</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="certification-section">
                        <h3>Upload Your Certificate</h3>
                        <div className="upload-section">
                            <p className="upload-description">
                                If you have completed a certification program, please upload your certificate for verification and record-keeping.
                            </p>
                            <form onSubmit={handleSubmit} className="upload-form">
                                <div className="upload-area">
                                    <label htmlFor="certificate-upload" className="upload-label">
                                        <div className="upload-icon">📄</div>
                                        <p className="upload-text">
                                            {uploadedFile ? uploadedFile.name : 'Click to browse or drag and drop your certificate'}
                                        </p>
                                        <p className="upload-hint">Supported formats: PDF, JPG, PNG (Max size: 5MB)</p>
                                    </label>
                                    <input
                                        type="file"
                                        id="certificate-upload"
                                        className="file-input"
                                        accept=".pdf,.jpg,.jpeg,.png"
                                        onChange={handleFileUpload}
                                    />
                                </div>
                                <button type="submit" className="upload-button" disabled={!uploadedFile}>
                                    Upload Certificate
                                </button>
                                {uploadMessage && (
                                    <div className={`upload-message ${uploadedFile ? 'success' : 'error'}`}>
                                        {uploadMessage}
                                    </div>
                                )}
                            </form>
                        </div>
                    </div>

                    <div className="certification-section">
                        <h3>Contact Information</h3>
                        <p>For more information about our certification programs, please contact:</p>
                        <div className="contact-info">
                            <p><strong>Email:</strong> <a href="mailto:editorspacejournal@gmail.com">editorspacejournal@gmail.com</a></p>
                            <p><strong>Address:</strong> H.No 216, Gijii, Tehsil Sampla, District Rohtak, Haryana 124501</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Certification;
