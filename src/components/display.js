import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Image from "../Images/download (1).jpeg";
function BikeCard({ bike }) {
    const cardStyle = {
        border: '1px solid #ddd',
        borderRadius: '8px',
        padding: '16px',
        marginBottom: '16px',
        display: 'flex',
        flexDirection: 'row', // This should arrange image and text in a row
        gap: '16px', // Add space between text and image
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        alignItems: 'center', // Vertically align items
        textDecoration: 'none', // Ensure the Link doesn't add any text decoration
    };

    const textStyle = {
        flex: 1, // Take available space for the text
    };

    const titleStyle = {
        fontSize: '1.2rem',
        fontWeight: 'bold',
        color: '#333',
    };

    const labelStyle = {
        fontWeight: 'bold',
        color: '#555',
    };

    const imageStyle = {
        width: '30%', // Set a fixed width for the image
        height: 'auto', // Maintain aspect ratio
        borderRadius: '8px', // Optional: make the image corners rounded
    };

    return (
        // Wrap the card with Link to make it clickable
        <Link to={`/bike/${bike.bikeID}`} style={{ textDecoration: 'none' }}>
            <div style={cardStyle}>
                <div style={textStyle}>
                    <div className='text-center' style={titleStyle}>{bike.model}</div>

                    {/* Flex container for Type, Condition, and Rental Price */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', gap: '20px', flexDirection: "row" }}>
                        <div>
                            <span style={labelStyle}>Type:</span> {bike.type}
                        </div>
                        <div>
                            <span style={labelStyle}>Condition:</span> {bike.condition}
                        </div>
                        <div>
                            <span style={labelStyle}>Rental Price:</span> ${bike.rentalPrice.toFixed(2)} per day
                        </div>
                    </div>
                </div>

                {/* Add the image on the right side */}
                <img src={bike.imageURL || Image} style={imageStyle} alt={bike.model} />
            </div>
        </Link>
    );
}

export default function BikeList() {
    const [bikes, setBikes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchBikes = async () => {
            try {
                const response = await axios.get('http://localhost:8080/api/auth/bikes');
                setBikes(response.data);
                setLoading(false);
            } catch (err) {
                setError('Failed to fetch bikes. Please try again later.');
                setLoading(false);
            }
        };

        fetchBikes();
    }, []);

    const containerStyle = {
        maxWidth: '800px',
        margin: '0 auto',
        padding: '20px',
    };

    if (loading) {
        return <div style={{ textAlign: 'center', marginTop: '20px' }}>Loading...</div>;
    }

    if (error) {
        return <div style={{ textAlign: 'center', marginTop: '20px', color: 'red' }}>{error}</div>;
    }

    return (
        <div style={containerStyle}>
            <h1 style={{ textAlign: 'center', marginBottom: '24px' }}>Available Bikes</h1>
            {bikes.filter(bike => bike.available).map((bike) => (
                <BikeCard key={bike.bikeID} id={bike.bikeID} bike={bike} />
            ))}
        </div>
    );
}
