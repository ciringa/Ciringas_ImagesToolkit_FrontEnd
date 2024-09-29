export default function ImageCard(Title:string){
    return(
        <>
            <div className="transform transition duration-300 hover:scale-110 rounded-lg shadow-lg h-52 w-56 hover:shadow-xl bg-white">
                <div className="bg-gradient-to-br from-rose-100 via-purple-200 to-purple-200 m-2 h-3/6 rounded-lg"></div>

                <div className="px-5 pt-2 flex flex-col">
                    <h2 className="font-semibold">{Title}</h2>

                    <button className="bg-blue-500 cursor-pointer text-white px-2 py-1 mt-2 rounded-md transition duration-150 hover:bg-blue-700" type="button">
                        Downlaod
                    </button>
                </div>
            </div>
        </>
    )
}