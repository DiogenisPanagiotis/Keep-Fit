import { Link, browserHistory }from 'react-router';

export default class Running extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 0,
      distance: 0,
      workoutName: ''
    };

    this.handleTimeChange = this.handleTimeChange.bind(this);
    this.handleDistanceChange = this.handleDistanceChange.bind(this);
    this.completeWorkout = this.completeWorkout.bind(this);
    this.handleWorkoutChange = this.handleWorkoutChange.bind(this);
  }

  handleWorkoutChange(e) {
    this.setState({workoutName: e.target.value});
  }

  handleTimeChange(e) {
    this.setState({time: e.target.value});
  }

  handleDistanceChange(e) {
    this.setState({distance: e.target.value});
  }

  // Submits packaged workout obj to db as x-www-form data.
  completeWorkout(e) {
    e.preventDefault();
    var newWorkout = {};
    newWorkout.type = 'running';
    newWorkout.timeStamp = new Date();
    newWorkout.workoutName = this.state.workoutName;
    newWorkout.run = {time: this.state.time, distance: this.state.distance, /*add geographical data for google maps api*/}
    $.post('/api/users/${userId}/workouts', newWorkout, (err, resp)=>{
      if (err) {console.log('Huzahhh!', err)};
    });
    browserHistory.push('/user');
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-sm-offset-3 signup-form text-center">
            <h1>Add Workout!</h1>
            <div className="col-sm-8 col-sm-offset-2">
              <form>
                <label className="text-left">Workout Name:
                  <input
                    type='text'
                    placeholder='Workout Name'
                    className="fat-width"
                    onChange={this.handleWorkoutChange}
                    />
                </label>
                <table>
                  <thead>
                    <tr>
                      <td>Time</td>
                      <td>Distance</td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><input type="number" className="thin-width" value={this.state.time} onChange={this.handleTimeChange}/></td>
                      <td><input type="number" className="thin-width" value={this.state.distance} onChange={this.handleDistanceChange}/></td>
                    </tr>
                  </tbody>
                </table>
                <button
                  type='submit'
                  value='Add Workout'
                  className="btn btn-default margin-top-10"
                  onClick={this.completeWorkout}
                  >Complete Workout</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  };

  //Map to be embedded under form table
}