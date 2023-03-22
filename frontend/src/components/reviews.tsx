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
        <div className="w-75">
            { foodcartreviews && foodcartreviews.length > 0 ?
            <ul className="list-group list-group-flush" style={{borderBottomWidth: '1px', borderBottomColor: 'lightGray', borderBottomStyle: 'solid'}}>
              {foodcartreviews.map((reviews, index) => (
                <li key={reviews[0]} className="list-group-item">
                  <div className="p-2" key={reviews[0]}>
                    <div className="h6">Rating: {reviews[2]}</div>
                    <div className="h4">
                      Review: {reviews[1]}
                    </div>
                    <div style={{float: 'right', fontSize: 'calc(0.5rem + .3vw)'}}>
                        {reviews[4]}
                    </div>
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
            const reviews = await microserviceClient.get("reviews/" + foodcartid);
            console.log(reviews.data);
            setFoodcartreviews(reviews.data.reviews);
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
    const [rating, setRating] = useState();
    let user = sessionStorage.getItem("user");
    let fc_id = foodcartid;
    
    const handleOnchange = (event) => {
        setReviewText(event.target.value);
    }
    const handleRating = (event) => {
        setRating(event.target.value);
    }
    return(
        <div className="p-3 mt-2">
            <div className="form-group">
                <label htmlFor="rating">Rating: </label>
                <input type={'text'} placeholder={'1/2/3/4/5'} onChange={handleRating}></input>
            </div>
            <div className="form-group">
                <label htmlFor="reviewText">Review: </label>
                <textarea className="form-control w-50" id="reviewText" onChange={handleOnchange} rows={3}></textarea>
            </div>
            <button type="button" className="btn btn-dark mt-1" onClick={() => SubmitReviews({user,fc_id, reviewText, rating})}>Submit</button>
        </div>
    )
}

function SubmitReviews({user, fc_id, reviewText, rating}){
    const postReviews = async () => {
        const review = await httpClient.post('/reviews', {
            text: reviewText,
            rating: rating,
            user: user,
            foodcart: fc_id
        })
        .then(function (response) {
            console.log(response.data);
            window.location.reload();
        })
        .catch(function (error) {
            console.log(error);
        });
    };
    void postReviews();
}

export default AllReviews;