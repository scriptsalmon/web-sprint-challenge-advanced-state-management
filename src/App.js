import React, { Component } from "react";
import { connect } from 'react-redux';
import AddForm from './components/AddForm';
import SmurfList from './components/SmurfList';
import Header from './components/Header';
import { fetchSmurfs, fetchStart } from './actions/index';

import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

class App extends Component {

componentDidMount(){
  console.log("App mounts");
  // fetchSmurfs();
  fetchStart();
}

  render() {
    console.log(this.props);
    if(this.isLoading) {
      return <h2>loading...</h2>
    }

    if(this.error) {
      return <h2>error alert!</h2>
    }

    return (
      <div className="App">
        <Header />

        <main>
          <SmurfList/>
          <AddForm/>
        </main>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    smurfs: state.smurfs,
    isLoading: state.isLoading,
    error: state.error
  }
}

export default connect(mapStateToProps, { fetchSmurfs, fetchStart })(App);

//Task List:
//1. Connect the fetchSmurfs actions to the App component.
//2. Call the fetchSmurfs action when the component mounts.