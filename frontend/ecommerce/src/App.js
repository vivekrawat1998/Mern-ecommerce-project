import * as React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./features/Pages/Home"
import Loginpage from "./features/Pages/Logiinpage";
import Signuppage from "./features/Pages/Signuppage";
import Cartpages from "./features/Pages/Cartpages";
import Checkout from "./features/Pages/Checkout";


const router = createBrowserRouter([
 {
  path:"/",
  element:(<Home></Home>)
 },
 {
  path:"/login",
  element:(<Loginpage></Loginpage>)
 },
 {
  path:"/signup",
  element:(<Signuppage/>)
 },
 {
  path:"/cart",
  element:(<Cartpages/>)
 },
 {
  path:"/checkout",
  element:(<Checkout/>)
 }
]);




function App() {
  return (
    <div className="App">
        <RouterProvider router={router} />
    </div>
  );
}

export default App;
