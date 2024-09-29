

export default function AppyEffect(){
    return (
        <div className=" bg-slate-900 rounded-lg text-white w-1/2 h-96 gap-y-3 flex p-4 flex-col justify-center items-center ">
            <h2 className=" text-slate-200 font-bold">Aplicar Efeitos</h2>
            <form className="bg-slate-800 flex flex-col w-full p-5 gap-y-3 "action="http://127.0.0.1:4545/image/file" method="post" encType="multipart/form-data" id="form3">
                <input type="file" name="avatar" id="sub_file3" className="text-center w-full" />
                <select  name="Effect" id="ChooseEffect" className=" bg-slate-900 text-center h-9">
                    <option value="Grayscale">Grayscale</option>
                    <option value="Blur">Blur</option>
                    <option value="Canny">Canny</option>
                </select>
                <input className="text-blue-600 bg-slate-600"type="range" name="Intensity" id="ProdRange" min="1" max="10"></input>
                <input className="bg-blue-600 text-center font-bold h-10" type="submit" value="Processar Imagem"></input>
            </form>
        </div>
    )
}