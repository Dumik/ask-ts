import { Button } from 'legos';
import { useNavigate } from 'react-router-dom';
import { AUTH } from 'routes';

export const ContainerHomePage = () => {
  const history = useNavigate();
  const goToSignUp = () => {
    history(AUTH);
  };
  return (
    <div className=" h-500 flex items-start justify-center flex-col ">
      <p className=" text-white text-2xl font-bold ">Ask and Answer</p>
      <Button onClick={goToSignUp} title="Create account" />
    </div>
  );
};
