import { BrowserRouter, Route, Routes } from 'react-router';
import styled from 'styled-components';
import Login from './pages/Login.jsx';
import SignUp from './pages/SignUp.jsx';

function App() {
  return (
    <Page>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </Page>
  );
}

export default App;

const Page = styled.div`
  min-height: 100vh;
  background-color: #424242;
`;
