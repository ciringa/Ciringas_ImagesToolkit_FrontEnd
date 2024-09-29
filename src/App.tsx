import { useState } from "react"
import AppyEffect from "./components/ApplyEffect"
import RemBgCard from "./components/RemoveBg"
import "./styles/pattern.css"
enum Test{
   remBg="remBg",
   applyEffect="applyEffect",
}
function App() {
  const [SiteState,SetSiteState] = useState<Test>(Test.remBg)
  
  return (
    <div id="Main" className="bg-slate-800 bg-gradient-to-r from-slate-700 to-slate-900 flex w-full flex-col h-screen justify-center items-center gap-y-4">
      <div id="header" className=" rounded-lg bg-slate-900 w-1/2 h-64 p-8 flex justify-center items-center gap-3 border-b-8 border-b-blue-600">
        <button className="
                    cursor-pointer transition-all bg-blue-500 text-white px-6 py-2 rounded-lg
                    border-blue-600
                    border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
                    active:border-b-[2px] active:brightness-90 active:translate-y-[2px]" onClick={()=>{SetSiteState(Test.remBg)}}>Remover o background</button>
        <button className="
                    cursor-pointer transition-all bg-blue-500 text-white px-6 py-2 rounded-lg
                    border-blue-600
                    border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
                    active:border-b-[2px] active:brightness-90 active:translate-y-[2px]" onClick={()=>{SetSiteState(Test.applyEffect)}}>Aplicar Efeitos</button>
        <button className="
        cursor-pointer transition-all bg-blue-500 text-white px-6 py-2 rounded-lg
                    border-blue-600
                    border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
                    active:border-b-[2px] active:brightness-90 active:translate-y-[2px]" onClick={()=>{SetSiteState(Test.applyEffect)}}>Aplicar Efeitos</button>
      </div>

      <div className="w-full mt-10 flex items-center justify-center">
        {SiteState==Test.remBg?(<RemBgCard />):(<AppyEffect />)}
      </div>
      <div className="mt-10 w-full flex flex-col flex-wrap justify-center items-center gap-2"> 
      </div>
 
    </div>
  )
}

export default App
