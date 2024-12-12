import { BrowserRouter, Route, Routes } from 'react-router';
import Login from './pages/Login.jsx';
import styled from 'styled-components';

function App() {
  return (
    <Page>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
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
