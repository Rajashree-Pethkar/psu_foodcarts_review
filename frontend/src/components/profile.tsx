import { useAuth0 } from "@auth0/auth0-react";
import {useEffect, useState} from "react";
import axios from "axios";
import { httpClient } from "../services/httpservice";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (<>
    <div className="m-5">
			<h2>User Info:</h2>
          { isAuthenticated && (
          <div>
            <img src={user.picture} alt={user.name} />
            <h2>{user.name}</h2>
            <p>{user.email}</p>
          </div>
        )
			}
		</div> 
    <SendUserInformation user={user} isAuthenticated={isAuthenticated}/>
  </>)
};

function SendUserInformation({user, isAuthenticated}){
      useEffect(() => {
        const postUsers = async () => {
          const users = await httpClient.post('/users', {
            name: user.name,
            password: user.sub,
            email: user.email,
            dob: new Date()
          })
          .then(function (response) {
            sessionStorage.setItem("user", response.data.user.id);
            console.log(response.data.user.id);
            //return response;
          })
          .catch(function (error) {
            console.log(error);
          });
        };
        void postUsers();
      }, []);
      return (
      <></>
      );
}

export default Profile;