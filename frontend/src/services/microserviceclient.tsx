import axios from "axios";

// @ts-ignore
const microserviceIP = import.meta.env.VITE_MICROSERVICE_IP;
// @ts-ignore
const microservicePort = import.meta.env.VITE_MICROSERVICE_PORT;

const microserviceUrl = `http://${microserviceIP}:${microservicePort}`;

console.log(microserviceUrl);

// This is why I use Axios over Fetch
// Now instead of axios.get("http://localhost:8080/users")
// we have microserviceClient.get("/users")
export const microserviceClient = axios.create({
	baseURL: microserviceUrl,
	headers: {
		"Content-type": "application/json"
	}
});