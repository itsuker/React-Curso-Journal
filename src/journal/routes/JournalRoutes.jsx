import { Navigate, Route, Routes } from "react-router-dom"
import { JournalPage } from "../pages/JournalPage"


export const JournalRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={ <JournalPage /> } />
         {/*Esto es por si no encuntra otra dentro de las rutas de / */}
        <Route path="/*" element={ <Navigate to="/" /> } />
    </Routes>
  )
}
