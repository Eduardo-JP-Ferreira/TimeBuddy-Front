import { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router';
import axios from 'axios';

function SignUp() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    verifyPassword: '',
  });

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.verifyPassword) {
      alert('As senhas não são iguais!');
      return;
    }

    try {
      /*
      const response = await axios.post('https://...', {
        name: formData.name,
        email: formData.email,
        password: formData.password,
      });

      console.log('Cadastro realizado com sucesso:', response.data);
      */
      console.log('Cadastro realizado com sucesso:', formData);
      alert('Cadastro realizado com sucesso!');
    } catch (error) {
      console.error('Erro ao cadastrar:', error.response?.data || error.message);
      alert('Erro ao realizar cadastro. Tente novamente.');
    }
  };

  return (
    <ContainerPage>
      <ContainerLogo>
        <h1>TimeBuddy</h1>
        <h2>Seu Gerenciador de Ponto Eletrônico</h2>
      </ContainerLogo>
      <ContainerFormulario>
        <Form onSubmit={handleSubmit}>
          <Input
            placeholder="nome"
            type="name"
            name="name"
            autoComplete="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <Input
            placeholder="e-mail"
            type="email"
            name="email"
            autoComplete="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <Input
            placeholder="senha"
            type="password"
            name="password"
            autoComplete="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <Input
            placeholder="confirmar senha"
            type="password"
            name="verifyPassword"
            autoComplete="password"
            value={formData.verifyPassword}
            onChange={handleChange}
            required
          />
          <Button type="submit">Cadastrar</Button>
          <Link to="/">Já tem uma conta? Entrar</Link>
        </Form>
      </ContainerFormulario>
    </ContainerPage>
  );
}

export default SignUp;

const ContainerPage = styled.div`
  width: 100vw;
  min-width: 300px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
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
`;

const ContainerFormulario = styled.div`
  width: 40%;
  min-width: 300px;
  height: 70vh;
  display: flex;
  justify-content: center;
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
