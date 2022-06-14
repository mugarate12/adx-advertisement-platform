import { useEffect, useState } from 'react'
import api from '../../Services/api'

import './Home.css'

export default function Home() {
	const [advertisements, setAdvertisements] = useState([])

	useEffect(() => {
		async function loadAdvertisements() {
			const response = await api.get('/advertisement')

			setAdvertisements(response.data)
		}

		loadAdvertisements()
	}, [])

  return (
		<ul>
			{advertisements.map(advertisement => (
				<li key={advertisement.advertisementId}>
					<img src={advertisement.imageUrl} alt={advertisement.title} />
					<div className='data'>
						<a>{advertisement.title}</a>
					</div>
				</li>
			))}
		</ul>
	)
}