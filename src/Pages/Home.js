import React from 'react';
import Cover from '../Components/Cover/Cover'; 
import Facilities from '../Components/Facilities/Facilities';
import Gallery from '../Components/Gallery/Gallery';
import Rules from '../Components/Rules/Rules';
import News from '../Components/News/News';


const Home = (props) => {
    return (
        <div className="container">
         <Cover Cover1text= {props.Covertext} />
         <Facilities />
         <Gallery />
         <Rules />
         <News />
         
        </div>
    );
}
 
export default Home;