import React from 'react'
import { useActionData } from 'react-router-dom';
import HomeLayout from '../layouts/HomeLayout';

const Signup = () => {

const navigate = useNavigate();

    const [Signupdetails, setSignupDetails] = useState({
        email: '',
        fullname: '',
        password:'',
        avator: ''
    });
    return (
<HomeLayout>
  <div className="flex overflow-x-auto items-center justify-center h-[100vh]">
    <form noValidate className='flex flex-col justify-center gap-3 rounded-lg p-4 text-white'>
      <h1 className='text-2xl text-center'>Registration Page</h1>

    </form>
  </div>
</HomeLayout>

  );
}

export default Signup;