import React, {useEffect, useState} from 'react';
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CContainer,
} from '@coreui/react';
import Campo from '../../../../components/campos/Campo';
import {salvar} from "../../../../requisicoes/Praticante";
import {
  BUSCAR_AVALIACAO_PSICOLOGICA_DO_PRATICANTE_POR_ID_GET,
  SALVAR_AVALIACAO_PSICOLOGICA_DO_PRATICANTE_POST
} from "../../../../endpoints/praticante/avaliacaoPsicologica/Endpoints";
import {converterImagemEmBase64} from "../../../../utilidades/ConversorDeImagem";
import Modal from "../../../../components/modal/Modal";
import {esconderModal} from "../../../../utilidades/ManipuladorDeModal";
import axios, {HttpStatusCode} from "axios";

const AvaliacaoPsicologica = () => {

  const login = JSON.parse(localStorage.getItem('login'));

  const [displayModal, setDisplayModal] = useState("none");
  const [tituloModal, setTituloModal] = useState("");
  const [conteudoModal, setConteudoModal] = useState("");

  const [desabilitar, setDesabilitar] = useState("")
  const [formularioDeDados, setFormularioDeDados] = useState({
    expectativasFamiliaresTerapiaEquina: '',
    resumoCasoObservacoesComplementares: '',
    imagemAssinaturaOuCRPECarimbo: '',
    praticante: {
      idPraticante: '',
    },
  });

  useEffect(() => {

    const id = Number(window.location.href.split("?id=")[1]);

    if (id) {
      // Vai terminar o cadastro
      // Verificar se esse formulário já não foi cadastrado, se já estiver sido cadastrado, mostrar os dados nos campos e deixar bloqueados. Caso contrário, deixar a pessoa finalizar o cadastro
      axios.get(`${BUSCAR_AVALIACAO_PSICOLOGICA_DO_PRATICANTE_POR_ID_GET}`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${login.token}`
        },
        params: {
          id: id
        }
      })
        .then((response) => {
          if (response.status === HttpStatusCode.Ok) {
            setFormularioDeDados({...response.data})
            setDesabilitar(true) // desabilitamos os campos
          } else {
            setFormularioDeDados({...formularioDeDados, praticante: {idPraticante: id}});
          }
        })
        .catch((error) => {
          setFormularioDeDados({...formularioDeDados, praticante: {idPraticante: id}});
        })
    } else {
      // Se não tiver o id, significa que é um novo cadastro
      // Pegamos o id do cadastro atual (é preciso já ter cadastrado os dados pessoais primeiro)
      const idPraticanteSalvo = localStorage.getItem("idPraticanteSalvo");
      if (idPraticanteSalvo) {
        setFormularioDeDados({...formularioDeDados, praticante: {idPraticante: idPraticanteSalvo}});
      }
    }

  }, []);

  return (
    <CCard className="mb-4">
      <Modal
        dsp={displayModal}
        titulo={tituloModal}
        conteudo={<div dangerouslySetInnerHTML={{__html: conteudoModal}}/>}
        esconderModal={() => esconderModal(setDisplayModal, setTituloModal, setConteudoModal)}
      />
      <CCardHeader>
        <strong>Avaliação Psicológica</strong>
      </CCardHeader>
      <CCardBody>
        <CContainer>
          <Campo
            tipo="textarea"
            id="expectativasFamiliaresTerapiaEquina"
            valor={formularioDeDados.expectativasFamiliaresTerapiaEquina}
            setar={(e) =>
              setFormularioDeDados({...formularioDeDados, expectativasFamiliaresTerapiaEquina: e.target.value})
            }
            legenda="Qual a expectativa da família quanto à equoterapia?"
            disabled={desabilitar}
          />
          <Campo
            tipo="textarea"
            id="resumoCasoObservacoesComplementares"
            valor={formularioDeDados.resumoCasoObservacoesComplementares}
            setar={(e) =>
              setFormularioDeDados({...formularioDeDados, resumoCasoObservacoesComplementares: e.target.value})
            }
            legenda="Síntese do caso e observações complementares"
            disabled={desabilitar}
          />
          <Campo
            tipo="file"
            id="imagemAssinaturaOuCRPECarimbo"
            setar={(e) =>
              converterImagemEmBase64(e.target.files[0])
                .then((imagemBase64) => {
                  setFormularioDeDados({...formularioDeDados, imagemAssinaturaOuCRPECarimbo: imagemBase64})
                })
                .catch(() => {
                  alert("Falha ao selecionar imagem!")
                })
            }
            legenda="Imagem da assinatura ou CRP e carimbo"
            disabled={desabilitar}
          />
          <CButton color="danger" style={{color: "white"}} disabled={desabilitar} onClick={() => {
            salvar(formularioDeDados, SALVAR_AVALIACAO_PSICOLOGICA_DO_PRATICANTE_POST, "avaliacaoPsicologica", setDesabilitar, setDisplayModal, setTituloModal, setConteudoModal)
          }
          }>
            Salvar
          </CButton>
        </CContainer>
      </CCardBody>
    </CCard>
  );
};

export default AvaliacaoPsicologica;
