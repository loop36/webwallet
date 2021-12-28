import {useState} from 'react';
const useConverter=()=>{
    const [nep, setNep] = useState();
    const [bnb, setBnb] = useState();
    
    const nepUpdateHandle = (e) => {
      var bnbVal;
      var nepVal = e.target.value;
      bnbVal = (nepVal * 3).toFixed(2);
      setNep(nepVal);
      setBnb(bnbVal);
    };
    const bnbUpdateHandle = (e) => {
      var nepVal;
      var bnbVal = e.target.value;
      nepVal = parseFloat(bnbVal / 3).toFixed(2);
      setNep(nepVal);
      setBnb(bnbVal);
    };
    
    return { nep,bnb ,bnbUpdateHandle,nepUpdateHandle}
}
export default useConverter;