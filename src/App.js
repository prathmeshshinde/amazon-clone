import "./App.css";
import { useState, useEffect } from "react";
import Header from "./Header";
import Cart from "./Cart";
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { db, auth } from "./firebase_config";
import Login from "./Login";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));

  const getCartItems = () => {
    db.collection("cartItems").onSnapshot((snapshot) => {
      const tempItems = snapshot.docs.map((doc) => ({
        id: doc.id,
        product: doc.data(),
      }));
      setCartItems(tempItems);
    });
  };

  const signOut = () => {
    auth.signOut().then(() => {
      localStorage.removeItem("user");
      setUser(null);
    });
  };

  useEffect(() => {
    getCartItems();
  }, []);

  return (
    <Router>
      {!user ? (
        <Login setUser={setUser} />
      ) : (
        <div className="App">
          <Header signOut={signOut} user={user} cartItems={cartItems} />
          <Routes>
            <Route path="/cart" element={<Cart cartItems={cartItems} />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      )}
    </Router>
  );
}

export default App;
