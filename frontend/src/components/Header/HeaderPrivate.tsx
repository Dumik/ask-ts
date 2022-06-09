import logo from 'assets/logo.png';
import { AuthContext } from 'context';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { HOME } from 'routes';

export const HeaderPrivate = () => {
  const history = useNavigate();
  const { logout } = useContext(AuthContext);
  const goHome = () => {
    history(HOME);
  };

  const handlerLogout = () => {
    logout();
    goHome();
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
          <button
            className=" py-1 px-2 ml-8 text-gray-200 bg-gray-400/20 rounded-lg hover:opacity-80 active:opacity-60"
            onClick={handlerLogout}
          >
            logout
          </button>
        </div>
      </div>
    </div>
  );
};
