import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";


import Timetable from "./timetable";

function App() {
  return (
    <>
     
      <BrowserRouter>

        <ToastContainer 
         position="top-right"
         autoClose={5000}
         hideProgressBar={false}
         newestOnTop={false}
         closeOnClick
         rtl={false}
         pauseOnFocusLoss
         draggable
         pauseOnHover
         theme="light"/>
          <Routes>
            
            {/* <Route path="/dashboard" element={<Dashboard />} /> */}
            <Route path="/" element={<Timetable />} />
            {/* <Route element={<PrivateRoute />}>
              <Route path="/" element={<Dashboard />} />
            </Route>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Register />} /> */}
          </Routes>
      </BrowserRouter>

     
    </>
  );
}

export default App;
