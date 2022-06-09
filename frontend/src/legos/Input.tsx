type InputType = {
  validation: any;
  type?: string;
  placeholder: string;
  id: string;
  style?: string;
  error?: string | null;
};
export const Input = ({ validation, type, placeholder, id, error, style }: InputType) => {
  return (
    <>
      <input
        className={`py-2 mb-2 px-1  outline-none rounded-sm border-2  border-gray-300 ${style} ${
          error ? 'placeholder:text-red-500 ' : ''
        }`}
        placeholder={error || placeholder}
        id={id}
        type={type}
        {...validation}
      />
    </>
  );
};
