const Container = ({
  children,
  title,
}: {
  children: JSX.Element | JSX.Element[];
  title?: string;
}) => {
  return (
    <div className="bg-purple-400 p-4 border shadow rounded-md">
      {title && <h2 className="text-x1 pb-2 text-white">{title}</h2>}
      <div>{children}</div>
    </div>
  );
};

export default Container;