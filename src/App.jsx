import React from "react"
import { Route, Routes } from "react-router-dom"
import { FirstComponent } from "./components/FirstComponent/FirstComponent.jsx"
import { ModuloDos } from "./components/FirstComponent/moduloDos.jsx"
import { NotFound } from "./components/FirstComponent/NotFound.jsx"
import { Proyecto } from "./components/FirstComponent/proyectos.jsx"
import {Producto} from "./components/marketPlace/producto.jsx"

function App() {

  return (
    <>
    <div className="flex justify-center">
 <Routes>
  <Route path="/" element={<FirstComponent/>}/>
  <Route path="/conocimientos" element={<ModuloDos/>}/>
  <Route path="/proyectos" element={<Proyecto/>}/>
  <Route path="/MarketPlace" element={<Producto/>}/>
  <Route path="*" element={<NotFound/>}/>
 </Routes>
    </div>

    </>
  )
}

export default App
