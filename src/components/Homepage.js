import React from 'react';
import { useNavigate } from 'react-router-dom'; // Assuming React Router is used for navigation
import Slider from 'react-slick'; // Import Slider from react-slick
import BikeCard from './Card'; // Corrected the import to match the component name
import { useAuth } from '../Context/AuthContext'; // Import the AuthContext

// Import the slick-carousel CSS files for styling
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function HomePage() {
    const { user } = useAuth(); // Get the user from AuthContext
    const navigate = useNavigate(); // React Router's navigation hook

    // Redirect to login if not authenticated
    React.useEffect(() => {
        if (!user) {
            navigate('/'); // Redirect to the login page
        }
    }, [user, navigate]);

    const bikes = [
        {
            image: require('../Images/download.jpeg'),
            name: 'Mountain Bike',
            location: 'New York, USA',
            model: 'X1000',
            year: 2021,
        },
        {
            image: require('../Images/download (1).jpeg'),
            name: 'Road Bike',
            location: 'California, USA',
            model: 'R2000',
            year: 2020,
        },
        {
            image: require('../Images/download.jpeg'),
            name: 'Electric Bike',
            location: 'Texas, USA',
            model: 'E3000',
            year: 2023,
        },
        {
            image: require('../Images/download (1).jpeg'),
            name: 'Hybrid Bike',
            location: 'Florida, USA',
            model: 'H4000',
            year: 2022,
        },
        {
            image: require('../Images/download.jpeg'),
            name: 'Fat Bike',
            location: 'Colorado, USA',
            model: 'F5000',
            year: 2021,
        },
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            { breakpoint: 1024, settings: { slidesToShow: 3, slidesToScroll: 1 } },
            { breakpoint: 1000, settings: { slidesToShow: 2, slidesToScroll: 1 } },
            { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } }
        ]
    };

    return (
        <div>
            <h1>Welcome to the Homepage</h1>
            <p>Here you can navigate to the Signup and Login pages.</p>

            {/* Slider section */}
            <div className="container d-flex justify-content-center align-items-center">
                <div style={{ width: '100%' }}>
                    <Slider {...settings}>
                        {bikes.map((bike, index) => (
                            <div key={index} className="col-lg-3" style={{ display: 'flex', justifyContent: 'center' }}>
                                <BikeCard bike={bike} />
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    );
}

export default HomePage;
