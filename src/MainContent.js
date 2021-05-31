import React from 'react'
import HomeCard from './homeCard';

export default function MainContent(props) {
    
	return (
		<main>
			<div className="main-head">
				<form className="search-box" onSubmit={props.HandleSearch}>
					<input 
						type="search"
						placeholder="Search for a home..."
						required
                        value={props.search}
                        onChange={e => props.SetSearch(e.target.value)}
                        />
				</form>
			</div>

			<div className="main-searched-list">
				<h1>Your Searched Homes : </h1>
				
			</div>

            {/* <div className="home-list">
                {props.homes.map((home, index) => (
                    <HomeCard 
                        home={home}
                        key={index}
                    />
                ))}
                
            </div> */}

		</main>
	)
}
