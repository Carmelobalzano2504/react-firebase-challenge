import React from 'react';


// This page has not been implemented yet!


function HomeCard({home}) {
    
    return (
        <div className="home-card">
           <h3>Address : {home.address}</h3>
           <h2>Bedrooms : {home.bedrooms}</h2>
           <h2>Bathrooms : {home.bathrooms}</h2>
           <h2>Home Type : {home.type}</h2>
           <h2>SqFt : {home.SqFt}</h2>
           <h2>Year Built : {home.yearBuilt}</h2>
        </div>
    )

}

export default HomeCard;