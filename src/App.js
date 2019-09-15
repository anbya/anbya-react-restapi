import React from 'react';
import './App.css';
import Container from '@material-ui/core/Container';
import JsonPlaceHolder from './commponents/jsonPlaceHolder';
import AddModal from './commponents/addModal';

function App() {
  return (
    <div className="App">
      <React.Fragment>
        <Container maxWidth="xl">
          <JsonPlaceHolder />
        </Container>
        <Container maxWidth="xl">
          <AddModal />
        </Container>
      </React.Fragment>
    </div>
  );
}

export default App;
