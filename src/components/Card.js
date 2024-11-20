import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for React Router v6

const BikeCard = ({ bike }) => {
    const navigate = useNavigate(); // Hook for programmatic navigation

    const handleClick = () => {
        // Redirect to the bike details page using the bike's model (or another unique identifier)
        navigate(`/bike/${bike.bikeID}`);
    };

    return (
        <div className="bike-card" style={{ width: "90%", height: "100%", marginBottom: "16px", border: "1px solid #ddd", borderRadius: "8px", boxShadow: "0 2px 4px rgba(0,0,0,0.1)" }}>
            <div className="bike-card-image">
                <img src={bike.image} alt={bike.name} style={{ objectFit: "contain", width: '100%', height: '20vh', borderTopLeftRadius: "8px", borderTopRightRadius: "8px" }} />
            </div>
            <div className="bike-card-info" style={{ padding: "16px", display: "flex", flexDirection: "column", gap: "8px" }}>
                <h2 className="bike-name" style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#333" }}>{bike.name}</h2>
                <div className="bike-details" style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                    <p className="bike-location" style={{ margin: "0", color: "#555" }}>Location: {bike.location}</p>
                    <p className="bike-model" style={{ margin: "0", color: "#555" }}>Model: {bike.model}</p>
                    <p className="bike-year" style={{ margin: "0", color: "#555" }}>Year: {bike.year}</p>
                </div>
                <button className="bike-details-button" onClick={handleClick} style={{ padding: "10px", backgroundColor: "#007BFF", color: "#fff", border: "none", borderRadius: "4px", cursor: "pointer" }}>View Details</button>
            </div>
        </div>
    );
};

export default BikeCard;
