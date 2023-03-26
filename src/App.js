import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import Nav from './component/Nav';
import Main from './component/Main';
function App() {
  return (
    <Container >
      <Nav/>
      <Main/>
    </Container>
  );
}

export default App;
