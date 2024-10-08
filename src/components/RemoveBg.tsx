import "../styles/img.css"

export default function RemBgCard(){
    return(
        <>
        <div className="relative sm:w-2/3 flex w-1/2 flex-col rounded-xl bg-slate-900 bg-clip-border text-gray-300 shadow-md">
            <div className="flex items-center relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl text-white bg-gradient-to-b from-blue-600 to-blue-800 enableBG">
                <img src="public/bg.png" alt="" />
            </div>
            <div className="p-6">
                <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                 Remover Background
                </h5>
                <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                    Envie uma imagem para remover o plano de fundo utilizando técnicas avançadas.
                </p>
            </div>
            <div className="p-6 pt-0">
                <form className="mt-10 flex w-full flex-col justify-center items-center gap-y-6" action="http://127.0.0.1:4545/image/remove" method="post" encType="multipart/form-data" id="form3">
                    <input type="file" name="avatar" id="sub_file3" />
                    <input className=" *pointer select-none rounded-lg bg-blue-500 py-3 px-6 text-center font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="submit" value="Processar Imagem"></input>
                </form>
            </div>
        </div>
        </>
    )
}