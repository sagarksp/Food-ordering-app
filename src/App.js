import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import { Outlet } from "react-router-dom";
import Menucard from "./components/Menucard";

import { createBrowserRouter , RouterProvider } from "react-router-dom";



//Babel transpiled karta h is JSX ko create react element m fir wo same process follow hota h

//JSX is not a HTML 
//JSX syntax just look likes the HTML syntax 


//JSX (tranpiled before it reaches the JS) - PARCEL - Babel

 
//JSX => Babel transpiles it to the React.CreateElement => ReactElement.JS Object


// COMPOSITION COMPONENT = Component iside component


// header component









// * What is Config-driven-UI -> A "config-driven UI" is a user interface that is built and configured using a declarative configuration file or data structure, rather than being hardcoded.

// * Every company now-a-days follows these approach, because our Appications need to be Dynamic These Days

// * Note: A Good Senior Frontend engineer is - who is a good UI Layer Engineer and a good Data Layer Engineer

const AppLayout = () =>{
    return (
        <>
        <div className="app">
        <Header />
        <Outlet />
        <Footer />
        
        </div>

       
        </>
    ) ;
};
//  const browserrouter = createBrowserRouter([
//     {
//             path:"/",
//             element:<AppLayout />,
//             errorElement:<Error />
//     },
//     {
//         path:"/about",
//         element:<About />
//     },
//     {
//         path:"/contact",
//         element:<Contact />
//     }        
//         ])

//making children routes 

const browserrouter = createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        children:[
            {
                path:"/",
                element:<Body />
            },
            {
                path:"/contact",
                element:<Contact />
            },
            {
                path:"/about",
                element:<About />
            },
            {
                path:"/restaurants/:resid",
                element:<Menucard/>
            }
        ]

    }
])

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<AppLayout />) 

// ab app route render nahi karna directly so we use route provider

root.render(<RouterProvider router={browserrouter}/>)






































/* const parent = React.createElement("div", {id:parent}, {
//     React.createElement("h1" , )
// })


const heading = React.createElement("h1", {
    id:"heading"
}, "heading made by using react");
console.log(heading)//object print karega
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading) 
*/