import { useEffect, useState } from 'react';
import { DNA } from 'react-loader-spinner';
import Produto from '../../../models/Produto';
import { listar } from '../../../services/Service';
import CardProdutosHome from '../cardprodutoshome/CardProdutosHome';

function ListarProdutosHome() {

  const [produtos, setProdutos] = useState<Produto[]>([]);

  const token = '';

  async function buscarProdutos() {
    await listar('/produtos', setProdutos, {
      headers: {
        Authorization: token,
      },
    });
  }

  useEffect(() => {
    buscarProdutos();
  }, [produtos.length]);

  return (
    <>

      {produtos.length === 0 && (
        <DNA
          visible={true}
          height="200"
          width="200"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper mx-auto"
        />
      )}
      <div className="
                bg-gray-200 
                flex 
                justify-center
                ">
        <div className='container mx-auto my-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4'>
          {produtos.map((produto) => (
            <CardProdutosHome key={produto.id} produto={produto} />
          ))}
        </div>
      </div >
    </>
  );
}

export default ListarProdutosHome;