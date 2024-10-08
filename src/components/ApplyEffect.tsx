import { useEffect, useState } from "react";

export default function AppyEffect(){
    const [selectedOption, setSelectedOption] = useState<string>("1");
    const [rangeValue, setRangeValue] = useState<string>("0");
    const [rangeMin, setRangeMin] = useState<string>("0");
    const [rangeMax, setRangeMax] = useState<string>("0");
  
    useEffect(() => {
      // Atualiza o range com base na opção selecionada
      switch (selectedOption) {
        case "1":
          setRangeMin("0");
          setRangeMax("0");
          setRangeValue("0");
          break;
        case "2":
          setRangeMin("1");
          setRangeMax("7");
          setRangeValue("5");
          break;
        case "3":
          setRangeMin("1");
          setRangeMax("20");
          setRangeValue("10");
          break;
        default:
          break;
      }
    }, [selectedOption]);
  
    const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
      setSelectedOption(e.target.value);
    };
  
    const handleRangeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setRangeValue(e.target.value);
      //console.log(e.target.value);
    };

    
    function applyEffect(){
            const url = 'http://127.0.0.1:4545/image/effect';
            console.log("get there")
            const data={
                Effect:selectedOption,
                Amount:rangeValue
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
    document.getElementById("primaryForm")?.addEventListener("submit",(e)=>{
        e.preventDefault()
        applyEffect()
    })




    return(
        <>
            <div className="relative sm:w-2/3 flex w-1/2 flex-col rounded-xl bg-slate-900 bg-clip-border text-gray-300 shadow-md">
                <div className="flex items-center relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl text-white bg-gradient-to-b from-blue-600 to-blue-800">
                    <img src="/bg.png" alt="" />
                    <img id="chickenImage" src="/chicken.png" alt="" />
                </div>
                <div className="p-6">
                    <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                        Aplicar Efeito
                    </h5>
                    <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                        Adicione efeitos especiais para a sua imagem. 
                    </p>
                </div>
                <div className="p-6 pt-0">
                    <form id="primaryForm" action="http://127.0.0.1:4545/image/effect" method="post" encType="multipart/form-data" className="w-full gap-y-2 flex justify-center items-center flex-row itens-center h-auto"> 
                        <div className=" h-36 w-1/2 flex flex-col justify-center items-center gap-y-10 border-dashed border-blue-300" >
                            <input className="text-center w-1/2 outline-none border-none justify-self-center" type="file" name="avatar" id="" />
                            <input type="submit" value="Processar Imagem" className="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"/>
                        </div>
                        <div className="w-1/2 flex flex-col justify-center items-center gap-y-10 border-dashed border-blue-300 h-36" >
                            <select id="EffectList" name="Effect" className="outline-none w-1/3 bg-blue-700 text-center border-none p-3" value={selectedOption} onChange={handleSelectChange}>
                                <option className="rounded-none bg-blue-600" value="1">Grayscale</option>
                                <option className="rounded-none bg-blue-600" value="2">Blur</option>
                                <option className="rounded-none bg-blue-600" value="3">Canny</option>
                            </select>
                            {selectedOption=="1"?(<></>):(
                            <div className="flex flex-row justify-center items-center gap-5">
                                <input type="range" name="Amount" id="Range" min={rangeMin} max={rangeMax} value={rangeValue} onChange={handleRangeChange}/>
                                <h1>{rangeValue}</h1>
                            </div>)}
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}