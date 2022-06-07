import logo from 'assets/logo.png';

export const Header = () => {
  return (
    <div className=" flex justify-center h-20 " style={{ background: 'linear-gradient(#214261, #1B3955, #1A304A)' }}>
      <div className="flex w-820 justify-between">
        <div>
          <img className="h-20 w-auto" src={logo} alt="" />
        </div>
        <div className=" flex items-center">
          <div>
            <p className=" text-gray-400">Do you have account?</p>
          </div>
          <button className=" py-1 px-2 ml-8 text-gray-200 bg-gray-400/20 rounded-lg">Sign In</button>
        </div>
      </div>
    </div>
  );
};
