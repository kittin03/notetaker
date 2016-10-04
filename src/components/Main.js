import React from 'react';
import SearchGithub from './SearchGithub';

const Main = ({children, history}) => (
  <div className="main-container">
    <nav className="navbar navbar-default" role="navigation">
      <div className="col-sm-4 col-sm-offset-4" style={{marginTop: 15}}>
       <SearchGithub history={history} />
      </div>
    </nav>
    <div className="container">
    {/* renders active component - Home as only the child is activated and
      rendered everytime we go to the Main */}
      {children}
    </div>
  </div>
);

export default Main;
