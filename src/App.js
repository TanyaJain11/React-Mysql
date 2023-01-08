// // import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import {ToastContainer} from "react-toastify";
// import 'react-toastify/dist/ReactToastify.css';
// // import {Routes} from 'react-router-dom';
// import './App.css';
// import Home from "./pages/Home";
// import Add from "./pages/Add";
// import { Routes ,Route } from 'react-router-dom';



// // function App(){
// //   return (
// //     <div className="App">
// //       {/* <ToastContainer position="top-center"/>
// //            <Routes>
// //           <Route exact to="/" component={Home} />
// //           </Routes> */}
// //           <Home/>
// //     </div>

// // <Router>
// // <Navbar />
// // <Switch>
// //   <Route path="/" component={Home} exact />
// //   <Route path="/all" component={AllUsers} exact />
// //   <Route path="/add" component={AddUser} exact />
// //   <Route path="/edit/:id" component={EditUser} exact />
// //   <Route component={NotFound} />
// // </Switch>
// // </Router>
// //   );
// // }

// function App() {
//   return (
//     <Routes>
//       {/* <Switch> */}
//         <Route path='/' element={<Home/>} />
//         {/* <Route path="/" component={Home} exact /> */}
//         {/* <Route path="/addNew" component={Add} exact /> */}
//         {/* <Route path="/all" component={AllUsers} exact />
//         <Route path="/add" component={AddUser} exact />
//         <Route path="/edit/:id" component={EditUser} exact />
//         <Route component={NotFound} /> */}
//       {/* </Switch> */}
//     </Routes>
//   );
// }

// export default App;



import './App.css';
import React from 'react';
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Home from './pages/Home';
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';
import Edit from './pages/Edit';

function App() {
  return (
    <>
    <ToastContainer position="top-center"/>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/Edit/:id" element={<Edit />} />
  </Routes>
  </>
  );
}

export default App;

