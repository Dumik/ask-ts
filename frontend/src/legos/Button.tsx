type Props = {
  title: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset' | undefined;
  style?: string;
};

export const Button = ({ title, onClick, type, style }: Props) => {
  return (
    <button
      className={`  mt-4 py-3 px-8 bg-green-500 rounded-md text-white text-md shadow-gray-400/50 hover:opacity-90 active:opacity-60 ${style}`}
      style={{ background: 'linear-gradient(#8FC74A, #80BD37, #77B12D)' }}
      type={type}
      onClick={onClick}
    >
      {title}
    </button>
  );
};
