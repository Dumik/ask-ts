import { AnswerCard } from './AnswerCard';
import { ProfileHero } from './ProfileHero';
import { QuestionSection } from './QuestionSection';

export const ProfileContainer = () => {
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
