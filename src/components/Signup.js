import React, { useState } from 'react';

function SignupPage() {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        phone: '',
        role: 'user' // Default role
    });
    const [errorMessage, setErrorMessage] = useState(''); // Store error messages
    const [successMessage, setSuccessMessage] = useState(''); // Store success messages
    const [isSubmitting, setIsSubmitting] = useState(false); // Prevent multiple submissions

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSignup = async (e) => {
        e.preventDefault();
        setErrorMessage(''); // Clear previous errors
        setSuccessMessage(''); // Clear previous success messages
        setIsSubmitting(true); // Start submitting

        try {
            // Make the signup API request
            const response = await fetch('http://localhost:8080/api/auth/signup', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                setSuccessMessage('Registration successful! You can now log in.');
                setFormData({
                    username: '',
                    email: '',
                    password: '',
                    phone: '',
                    role: 'user'
                }); // Reset form
            } else {
                const data = await response.json();
                setErrorMessage(data.message || 'Registration failed. Please try again.');
            }
        } catch (error) {
            setErrorMessage('An error occurred. Please try again later.');
        }

        setIsSubmitting(false); // Stop submitting
    };

    return (
        <div className="container d-flex justify-content-center align-items-center vh-100">
            <div className="card p-4" style={{ width: '100%', maxWidth: '500px' }}>
                <h2 className="text-center mb-4">Signup</h2>
                {errorMessage && <p className="text-danger text-center">{errorMessage}</p>} {/* Show error messages */}
                {successMessage && <p className="text-success text-center">{successMessage}</p>} {/* Show success messages */}

                <form onSubmit={handleSignup}>
                    <div className="mb-3">
                        <label className="form-label">Username</label>
                        <input
                            type="text"
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                            className="form-control"
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="form-control"
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            className="form-control"
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Phone Number</label>
                        <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="form-control"
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Role</label>
                        <select
                            name="role"
                            value={formData.role}
                            onChange={handleChange}
                            className="form-control"
                        >
                            <option value="user">User</option>
                            <option value="admin">Admin</option>
                        </select>
                    </div>
                    <button
                        type="submit"
                        className="btn btn-primary w-100"
                        disabled={isSubmitting} // Disable the button while submitting
                    >
                        {isSubmitting ? 'Registering...' : 'Sign Up'}
                    </button>
                </form>
            </div>
        </div>
    );
}

export default SignupPage;
