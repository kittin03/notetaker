import React from 'react';

const Main = ({children}) => (
  <div className="main-container">
    <nav className="navbar navbar-default" role="navigation">
      <div className="col-sm-7 col-sm-offset-2" style={{marginTop: 15}}>
      Menu
      </div>
    </nav>
    <div className="container">
    {/* renders active component - Home as only the child is activated and
      rendered everytime we go to the Main */}
      {children}
    </div>
  </div>
)

export default Main;
