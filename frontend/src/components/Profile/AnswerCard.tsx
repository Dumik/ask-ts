export const AnswerCard = () => {
  return (
    <div className=" pb-4 border-t-2 border-gray-200">
      <h2 className=" pt-6 pb-5 text-left font-bold text-2xl">
        Вам нравится читать книги, где действие происходит не в современном мире? Если да, то какая именно эпоха вам
        нравится больше, а какая менее интересна?
      </h2>
      <p className=" text-sm text-left w-3/4">
        Однозначно, да. Сейчас проанализировал прочитанную мной литературу и обнаружил, что почти все её произведения
        принадлежат прошлому. Какая эпоха? Ну, наверное, наибольше нравится период конца ХІХ – начала и І половины ХХ
        века. Именно в это время разворачиваются события в романах Ремарка, Брэдбери и Кристи. А наименьше, конечно же,
        наша эпоха – эпоха тотальной деградации. Её мне и в жизни хватает...
      </p>
      <div className="flex justify-between items-center mt-4">
        <p className=" text-gray-400 text-xs">8/06/22</p>
        <div className="flex items-center">
          <p className="  ml-1 text-blue-400 text-sm">0 people</p>
          <p className="  ml-1 text-gray-400 text-sm">like this</p>
        </div>
      </div>
    </div>
  );
};
