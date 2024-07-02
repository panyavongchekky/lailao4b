import { useState } from 'react';

function App() {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-green-500 text-white py-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Fruit Shop</h1>
          <div className="flex items-center">
            <a href="#" className="px-3 py-2 rounded-md text-white hover:bg-green-600 transition duration-200">
              Home
            </a>
            <a href="#" className="px-3 py-2 rounded-md text-white hover:bg-green-600 transition duration-200">
              Shop
            </a>
            <a href="#" className="px-3 py-2 rounded-md text-white hover:bg-green-600 transition duration-200">
              About
            </a>
            <a href="#" className="px-3 py-2 rounded-md text-white hover:bg-green-600 transition duration-200">
              Contact
            </a>
            <div className="ml-4 relative">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
              </svg>
              {cartItems.length > 0 && (
                <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full px-2 py-1 text-xs">{cartItems.length}</span>
              )}
            </div>
          </div>
        </div>
      </header>

      <section className="container mx-auto py-12">
        <div className="bg-green-200 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4">World Vegan Day</h2>
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore.</p>
          <img src="https://img.freepik.com/free-photo/stir-fried-kale-spicy-crispy-pork-wooden-table-thai-food-concept_1150-26544.jpg?uid=R121439371&ga=GA1.1.134462572.1715836175&semt=sph" />
        </div>
      </section>

      <section className="container mx-auto py-12">
        <h2 className="text-2xl font-bold mb-4">New Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-200">
            <img src="https://img.freepik.com/free-photo/stir-fried-kale-spicy-crispy-pork-wooden-table-thai-food-concept_1150-26544.jpg?uid=R121439371&ga=GA1.1.134462572.1715836175&semt=sph" />
            <h3 className="text-lg font-bold mt-4">Strawberry</h3>
            <p className="text-gray-600">30.000kip</p>
            <div className="flex items-center mt-2">
              <span className="text-xs text-gray-600">★★★★★</span>
              <button onClick={() => handleAddToCart({ name: 'Strawberry', price: 30000 })} className="ml-2 bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition duration-200">Add to Cart</button>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-200">
            <img src="https://img.freepik.com/free-photo/stir-fried-kale-spicy-crispy-pork-wooden-table-thai-food-concept_1150-26544.jpg?uid=R121439371&ga=GA1.1.134462572.1715836175&semt=sph" />
            <h3 className="text-lg font-bold mt-4">Grape</h3>
            <p className="text-gray-600">40.000kip</p>
            <div className="flex items-center mt-2">
              <span className="text-xs text-gray-600">★★★★★</span>
              <button onClick={() => handleAddToCart({ name: 'Grape', price: 40000 })} className="ml-2 bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition duration-200">Add to Cart</button>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-200">
            <img src="https://img.freepik.com/free-photo/stir-fried-kale-spicy-crispy-pork-wooden-table-thai-food-concept_1150-26544.jpg?uid=R121439371&ga=GA1.1.134462572.1715836175&semt=sph" />
            <h3 className="text-lg font-bold mt-4">Fresh</h3>
            <p className="text-gray-600">20.000kip</p>
            <div className="flex items-center mt-2">
              <span className="text-xs text-gray-600">★★★★★</span>
              <button onClick={() => handleAddToCart({ name: 'Fresh', price: 20000 })} className="ml-2 bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition duration-200">Add to Cart</button>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-800 text-white py-6 text-center mt-12">
        <p>© 2024 Fruit Shop. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;