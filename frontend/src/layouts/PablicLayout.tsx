import { Header, Footer } from 'components';

export const PablicLayout = ({ children }: any) => {
  return (
    <>
      <Header />
      <div className="flex justify-center h-550" style={{ background: '#027FAE' }}>
        <div className=" w-820">{children}</div>
      </div>
      <Footer />
    </>
  );
};
