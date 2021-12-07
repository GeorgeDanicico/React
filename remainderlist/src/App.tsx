import React, { useState } from 'react';
import CreateNotes from './Components/CreateNotes/CreateNotes';
import NotesList from './Components/NotesList/NotesList';
import { Note } from './models/note.model';
import Header from './Components/Header/Header';
import { Col, Container, Row } from 'react-bootstrap';
import './App.css';

const App: React.FC = () => {
  const [notes, setNotes] = useState<Note[]>([]);

  return (
    <>
      <Header />
      <Container className="mt-5">
        <Row>
          <Col>
            <NotesList notes={notes} setNotes={setNotes} />
          </Col>
        </Row>

        <Row>
          <Col>
            <CreateNotes setNotes={setNotes} />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
