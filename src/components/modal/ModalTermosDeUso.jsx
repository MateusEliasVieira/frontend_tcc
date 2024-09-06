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
        className="btn btn-danger"
        style={{ color: "white", fontSize: "20px", marginTop: '5px' }}
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasTop"
        aria-controls="offcanvasTop"
      >
        Termos de Uso
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
            <strong>1. Armazenamento Local</strong>
            <br />
            Este site utiliza armazenamento local (<code>localStorage</code>)
            para melhorar a experiência do usuário. Ao utilizar nosso site, você
            concorda com o uso desse armazenamento para as finalidades descritas
            abaixo.
          </p>

          <p>
            <strong>2. Uso de Informações</strong>
            <br />
            Armazenamos informações necessárias para garantir o correto
            funcionamento e desempenho das funcionalidades do site. Esses dados
            podem incluir, mas não estão limitados a, preferências do usuário,
            histórico de sessões e outras informações relevantes para oferecer
            um serviço mais personalizado.
          </p>

          <p>
            <strong>3. Proteção de Dados</strong>
            <br />
            Asseguramos que nenhum dado sensível, como senhas e informações
            pessoais identificáveis, será armazenado localmente. A segurança e
            privacidade de suas informações são nossas prioridades.
          </p>

          <p>
            <strong>4. Consentimento</strong>
            <br />
            Ao prosseguir, você confirma que leu e entendeu nossos termos de uso
            e concorda com o armazenamento local das informações conforme
            descrito.
          </p>

          <p>
            <strong>5. Alterações nos Termos</strong>
            <br />
            Reservamos o direito de atualizar nossos termos de uso a qualquer
            momento.
          </p>

          <p>
            <strong>6. Contato</strong>
            <br />
            Se você tiver dúvidas sobre nossos termos de uso ou a maneira como
            suas informações são tratadas, entre em contato conosco.
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
