const data=[{
    id: 1,
    name: "Fire Boltt Ninja 2",
    img: "img/new.png",
    amt: 1599,
    seller: "Boltt Store",
    catagory: "watch",
},
{
    id: 2,
    name: "sony a1",
    img: "img/new.png",
    amt: 1699,
    seller: "Boltt Store",
    catagory: "watch",
},
{
    id: 3,
    name: "promise e3",
    img: "img/new.png",
    amt: 1899,
    seller: "Boltt Store",
    catagory: "watch",
},
{
    id: 4,
    name: "panasonic ultra",
    img: "img/new.png",
    amt: 1099,
    seller: "Boltt Store",
    catagory: "tablet",
},{
    id: 5,
    name: "apple ez",
    img: "img/new.png",
    amt: 2599,
    seller: "Boltt Store",
    catagory: "tablet",
},{
    id: 6,
    name: "samsung",
    img: "img/new.png",
    amt: 1099,
    seller: "Boltt Store",
    catagory: "tablet",
},{
    id: 7,
    name: "LG",
    img: "img/new.png",
    amt: 1199,
    seller: "Boltt Store",
    catagory: "tablet",
},{
    id: 8,
    name: "lenovo 2",
    img: "img/new.png",
    amt: 3599,
    seller: "Boltt Store",
    catagory: "moniter",
},{
    id: 9,
    name: "asus",
    img: "img/new.png",
    amt: 4599,
    seller: "Boltt Store",
    catagory: "moniter",
},{
    id: 10,
    name: "acer",
    img: "img/new.png",
    amt: 1588,
    seller: "Boltt Store",
    catagory: "moniter",
},
];

const productscontainer=document.querySelector(".products");
const catagories=document.querySelector(".category_list");

pricefilter=document.querySelector(".pricerange");
pricechange=document.querySelector(".pricevalue");


function displayproducts(products){

        const product_details=products.map((product)=>
        ` <div class="product">
        <div class="img">
            <img src="${product.img}">
        </div>
        <div class="product-details">
            <span>
                        ${product.name}
            </span>
            <span>
                ${product.amt}
            </span>
            <span>
                ${product.seller}
            </span>
        </div>
</div>`
        ).join("");
        productscontainer.innerHTML = product_details;   
    
}

        function catagorylists(){

                const catagoriesitem=data.map((value)=>
                        value.catagory
                )
               // console.log(catagoriesitem);
                const news=["ALL",...catagoriesitem.filter((product,index)=>{
                
                return catagoriesitem.indexOf(product)===index;
                }
                )]
                
                    catagories.innerHTML=news.map((hi)=>`<li>${hi}</li>`).join("");

                    catagories.addEventListener('click',(e)=>{
                            const selcat=e.target.textContent;
                            selcat==="ALL"?displayproducts(data):displayproducts(data.filter((product)=>product.catagory==selcat));

                    })
        }
            function priceset(){
                    const pricevalues=data.map((prices)=>prices.amt)


                    minPrice=Math.min(...pricevalues)
                    maxPrice=Math.max(...pricevalues);

                    pricefilter.max=maxPrice;
                    pricefilter.min=minPrice;

                    pricechange.textContent="Rs."+maxPrice;

                    pricefilter.addEventListener("input",(e)=>{

                     pricechange.textContent="Rs."+e.target.value;
                     displayproducts(data.filter((product)=>product.amt<=e.target.value));
                    })       
            }

                const txtSearch=document.querySelector(".search");
                txtSearch.addEventListener("keyup",(e)=>{

                    const vales=e.target.value.toLowerCase().trim();
                    if(vales){

                        displayproducts(data.filter((product)=>product.name.toLowerCase().includes(vales)));
                    }else{
                        displayproducts(data)
                    }
                })

displayproducts(data);
catagorylists();

priceset();