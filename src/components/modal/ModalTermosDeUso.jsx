import { useEffect, useState } from "react";

const ModalTermosDeUso = () => {
  // Inicializa o estado diretamente a partir do localStorage
  const [aceitou, setAceitou] = useState(() => {
    const termos_de_uso = localStorage.getItem("termos_de_uso");
    return termos_de_uso === "ACEITO";
  });

  const handleChange = () => {
    // Inverte o valor de aceitou
    const novoValor = !aceitou;
    setAceitou(novoValor);

    // Atualiza o localStorage com base no valor atualizado
    if (novoValor) {
      localStorage.setItem("termos_de_uso", "ACEITO");
    } else {
      localStorage.setItem("termos_de_uso", "NEGADO");
    }
  };

  return (
    <div>
      <button
        className="btn btn-link"
        style={{ fontSize: "16px", textDecoration:'none', display:'block', padding:'0', marginTop:'10px', float:'right'}}
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasTop"
        aria-controls="offcanvasTop"
      >
       <strong>Termos de Uso</strong>
      </button>

      <div
        className="offcanvas offcanvas-bottom"
        tabIndex="-1"
        id="offcanvasTop"
        aria-labelledby="offcanvasTopLabel"
      >
        <div className="offcanvas-header" >
          <h1 className="offcanvas-title" id="offcanvasTopLabel">
            Termos de Uso
          </h1>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">

          <p>
            De acordo com o <a href="https://www.gov.br/receitafederal/pt-br/acesso-a-informacao/lgpd/termo-de-uso">Termo de Uso e a
            Política de Privacidade da Receita Federal</a>, estes documentos foram elaborados em conformidade com a <strong>Lei Federal nº 12.965,
            de 23 de abril de 2014 (Marco Civil da Internet), e com a Lei Federal nº 13.709, de 14 de agosto de 2018 (Lei Geral de Proteção de Dados Pessoais - LGPD).</strong> Assim, este site segue as diretrizes da LGPD e, portanto, destaca seus termos de uso abaixo. O uso e armazenamento de informações no
            computador do usuário são necessários para garantir o funcionamento adequado do site e proporcionar uma experiência de navegação otimizada.
          </p>

          <p>
            <strong>1. Armazenamento Local</strong>
            <br />
            Este site utiliza o armazenamento local (Local Storage) para aprimorar a experiência do usuário. Ao navegar em nosso site, você
            concorda com o uso deste recurso para as finalidades descritas a seguir.
          </p>

          <p>
            <strong>2. Uso de Informações</strong>
            <br />
            Armazenamos informações necessárias para garantir o correto
            funcionamento e desempenho das funcionalidades do site. Esses dados
            podem incluir, entre outros, tempo de sessão, dados para futuras requisições, e outras informações relevantes para proporcionar
            um serviço mais personalizado.
          </p>

          <p>
            <strong>3. Proteção de Dados</strong>
            <br />
            Garantimos que nenhum dado sensível, como senhas ou informações
            pessoais identificáveis, será armazenado localmente. A segurança e
            privacidade das suas informações são nossas maiores prioridades.
          </p>

          <p>
            <strong>4. Consentimento</strong>
            <br />
            Ao continuar utilizando o site, você confirma que leu, entendeu e
            concorda com os termos de uso, inclusive com o armazenamento local
            das informações conforme descrito.
          </p>

          <p>
            <strong>5. Alterações nos Termos</strong>
            <br />
            Reservamo-nos o direito de atualizar os termos de uso a qualquer
            momento, com as alterações sendo aplicadas imediatamente após sua publicação.
          </p>

          <p>
            <strong>6. Contato</strong>
            <br />
            Caso tenha dúvidas sobre os nossos termos de uso ou sobre como
            tratamos suas informações, entre em contato conosco.
          </p>

          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckChecked"
              checked={aceitou}
              onChange={handleChange}
              style={{padding:'10px',width:'50px'}}
            />
            <label className="form-check-label" htmlFor="flexSwitchCheckChecked" style={{padding:"0px 20px"}}>
             <strong>
               {aceitou
                ? "Sim, eu li, concordo e aceito todos os termos de uso!"
                : "Não aceito os termos de uso!"}
             </strong>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalTermosDeUso;
