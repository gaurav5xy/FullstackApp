import { useState } from "react";

const AddItem = () => {
    const [name, setName] = useState('');
    const [imgUrl, setImgUrl] = useState('');
    const [price, setPrice] = useState('');

    const [message, setMessage] = useState('');

    const addItem = async (e) => {
        e.preventDefault();

        if (name !== '' && imgUrl !== '' && price !== '') {
            try {
                const response = await fetch("http://localhost:5000/api/products/product/", {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        name: name,
                        image: imgUrl,
                        price: price,
                    }),
                });

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const jsonData = await response.json();
                setMessage(jsonData.message);
            } catch (error) {
                setMessage(`Error: ${error.message}`);
            }

            setName('');
            setImgUrl('');
            setPrice('');
        } else {
            setMessage('All fields are required.');
        }
    }

    return (
        <>
            <form className="flex flex-col gap-4 mt-5 ml-5 w-80 justify-center items-center" onSubmit={addItem}>
                <div>
                    Product Name: 
                    <input 
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="outline-none"
                    />
                </div>
                <div>
                    Image Url: 
                    <input 
                        type="text"
                        value={imgUrl}
                        onChange={(e) => setImgUrl(e.target.value)}
                        className="outline-none"
                    />
                </div>
                <div>
                    Price: 
                    <input 
                        type="text"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        className="outline-none"
                    />
                </div>
                <button className="px-2 border" type="submit">Add</button>
            </form>
            <span>{message}</span>
        </>
    );
}

export default AddItem;
