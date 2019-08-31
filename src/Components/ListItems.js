// import React, { Component } from "react";
import React from "react";
function ListItems_in(val) {
  return val.data.menu.map((x, i) => {
    return (
      <ul key={i}>
        {x.name} ... ${x.price}{" "}
      </ul>
    );
  });
}

function ListItems(val) {
  // return ListItems_in(val)
  return (
    <div>
      <div id={val.data.name}>
        <h6>{val.data.name}</h6>
      </div>
      {ListItems_in(val)}

      {/* <pre style={{ color: 'white' }}>
        {JSON.stringify(val.data, null, 3)}   </pre>
		 */}
    </div>
  );
}

function PageItems(props) {
  console.log("ListItems->PageItems ", props.data.menu);
  return props.data.map((x, i) => {
    return (
      <div class={props.class}>
        <ListItems key={i} data={x} />
      </div>
    );
  });
}

export default PageItems;
