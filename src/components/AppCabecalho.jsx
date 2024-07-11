import React, {useEffect, useRef, useState} from 'react';
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

  const [min, setMin] = useState(null);
  const [seg, setSeg] = useState(null);

  const temporizador = (minutos, segundos) => {
    setMin(minutos)
    setSeg(segundos)
    const interval = setInterval(() => {
      if (segundos > 0) {
        segundos -= 1
        setSeg(segundos)
      } else {
        if (minutos > 0) {
          segundos = 59
          setSeg(segundos)
          minutos -= 1
          setMin(minutos)
        } else {
          clearInterval(interval)
          window.location.href = '/#/login?expirado=true';
        }
      }
    }, 1000);
  };

  useEffect(() => {
    const login = JSON.parse(localStorage.getItem('login'));
    if (login && login.validadeToken) {
      const horarioExpiracao = login.validadeToken.split('T')[1].split('.')[0];

      const horarioExpiracaoHoras = parseInt(horarioExpiracao.split(':')[0], 10);
      const horarioExpiracaoMinutos = parseInt(horarioExpiracao.split(':')[1], 10);
      const horarioExpiracaoSegundos = parseInt(horarioExpiracao.split(':')[2], 10);

      const dataExpiracao = new Date();
      dataExpiracao.setHours(horarioExpiracaoHoras);
      dataExpiracao.setMinutes(horarioExpiracaoMinutos);
      dataExpiracao.setSeconds(horarioExpiracaoSegundos);

      const horarioAtual = new Date();
      const tempoRestante = (dataExpiracao.getTime() - horarioAtual.getTime()) / 1000; // tempo restante em segundos

      if ((tempoRestante / 60) > 60) {
        window.location.href = '/#/login?expirado=true';
      } else {
        const minutos = Math.floor(tempoRestante / 60);
        const segundosRestantes = Math.floor(tempoRestante % 60);

       // temporizador(minutos, segundosRestantes);
        temporizador(1, 0);
      }
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
          <CNavItem>
            Sessão: {String(min).padStart(2, '0')}:
            {String(seg).padStart(2, '0')}
          </CNavItem>
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
