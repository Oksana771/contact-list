import React from "react";
import {Link} from "react-router-dom";
import "./header.css";

class  Header extends React.Component{
  state = {
    search: "",
  };

  onSearch = (event) => {
    const value = event.target.value;
    this.setState({
      search: value,
    });
    this.props.onSearch(value);
  };

  render() {
    const{
      addContact,
    }=this.props;
    return (
      <div className="container">
        <div className="row">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="/">
              Contact List
            </Link>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li class="nav-item active">
                  <Link className="nav-link" to="/">
                    Home <span className="sr-only">(current)</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/add" onClick={addContact}>
                    Add contact
                  </Link>
                </li>
              </ul>
              <form className="form-inline my-2 my-lg-0 float-right">
                <input
                  className="form-control mr-sm-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  onChange={this.onSearch}
                />
                <button
                  className="btn btn-outline-success my-2 my-sm-0"
                  type="submit"
                >
                  Search
                </button>
              </form>
            </div>
          </nav>
        </div>
      </div>
    );
  }
}

export default Header;