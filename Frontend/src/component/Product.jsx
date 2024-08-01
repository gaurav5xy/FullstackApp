function Product({item}) {
    const {name, image, price} = item;
    return(
        <>
        <div className = "p-2 w-60 bg-slate-300 shadow-lg shadow-slate-800">
        <img src={image} alt="img" className=" h-40 w-40 object-contain"/>
        <h1 className=" font-medium text-lg text-gray-800">{name}</h1>
        <p className="font-medium text-base text-gray-800">Rs. {price}</p>
        </div>
        </>
    )
}
export default Product;