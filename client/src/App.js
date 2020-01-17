import React from 'react';
import Home from './components/Home'
import Api from '../src/Shared/Api'
import axios from 'axios'
import './App.css';
import CreatePage from './components/CreatePage';
import Store from './components/Store'
import { Route, Switch } from 'react-router-dom'
import PageOne from './components/IntroPages/PageOne'
import PageTwo from './components/IntroPages/PageTwo';
import PageThree from './components/IntroPages/PageThree'
import PageFour from './components/IntroPages/PageFour'
import PageFive from './components/IntroPages/PageFive'
import PageSix from './components/IntroPages/PageSix'
import Footer from './components/Footer'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      stores: [],
    }
  }

  componentDidMount() {
    this.getStores()

  }

  async getStores() {
    const response = await axios('/stores')
    const data = response.data
    this.setState({
      stores: data
    })
    
    // console.log(data)
  }

 

  render() {
    // console.log("click", this.state.click)
    return (
      <div className="App">
        {/* <Api /> */}
        <Switch>
        
          <Route exact path="/store" component={Store} />
          <Route exact path="/" component={PageOne} />
          <Route exact path="/pagetwo" component={PageTwo} />
          <Route exact path="/pagethree" component={PageThree} />
          <Route exact path="/pagefour" component={PageFour} />
          <Route exact path="/pagefive" component={PageFive} />
          <Route exact path="/pagesix" component={PageSix} />
          <Route
            path="/home"
            render={(props) => <Home {...props} stores={this.state.stores} handleClick={this.handleClick} />}
          />
           <Route
            path='/home'
            render={(props) => <CreatePage {...props} click={this.state.click} iconType={this.state.iconType} />}
          />
          <Route
            path="/store"
            render={(props) => <Store {...props} store={this.state.stores} handleDelete={this.handleDeleteStore} /> }   
          />
        
        </Switch>
        <Footer />
      </div>
    )
  };
}

export default App;
