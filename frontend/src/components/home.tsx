import { useAuth0 } from "@auth0/auth0-react";

export default function Home() {
  const { isAuthenticated, user } = useAuth0();
  console.log(isAuthenticated);
  console.log(user);
  return (<div>
      <Title/>
      <Subtitle/>
    </div>
  );
}

export function Title() {
  return (<h1>PSU food carts</h1>)
}

export function Subtitle() {
  return (<h3>PSU food carts review</h3>)
}
