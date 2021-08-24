import { HashRouter, Route } from "react-router-dom";
import React from 'react';
import Driving from './Driving';
import Welcome from './Welcome';
import Home from './Home';
import Specification from './Specification';


/* yarn add recharts 이거 나중에 제거해야됨 */
const App = () => {
  return (
    <HashRouter>
      <Route exact path="/" render={() => <Welcome name="지범" />} />
      <Route exact path="/specification" component={Specification} />
      <Route exact path="/Driving" component={Driving} />
    </HashRouter>

  );
}

export default App;