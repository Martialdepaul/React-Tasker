export default function Button({ children, ...props }) {
  return (
    <button
      className="px-4 py-2 text-sm md:text-base font-medium rounded-md bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all"
      {...props}
    >
      {children}
    </button>
  );
}
