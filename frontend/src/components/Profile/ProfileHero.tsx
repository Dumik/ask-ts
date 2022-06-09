import { Button } from 'legos';
import gift from 'assets/gift.png';
export const ProfileHero = ({ user }: any) => {
  return (
    <div className="flex  h-64 bg-slate-200 pt-2  items-start  ">
      <div className="space-x-4 w-64">
        <img className="w-40 h-auto mx-6 rounded" src={user?.avatar} alt="Default avatar" />
      </div>
      <div className="  space-x-4  w-full flex justify-between">
        <div className="ml-1 w-1/2 space-y-2">
          <div className="flex items-center">
            <p className=" mr-2 text-2xl font-bold">{user?.fullName}</p>
            <p className=" text-xl  text-slate-400 ">{`@${user?.username}`}</p>
          </div>
          <div className=" text-left">
            <p className=" text-xs text-justify w-9/12">{user?.description}</p>
          </div>
          <div className=" text-left">
            <p className="text-slate-400">
              Follow me:{' '}
              {user?.links?.map((item: string) => (
                <a className=" text-blue-400" href="jw.org">
                  {item}
                </a>
              ))}
            </p>
          </div>
        </div>

        <div className="">
          <div className="flex space-x-2">
            <div>
              <p className="text-xl font-bold">{user?.answer?.length || 0}</p>
              <p className=" text-blue-400">answer</p>
            </div>
            <div className=" px-2 border-x-2 border-slate-300">
              <p className="text-xl font-bold">{user?.likes}</p>
              <p className=" text-blue-400">likes</p>
            </div>
            <div>
              <p className="text-xl font-bold">0</p>
              <p className=" text-blue-400">{user?.gifts}</p>
            </div>
          </div>
          {/* eslint-disable-next-line */}
          <Button title="+ Follow" style=" w-48 mt-10 mr-4" />
          <div className="mt-6 flex items-center justify-end mr-5">
            <img className=" h-4 w-auto cursor-pointer" src={gift} alt="" />
            <p className=" ml-2 text-blue-400"> Make a gift</p>
          </div>
        </div>
      </div>
    </div>
  );
};
