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
import {LOGIN} from "../URL/URL";

const AppCabecalho = () => {
  const dispatch = useDispatch();
  const sidebarShow = useSelector((state) => state.sidebarShow);

  const [data, setData] = useState('')

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

      let data_atual = new Date()

      console.log("data atual "+data_atual)
      console.log("data expira "+dataExpiracao)

      if (data_atual.getMilliseconds() > dataExpiracao.getMilliseconds()) {
        window.location.href = `${LOGIN}?expirado=true`;
      } else {

        let dia = dataExpiracao.getDate() < 10 ? "0" + dataExpiracao.getDate() : dataExpiracao.getDate()
        let mes = dataExpiracao.getMonth() < 10 ? "0" + dataExpiracao.getMonth() : dataExpiracao.getMonth()
        let ano = dataExpiracao.getFullYear()

        let horario = dataExpiracao.getHours() < 10 ? "0" + dataExpiracao.getHours() : dataExpiracao.getHours()
        let minutos = dataExpiracao.getMinutes() < 10 ? "0" + dataExpiracao.getMinutes() : dataExpiracao.getMinutes()

        let data_formatada = `${dia}/${mes}/${ano} às ${horario}:${minutos}`

        setData(data_formatada)
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
            Sessão válida até {data}
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
