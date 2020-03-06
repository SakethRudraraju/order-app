import React from "react";
import "./App.css";
import Menu from "./components/Menu";
import Order from "./components/Order";
import MenuData from "./menu.json"

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = { menuList : MenuData, orderList : []}

  }
  AddOrder(id){
    this.setState((state)=>({ orderList : state.orderList.concat(id)}))
  }
  DeleteOrder(i){
    var newList = this.state.orderList
    newList.shift(i)
    this.setState((state)=>({ orderList : newList}))
  }
  render() {
    return (
      <div className="container-sm">
        <h1 class="text-center">Hawk Peak Tavern</h1>
        <div class="row">
          <Menu menuList={this.state.menuList} onClick={(id)=>{this.AddOrder(id)}}/>
          <div class="clearfix"></div>
          <Order orderList={this.state.orderList}   menuList={this.state.menuList} DeleteOrder={(i)=>{this.DeleteOrder(i)}} />
        </div>
      </div>
    );
  }
}

export default App;
