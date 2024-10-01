import { useState } from "react"
import AppyEffect from "./components/ApplyEffect"
import RemBgCard from "./components/RemoveBg"
import "./styles/pattern.css"
enum Test{
   remBg="remBg",
   applyEffect="applyEffect",
   Transform="transform"
}
function App() {
  const [SiteState,SetSiteState] = useState<Test>(Test.remBg)
  
  return (
    <div id="Main" className="bg-slate-800 bg-gradient-to-r from-slate-800 to-slate-900 flex w-full flex-col h-full justify-center items-center gap-y-4">
      <div id="header" className="sm:w-2/3 sm:mt-7 rounded-lg w-1/2 h-auto p-8 flex flex-col justify-center items-center ">
        <img src="/LogoFull.png" alt="" />
        <h1 className="text-white font-semibold text-2xl text-center">Nunca iremos exigir que você <a>Login</a> faça  para usar nossa aplicação<br/>Faça isso se desejar</h1>
        <div className=" flex flex-row h-44 w-full justify-center items-center gap-4">
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
                      active:border-b-[2px] active:brightness-90 active:translate-y-[2px]" onClick={()=>{SetSiteState(Test.Transform)}}>Transformar Imagem</button>
        </div>
      </div>
      
      <div className="w-2/3 sm:w-full mt-5 flex items-center justify-center">
        {SiteState==Test.remBg?(<RemBgCard />): SiteState==Test.applyEffect?(<AppyEffect />): SiteState==Test.Transform?(<AppyEffect />):(<></>)}
      </div>
    </div>
  )
}

export default App
