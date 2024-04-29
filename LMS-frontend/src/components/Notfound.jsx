import { useNavigate } from "react-router-dom";

function Notfound() {
  const navigate = useNavigate();

  return( 
  <div className="flex flex-col items-center justify-center w-full h-screen bg-[#1A2238]">
<h1 className="font-extrabold text-white text-9xl ">404</h1>
<div className="absolute px-2 text-sm text-white bg-black rounded rotate-12">
    Page not found...
</div>
<button className="mt-5">
    <a onClick={() => navigate(-1)} className="relative inline-block text-sm font-medium text-[#FF6A3D] active:text-yellow-500 focus:outline-none">
        <span  className="relative block px-8 py-3 bg-[#1A2238] border border-current">Go back</span>
        </a>
    </button>
</div>

  );
}
export default Notfound;
