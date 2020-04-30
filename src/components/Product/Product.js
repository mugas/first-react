import React from "react";

function Product(props) {
  return (
    <div>
      <h2>{props.product.name}</h2>
      <p>{props.product.pin}</p>
      <p>{props.product.adress}</p>
    </div>
  );
}

export default Product;

/* import React from "react";

function Contacts(props) {
  return (
    <div className="contacts">
      <div className="contact-card">
        <img src={props.contact.imgUrl} />
        <h3>{props.contact.name}</h3>
        <p>Phone: {props.contact.phone}</p>
        <p>Email{props.contact.email}</p>
        <p>Name:{props.test.first}</p>
      </div>
    </div>
  );
}

export default Contacts; */
