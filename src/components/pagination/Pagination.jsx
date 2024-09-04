import React, {useState, useEffect} from "react";
import {buscarPagina} from "../../requisicoes/Praticante";

const Pagination = (props) => {
  const [pagina, setPagina] = useState(1);
  const [dadosPagina, setDadosPagina] = useState(null);

  useEffect(() => {
    const buscarDados = async () => {
      await buscarPagina(pagina, setDadosPagina, props.setDados, props.setAtivar);
    };

    buscarDados();
  }, [pagina]); // Dispara o efeito sempre que 'pagina' mudar

  return (
    <div style={{display: 'flex', flexDirection: 'column', margin: "0px auto"}}>
      <p style={{marginTop: '5px'}}>
        Página {dadosPagina && dadosPagina.paginaSelecionada ? dadosPagina.paginaSelecionada : 1} de {dadosPagina && dadosPagina.quantidadePaginas ? dadosPagina.quantidadePaginas : 1}
      </p>
      <nav aria-label="Page navigation example" style={{margin: '0', display: 'block', float: "right"}}>
        <ul className="pagination">
          <li
            className="page-item"
            onClick={() => {
              setPagina((prevPagina) => Math.max(prevPagina - 1, 1));
            }}
          >
            <div className="page-link">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="currentColor"
                className="bi bi-caret-left-fill"
                viewBox="0 0 16 16"
              >
                <path
                  d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z"
                />
              </svg>
            </div>
          </li>
          <li
            className="page-item"
            onClick={() => {
              if ((pagina + 1) <= dadosPagina.quantidadePaginas) {
                setPagina((prevPagina) => prevPagina + 1);
              }
            }}
          >
            <div className="page-link">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="currentColor"
                className="bi bi-caret-right-fill"
                viewBox="0 0 16 16"
              >
                <path
                  d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"
                />
              </svg>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
