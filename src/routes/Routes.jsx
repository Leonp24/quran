import { Route, Routes } from "react-router-dom"
import HalamanSurah from "../pages/HalamanSurah"
import DetailSurah from "../pages/DetailSurah"

const RoutesIndex = () => {
    return (
        <Routes>
            <Route path="/" element={<HalamanSurah />} />
            <Route path="/detail-surah/:id/:nama" element={<DetailSurah />} />
        </Routes>
    )
}

export default RoutesIndex