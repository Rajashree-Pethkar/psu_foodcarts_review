import { useAuth0 } from "@auth0/auth0-react";
import {useEffect, useState} from "react";
import axios from "axios";

const FoodCarts = () => {
  const { isAuthenticated } = useAuth0();
  const [carts, foodcarts] = useState();
  const [foodcartreviews] = useState();

  return (<>
    <FoodCart foodcarts={carts}/>
    <GetAllFoodCarts foodcarts={foodcarts}/>
    <GetAllReviews foodcartreviews={foodcartreviews}/>
  </>)
};

function FoodCart({foodcarts}) {
	return (
		<div>
			<h2>Foodcarts:</h2>
			{    foodcarts && foodcarts.length > 0 ?
				    <ul>{foodcarts.map((fc) => <li key={fc.name}> {fc.name}</li>)}</ul>
				: null
			}
		</div> )
}

function GetAllFoodCarts({foodcarts}){
  //const [users, setUsers] = useState([]);
      useEffect(() => {
        const getCarts = async () => {
            const carts = await axios.get("http://localhost:8080/foodcarts");
            foodcarts(carts.data);
        };
        getCarts()
			.catch(console.error);
      }, []);
      return (
      <></>
      );
}

function GetAllReviews({foodcartreviews}){
  //const [users, setUsers] = useState([]);
      useEffect(() => {
        const getAllReviews = async () => {
            const reviews = await axios.get("http://localhost:5000");
            foodcartreviews(reviews.data);
        };
        getAllReviews()
			.catch(console.error);
      }, []);
      return (
      <></>
      );
}

export default FoodCarts;