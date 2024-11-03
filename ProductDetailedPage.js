import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
function Ruff(){

    const params=useParams();
    console.log(params.productId);
    const [products,setProducts]=useState([
        {
            imgSrc:"https://m.media-amazon.com/images/I/61YdEa73GbL._AC_UL320_.jpg",
            name:"Amazon Essentials Men's Cargo Fleece Sweatpant",
            price:"$21",
            category:"Wrangler",
            id:"1",
            specification:[
                "RELAXED FIT: Our most generous pants fit, relaxed through the hip, thigh, and leg. Sits at the waist.",
                "BRUSHED FLEECE: Cut from soft, brushed-back, cotton-polyester blend fleece in a midweight for staying cozy and keeping warm.",
                "EVERYDAY CASUAL: Enjoy all day comfort with these cozy and warm brushed back fleece sweatpants.",
                "DETAILS: Features elasticated waistband with drawcord, two cargo pockets with hook and loop closures, and an open bottom leg.",
                "INSEAM: 31 with 8 1/2 leg opening on US size M.",
            ],
            ThumbnailImages:[
                'https://m.media-amazon.com/images/I/61YdEa73GbL._AC_SY500_.jpg',
                'https://m.media-amazon.com/images/I/61xoQ2B8qqL._AC_SY500_.jpg',
                'https://m.media-amazon.com/images/I/61Mbxbq+KSL._AC_SY500_.jpg',
                'https://m.media-amazon.com/images/I/619WB-cWShL._AC_SY500_.jpg',
                'https://m.media-amazon.com/images/I/810g4H2OD7L._AC_SX522_.jpg',
                

            ]
        },
        {
            imgSrc:"https://m.media-amazon.com/images/I/61HP4BFFzFL._AC_UL320_.jpg",
            name:"Wrangler Authentics Men's Relaxed Fit Stretch Cargo Pant",
            price:"$25",
            category:"Wrangler",
            id:"2",
            specification:[
                "RELAXED FIT: Our most generous pants fit, relaxed through the hip, thigh, and leg. Sits at the waist.",
                "BRUSHED FLEECE: Cut from soft, brushed-back, cotton-polyester blend fleece in a midweight for staying cozy and keeping warm.",
                "EVERYDAY CASUAL: Enjoy all day comfort with these cozy and warm brushed back fleece sweatpants.",
                "DETAILS: Features elasticated waistband with drawcord, two cargo pockets with hook and loop closures, and an open bottom leg.",
                "INSEAM: 31 with 8 1/2 leg opening on US size M.",
            ],
            ThumbnailImages:[
                'https://m.media-amazon.com/images/I/61HP4BFFzFL._AC_SY500_.jpg',
                'https://m.media-amazon.com/images/I/61nvvL4MX6L._AC_SY500_.jpg',
                'https://m.media-amazon.com/images/I/61l28JAChnL._AC_SY500_.jpg',
                'https://m.media-amazon.com/images/I/61r+PX6jD3L._AC_SY500_.jpg',
                'https://m.media-amazon.com/images/I/81CbIZAAFwL._AC_SY500_.jpg',
                'https://m.media-amazon.com/images/I/81JxgOjK+qL._AC_SY500_.jpg',

            ]
        },
        {
            imgSrc:"https://m.media-amazon.com/images/I/51lrvBS8lRL._AC_UL320_.jpg",
            name:"Match Men's Wild Cargo Pants",
            price:"$39",
            category:"Wrangler",
            id:"3",
            specification:[
                "RELAXED FIT: Our most generous pants fit, relaxed through the hip, thigh, and leg. Sits at the waist.",
                "BRUSHED FLEECE: Cut from soft, brushed-back, cotton-polyester blend fleece in a midweight for staying cozy and keeping warm.",
                "EVERYDAY CASUAL: Enjoy all day comfort with these cozy and warm brushed back fleece sweatpants.",
                "DETAILS: Features elasticated waistband with drawcord, two cargo pockets with hook and loop closures, and an open bottom leg.",
                "INSEAM: 31 with 8 1/2 leg opening on US size M.",
            ],
            ThumbnailImages:[
                'https://m.media-amazon.com/images/I/51lrvBS8lRL._AC_SX385_.jpg',
                'https://m.media-amazon.com/images/I/61gg6s3QyNL._AC_SX385_.jpg',
                'https://m.media-amazon.com/images/I/61BvM-8P8LL._AC_SY500_.jpg',
                'https://m.media-amazon.com/images/I/61XLNWT7l3L._AC_SY500_.jpg',
                'https://m.media-amazon.com/images/I/81hDp-LeIRL._AC_SY500_.jpg',
                'https://m.media-amazon.com/images/I/71Z5y7J3rlL._AC_SY500_.jpg',

            ]
        },
        {
            imgSrc:"https://m.media-amazon.com/images/I/51PZdV12aKL._AC_UL320_.jpg",
            name:"JMIERR Mens Casual Joggers Pants",
            price:"$29",
            category:"Wrangler",
            id:"4",
            specification:[
                "RELAXED FIT: Our most generous pants fit, relaxed through the hip, thigh, and leg. Sits at the waist.",
                "BRUSHED FLEECE: Cut from soft, brushed-back, cotton-polyester blend fleece in a midweight for staying cozy and keeping warm.",
                "EVERYDAY CASUAL: Enjoy all day comfort with these cozy and warm brushed back fleece sweatpants.",
                "DETAILS: Features elasticated waistband with drawcord, two cargo pockets with hook and loop closures, and an open bottom leg.",
                "INSEAM: 31 with 8 1/2 leg opening on US size M.",
            ],
            ThumbnailImages:[
                'https://m.media-amazon.com/images/I/51PZdV12aKL._AC_SY500_.jpg',
                'https://m.media-amazon.com/images/I/61qzPwRFlpL._AC_SX569_.jpg',
                'https://m.media-amazon.com/images/I/51iPgc5ElBL._AC_SY500_.jpg',
                'https://m.media-amazon.com/images/I/71wxMeXWq5L._AC_SY500_.jpg',
                'https://m.media-amazon.com/images/I/61KoXIEz7QL._AC_SY500_.jpg',
                'https://m.media-amazon.com/images/I/71MQr1WWumL._AC_SY500_.jpg',

            ]
        },
        {
            imgSrc:"https://m.media-amazon.com/images/I/71apPnLtMjL._AC_UL320_.jpg",
            name:"Amazon Essentials Men's Straight-Fit Stretch Cargo Pant",
            price:"$28",
            category:"Wrangler",
            id:"5",
            specification:[
                "STRAIGHT FIT: Fitted through the hip and thigh with a straight leg. Sits at the waist.",
                "STRETCH COTTON TWILL: Washed for softness, this breathable twill has a bit of added stretch for comfort and flexibility.",
                "CARGO PANT: These classic cargo pants are a stylish alternative to flat front chinos and have enough stretch to keep you comfortable all day long.",
                "DETAILS: Features a zippered fly with button closure and side and back cargo pockets with button closure flaps.",
                "LEG OPENING: 8 on US size 32.",
            ],
            ThumbnailImages:[
                'https://m.media-amazon.com/images/I/71apPnLtMjL._AC_SX522_.jpg',
                'https://m.media-amazon.com/images/I/61BWP2dRbML._AC_SX522_.jpg',
                'https://m.media-amazon.com/images/I/81chJQ0GtTL._AC_SX522_.jpg',
                'https://m.media-amazon.com/images/I/91OSKO29+hL._AC_SX522_.jpg',
                'https://m.media-amazon.com/images/I/81g6LfDNR7L._AC_SX522_.jpg',
                'https://m.media-amazon.com/images/I/81zJEJodLBL._AC_SX522_.jpg',
                'https://m.media-amazon.com/images/I/A1-PZ0UkhqL._AC_SX522_.jpg'

            ]
        },
        {
            imgSrc:"https://m.media-amazon.com/images/I/61KlFBNilLL._AC_UL320_.jpg",
            name:"JMIERR Mens Casual Joggers Pants",
            price:"$29",
            category:"Wrangler",
            id:"6",
            specification:[
                "Straight fit; straight leg",
                "Featuring extreme flex waistband",
                "Extreme stretch canvas fabric",
                "Zippered cargo pockets",
                "Leg opening: 16.875 inches",
            ],
            ThumbnailImages:[
                'https://m.media-amazon.com/images/I/61KlFBNilLL._AC_SY500_.jpg',
                'https://m.media-amazon.com/images/I/61OObatSQ7L._AC_SY500_.jpg',
                'https://m.media-amazon.com/images/I/61ogmfx4ZnL._AC_SY500_.jpg',
                'https://m.media-amazon.com/images/I/610YHFf2-XL._AC_SY500_.jpg',
                'https://m.media-amazon.com/images/I/71K7oOj8iKL._AC_SY500_.jpg',
                'https://m.media-amazon.com/images/I/61V5oocKAtL._AC_SX522_.jpg',


            ]
        },
        {
            imgSrc:"https://m.media-amazon.com/images/I/61ThuREkSOL._AC_UL320_.jpg",
            name:"CARWORNIC Men's Ripstop Tactical Pants",
            price:"$39",
            category:"Wrangler",
            inCart:false,
            id:"7",
            specification:[
                "STRAIGHT FIT: Fitted through the hip and thigh with a straight leg. Sits at the waist.",
                "STRETCH COTTON TWILL: Washed for softness, this breathable twill has a bit of added stretch for comfort and flexibility.",
                "CARGO PANT: These classic cargo pants are a stylish alternative to flat front chinos and have enough stretch to keep you comfortable all day long.",
                "DETAILS: Features a zippered fly with button closure and side and back cargo pockets with button closure flaps.",
                "LEG OPENING: 8 on US size 32.",
            ],
            ThumbnailImages:[
                'https://m.media-amazon.com/images/I/61ThuREkSOL._AC_SY500_.jpg',
                'https://m.media-amazon.com/images/I/61J+0ChbL1L._AC_SY500_.jpg',
                'https://m.media-amazon.com/images/I/61GKlvMeXIL._AC_SX466_.jpg',
                'https://m.media-amazon.com/images/I/71UREd-EmIL._AC_SX522_.jpg',
                'https://m.media-amazon.com/images/I/71R+Pt35BYL._AC_SX466_.jpg',
                'https://m.media-amazon.com/images/I/81zNOVsxdkL._AC_SX569_.jpg',


            ]
        },
        {
            imgSrc:"https://m.media-amazon.com/images/I/51FWPwrNfvL._AC_UL320_.jpg",
            name:"HUNGSON Mens Cargo Pants Casual Hiking Pants ",
            price:"$31.",
            category:"Wrangler",
            inCart:false,
            id:"8",
            specification:[
                "RELAXED FIT: Our most generous pants fit, relaxed through the hip, thigh, and leg. Sits at the waist.",
                "BRUSHED FLEECE: Cut from soft, brushed-back, cotton-polyester blend fleece in a midweight for staying cozy and keeping warm.",
                "EVERYDAY CASUAL: Enjoy all day comfort with these cozy and warm brushed back fleece sweatpants.",
                "DETAILS: Features elasticated waistband with drawcord, two cargo pockets with hook and loop closures, and an open bottom leg.",
                "INSEAM: 31 with 8 1/2 leg opening on US size M.",
            ],
            ThumbnailImages:[
                'https://m.media-amazon.com/images/I/51FWPwrNfvL._AC_SY500_.jpg',
                'https://m.media-amazon.com/images/I/51AyrW58aUL._AC_SY500_.jpg',
                'https://m.media-amazon.com/images/I/51BhyZsDfWL._AC_SY500_.jpg',
                'https://m.media-amazon.com/images/I/51HkWHuLMiL._AC_SY500_.jpg',
                'https://m.media-amazon.com/images/I/51KaYMQgoQL._AC_SY500_.jpg',
                'https://m.media-amazon.com/images/I/512R092ytpL._AC_SY500_.jpg',
                'https://m.media-amazon.com/images/I/61BASpJj-iL._AC_SX679_.jpg'


            ]
        }
    ]);

    const filteredProduct=products.find(product=> product.id === params.productId)
    const [image,setImage]=useState([filteredProduct.ThumbnailImages[0]])
    const updateImage=(filterimageSrc)=>{
        setImage(filterimageSrc)
    }
    const [cartProducts,setCartProducts]=useState([]);
    useEffect(()=>{
        if(localStorage.getItem("cart-items")){
            setCartProducts(JSON.parse(localStorage.getItem("cart-items")));
        }
    },[])
    console.log(cartProducts);
    return(
        <div className="container">
            
                 <div className="row">
                 <div className="col-sm">
                    <div className="row" style={{margin:"20px"}}>
                    <div className="col-sm-2">
                        {filteredProduct.ThumbnailImages.map(filterimage=>(
                            <div><img className="img-fluid border my-2" style={{height:"60px",width:"60px"}} src={filterimage} onClick={()=>updateImage(filterimage)}/></div>
                        ))}
                        </div>
                        <div className="col-sm-4">
                        <img className="img fluid my-2" style={{height:"400px",}} src={image}/>
                        
                        <h5 className=" my-2">Price:{filteredProduct.price}</h5>
                        {filteredProduct.inCart ?
                        (<button className="btn btn-success my-2" style={{marginRight:"5px"}}>Go to cart</button>):
                        (<button className="btn btn-primary my-2" style={{marginRight:"5px"}}>Add to cart</button>)}
                        <button className="btn btn-warning">Buy Now</button>
                        </div>
                        <div className="col-sm-6">
                        <h5>{filteredProduct.name}</h5>
                        <ul>
                            <li>{filteredProduct.specification[0]}</li>
                            <li>{filteredProduct.specification[1]}</li>
                            <li>{filteredProduct.specification[2]}</li>
                            <li>{filteredProduct.specification[3]}</li>
                            <li>{filteredProduct.specification[4]}</li>
                        </ul>
                        </div>
                    </div>
                 </div>
             </div>
            
        </div>
    )
}

export default Ruff;