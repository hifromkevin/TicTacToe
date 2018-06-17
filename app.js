import React, {component} from 'react';
import ReactDOM from 'react-dom';

export default class App extends Component {
  render() {
    return (
      <h1>HI!</h1>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
