import { useAuth0 } from "@auth0/auth0-react";
import {useEffect, useState} from "react";
import axios from "axios";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (<>
    <div>
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

function ProfileInfo({user, isAuthenticated}){
  return(
    <div>
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
  )
}

function SendUserInformation({user, isAuthenticated}){
  //const [users, setUsers] = useState([]);
      useEffect(() => {
        const postUsers = async () => {
          const users = await axios.post('http://localhost:8080/users', {
            name: user.name,
            password: user.sub,
            email: user.email,
            dob: new Date()
          })
          .then(function (response) {
            console.log(response);
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