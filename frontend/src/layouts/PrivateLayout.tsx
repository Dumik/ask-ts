import { Header, Footer } from 'components';

export const PrivateLayout = ({ children }: any) => {
  return (
    <>
      <Header />
      <div className="flex   justify-center bg-mainBg min-h-screen max-h-full pb-4">
        <div className="mt-16 w-820">{children}</div>
      </div>
      <Footer />
    </>
  );
};
