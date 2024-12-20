import { Outlet, Navigate, Route, Routes, useLocations } from 'react-router-dom'

import { Footer, Navbar } from "../components/Navbar"

export default function App() {
    return (
        <main>
            <Navbar />
            <Routes>
                <Routes>
                    <Route element={<Layout />}></Route>
                </Routes>
            </Routes>
            <Footer />
        </main>
    )
}
