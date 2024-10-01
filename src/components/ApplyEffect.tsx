export default function AppyEffect(){
    function applyEffect(){
        const url = 'http://127.0.0.1:4545/image/effect';
        const outUrl = document.getElementById('outPutPath2')
        const Effect = document.getElementById("EffectList")
        if(outUrl!=null || Effect!=null){
            console.log("get there")
            const data={
                outUrl:outUrl?.nodeValue,
                Effect:Effect?.nodeValue
            }
            fetch(url, {
                method: 'POST', // Método HTTP PATCH
                headers: {
                    'Content-Type': 'application/json', // Especifica o tipo de conteúdo como JSON
                },
                body: JSON.stringify(data), // Transforma o objeto 'data' em uma string JSON
            }).then(err=>{
                console.log(err)
            })
        }
    }
    document.getElementById("primaryForm")?.addEventListener("submit",(e)=>{
        e.preventDefault()
        applyEffect()
    })

    return(
        <>
            <div className="relative sm:w-2/3 flex w-1/2 flex-col rounded-xl bg-slate-900 bg-clip-border text-gray-300 shadow-md">
                <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600"></div>
                <div className="p-6">
                    <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                        Aplicar Efeito
                    </h5>
                    <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                    Adicione efeitos especiais para a sua imagem. 
                    </p>
                </div>
                <div className="p-6 pt-0">
                    <form id="primaryForm" action="http://127.0.0.1:4545/image/effect" method="post" encType="multipart/form-data" className="w-full gap-y-2 flex justify-center items-center flex-col itens-center"> 
                        <input className="text-center w-1/2 outline-none border-none justify-self-center" type="file" name="avatar" id="" />
                        <select id="EffectList" name="Effect" className="outline-none w-1/2 bg-blue-700 text-center border-none p-3">
                            <option className="rounded-none bg-blue-500" value="1">Grayscale</option>
                            <option className="rounded-none bg-blue-500" value="2">Blur</option>
                            <option className="rounded-none bg-blue-500" value="3">Canny</option>
                        </select>
                        <input type="range" name="Amount" id="" />
                        <input type="submit" value="Processar Imagem" className="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"/>
                    </form>
                </div>
            </div>
        </>
    )
}