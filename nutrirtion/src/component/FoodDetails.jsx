import { Component } from 'react';

class FoodDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      oneachCount: 0,
      stateofCalorie: 0,
    };
  }
  restbtn=()=>{
    let reset = {
      oneachCount: 0,
      stateofCalorie: 0,
    }
    this.setState(reset)
  }

  whenClicking = () => {
    this.setState((prevstate)=>({
        oneachCount: prevstate.oneachCount + 1,
      stateofCalorie: (prevstate.oneachCount + 1) * this.props.Calorie,
    }))
  };
  render() {
    let Name = this.props.Name;
    let Image = this.props.Pic;
    let Index = this.props.Index;
    let Calorie = this.props.Calorie;

    return (
      <div className="box" key={Index}>
        <article className="media">
          <div>
            <figure>
              <img src={Image} alt={Index} />
            </figure>
          </div>
          <div className="media-content">
            <div className="content">
              <p>
                <strong>{Name}</strong> <br />
                <small>{Calorie} cal</small>
              </p>
            </div>
          </div>
          <div>
            <div style={{display:"flex" , gap:"5px"}}>
              <div className="control">
                <input
                  className="input"
                  type="number"
                  value={this.state.oneachCount}
                />
              </div>
              <div>
                <button onClick={this.whenClicking}>
                  +
                </button>
              </div>
            </div>
          </div>
        </article>
        <div className="count_calorie">
          <div>
            {this.state.oneachCount} {Name} ={' '}
          </div>
          <div> {this.state.stateofCalorie} Calorie</div>
          <div>
            <button onClick={this.restbtn}>Reset</button>
          </div>
        </div>
      </div>
    );
  }
}

export default FoodDetails;
