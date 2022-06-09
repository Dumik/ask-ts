import logo from 'assets/logo.png';
import { useNavigate, useLocation } from 'react-router-dom';
import { HOME, SIGN_IN, SIGN_UP } from 'routes';

export const Header = () => {
  const history = useNavigate();
  const { pathname } = useLocation();
  const isSignIn = pathname === SIGN_IN;
  const goHome = () => {
    history(HOME);
  };

  const goSignIn = () => {
    if (isSignIn) {
      return history(SIGN_UP);
    }
    history(SIGN_IN);
  };

  return (
    <div
      className=" fixed w-full flex justify-center  h-16 "
      style={{ background: 'linear-gradient(#214261, #1B3955, #1A304A)' }}
    >
      <div className="flex w-820 justify-between">
        <div>
          <img onClick={goHome} className=" h-16 w-auto cursor-pointer" src={logo} alt="" />
        </div>
        <div className=" flex items-center">
          <div>
            <p className=" text-gray-400">{isSignIn ? 'Don`t you have an account?' : 'Do you have account?'}</p>
          </div>
          <button
            className=" py-1 px-2 ml-8 text-gray-200 bg-gray-400/20 rounded-lg hover:opacity-80 active:opacity-60"
            onClick={goSignIn}
          >
            {isSignIn ? 'Create account' : 'Login'}
          </button>
        </div>
      </div>
    </div>
  );
};
