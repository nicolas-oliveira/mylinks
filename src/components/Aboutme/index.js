import React from 'react';
import { AboutText, Center, TextSelf } from './styles';
import { IoIosArrowDown } from 'react-icons/io';
export default function Aboutme() {
  return (
    <>
      <AboutText>
        <Center>
          <img src="https://github.com/nicolas-oliveira.png" />
        </Center>
        <TextSelf>
          <h1>Sobre mim</h1>
          <p>
            Me chamo Nicolas e estou atuando e me aperfeiçoando como Software
            Developer em Passos, Minas Gerais.
          </p>
          <p>
            Atualmente crio projetos para a Web e gosto bastante de experimentar
            de tudo um pouco. Buscando sempre aprender habilidades novas e me
            atualizar sempre.
          </p>
          <p>
            Estou graduando atualmente no curso de{' '}
            <a>Sistemas de Informação na UEMG</a> (Previsão de término em 2023)
          </p>
          <p>
            E posso dizer que adquiri o gosto por tecnologia através do Linux,
            que por pura curiosidade, comecei a lidar e resolver problemas no
            meu computador pessoal sem perceber.
          </p>
          <p>Portanto, sou muito conectado no mundo Open Source!</p>
        </TextSelf>
        <Center>
          <span>Continue lendo</span>
          <span>
            <IoIosArrowDown />
          </span>
        </Center>
      </AboutText>
      <h3>Alguns projetos que já criei:</h3>
    </>
  );
}
