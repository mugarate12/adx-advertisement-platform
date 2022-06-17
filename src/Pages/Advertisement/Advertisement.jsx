import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import Header from "../../Components/Header/Header"
import api from "../../Services/api"

import './Advertisement.css'

export default function Advertisement() {

	const [advertisement, setAdvertisement] = useState([])

	const { id } = useParams()

	useEffect(() => {
		async function showAdvertisement() {
			const response = await api.get(`/advertisement/${id}`)

			console.log(response.data);

			setAdvertisement(response.data)
		}
		
		showAdvertisement()
	}, [])

	return(
		<>
			<Header/>
			<h1 id="page-heading">Detalhes do anúncio:</h1>
			<main>
				<div className="advertisement-info">
					<img src={advertisement.imageUrl} alt={advertisement.title}/>
					<div>
						<h1>{advertisement.title}</h1>
						<p><span>Descrição:</span> {advertisement.description}</p>
						<p><span>Preço:</span> R$ {advertisement.price}</p>
					</div>
				</div>
				<aside className="user-info">
					<p><span>Proprietário</span>: {!!advertisement.user ? advertisement.user.name : ''}</p>
					<p><span>Email</span>: {!!advertisement.user ? advertisement.user.email : ''}</p>
					<button>Chat</button>
				</aside>
			</main>
		</>
	)
}