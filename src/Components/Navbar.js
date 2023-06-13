import { useState } from 'react';
import '../Assets/Styles/navBar.scss'

const Navbar = (props)=>{

    const [search,setSearch] = useState('');
    const [items,setItem] = useState([]);
    const [searchResult,setSearchResult] = useState(false);

    const products = props.products

    const handleSubmit = async (e)=>{

        e.preventDefault();

        setSearchResult(false);

        
        for(let product of products) {
            if(product.name === search) {

                items.push(product)
                setItem(items);
                setSearchResult(true);

            }
        }
        

    }

    const handleChange = (e)=>{
        setSearch(e.target.value)
    }

    return(
            <div>
                <div className="navBar">
                
                    <span className='searchBar'>
                        <form onSubmit={handleSubmit}>
                            <input type='text' value={search} onChange={handleChange} placeholder='Search Here'/>
                            {/* <button type='submit' >search</button> */}
                        </form>
                    </span>
            
                </div>

                {searchResult ? <>

                    
                       
                            {/* // <SearchItems item={item}/> */}
                            
                        
                        
                        <div className='sContainer'>
                        {items?.map((item)=>(
                                <span>
                                    <span>
                                        <img src={item.img} />
                                        <p>Name: {item.name}</p>
                                        <p>Price : {item.price}</p>
                                    </span>
                                </span> 
                        ))}
                        </div>
                        
                    

                </> : <>

                    <div>
                        
                    </div>

                </>}
            </div>
        
    )
}

export default Navbar ;