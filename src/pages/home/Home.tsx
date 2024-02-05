import ListarProdutos from "../../components/produtos/listarprodutos/ListarProdutos"
import ListarProdutosHome from "../../components/produtos/listarprodutoshome/ListarProdutosHome"
import ModalProduto from "../../components/produtos/modalprodutos/ModalProduto"

function Home() {
    return (
        <>
            <div className="
                bg-slate-800 
                flex 
                justify-center
                ">
                <div className='
                    container 
                    grid 
                    grid-cols-2 
                    text-white
                    '>
                    <div className="
                        flex 
                        flex-col 
                        gap-4 
                        items-center 
                        justify-center 
                        py-4
                        ">
                        <h2 className='
                            text-5xl 
                            font-bold
                            '>
                            Seja bem vinde!
                        </h2>
                        <p className='text-xl'>Aqui você encontra os melhores Games!</p>

                        <div className="flex justify-around gap-4">
                            <button className='
                                    rounded
                                    bg-slate-800 
                                    text-white 
                                    py-2 
                                    px-4
                                    '>
                                <ModalProduto />
                            </button>
                        </div>
                    </div>

                    <div className="flex justify-center ">
                        <img
                            src="https://ik.imagekit.io/vzr6ryejm/home.png?updatedAt=1705970755605"
                            alt="Imagem Página Home"
                            className='w-2/3'
                        />
                    </div>
                </div>
            </div>
            <ListarProdutosHome />
        </>
    )
}

export default Home