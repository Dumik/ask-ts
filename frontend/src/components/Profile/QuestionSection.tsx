import { Button } from 'legos';

export const QuestionSection = () => {
  return (
    <div className=" px-4 w-full bg-white h-60">
      <h2 className=" pt-6 pb-5 text-left font-bold text-2xl">Ask me:</h2>
      <form>
        <textarea
          id="question"
          rows={3}
          className="block p-2.5 w-full resize-none text-sm text-gray-900 0  rounded-t-lg  border border-gray-300 focus:ring-gray-200 focus:border-gray-200"
          placeholder="Your question.."
        />
        <div className="flex h-14 px-4 justify-between items-center rounded-b-lg  border border-gray-300   bg-neutral-300">
          <p className=" text-gray-500 text-md font-bold">300</p>
          <div className="flex items-center">
            <input type="checkbox" />
            <label className="mr-3 ml-1">Ask anonymously</label>
            <Button title="Ask" bgColor={{ background: '#4e97d1' }} />
          </div>
        </div>
      </form>
    </div>
  );
};
