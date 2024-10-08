import { useEffect, useState } from "react";
import ImageCard from "../ImageCard";

export default function ImagesContainer(){

    const [imageList, setImageList] = useState<string[]>([]); // Inicialize como um array vazio

    useEffect(() => {
      fetch(`http://127.0.0.1:4545/images/return`, {
        method: "GET",
      })
        .then((res) => res.json()) // Converte a resposta para JSON
        .then((data) => {
          if (Array.isArray(data.Files)) { // Verifica se o retorno é um array
            setImageList(data.Files);     // Atualiza o estado com o array de imagens
          } else {
            console.error("Expected an array but got:", data);
          }
        })
        .catch((err) => {
          console.error("Error fetching images:", err);
        });
    }, []); // O array vazio significa que o fetch ocorrerá apenas uma vez após o componente montar

    return(
        <div className="mt-14 w-full flex flex-wrap flex-row justify-center items-center gap-4">
             {imageList.map((file,index) => (
                    <ImageCard key={index} Title={"file"} URL={file}/> // Supondo que você tenha um componente <Posts> para renderizar cada post
            ))}
      </div>
    )
}