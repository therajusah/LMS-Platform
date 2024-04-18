import { FiMenu } from 'react-icons/fi';

import Footer from "../components/Footer"

const HomeLayout = ({ children }) => {

function changeWidth() {
    const drawerSize = document.getElementsByClassName("drawer-side");
drawerSize[0].style.width = 'auto';

}

  return (
    <div className="min-h-[90vh]">
<div className="drawer absolute left-0 z-50 w-full">
<input id="my-drawer" type="checkbox" className="drawer-toggle" />
<div className="drawer-content">
    <label htmlFor="my-drawer">
        <FiMenu onClick='{changeWidth}' size={"32px"} className='font-bold text-white m-4'/>
    </label>
</div>
<div className="drawer-side w-0">
<label htmlFor="my-drawer" className="drawer-overlay"></label>
<ul className="menu p-4 w-48 sm:w-80 bg-base-200 text-base-content relative"> 
<li>
    <Link to="/">Home</Link>
</li>
<li>
    <Link to="/allcourses">All Courses</Link>
</li>
<li>
    <Link to="/contact">Contact us</Link>
</li>
<li>
    <Link to="/about">About us</Link>
</li>

</ul>
</div>
</div>
</div>
  );
}

export default HomeLayout