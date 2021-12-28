import { useState } from "react";
import Input from "../../UI/Input";
import ConnectWallet from "../../Wallet/ConnectWallet";
import Card from "../../UI/Card";
import useConverter from "../../../hooks/use-converter";
import DropDown from "../../UI/DropDown";

const Converter = () => {
  const {nep,bnb ,bnbUpdateHandle,nepUpdateHandle} = useConverter();
  const [isOpen, setIsOpen] = useState(false);
  const closeHandle =()=>{
    setIsOpen(false)
  }
  let val =["hello","how are you"]
  return (
    // <div className="py-10 bg-primaryColor w-1/2 h-2/3 flex text-center flex-col">
    <>
      <Card>
        
      <div className=" w-60 md:w-96 mx-4 h-80 text-center">
        <h2 className=" font-semibold text-2xl ">Crypto Converter</h2>
        <div className="mt-8">
        <DropDown values={val} classes=" text-left"/>
        <Input
          type="text"
          title="NEP"
          id="NEP"
          pHolder="0.00"
          val={nep}
          onChangeHandle={nepUpdateHandle}
        />
         <DropDown values={val} classes=" text-left"/>
        <Input
          type="text"
          title="BNB"
          id="BNB"
          pHolder="0.00"
          val={bnb}
          onChangeHandle={bnbUpdateHandle}
        />
</div>
        <p style={{ color: "blue", cursor: "pointer" }} onClick={( ) => {setIsOpen(true)}}>
          {" "}
          Check Wallet Detail
        </p>

        {/* <></ConnectWallet> */}
        
    </div>
      </Card>
      {isOpen ? 
      <ConnectWallet close={closeHandle}/> : ""}
    </>
  );
};

export default Converter;
