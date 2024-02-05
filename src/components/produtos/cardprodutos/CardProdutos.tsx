import { Link } from "react-router-dom"
import Produto from "../../../models/Produto"

interface CardProdutoProps {
  produto: Produto
}

function CardProdutos({ produto }: CardProdutoProps) {

  return (
    <div className='flex flex-col rounded-lg overflow-hidden justify-between bg-white'>
      <div className='py-4'>

        <img src={produto.foto} className='mt-1 h-40 max-w-75 mx-auto' alt="" />

        <div className='p-4'>
          <p className='text-sm text-center uppercase'>{produto.nome}</p>
          <h3 className='text-xl text-center font-bold uppercase'>
            {Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL'
            }).format(produto.preco)}
          </h3>
          <p className='text-sm italic text-center'>Categoria: {produto.categoria?.tipo}</p>
        </div>
      </div>
      <div className="flex flex-wrap">
        <Link to={`/editarproduto/${produto.id}`}
          className='w-1/2 text-slate-100 bg-teal-500 hover:bg-teal-700 flex items-center justify-center py-2'>
          <button>Editar</button>
        </Link>

        <Link to={`/deletarproduto/${produto.id}`}
          className='w-1/2 text-slate-100 bg-red-500 hover:bg-red-700 flex items-center justify-center'>
          <button>Deletar</button>
        </Link>
      </div>
    </div >
  )
}

export default CardProdutos