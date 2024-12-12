import styled from 'styled-components';
import { Link } from 'react-router';

function Login() {
  return (
    <ContainerPage>
      <ContainerLogo>
        <h1>TimeBuddy</h1>
        <h2>Seu Gerenciador de Ponto Eletrônico</h2>
      </ContainerLogo>
      <ContainerFormulario>
        <Form>
          <Input placeholder="e-mail" type="email" name="email" autoComplete="email" />
          <Input placeholder="password" type="password" name="password" autoComplete="password" />
          <Button type="submit">Entrar</Button>
          <Link to="/sign-up">Criar uma conta!</Link>
        </Form>
      </ContainerFormulario>
    </ContainerPage>
  );
}

export default Login;

const ContainerPage = styled.div`
  width: 100vw;
  min-width: 300px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  //justify-content: space-evenly;

  //background-color: #424242;
`;

const ContainerLogo = styled.div`
  width: 40%;
  height: 20vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  gap: 10px;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif, Courier, monospace;
  font-weight: 400;
  h1 {
    font-size: 70px;
  }
  h2 {
    font-size: 16px;
    font-style: italic;
  }

  //background-color: #524a4a;
`;

const ContainerFormulario = styled.div`
  width: 40%;
  min-width: 300px;
  height: 70vh;
  //background-color: lightslategray;
  display: flex;
  justify-content: center;
  //align-items: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 20vw;
  min-width: 300px;
  margin-top: 10vh;
  a {
    text-align: center;
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 24px;
    text-decoration-line: underline;
    color: white;
    cursor: pointer;
  }
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Button = styled.button`
  background-color: #007bff;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;
