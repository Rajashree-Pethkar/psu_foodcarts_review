import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

export default function Home() {
  return (<div className='h-100 d-flex flex-column justify-content-center text-center'>
      <Title/>
      <Subtitle/>
    </div>
  );
}

export function Title() {
  return (<div className='h1'>Welcome!</div>)
}

export function Subtitle() {
  return (<div className='h3'>PSU food carts review</div>)
}
