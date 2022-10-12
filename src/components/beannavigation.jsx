import React, { Component, useState } from "react";
import { Link } from "react-router-dom";
import './beannavigation.css';
import Modal from 'react-bootstrap/Modal';




const Beannavigation =()=>  {
  
  const [show, setShow] = useState(false);

  function handleShow() {
    
    setShow(true);
  }
  
   {
    return (
      <div className="beannav1">
        <ul className="menuitem">
          <Link
            style={{ borderBottom: "none" }}
            to="/">
            <img
              className="beanzlogo"
              src="https://www.beanz.com/content/experience-fragments/beanz/us/en/site/header/master/_jcr_content/root/image.coreimg.svg/1649175807319/beanz-white.svg"
            />
          </Link>
          <Link to="/Shopcoffee">
            <p> Shop Coffee </p>
          </Link>
          <Link to="/Roasters">
            <p> Our Roasters </p>
          </Link>
          <Link to="/Barista">
            <p> Barista's Choice </p>
          </Link>
          <Link to="/Coffeelowdown">
            <p> Coffee Lowdown </p>
          </Link>
          <Link to="/Ourstory">
            <p> Our Story </p>
          </Link>
          <a
            style={{ float: "right", borderBottom: "none" }}
            className="search-container"
          >
            <form action="">
              <input
              onClick={handleShow}
                className="searchButton"
        
                type="text"
                placeholder="       Search"
                name="search"
              />

            </form>
          </a>
          <div className="flagtry">
            
          </div>
        </ul>
        <Modal show={show} fullscreen={true} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Modal</Modal.Title>
        </Modal.Header>
        <Modal.Body>Modal body content</Modal.Body>
      </Modal>
      </div>
    );
  }
}

export default Beannavigation;



