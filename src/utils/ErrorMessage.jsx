const ErrorMessage = ({ message }) => {
  return (
    <div className="flex justify-center pt-8">
      <p className="text-sm font-medium text-red-400 ">{message}</p>
    </div>
  );
};

export default ErrorMessage;
