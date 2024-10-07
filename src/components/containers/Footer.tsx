import "../../styles/pattern.css"
export default function Footer(){
    return(
        <div className="bg-slate-900 mt-24 w-full h-64 flex flex-row justify-center items-center gradPatternFlip">
        <div className=" w-1/2 flex flex-col justify-center items-center">
          <ul className="text-white text-xl text-left">
            <li className="mt-4"><a href="" >GITHUB</a></li>
            <li className="mt-4"><a href="">SOURCE</a></li>
            <li className="mt-4"><a href="">README</a></li>
          </ul>

          <h1 className=" text-center font-bold">made by: Thierrir alencar</h1>
        </div>
        <div className=" w-1/2">
          <h1 className="text-white font-semibold text-2xl text-center">Nunca iremos exigir que você faça <a className="text-blue-500 cursor-pointer">Login</a> para usar nossa aplicação. </h1>
          <h2 className="text-white font-medium text-xl text-center">Ao realizar Login poderemos lhe fornecer um serviço mais agradavel</h2>
        </div>
      </div>
    )
}