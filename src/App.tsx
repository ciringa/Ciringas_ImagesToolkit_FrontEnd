import { useState } from "react"
import AppyEffect from "./components/ApplyEffect"
import RemBgCard from "./components/RemBgCard"
import "./styles/app.css"

enum Test{
   remBg="remBg",
   applyEffect="applyEffect",
}
function App() {
  const [SiteState,SetSiteState] = useState<Test>(Test.remBg)
  
  

  return (
    
    <div id="Main">
      <div id="header">
        <button onClick={()=>{SetSiteState(Test.remBg)}}>Remover o background</button>
        <button onClick={()=>{SetSiteState(Test.applyEffect)}}>Aplicar Efeitos</button>
      </div>

      <div>
        {SiteState==Test.remBg?(<RemBgCard />):(<AppyEffect />)}
      </div>
    </div>
  )
}

export default App
