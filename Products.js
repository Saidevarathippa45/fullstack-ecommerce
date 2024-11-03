import { useEffect, useState } from "react";
import "../Styles/Products.css"
import { json, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function Products(){

    const navigate=useNavigate();
    const [products,setProducts]=useState([
        {
            imgSrc:"https://m.media-amazon.com/images/I/61YdEa73GbL._AC_UL320_.jpg",
            name:"Amazon Essentials Men's Cargo Fleece Sweatpant",
            price:1700,
            category:"Wrangler",
            id:"1",
            inCart:false,
            specification:[
                "RELAXED FIT: Our most generous pants fit, relaxed through the hip, thigh, and leg. Sits at the waist.",
                "BRUSHED FLEECE: Cut from soft, brushed-back, cotton-polyester blend fleece in a midweight for staying cozy and keeping warm.",
                "EVERYDAY CASUAL: Enjoy all day comfort with these cozy and warm brushed back fleece sweatpants.",
                "DETAILS: Features elasticated waistband with drawcord, two cargo pockets with hook and loop closures, and an open bottom leg.",
                "INSEAM: 31 with 8 1/2 leg opening on US size M.",
            ]
        },
        {
            imgSrc:"https://m.media-amazon.com/images/I/61HP4BFFzFL._AC_UL320_.jpg",
            name:"Wrangler Authentics Men's Relaxed Fit Stretch Cargo Pant",
            price:2050,
            category:"Wrangler",
            inCart:false,
            id:"2",
            specification:[
                "RELAXED FIT: Our most generous pants fit, relaxed through the hip, thigh, and leg. Sits at the waist.",
                "BRUSHED FLEECE: Cut from soft, brushed-back, cotton-polyester blend fleece in a midweight for staying cozy and keeping warm.",
                "EVERYDAY CASUAL: Enjoy all day comfort with these cozy and warm brushed back fleece sweatpants.",
                "DETAILS: Features elasticated waistband with drawcord, two cargo pockets with hook and loop closures, and an open bottom leg.",
                "INSEAM: 31 with 8 1/2 leg opening on US size M.",
            ]
        },
        {
            imgSrc:"https://m.media-amazon.com/images/I/51lrvBS8lRL._AC_UL320_.jpg",
            name:"Match Men's Wild Cargo Pants",
            price:3200,
            category:"Wrangler",
            inCart:false,
            id:"3",
            specification:[
                "RELAXED FIT: Our most generous pants fit, relaxed through the hip, thigh, and leg. Sits at the waist.",
                "BRUSHED FLEECE: Cut from soft, brushed-back, cotton-polyester blend fleece in a midweight for staying cozy and keeping warm.",
                "EVERYDAY CASUAL: Enjoy all day comfort with these cozy and warm brushed back fleece sweatpants.",
                "DETAILS: Features elasticated waistband with drawcord, two cargo pockets with hook and loop closures, and an open bottom leg.",
                "INSEAM: 31 with 8 1/2 leg opening on US size M.",
            ]
        },
        {
            imgSrc:"https://m.media-amazon.com/images/I/51PZdV12aKL._AC_UL320_.jpg",
            name:"JMIERR Mens Casual Joggers Pants",
            price:2400,
            category:"Wrangler",
            inCart:false,
            id:"4",
            specification:[
                "RELAXED FIT: Our most generous pants fit, relaxed through the hip, thigh, and leg. Sits at the waist.",
                "BRUSHED FLEECE: Cut from soft, brushed-back, cotton-polyester blend fleece in a midweight for staying cozy and keeping warm.",
                "EVERYDAY CASUAL: Enjoy all day comfort with these cozy and warm brushed back fleece sweatpants.",
                "DETAILS: Features elasticated waistband with drawcord, two cargo pockets with hook and loop closures, and an open bottom leg.",
                "INSEAM: 31 with 8 1/2 leg opening on US size M.",
            ]
        },
        {
            imgSrc:"https://m.media-amazon.com/images/I/71apPnLtMjL._AC_UL320_.jpg",
            name:"Amazon Essentials Men's Straight-Fit Stretch Cargo Pant",
            price:2300,
            category:"Wrangler",
            inCart:false,
            id:"5",
            specification:[
                "STRAIGHT FIT: Fitted through the hip and thigh with a straight leg. Sits at the waist.",
                "STRETCH COTTON TWILL: Washed for softness, this breathable twill has a bit of added stretch for comfort and flexibility.",
                "CARGO PANT: These classic cargo pants are a stylish alternative to flat front chinos and have enough stretch to keep you comfortable all day long.",
                "DETAILS: Features a zippered fly with button closure and side and back cargo pockets with button closure flaps.",
                "LEG OPENING: 8 on US size 32.",
            ]
        },
        {
            imgSrc:"https://m.media-amazon.com/images/I/61KlFBNilLL._AC_UL320_.jpg",
            name:"JMIERR Mens Casual Joggers Pants",
            price:2400,
            category:"Wrangler",
            inCart:false,
            id:"6",
            specification:[
                "Straight fit; straight leg",
                "Featuring extreme flex waistband",
                "Extreme stretch canvas fabric",
                "Zippered cargo pockets",
                "Leg opening: 16.875 inches",
            ]
        },
        {
            imgSrc:"https://m.media-amazon.com/images/I/61ThuREkSOL._AC_UL320_.jpg",
            name:"CARWORNIC Men's Ripstop Tactical Pants",
            price:3200,
            category:"Wrangler",
            inCart:false,
            id:"7",
            specification:[
                "STRAIGHT FIT: Fitted through the hip and thigh with a straight leg. Sits at the waist.",
                "STRETCH COTTON TWILL: Washed for softness, this breathable twill has a bit of added stretch for comfort and flexibility.",
                "CARGO PANT: These classic cargo pants are a stylish alternative to flat front chinos and have enough stretch to keep you comfortable all day long.",
                "DETAILS: Features a zippered fly with button closure and side and back cargo pockets with button closure flaps.",
                "LEG OPENING: 8 on US size 32.",
            ]
        },
        {
            imgSrc:"https://m.media-amazon.com/images/I/51FWPwrNfvL._AC_UL320_.jpg",
            name:"HUNGSON Mens Cargo Pants Casual Hiking Pants ",
            price:2500,
            category:"Wrangler",
            inCart:false,
            id:"8",
            specification:[
                "RELAXED FIT: Our most generous pants fit, relaxed through the hip, thigh, and leg. Sits at the waist.",
                "BRUSHED FLEECE: Cut from soft, brushed-back, cotton-polyester blend fleece in a midweight for staying cozy and keeping warm.",
                "EVERYDAY CASUAL: Enjoy all day comfort with these cozy and warm brushed back fleece sweatpants.",
                "DETAILS: Features elasticated waistband with drawcord, two cargo pockets with hook and loop closures, and an open bottom leg.",
                "INSEAM: 31 with 8 1/2 leg opening on US size M.",
            ]
        }
    ]);
    let cartProduct=[]
    console.log(cartProduct)
    useEffect(()=>{
        if(localStorage.getItem("cart-items")){
            cartProduct=JSON.parse(localStorage.getItem("cart-items"));
            const temp=products.map(product=>{
                const isExist=cartProduct.find(cartproduct=> product.id === cartproduct.id);
                if(isExist){
                    product.inCart=true;
                }
                return product;
            })
            setProducts(temp)
        }
    },[])
    const addToCart=(index)=>{
        if(localStorage.getItem("cart-items")){
            cartProduct=JSON.parse(localStorage.getItem("cart-items"));
        }
            products[index].inCart=true;
            cartProduct=[...cartProduct,{...products[index],Quantity:1,cartPrice:products[index].price}];
            localStorage.setItem("cart-items",JSON.stringify(cartProduct));
            console.log(cartProduct);
            navigate("/cart")
       
    }
    const goToCart=(index)=>{
        navigate("/cart")
    }
    return(
        <div className="containe">
           <div className="rowtag">
            {products.map((product,index)=>(
                
                <div className="childtag" style={{margin:"30px",}}>
                    <img className="img fluid" src={product.imgSrc}/>
                    <Link style={{textDecoration:"none"}} to={`/product-detailes/${product.id}`}><h5>{product.name}</h5></Link>
                    <h6>{product.price}</h6>
                    {product.inCart ?
                    (<button className="btn btn-success" style={{marginRight:"10px"}} onClick={()=>goToCart(index)}>Go to cart</button>):
                    (<button className="btn btn-primary" style={{marginRight:"10px"}} onClick={()=>addToCart(index)}>Add to cart</button>)}
                    <button className="btn btn-warning">Buy Now</button>
                </div>
                
            ))}
           </div>
        </div>
    )
}

export default Products;