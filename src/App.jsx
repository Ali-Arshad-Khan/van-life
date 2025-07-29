import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import logo from "./assets/logog.svg";
import './App.css'
import Home from "./Pages/Home";
import About from "./Pages/About";
import Vans from "./Pages/Vans/Vans";
import VanDetail from "./Pages/Vans/VanDetail";
import Layout from "./components/Layout";
import Dashboard from "./Pages/Host/Dashboard";
import Income from "./Pages/Host/Income";
import Reviews from "./Pages/Host/Reviews";
import HostLayout from "./components/HostLayout";
import HostVans from "./Pages/Host/HostVans";
import HostVanDetail from "./Pages/Host/HostVanDetail";
import HostVanInfo from "./Pages/Host/HostVanInfo";
import HostVanPricing from "./Pages/Host/HostVanPricing";
import HostVanPhotos from "./Pages/Host/HostVanPhotos";
import NotFound from "./Pages/NotFound";
import Login from "./Pages/Login";
import AuthRequired from "./components/AuthRequired";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element = {<Layout />}>
          <Route path="*" element = {<NotFound />} />
          <Route index element={<Home />}/>
          <Route path="about" element={<About />}/>
          <Route path="vans" element={<Vans />}/>
          <Route path="login" element={<Login />}/>
          <Route path="vans/:id" element={<VanDetail />}/>

          <Route element={<AuthRequired />}>
          <Route path="host" element={<HostLayout />}>
            <Route index element={<Dashboard />}/>
            <Route path="income" element={<Income />}/>
            <Route path="reviews" element={<Reviews />}/>
            <Route path="vans" element={<HostVans />}/>
            <Route path="vans/:id" element={<HostVanDetail />}>
              <Route index element={<HostVanInfo />}/>
              <Route path="pricing" element={<HostVanPricing />}/>
              <Route path="photos" element={<HostVanPhotos />}/>
            </Route>
          </Route>
          </Route>
          
        </Route >
      </Routes>
    </BrowserRouter>
  )
}

export default App
