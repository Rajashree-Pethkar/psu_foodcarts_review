import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { httpClient } from "../services/httpservice";
import { microserviceClient } from "../services/microserviceclient";

const AllReviews = () => {
    const [foodcartreviews, setFoodcartreviews] = useState();
    let params = useParams();
    let foodcartid = params.id;
    return(
        <>
            <ShowReviews foodcartreviews={foodcartreviews}></ShowReviews>
            <GetAllReviews setFoodcartreviews={setFoodcartreviews} foodcartid={foodcartid}/>
            <AddReviews foodcartid={foodcartid}></AddReviews>
        </>
    )
};

function ShowReviews({foodcartreviews}){
    return(
        <div>
            { foodcartreviews && foodcartreviews.length > 0 ?
            <ul className="list-group list-group-flush">
              {foodcartreviews.map((reviews, index) => (
                <li key={reviews[0]} className="list-group-item">
                  <div className="p-2" key={reviews[0]}>
                    <div className="h4">
                      {reviews[1]}
                    </div>
                    <div className="h6">{reviews[2]}</div>
                  </div>
                </li>
              ))}
            </ul>
				: null
			}
        </div>
     )
}

function GetAllReviews({setFoodcartreviews, foodcartid}){
      useEffect(() => {
        const getAllReviews = async () => {
            const reviews = await axios.get("http://127.0.0.1:5000/reviews/" + foodcartid);
            console.log(reviews.data.results);
            setFoodcartreviews(reviews.data.results);
        };
        getAllReviews()
			.catch(console.error);
      }, []);
      return (
      <></>
      );
}

function AddReviews({foodcartid}){
    const [reviewText, setReviewText] = useState();
    let user = sessionStorage.getItem("user");
    let fc_id = foodcartid;
    //let reviewText = "";
    
    const handleOnchange = (event) => {
        setReviewText(event.target.value);
    }
    return(
        <div className="form-group p-3">
            <label htmlFor="exampleFormControlTextarea1">Review: </label>
            <textarea className="form-control w-50" id="exampleFormControlTextarea1" onChange={handleOnchange} rows={3}></textarea>
            <button type="button" className="btn btn-dark mt-1" onClick={() => SubmitReviews({user,fc_id, reviewText})}>Submit</button>
        </div>
    )
}

function SubmitReviews({user, fc_id, reviewText}){
    const postReviews = async () => {
        const review = await httpClient.post('/reviews', {
            text: reviewText,
            rating: 4,
            user: user,
            foodcart: fc_id
        })
        .then(function (response) {
            console.log(response.data);
            window.location.reload();
            //return response;
        })
        .catch(function (error) {
            console.log(error);
        });
    };
    void postReviews();
}

export default AllReviews;