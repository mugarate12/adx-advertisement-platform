import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import api from '../../Services/api'

import Header from "../../Components/Header/Header"
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
		<>
		<Header />
			<div className='home'>
				<h1>Nesta página estão todos os nossos anúncios!</h1>
				<p>Clique em um deles, veja todos os detalhes fornecidos pelo vendedor e comece a negociar.</p>
				<ul>
					{advertisements.map(advertisement => (
						<li key={advertisement.advertisementId}>
							<img src={advertisement.imageUrl} alt={advertisement.title} />
							<div className='data'>
								<a>{advertisement.title}</a>
								<Link id="DetailsButton" to={`/advertisement/${advertisement.advertisementId}`}>Ver Detalhes</Link>
							</div>
						</li>
					))}
				</ul>
			</div>
		</>
	)
}