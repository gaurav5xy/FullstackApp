import { useState, useEffect } from "react";

const useProducts = (id)=>{
    const [data, setData] = useState(null);
    
    useEffect( ()=>{
      getdata();
    },[])
    
    const getdata = async()=>{
      const data = await fetch('http://localhost:5000/api/products/product/?id='+id, {method:"GET"});
      const jsondata = await data.json();
      setData(jsondata);
    }

    return data
}

export default useProducts;