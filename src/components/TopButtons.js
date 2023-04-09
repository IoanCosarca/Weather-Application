import React from 'react'
import './TopButtons.css'

function TopButtons() {
	const cities = [
		{
			id : 1,
			title : 'Cluj-Napoca'
		},
		{
			id : 2,
			title : 'Târgu Mureș'
		},
		{
			id : 3,
			title : 'București'
		},
		{
			id : 4,
			title : 'Brașov'
		},
		{
			id : 5,
			title : 'Timișoara'
		},
	]
	return (
		<div className = "ButtonsBody">
			{cities.map((city) => (
				<button className = "button" key = {city.id}>{city.title}</button>
			))}
		</div>
	)
}

export default TopButtons
