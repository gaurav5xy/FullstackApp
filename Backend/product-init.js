const mongoose = require("mongoose");
const Product = require('./model/product.js');

const charis = [
    {
        name: 'Comfort Lounge Chair',
        image: 'https://res.cloudinary.com/dd6i3evty/image/upload/v1720519587/first_img/ojyvj0whajrtm5tbqtcj.png',
        price: 2999
    },
    {
        name: 'Executive Office Chair',
        image: 'https://res.cloudinary.com/dd6i3evty/image/upload/v1720519471/first_img/fvde5x4pk9dxkh2sc8ey.png',
        price: 3499
    },
    {
        name: 'Modern Dining Chair',
        image: 'https://res.cloudinary.com/dd6i3evty/image/upload/v1720519587/first_img/dga0gyymvmvatmooxerx.png',
        price: 2799
    },
    {
        name: 'Ergonomic Desk Chair',
        image: 'https://res.cloudinary.com/dd6i3evty/image/upload/v1720519587/first_img/yvjlkgp2c1u7vyexyvif.png',
        price: 3299
    },
    {
        name: 'Outdoor Patio Chair',
        image: 'https://res.cloudinary.com/dd6i3evty/image/upload/v1720519587/first_img/klutcsle5bhzvg3wj9ue.png',
        price: 1999
    },
    {
        name: 'Swivel Bar Stool',
        image: 'https://res.cloudinary.com/dd6i3evty/image/upload/v1720519587/first_img/o7mkevcelxgcdodkxbpd.png',
        price: 1599
    },
    {
        name: 'Classic Rocking Chair',
        image: 'https://res.cloudinary.com/dd6i3evty/image/upload/v1720519587/first_img/gekv2u5bqgt84jg4dkgn.png',
        price: 2599
    },
    {
        name: 'Kids Study Chair',
        image: 'https://res.cloudinary.com/dd6i3evty/image/upload/v1720519587/first_img/ewhzptuptzkmzqfkxez2.png',
        price: 1499
    },
    {
        name: 'Recliner Sofa Chair',
        image: 'https://res.cloudinary.com/dd6i3evty/image/upload/v1720519587/first_img/xwvkn62gzfrfzb1f3qos.png',
        price: 3999
    },
    {
        name: 'Vintage Wooden Chair',
        image: 'https://res.cloudinary.com/dd6i3evty/image/upload/v1720519587/first_img/ae3ndix5luhiecd55lsr.png',
        price: 2499
    },
    {
        name: 'Gaming Chair',
        image: 'https://res.cloudinary.com/dd6i3evty/image/upload/v1720519587/first_img/q3f00m08p3f60mmfv3s4.png',
        price: 3499
    },
    {
        name: 'Mesh Office Chair',
        image: 'https://res.cloudinary.com/dd6i3evty/image/upload/v1720519587/first_img/htyt9hpyzwdokhbi9a1e.png',
        price: 2699
    },
    {
        name: 'Minimalist Accent Chair',
        image: 'https://res.cloudinary.com/dd6i3evty/image/upload/v1720519587/first_img/fryrftnowuak3fbrk8qo.png',
        price: 1899
    },
    {
        name: 'Luxury Leather Chair',
        image: 'https://res.cloudinary.com/dd6i3evty/image/upload/v1720519587/first_img/resyk3zpgtbfehz0s9om.png',
        price: 4999
    },
    {
        name: 'Foldable Camping Chair',
        image: 'https://res.cloudinary.com/dd6i3evty/image/upload/v1720519587/first_img/btxozs028xx8osbrv60l.png',
        price: 999
    },
    {
        name: 'Upholstered Accent Chair',
        image: 'https://res.cloudinary.com/dd6i3evty/image/upload/v1720519587/first_img/bp0vnjz6pjetp059ymay.png',
        price: 3199
    },
    {
        name: 'Plastic Stacking Chair',
        image: 'https://res.cloudinary.com/dd6i3evty/image/upload/v1720519587/first_img/dhiynoyv8ouux8rhclib.png',
        price: 1199
    },
    {
        name: 'Adjustable Stool Chair',
        image: 'https://res.cloudinary.com/dd6i3evty/image/upload/v1720519587/first_img/wkvzgd4tg3wvpyxzq8ec.png',
        price: 2099
    },
    {
        name: 'High Back Executive Chair',
        image: 'https://res.cloudinary.com/dd6i3evty/image/upload/v1720519587/first_img/yzccnjcclmzttaojjlvc.png',
        price: 3799
    },
    {
        name: 'Swivel Task Chair',
        image: 'https://res.cloudinary.com/dd6i3evty/image/upload/v1720519587/first_img/o7mkevcelxgcdodkxbpd.png',
        price: 2399
    }
]

Product.insertMany(charis)

main()
.then((res)=>{
    console.log("connected to db");
})
.catch((err)=>{
    console.log(err);
})


async function main (){
    mongoose.connect('mongodb+srv://gaurav_pg:gauravkumar@cluster0.b7b7nvq.mongodb.net/products')
}