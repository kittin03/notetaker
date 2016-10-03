import React from 'react';
import SearchGithub from './SearchGithub';

const Main = ({children, history}) => (
  <div className="main-container">
    <nav className="navbar navbar-default" role="navigation">
      <div className="col-sm-7 col-sm-offset-2" style={{marginTop: 15}}>
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
