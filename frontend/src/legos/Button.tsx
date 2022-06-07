type Props = {
  title: string;
};

export const Button = ({ title }: Props) => {
  return (
    <button
      className=" mt-4 py-3 px-8 w-52 bg-green-500 rounded-md text-white text-md shadow-gray-400/50"
      style={{ background: 'linear-gradient(#8FC74A, #80BD37, #77B12D)' }}
    >
      {title}
    </button>
  );
};
