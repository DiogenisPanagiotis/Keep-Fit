import {Link} from 'react-router';
import Home from './Home.jsx';


export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }


  render() {
    return (
      <div>
        {<Home />}
        <div className="container">
          <div className="col-md-4">
            Hello World 1!
          </div>
        </div>
      </div>
    )
  }
}
