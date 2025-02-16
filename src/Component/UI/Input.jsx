export const Input = ({ className, ...props }) => {
    return (
      <input
        className={`border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 ${className}`}
        {...props}
      />
    );
  };