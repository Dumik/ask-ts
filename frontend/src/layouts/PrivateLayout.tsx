import { HeaderPrivate, Footer } from 'components';
import { ReactNode } from 'react';
export const PrivateLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <HeaderPrivate />
      <div className="flex   justify-center bg-mainBg min-h-screen max-h-full pb-4">
        <div className="mt-16 w-820">{children}</div>
      </div>
      <Footer />
    </>
  );
};
