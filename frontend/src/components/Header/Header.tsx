import logo from 'assets/logo.png';
import { useNavigate } from 'react-router-dom';
import { HOME } from 'routes';

export const Header = () => {
  const history = useNavigate();
  const goToHome = () => {
    history(HOME);
  };

  return (
    <div className=" flex justify-center  h-16 " style={{ background: 'linear-gradient(#214261, #1B3955, #1A304A)' }}>
      <div className="flex w-820 justify-between">
        <div>
          <img onClick={goToHome} className=" h-16 w-auto cursor-pointer" src={logo} alt="" />
        </div>
        <div className=" flex items-center">
          <div>
            <p className=" text-gray-400">Do you have account?</p>
          </div>
          <button className=" py-1 px-2 ml-8 text-gray-200 bg-gray-400/20 rounded-lg hover:opacity-80 active:opacity-60">
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
};
