import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {
  CContainer,
  CHeader,
  CHeaderBrand,
  CHeaderDivider,
  CHeaderNav,
  CHeaderToggler,
  CNavItem,
} from '@coreui/react';
import CIcon from '@coreui/icons-react';
import {cilMenu} from '@coreui/icons';

import {AppBreadcrumb} from './index';

const AppCabecalho = () => {
  const dispatch = useDispatch();
  const sidebarShow = useSelector((state) => state.sidebarShow);

  const [minutos, setMinutos] = useState(0);
  const [segundos, setSegundos] = useState(0);

  useEffect(() => {
    const login = JSON.parse(localStorage.getItem("login"))
    if (login.validadeToken) {
      const horarioExpiracao = login.validadeToken.split("T")[1].split(".")[0]

      const horarioExpiracaoHoras = horarioExpiracao.split(":")[0]
      const horarioExpiracaoMinutos = horarioExpiracao.split(":")[1]
      const horarioExpiracaoSegundos = horarioExpiracao.split(":")[2]

      const dataExpiracao = new Date()
      dataExpiracao.setHours(horarioExpiracaoHoras)
      dataExpiracao.setMinutes(horarioExpiracaoMinutos)
      dataExpiracao.setSeconds(horarioExpiracaoSegundos)

      const horarioAtual = new Date()
      const tempoRestante = ((dataExpiracao.getTime() - horarioAtual.getTime()) / (60 * 1000))

      // Extrair minutos inteiros
      const minutos = Math.floor(tempoRestante);

      // Calcular segundos restantes
      const segundosRestantes = Math.round((tempoRestante - minutos) * 60);

      setMinutos(minutos)
      setSegundos(segundosRestantes)
    }
  }, []);


  return (
    <CHeader position="sticky" className="mb-4">
      <CContainer fluid>
        <CHeaderToggler
          className="ps-1"
          onClick={() => dispatch({type: 'set', sidebarShow: !sidebarShow})}
        >
          <CIcon icon={cilMenu} size="lg"/>
        </CHeaderToggler>
        <CHeaderBrand className="mx-auto d-md-none" to="/"/>
        <CHeaderNav className="d-none d-md-flex me-auto">
          <CNavItem>Sessão: {minutos}:{segundos < 10 ? `0${segundos}` : segundos}</CNavItem>
        </CHeaderNav>
        <CHeaderNav className="ms-3"/>
      </CContainer>
      <CHeaderDivider/>
      <CContainer fluid>
        <AppBreadcrumb/>
      </CContainer>
    </CHeader>
  );
};

export default AppCabecalho;
