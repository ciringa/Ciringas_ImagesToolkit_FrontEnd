import "../styles/app.css"

export default function AppyEffect(){
    return (
        <div className="card">
            <h2>Aplicar Efeitos</h2>
            <form action="http://127.0.0.1:4545/image/file" method="post" encType="multipart/form-data" id="form3">
                <input type="file" name="avatar" id="sub_file3" />
                <select name="Effect" id="ChooseEffect">
                    <option value="Grayscale">Grayscale</option>
                    <option value="Blur">Blur</option>
                    <option value="Canny">Canny</option>
                </select>
                <input className="slider"type="range" name="Intensity" id="ProdRange" min="1" max="10"></input>
                <input type="submit" className="subInputs" value="Processar Imagem"></input>
            </form>
        </div>
    )
}