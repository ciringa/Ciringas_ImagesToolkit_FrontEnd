import "../styles/app.css"

export default function RemBgCard(){
    return (
    <div className="card">
        <h2>Remover background</h2>
        <form action="http://127.0.0.1:4545/image/file" method="post" encType="multipart/form-data" id="form3">
            <input type="file" name="avatar" id="sub_file3" />
            <input type="submit" className="subInputs" value="Processar Imagem" />
        </form>
    </div>
    )
}