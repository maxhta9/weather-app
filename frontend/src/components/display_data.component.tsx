interface props {
  title: string;
  content: string;
  classname: string;
}
export const DisplayDataComponent = ({ title, content, classname }: props) => {
  return (
    <div className="flex flex-col w-3/12">
      <div className={`${classname} p-4 rounded-xl shadow-lg`}>
        <p className="text-sm">{title}</p>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default DisplayDataComponent;
