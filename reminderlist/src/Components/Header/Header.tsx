import * as React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'

interface IHeaderProps {
}

const Header: React.FC<IHeaderProps> = (props) => {
  return (
      <Navbar fixed="top" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">
                <img
                alt=""
                src="/logo.svg"
                width="30"
                height="30"
                className="d-inline-block align-top"
                />{' '}
                Save your notes
            </Navbar.Brand>
        </Container>
      </Navbar>
  );
};

export default Header;
