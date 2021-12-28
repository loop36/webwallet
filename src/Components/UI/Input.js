const Input = (props) => {
  return (
    <div className="h-30 my-3 flex flex-col justify-center self-center ">
    
      <input
        className="shadow appearance-none border-purple-300 border-2  rounded w-full py-2 px-3 text-primaryColor leading-tight focus:outline-none focus:shadow-outline"
        id={props.id}
        type={props.type}
        placeholder={props.pHolder}
        value={props.val}
        onChange={props.onChangeHandle}
      />
    </div>
  );
};
export default Input;
