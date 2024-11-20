import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import placeholderImage from "../Images/download (1).jpeg";
const BikeDetailPage = () => {
    const { id } = useParams(); // Get the bike ID from the URL parameter
    const [bike, setBike] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchBikeDetails = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/api/auth/bike/${id}`);
                setBike(response.data);
                setLoading(false);
            } catch (err) {
                setError('Failed to fetch bike details. Please try again later.');
                setLoading(false);
            }
        };

        fetchBikeDetails();
    }, [id]);

    if (loading) {
        return <div style={{ textAlign: 'center', marginTop: '20px' }}>Loading...</div>;
    }

    if (error) {
        return <div style={{ textAlign: 'center', marginTop: '20px', color: 'red' }}>{error}</div>;
    }

    return (
        <div
            className="bike-details"
            style={{
                position: 'relative', // To allow positioning of the text box over the image
                width: 'auto%',
                height: '60vh', // Set a height for the image container
                backgroundImage: `url(${bike.imageURL || placeholderImage})`, // Set the image as the background
                backgroundSize: 'contain', // Cover the entire container
                backgroundPosition: 'center', // Center the image
                backgroundRepeat: 'no-repeat', // Prevent the image from repeating
            }}
        >
            <div
                className="bike-text-container"
                style={{
                    position: 'absolute', // Position relative to the parent container
                    bottom: '0', // Place it at the bottom of the image
                    width: '100%', // Take the full width of the container
                    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Add a semi-transparent background
                    color: '#fff', // Make the text white for better visibility
                    padding: '20px', // Add some padding for spacing
                    display: 'flex', // Use flexbox for the text
                    justifyContent: 'center', // Center the items horizontally
                    flexWrap: 'wrap', // Allow text to wrap if there's insufficient space
                    gap: '40px', // Add spacing between text items
                }}
            >
                {bike.condition && (
                    <p>
                        <strong>Condition:</strong> {bike.condition}
                    </p>
                )}
                {bike.model && (
                    <p>
                        <strong>Model:</strong> {bike.model}
                    </p>
                )}
                {bike.type && (
                    <p>
                        <strong>Type:</strong> {bike.type}
                    </p>
                )}
                {bike.description && <p>{bike.description}</p>}
            </div>
        </div>
    );

};

export default BikeDetailPage;
