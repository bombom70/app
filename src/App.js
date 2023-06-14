import 'bootstrap/dist/css/bootstrap.min.css'
import { Routes, Route, Link } from 'react-router-dom'
import { Home } from './pages/Home.jsx'
import { About } from './pages/About.jsx'
import { Post } from './pages/Post.jsx'
import { NotFound } from './pages/NotFound.jsx'
import { Col, Container, Row } from 'react-bootstrap'


function App() {
  return (
    <Container>
      <Row>
        <Col md='12'>
          <header>
          <Link to="/about">About</Link><br/>
          <Link to="/">Home</Link>
          <hr/>
        </header>
        <Routes>
          <Route path='/' index element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/posts/:id' element={<Post/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Routes>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
