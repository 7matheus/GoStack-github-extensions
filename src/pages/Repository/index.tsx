import React from 'react'
import { useRouteMatch, Link } from "react-router-dom";
import { FiChevronsLeft, FiChevronRight } from "react-icons/fi";

import { Header, RepositoryInfo, Issues } from "./styles";

import logo from '../../assets/logo.svg'

interface RepositoryParams {
   repository: string;
}

const Repository: React.FC = () => {
   const { params } = useRouteMatch<RepositoryParams>();
   return (
      <>
         <Header>
            <img src={logo} alt="GitHub Explorer" />
            <Link to="/">
               <FiChevronsLeft size={16} />
            Voltar
         </Link>
         </Header>

         <RepositoryInfo>
            <header>
               <img src="https://avatars0.githubusercontent.com/u/28929274?v=4" alt="Logo" />
               <div>
                  <strong>Rocketseat/unform</strong>
                  <p>descrição</p>
               </div>
            </header>
            <ul>
               <li>
                  <strong>12</strong>
                  <span>OI</span>
               </li>
               <li>
                  <strong>1232</strong>
                  <span>Tudo</span>
               </li>
               <li>
                  <strong>4132</strong>
                  <span>Bem</span>
               </li>
            </ul>
         </RepositoryInfo>

         <Issues>
            <Link to="assd">
               <div>
                  <strong>asd</strong>
                  <p>asd</p>
               </div>

               <FiChevronRight size={20} />
            </Link>
         </Issues>


      </>
   );
}

export default Repository
