import { Header } from 'components';
import { Button } from 'legos';
export const ContainerHomePage = () => {
  return (
    <>
      <Header />
      <div className="flex justify-center" style={{ height: 500, background: '#027FAE' }}>
        <div className=" w-820 flex flex-col items-start justify-center">
          <p className=" text-white text-2xl font-bold ">Ask and Answer</p>
          <Button title="Create account" />
        </div>
      </div>
    </>
  );
};
