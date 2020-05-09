import React from 'react'
import { FiChevronRight } from 'react-icons/fi';

import { Title, Form, Repositories } from './styles'
import logo from '../../assets/logo.svg'

const Dashboard: React.FC = () => {
   return (
      <>
         <img src={logo} alt="Github Explorer" />
         <Title>Explore repositórios no GitHub</Title>

         <Form>
            <input placeholder="Nome do repositório"/>
            <button type="submit">Pesquisar</button>
         </Form>

         <Repositories>
            <a href='teste'>
               <img
                  src='https://avatars1.githubusercontent.com/u/31441201?s=460&u=1cf93b13751255a1e6507b2e0f8faf1384e4294f&v=4'
                  alt='Matheus Lino'
               />

               <div>
                  <strong>7matheus/teste</strong>
                  <p>Um teste apenas</p>
               </div>

               <FiChevronRight size={20}/>
            </a>

            <a href='teste'>
               <img
                  src='https://avatars1.githubusercontent.com/u/31441201?s=460&u=1cf93b13751255a1e6507b2e0f8faf1384e4294f&v=4'
                  alt='Matheus Lino'
               />

               <div>
                  <strong>7matheus/teste</strong>
                  <p>Um teste apenas</p>
               </div>

               <FiChevronRight size={20}/>
            </a>

            <a href='teste'>
               <img
                  src='https://avatars1.githubusercontent.com/u/31441201?s=460&u=1cf93b13751255a1e6507b2e0f8faf1384e4294f&v=4'
                  alt='Matheus Lino'
               />

               <div>
                  <strong>7matheus/teste</strong>
                  <p>Um teste apenas</p>
               </div>

               <FiChevronRight size={20}/>
            </a>
         </Repositories>
      </>
   )
};

export default Dashboard;
