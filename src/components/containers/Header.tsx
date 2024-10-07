export default function Header(){
    return (
        <div className="Header z-10 abosolute bg-slate-900 w-full h-20 top-0 flex flex-row justify-center items-center">
            <div className="w-1/2 flex items-center">
                <img src="Logo.png" className="w-16 ml-10" />
                <h1 className="text-2xl text-white font-semibold">IMAGES TOOLKIT</h1>
            </div>

            <div className="w-1/2 flex flex-row itens-center justify-center gap-12">
                <a href="https://github.com/ciringa" className="text-white bg-slate-950/20 p-3 rounded-lg text-center cursor-pointer font-medium text-2xl hover:bg-slate-950 decoration-blue-500"><strong className="text-red-600">▲ </strong>Github</a>
                <a href="https://github.com/ciringa/Ciringas_Images_ToolKit" className="text-white bg-slate-950/20 p-3 rounded-lg text-center cursor-pointer font-medium text-2xl hover:bg-slate-950 decoration-blue-500"><strong className="text-blue-600">▲ </strong>Source</a>
                <a className="text-white bg-slate-950/20 p-3 text-center cursor-pointer font-medium text-2xl rounded-lg hover:bg-slate-950 decoration-blue-500"><strong className="text-green-600">▲ </strong>Downloads</a>
            </div>
        </div>
    )
}