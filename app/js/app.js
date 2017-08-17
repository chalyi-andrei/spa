import React, { Component } from 'react';
import { connect } from 'react-redux'

class App extends Component {
    render() {
        return (
          <div>
            <main className="row">
                <h1 className="text-center">Привет из App { this.props.user }!</h1>
            </main>
          </div>
        )
    }
}

function mapStateToProps (state) {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(App);