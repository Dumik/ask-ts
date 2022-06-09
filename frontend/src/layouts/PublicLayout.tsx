import { Header, Footer } from 'components';
import { ReactNode } from 'react';

export const PublicLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header />
      <div className="flex justify-center h-550" style={{ background: '#027FAE' }}>
        <div className=" mt-16  w-820">{children}</div>
      </div>
      <Footer />
    </>
  );
};
