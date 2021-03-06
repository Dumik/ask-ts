import { useContext, useEffect } from 'react';

import { AnswerCard } from './AnswerCard';
import { ProfileHero } from './ProfileHero';
import { QuestionSection } from './QuestionSection';
import { AuthContext } from 'context';
import { useHttp } from 'hooks';

export const ProfileContainer = () => {
  const { token, userId } = useContext(AuthContext);

  const { request } = useHttp();
  const handlerLogin = async (userId: string) => {
    try {
      const data = await request(`/api/user/${userId}`, 'GET', null, {
        authorization: `Bearer ${token}`,
      });
      console.log('%c jordan USER', 'color: lime; font-weight: bold; font-size: 16px; text-transform: uppercase', data);
    } catch (e) {
      console.log('%c jordan ERROR', 'color: red; font-weight: bold; font-size: 16px; text-transform: uppercase', e);
    }
  };

  useEffect(() => {
    handlerLogin(userId);
  }, [userId]);

  return (
    <div className=" bg-white">
      <ProfileHero />
      <QuestionSection />
      <div className="px-4">
        <h2 className="pb-5 text-left font-bold text-2xl">Answers</h2>
        <AnswerCard />
        <AnswerCard />
      </div>
    </div>
  );
};
