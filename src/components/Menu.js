import React from "react";

class Menu extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div class="col">
        <div style={{ border: "0.1em solid black" }}>
          <h2 class="text-center">Menu</h2>
          <ul class="list-group list-group-flush">
            {this.props.menuList.map((item, i) => {
              return (
                <li class="list-group-item border-0">
                  <b>{item.name}</b>
                  <div class="row">
                    <div class="col  text-left">{item.info}</div>
                    <div class="col  text-right ">
                      <button
                        type="button"
                        class="btn btn-dark"
                        onClick={() => {
                          this.props.onClick(i);
                        }}
                      >
                        Order for ${item.price}
                      </button>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default Menu;
