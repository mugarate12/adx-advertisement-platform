import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './Pages/Home/Home'
import Advertisement from './Pages/Advertisement/Advertisement'

export function AppRoutes() {
  return(
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />}/>
				<Route path="/advertisement/:id" element={<Advertisement />}/>
			</Routes>
		</BrowserRouter>
  )
}