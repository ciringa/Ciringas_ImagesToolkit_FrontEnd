

export default function RemBgCard(){
    return (
    <div className=" bg-slate-900 rounded-lg text-white w-1/2 h-96 gap-y-3 flex p-4 flex-col justify-center items-center ">
        <h2 className="font-bold text-2xl">Remover background</h2>
        <form className="mt-10 flex w-full flex-col justify-center items-center gap-y-6" action="http://127.0.0.1:4545/image/file" method="post" encType="multipart/form-data" id="form3">
            <input type="file" name="avatar" id="sub_file3" />
            <input className="bg-blue-600 mt-9  text-center font-bold h-10" type="submit" value="Processar Imagem" />
        </form>
    </div>
    )
}