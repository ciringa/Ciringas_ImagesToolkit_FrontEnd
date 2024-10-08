import "../../styles/pattern.css"
export default function Footer(){
    return(
        <div className="bg-slate-900 mt-24 w-full h-64 flex flex-row justify-center items-center gradPatternFlip">
        <div className=" w-1/2 flex flex-col justify-center items-center">
          <ul className="text-white text-xl text-center">
            <li className="mt-8"><a href="https://github.com/ciringa" className="text-white bg-slate-950/20 p-3 rounded-lg text-center cursor-pointer font-medium text-2xl hover:bg-slate-950 decoration-blue-500">Github</a></li>
            <li className="mt-8"><a href="https://github.com/ciringa/Ciringas_Images_ToolKit" className="text-white bg-slate-950/20 p-3 rounded-lg text-center cursor-pointer font-medium text-2xl hover:bg-slate-950 decoration-blue-500">Source</a></li>
            <li className="mt-8">                <a className="text-white bg-slate-950/20 p-3 text-center cursor-pointer font-medium text-2xl rounded-lg hover:bg-slate-950 decoration-blue-500">Downloads</a></li>
          </ul>

          <h1 className=" text-center font-bold mt-5 text-white">made by: Thierrir alencar</h1>
        </div>
        <div className=" w-1/2">
          <h1 className="text-white font-semibold text-2xl text-center">Nunca iremos exigir que você faça <a className="text-blue-500 cursor-pointer">Login</a> para usar nossa aplicação. </h1>
          <h2 className="text-white font-medium text-xl text-center">Ao realizar Login poderemos lhe fornecer um serviço mais agradavel</h2>
        </div>
      </div>
    )
}