import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="mx-auto border border-dark rounded " style={{width:"400px"}}>
      <h2 className="text-center">Home page</h2>
      <ul className="list-unstyled d-flex flex-column align-items-center">
        <li><Link className="text-decoration-none" to={"/form"}>Form</Link></li>
        <li><Link className="text-decoration-none" to={"/userdata"}>User data</Link></li>
        <li><Link className="text-decoration-none" to={"/cart"}>Cart</Link></li>
        <li><Link className="text-decoration-none" to={"/practice"}>Practice</Link></li>
        <li><Link className="text-decoration-none" to={"/namecard"}>NameCard</Link></li> 
        <li><Link className="text-decoration-none" to={"/table"}>Table</Link></li> 
        <li><Link className="text-decoration-none" to={"/serverdata"}>ServerData</Link></li> 
        <li><Link className="text-decoration-none" to={"/serverdata2"} target="_blank">ServerData2</Link></li> 
        <li><Link className="text-decoration-none" to={"/app"} target="_blank">App</Link></li> 
        <li><Link className="text-decoration-none" to={"/Form_submit"} target="_blank">Form_submit</Link></li> 
      </ul>
    </section>
  );
}

export default Home;
