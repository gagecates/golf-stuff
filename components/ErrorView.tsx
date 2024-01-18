const ErrorView = ({ message }: { message: string }) => {
  return (
    <div className="w-full flex items-center justify-center text-black">
      {message ?? "There was an issue with the request. Please try again."}
    </div>
  );
};

export default ErrorView;
