import { Component } from "react";
import "./App.css";
import FoodData from './resources/FoodData';
import FoodDetails from "./component/FoodDetails";

 class App extends Component{
  constructor(){
    super();
    this.state = {
      arrayFood : FoodData,
    }
  }
  render(){
    let foodArray  = this.state.arrayFood;
    const takeinput = (id)=>{
      if (id.target.value == ""){
        return this.setState({arrayFood:FoodData})
      }
      let valueofinput = id.target.value.toLowerCase();
      let updatedarray = foodArray.filter((ele)=>{
        let Name = ele.name;
        return Name.includes(valueofinput);
      })
      this.setState({arrayFood:updatedarray})
    };
    return (
      <div>
        <div style={{display:"flex" , justifyContent:"center"}}>
          <h2>Search</h2>
          <input type="text" placeholder="Search Bar" onChange={takeinput}/>
        </div>
        {foodArray.map((ele,index)=>{
          let Name = ele.name;
          let calorie = ele.cal;
          let pic = ele.img;
          return(
            <div key={index}>
              <FoodDetails
              Name={Name}
              Calorie={calorie}
              Pic= {pic}
              Index= {index}
              />
            </div>
          );
        })}
      </div>
    )
  }
 }
 export default App;