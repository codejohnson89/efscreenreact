import React from 'react';
// import './components/styles-efscreen/efscreen.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './components/Home';
import CustomHeaders from './components/views/custom-headers/CustomHeaders';
import CustomModules from './components/views/custom-modules/CustomModules';
import Homepages from './components/views/homepages/Homepages';
import Categories from './components/views/categories/Categories';
import ProductPages from './components/views/product-pages/ProductPages';
import MyAccount from './components/views/my-account/MyAccount';
import Checkout from './components/views/checkout/Checkout';
import Miscpage from './components/views/misc-pages/Miscpages';
import Wedding from './components/views/wedding/Wedding';
import StylesGuide from './components/views/global/styles-guide/StylesGuide';
import OccasionTilesThree from './components/views/custom-modules/occasion-three-wide/OccasionTilesThree';
import OccasionTilesFour from './components/views/custom-modules/occasion-four-wide/OccasionTilesFour';
import OccasionTilesSix from './components/views/custom-modules/occasion-six-wide/OccasionTilesSix';
import VideoBar from './components/views/custom-modules/videobar/VideoBar';
import SlideshowFull from './components/views/custom-modules/slideshowfull/SlideshowFull';
import SlideshowWindow from './components/views/custom-modules/slideshowwindow/SlideshowWindow';
import SlideshowCategoryBar from './components/views/custom-modules/slideshowcategorybar/SlideshowCategoryBar';
import Products from './components/modules/Products';
import ProductMaxThreeWide from './components/views/custom-modules/product-max-products-three-wide/ProductMaxThreeWide';
import ProductFiveWide from './components/views/custom-modules/product-five-wide/ProductFiveWide';
import ProductMaxProducts from './components/views/custom-modules/product-max-products/ProductMaxProducts';
import ProductThreeWide from './components/views/custom-modules/product-three-wide/ProductThreeWide';
import ProductRotation from './components/views/custom-modules/product-rotation/ProductRotation';
import AboutUs from './components/views/misc-pages/about-us/AboutUs';
import MarketingBanner from './components/views/custom-modules/marketingBanner/MarketingBanner';
import Immersion from './components/views/homepages/Immersion/Immersion';
import VideoBackground from './components/views/custom-modules/videoBackground/VideoBackground';
import SlidingProductRows from './components/views/custom-modules/sliding-products-row/SlidingProductRows';
import MasonGallery from './components/views/custom-modules/mason-gallery/MasonGallery';
import ProductGrid from './components/views/custom-modules/product-grid/ProductGrid';
import Parallax from './components/views/custom-modules/parallax/Parallax';
import QuickLinks from './components/views/custom-modules/quick-links/QuickLinks';
import LogoCenteredHeader from './components/views/custom-headers/logo-centered/LogoCenteredHeader';


function App() {
  return (
    <Router>
       <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/custom-headers' exact component={CustomHeaders} />
        <Route path='/custom-modules' exact component={CustomModules} />
        <Route path='/homepages' exact component={Homepages} />
        <Route path='/categories' exact component={Categories} />
        <Route path='/productpages' exact component={ProductPages} />
        <Route path='/my-account' exact component={MyAccount} />
        <Route path='/checkout' exact component={Checkout} />
        <Route path='/miscpages' exact component={Miscpage} />
        <Route path='/wedding' exact component={Wedding} />
        <Route path='/styles-guide' exact component={StylesGuide} />
        <Route path='/OccasionTilesThree' exact component={OccasionTilesThree} />
        <Route path='/OccasionTilesFour' exact component={OccasionTilesFour} />
        <Route path='/OccasionTilesSix' exact component={OccasionTilesSix} />
        <Route path="/VideoBar" exact component={VideoBar} />
        <Route path="/SlideshowFull" exact component={SlideshowFull} />
        <Route path="/SlideshowWindow" exact component={SlideshowWindow} />
        <Route path="/SlideshowCategoryBar" exact component={SlideshowCategoryBar} />
        <Route path="/product" exact component={Products} />
        <Route path="/MaxProductsThreeWide" exact component={ProductMaxThreeWide}/>
        <Route path="/MaxProductsFiveWide" exact component={ProductFiveWide}/>
        <Route path="/MaxProducts" exact component={ProductMaxProducts} />
        <Route path="/ThreeProductsWide" exact component={ProductThreeWide}/>
        <Route path="/ProductRotation" exact component={ProductRotation} />
        <Route path="/AboutUs" exact component={AboutUs} />
        <Route path="/MarketingBanner" exact component={MarketingBanner}/>
        <Route path="/Immersion" exact component={Immersion} />
        <Route path="/VideoBackground" exact component={VideoBackground} />
        <Route path="/SlidingProudctRows" exact component={SlidingProductRows} />
        <Route path="/MasonGallery" exact component={MasonGallery} />
        <Route path="/ProductGrid" exact component={ProductGrid} />
        <Route path="/Parallax" exact component={Parallax} />
        <Route path="/QuickLinks" exact component={QuickLinks} />
        <Route path="/LogoCenteredHeader" exact component={LogoCenteredHeader} />        
      </Switch>
    </Router>
  );
}

export default App;
