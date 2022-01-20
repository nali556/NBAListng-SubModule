import React, {Fragment} from 'react';
import "./App.css"
//Components
import InputPlayer from './components/InputPlayer';
import ListPlayer from './components/ListPlayer';
function App() {
  return (
    <Fragment>
    <div className="container">
      <InputPlayer></InputPlayer>
      <ListPlayer></ListPlayer>
    </div>
    </Fragment>
  );
}

export default App;
