import { useState } from "react"
import AppyEffect from "./components/ApplyEffect"
import RemBgCard from "./components/RemBgCard"
import "./input.css"

enum Test{
   remBg="remBg",
   applyEffect="applyEffect",
}
function App() {
  const [SiteState,SetSiteState] = useState<Test>(Test.remBg)
  
  return (
    <div id="Main" className=" bg-slate-800 flex w-full flex-col h-screen justify-center items-center gap-y-4">
      <div id="header" className=" rounded-lg bg-slate-900 w-1/2 p-8 flex justify-center items-center gap-3">
        <button className="w-48 h-12 text-white font-semibold bg-blue-700 hover:bg-blue-800" onClick={()=>{SetSiteState(Test.remBg)}}>Remover o background</button>
        <button className="w-48 h-12 text-white font-semibold bg-blue-700 hover:bg-blue-800" onClick={()=>{SetSiteState(Test.applyEffect)}}>Aplicar Efeitos</button>
        <button className="w-48 h-12 text-white font-semibold bg-blue-700 hover:bg-blue-800" onClick={()=>{SetSiteState(Test.applyEffect)}}>Aplicar Efeitos</button>
      </div>

      <div className=" w-full flex items-center justify-center">
        {SiteState==Test.remBg?(<RemBgCard />):(<AppyEffect />)}
      </div>
    </div>
  )
}

export default App
