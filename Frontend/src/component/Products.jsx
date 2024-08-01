import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Product from "./Product";


const Products = () => {
    const [data, setData] = useState(null);
    const getdata = async()=>{
      const data = await fetch('http://localhost:5000/api/products/');
      const jsondata = await data.json();
      setData(jsondata);
    }
  
    useEffect( ()=>{
      getdata();
    },[])

    
  return (
    <> 
    <div className="bg-slate-400 flex flex-wrap items-center justify-center gap-6 py-5">
      {data?.map((item, index) => {
        return (
          <Link to={"/productDetail/"+item._id} key={index}>
            <Product item={item} />
          </Link>
        );
      })
      }
    </div>
    </>

  );
};

export default Products;
