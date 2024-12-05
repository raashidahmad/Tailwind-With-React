export const Button = ({ children, ...props}: any) => {
  return (
    <>
      <button
       className="px-4 py-4 ml-2 text-sm text-stone-500 font-semibold uppercase rounded bg-amber-300 hover:bg-amber-900 hover:text-stone-100" {...props}>
        {children}
      </button>
    </>
  );
}