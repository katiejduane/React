let data = [
    { 
        title: "Sporting Goods",
        items: [
            {
                name: "Football",
                price: "$49.99"
            },
            {
                name: "Baseball",
                price: "$9.99"
            },
            {
                name: "Basketball",
                price: "$29.99"
            }
        ],

    },
    {
        title: "Electronics",
        items: [
            {
                name: "iPad Touch",
                price: "$499.99"
            },
            {
                name: "iPhone",
                price: "$299.99"
            },
            {
                name: "Laser",
                price: "$49.99"
            }
        ]
    }
]


class SearchBar extends React.Component{
    constructor(){
        super()
    }
    render(){
        return (
            <div className="search-bar">
                <form>
                    <input type="text" name="user-input" placeholder="Search" />
                    <div>
                        <input type="checkbox" id="product-checkbox"  />
                        <label for="product-checkbox">Only show products in stock</label>
                    </div>
                </form>
            </div>
        )
    }
}


class ProductRow extends React.Component{
    constructor(){
        super()
    }
    render(){
        return(
        <div className="product-row">
            <div className="product">
                <span className="productName">{this.props.product.name}</span>
                <span className="productPrice">{this.props.product.price}</span>
            </div>
        </div>
        )
    }
}

class ProductCategoryRow extends React.Component {
    constructor() {
        super()
    }
    render() {
        const products = this.props.items.map((product) => {
            return (<ProductRow product={product} />)
        })
        return (
            <div className="product-category-row" title="">
                {this.props.title}
                {products}
            </div>
        )
    }
}

class ProductTable extends React.Component {
    constructor() {
        super()
    }
    render() {
        console.log(this.props.data)
        const products = this.props.data.map((product)=>{
            return (
                <ProductCategoryRow title={product.title} items={product.items}/>
            )
        })
        
        return(
        <div className="product-table">
                <h4><span className="product-table-name">Name</span><span className="product-table-price">Price</span></h4>
            {products}
        </div>
        )
    }
}

class Checklist extends React.Component {
    constructor() {
        super()  
    }

    render() {
        return (
            <div className="checklist">
                <SearchBar />
                <ProductTable data={data} price ={1}/>
            </div>
        )
    }
}








