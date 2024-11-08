const ErrorComponent = ({ message, status }) => {
  return (
    <div>
      <h1>{status} error</h1>
      <p className="loading">{message}</p>
    </div>
  );
};

export default ErrorComponent;
