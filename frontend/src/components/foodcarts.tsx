import { useAuth0 } from "@auth0/auth0-react";
import {useEffect, useState} from "react";
import axios from "axios";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import AllReviews from "./reviews"
import React from "react";
import { httpClient } from "../services/httpservice";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form'


const FoodCarts = () => {
  const { isAuthenticated } = useAuth0();
  const [carts, foodcarts] = useState();

  return (<>
    <FoodCart foodcarts={carts}/>
    <GetAllFoodCarts foodcarts={foodcarts}/>
  </>)
};

function FoodCart({foodcarts}) {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
	return (
		<div className="w-75">
      <div className="mt-1">
			  <h2 className="mt-2 h1-margin d-inline-block">Foodcarts near PSU</h2>
        <Button variant="dark" style={{float: 'right'}} onClick={handleShow}>
            Add new
        </Button>
        <AddFoodCart show={show} setShow={setShow}></AddFoodCart>
      </div>
			{    foodcarts && foodcarts.length > 0 ?
            <ul className="list-group list-group-flush">
              {foodcarts.map((fc, index) => (
                <li key={fc.name} className="list-group-item">
                  <div className="p-2" key={fc.id}>
                    <div className="h4">
                      <ShowReviews name={fc.name} fc_id={fc.id}></ShowReviews>
                    </div>
                    <div className="h6">Rating: {fc.rating}</div>
                    <div className="h6">Hours: {fc.hours}</div>
                    <div className="h6">Category: {fc.category}</div>
                    <div className="h6">About: {fc.about}</div>
                  </div>
                </li>
              ))}
            </ul>
				: null
			}
		</div> )
}

function ShowReviews({name, fc_id}){
  return(
    <Link to={`/reviews/${fc_id}`}>{name}</Link>
  )
}

function GetAllFoodCarts({foodcarts}){
  //const [users, setUsers] = useState([]);
      useEffect(() => {
        const getCarts = async () => {
            const carts = await httpClient.get("/foodcarts");
            foodcarts(carts.data);
        };
        getCarts()
			.catch(console.error);
      }, []);
      return (
      <></>
      );
}

function AddFoodCart({show, setShow})
{
  let name = "";
  let category = "";
  let hours = "";
  let about = "";

  const getName = (e) => {
    name = e.target.value;
    //console.log(name);
  }
  const getCategory = (e) => {
    category = e.target.value;
    //console.log(category);
  }
  const getHours = (e) => {
    hours = e.target.value;
    //console.log(hours);
  }
  const getAbout = (e) => {
    about = e.target.value;
    //console.log(about);
  }
  const handleClose = () => {
    //console.log('Added food cart: ' + name + " " + category + " " + hours + " " + about);
    AddNewFoodCart({name, category, hours, about});
    setShow(false)
    window.location.reload();
  };
  return(
    <>
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add new foodcart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Name"
                onChange={getName}
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
              <Form.Label>Category</Form.Label>
              <Form.Control
                type="text"
                placeholder="Mexican, Italian, Indian"
                onChange={getCategory}
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
              <Form.Label>Hours</Form.Label>
              <Form.Control
                type="text"
                placeholder="11am - 5pm"
                onChange={getHours}
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
              <Form.Label>About FoodCart</Form.Label>
              <Form.Control as="textarea" onChange={getAbout} rows={3} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

function AddNewFoodCart({name, category, hours, about}){
    const postReviews = async () => {
        const review = await httpClient.post('/foodcarts', {
            name: name,
            category: category,
            hours: hours,
            about: about
        })
        .then(function (response) {
            console.log(response.data);
        })
        .catch(function (error) {
            console.log(error);
        });
    };
    void postReviews();
}

export default FoodCarts;