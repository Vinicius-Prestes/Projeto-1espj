const Home =()=>{
    return(
    <>
    <div className="bg-gradient-to-l from-cyan-500 to-blue-500">
    <h1 className="text-3xl font-bold underline text-blue-800">Home</h1>
    </div>
    
    <div className="relative-w-96 m-3 cursor-pointer border-2 shadow-lg rounded-xl items-center">
        <div className="flex h-28 bg-blue-700 rounded-xl items-center justify-center">
            <h1 className="absolute mx-auto text-center right text-2xl text-white">
                clique aqui
            </h1>
        </div>
        <div className="p-2 border-b-2">
            <h6>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt vitae corrupti sit consequuntur aliquid minus numquam vero nesciunt corporis consequatur, natus deserunt ipsam ea quia, rerum provident sint quas culpa.
            </h6>
        </div>
        <div className="flex flex-wrap items-center m-2">
            <span className="border border-blue-500 rounded-2xl px-2 my-1 mx-1">#HTML</span>
            <span className="border border-blue-500 rounded-2xl px-2 my-1 mx-1">#REACT</span>
            <span className="border border-blue-500 rounded-2xl px-2 my-1 mx-1">#JavaScript</span>
        </div>
        <div className="flex flex-wrap items-center rounded-b-xl border-t-2 bg-white">
            <button className="border rounded-2xl bg-blue-600 text-white shadow-sm p-1 px-2 m-2">
                Projetos
            </button>
            <button className="border-2 border-blue-600 rounded-2xl text-blue-700 shadow-sm p-1 px-2 m-2">
                Projetos
            </button>
        </div>
    </div>
    </>
)}
export default Home