import React, { useState } from 'react';

const UserProfile = () => {
    // State initialization
    const [userProfile, setUserProfile] = useState({
        name: '',
        email: '',
        address: {
            street: '',
            city: '',
            country: ''
        }
    });

    // Update function
    const updateAddress = () => {
        const street = document.getElementById('street').value;
        const city = document.getElementById('city').value;
        const country = document.getElementById('country').value;

        setUserProfile(prevProfile => ({
            ...prevProfile,
            address: {
                ...prevProfile.address,
                street: street,
                city: city,
                country: country
            }
        }));
    };

    return (
        <div>
            <h2>User Profile</h2>
            {/* Input fields for street, city, and country */}
            <div>
                <input
                type="text"
                placeholder="Enter street"
                id="street"
                />
            </div>
            <div>
                <input
                type="text"
                placeholder="Enter city"
                id="city"
                />
            </div>
            <div>
                <input
                type="text"
                placeholder="enter country"
                id="country"
                />
            </div>
            {/* Button to trigger the updateAddress function */}
            <button onClick={updateAddress}>Update Address</button>

            {/* Display the current user profile information */}
            <div>
                <h3>Current Profile</h3>
                <p>Name: {userProfile.name}</p>
                <p>Email: {userProfile.email}</p>
                <p>Address:</p>
                <p>Street: {userProfile.address.street}</p>
                <p>City: {userProfile.address.city}</p>
                <p>Country: {userProfile.address.country}</p>
            </div>
        </div>
    );
};

export default UserProfile;