import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import ContactList from 'components/ContactList/ContactList';
import Contact from 'components/contact/contact';

class App extends Component {
    render() {
        return (
          <div>
            <main className="row">
                <h1 className="text-center">Hello world</h1>
            </main>
            <div>
              
          </div>
          </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
