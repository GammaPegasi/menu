// import React, { Component } from "react";
import React from "react";

function ListItems_in(val) {
  return val.data.map(function(item, i) {
    return (
      <li key={i}>
        {" "}
        {item.name} ... $ {item.price}{" "}
      </li>
    );
  });
}

function ListItems(val) {
  // return ListItems_in(val)
  return (
    <div>
      <h5>{val.title}</h5> {ListItems_in(val)}{" "}
    </div>
  );
}

export default ListItems;
