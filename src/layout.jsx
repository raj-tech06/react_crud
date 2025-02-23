import { Link, Outlet } from "react-router-dom";

const Layout=()=>{
    return(
        <>
 
<Link to="home">Home</Link> |
<Link to="insert">Insert</Link> |
<Link to="display">display</Link>|
<Link to="search">Search</Link>|
<Link to="update">update</Link>|
<Link to="contact">contact</Link>|




<hr />
<Outlet />
<hr />
www.company.com
        </>
    )
  }
  export default Layout;

