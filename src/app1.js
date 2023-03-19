import React , {useState} from 'react';
import Navbar from './components/Navbar';
import Amazon from './components/Amazon';
import Cart from './components/Cart';
import './styles/amazon.css';
import "./app1.css"
const App1 = () => {
	const [show, setShow] = useState(true);
	const [cart , setCart] = useState([]);
	const [warning, setWarning] = useState(false);

	const handleClick = (item)=>{
		let isPresent = false;
		cart.forEach((product)=>{
			if (item.id === product.id)
			isPresent = true;
		})
		if (isPresent){
			setWarning(true);
			setTimeout(()=>{
				setWarning(false);
			}, 2000);
			return ;
		}
		setCart([...cart, item]);
	}

	const handleChange = (item, d) =>{
		let ind = -1;
		cart.forEach((data, index)=>{
			if (data.id === item.id)
				ind = index;
		});
		const tempArr = cart;
		tempArr[ind].amount += d;
		
		if (tempArr[ind].amount === 0)
			tempArr[ind].amount = 1;
		setCart([...tempArr])
	}

  return (
		<div>
			 <div id="helo">
        <h1>SALES ASSEST MARKETPLACE</h1>
        <p>Explore and find assest that work with SALES</p>
        <input type="text" placeholder='Search' id="hel"></input>
    </div>
			<div id="hii">
				<h3>T-SHIRTS</h3>
				<h3>SHIRTS</h3>
				<h3>PANTS</h3>
				<h3>SHORTS</h3>
				<h3>TRACKPANTS</h3>
			</div>
		<Navbar size={cart.length} setShow={setShow} />
		{
			show ? <Amazon handleClick={handleClick} /> : <Cart cart={cart} setCart={setCart} handleChange={handleChange} />
		}
		{
			warning && <div className='warning'>Item is already added to your cart</div>
		}
	</div>
  )
}

export default App1;