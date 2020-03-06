import React from "react";
import "./order.css";

class Order extends React.Component {
  constructor(props) {
    super(props);
  }
  CalcTotalBill() {
    let total = 0;
    for (let order of this.props.orderList) {
      total += this.props.menuList[order].price;
    }
    return total;
  }
  render() {
    return (
      <div class="col">
        <h2 class="text-center">Order</h2>
        <ul class="list-group list-group-flush">
          {this.props.orderList.map((order,i) => {
            return (
              <li className="list-group-item row orderItem">
                <div class="row">
                  <div className="col text-left">
                    {this.props.menuList[order].name}
                  </div>
                  <div className="col text-center">
                    ${this.props.menuList[order].price}
                  </div>
                  <button
                    type="button"
                    className="deleteButton"
                    onClick={()=>{this.props.DeleteOrder(i)}}
                  >
                    <i class="fas fa-times"></i>
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
        <p className="text-center">Total : ${this.CalcTotalBill()}</p>
        <div class="text-center">
        <button
                    type="button"
                    className="btn btn-success"
                    onClick={()=>{alert("Order Up!")}}
                  >
                    Order
                  </button>
        </div>
      </div>
    );
  }
}

export default Order;
