// src/components/BikeDetailPage.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import placeholderImage from "../Images/download (1).jpeg";
import { useNavigate } from 'react-router-dom';
import Rent from "../Images/Rent.png";
// import RightSideImage from "../Images/BikekiImage.png"; // Bike image to be added on the right side

const BikeDetailPage = () => {
    const navigate = useNavigate();
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

    const handleRentClick = () => {
        // Redirect to the bike details page using the bike's model (or another unique identifier)
        navigate(`/bike/${bike.bikeID}`);
    };

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
                position: 'relative',
                width: '100%',
                height: '55vh', // Adjust as per your design needs
                backgroundImage: `url(${bike.imageURL || placeholderImage})`,
                backgroundSize: 'contain', // Ensure the image covers the container
                backgroundPosition: 'center', // Center the image
                backgroundRepeat: 'no-repeat', // Prevent image from repeating
                display: 'flex', // Using flex to align the background and the bike image side by side
            }}
        >
            {/* Bike image to the right */}
            {/* <div
                style={{
                    position: 'absolute',
                    right: '0px',
                    top: '10px',
                    width: '30%',
                    height: '100%',
                    backgroundImage: `url(${RightSideImage})`,
                    backgroundSize: 'contain',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                }}
            ></div> */}

            {/* Top flexbox for bike model, price, and details */}
            <div
                style={{
                    position: 'absolute',
                    bottom: '-170px', // Adjust this value to move the text container up or down
                    left: '0',
                    right: '0',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                    padding: '10px',
                    color: '#fff', // Make text color white for visibility on image
                    backgroundColor: 'rgba(0, 0, 0, 0.6)', // Slight dark background for text readability
                    gap: '10px', // Space between bike info items
                }}
            >
                {/* Bike Model and Year */}
                <div>
                    <strong>{bike.model || 'Model: Not Available'}</strong>
                    <span>{bike.year ? `(${bike.year})` : 'Year: Not Available'}</span>
                </div>

                {/* Mileage and Kilometers */}
                <div>
                    <strong>Mileage:</strong> {bike.mileage ? `${bike.mileage} km` : 'Mileage: Not Available'}
                </div>
                <div>
                    <strong>Kilometers Driven:</strong> {bike.kilometersDriven ? `${bike.kilometersDriven} km` : 'Kilometers: Not Available'}
                </div>

                {/* Rental Price */}
                <div>
                    <strong>Rental Price:</strong> {bike.rentalPrice ? `$${bike.rentalPrice} / day` : 'Rental Price: Not Available'}
                </div>

                {/* Type */}
                <div>
                    <strong>Type:</strong> {bike.type || 'Type: Not Available'}
                </div>

                {/* Small Description */}
                <div>
                    <strong>Description:</strong> {bike.description || 'No description available.'}
                </div>
            </div>

            {/* Rent Button Container */}
            <div
                style={{
                    position: 'absolute',
                    bottom: '20px', // Space from the bottom for the button
                    left: '50%',
                    transform: 'translateX(-50%)', // Center horizontally
                    display: 'flex',
                    justifyContent: 'center',
                    width: '100%',
                }}
            >
                {/* Rent Button */}
                <button
                    style={{
                        backgroundColor: '#ff6b6b',
                        color: '#fff',
                        padding: '0px',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: 'pointer',
                        fontSize: '18px',
                        textTransform: 'uppercase',
                    }}
                    onClick={handleRentClick}
                >
                    <img src={Rent} alt="Rent Logo" style={{ height: '50px', width: '100%' }} />
                </button>
            </div>
        </div>
    );
};

export default BikeDetailPage;
