import React from "react";
import { Redirect } from "react-router-dom";
import uuid from "react-uuid";

import'./addContact.css';

class AddContact extends React.Component{
  state = {
    id:uuid(),
    name:"",
    address:"",
    gender:"",
    phone: "",
    email:"",
    image:"",
    isRedirect: false,
  };

  getAvatar = (event) => {
    this.setState({
      image: event.target.value,
    });
  };
  getGender = (event) => {
    this.setState({
      gender: event.target.value,
    });
  };
  getName = (event) => {
    this.setState({
      name: event.target.value,
    });
  };
  getTelNumber = (event) => {
    this.setState({
      phone: event.target.value,
    });
  };
  getAddress = (event) => {
    this.setState({
      address: event.target.value,
    });
  };

  getEmail = (event) => {
    this.setState({
      email: event.target.value,
    });
  };
  onSubmit = (event) => {
    event.preventDefault();
    const { id, name, address, phone, email, image, gender } = this.state;
    this.props.addItem(
      id,
      name,
      address,
      phone,
      email,
      image,
      gender
    );
    this.setState({
      isRedirect: true,
    });
  };
  render() {
   // console.log("currentContact =>", this.props.addContact);
    const { name, address, phone, email, image, gender } = this.state;
  //  const {addItem}=this.props;
   // console.log("Avatar => ", image);
    const URL = `https://api.randomuser.me/portraits/${gender}/${image}.jpg`;
    if (this.state.isRedirect) {
      return <Redirect to="/" />;
    }
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-10">
            <form onSubmit={this.onSubmit}>
              <input
                type="text"
                value={name}
                className="form-control"
                onChange={this.getName}
                placeholder="enter your name..."
                required
              />
              <input
                type="text"
                value={address}
                className="form-control"
                onChange={this.getAddress}
                placeholder="enter your adress..."
                required
              />
             <input
                type="text"
                value={phone}
                className="form-control"
                onChange={this.getTelNumber}
                placeholder="enter your number phone..."
                required
              />
              <input
                type="text"
                value={email}
                className="form-control"
                onChange={this.getEmail}
                placeholder="enter your email..."
                required
              />
              <label>
                <input
                  name="gender"
                  type="radio"
                  className="radio ml-2"
                  value={'men'}
                  required
                  onChange={this.getGender}
                  /> Men
                <input
                  name="gender"
                  type="radio"
                  className="radio ml-2"
                  value={'women'}
                  required
                  onChange={this.getGender}
                  /> Women
              </label>
              <input
                type="number"
                min="1"
                max="99"
                value={image}
                className="form-control"
                onChange={this.getAvatar}
                placeholder="change photo"
                required
              />
              <button className="btn btn-success" >
                Save chages
              </button>
            </form>
          </div>
          <div className="col-md-2">
            {image.length !== 0 ? (
              <img
                className="rounded-circle mx-auto d-block img-fluid edit_photo" alt=""
                src={URL}
              />
            ) : (
              <h3>No foto</h3>
            )}
          </div>
        </div>
      </div>
    );
  }
}
export default AddContact;

/* <*/