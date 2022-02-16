import React from "react";
import {
          Container,
          Row,
          Column,
          Image
} from "./GalleryElements";

import img1 from "./../../images/image015.png";
import img2 from "./../../images/image008.jpg";
import img3 from "./../../images/image006.jpg";
import img5 from "./../../images/image010.jpg";
import img6 from "./../../images/image012.jpg";
import img7 from "./../../images/image014.jpg";

const Gallery = () => {
  return (
    <Container>
      {/* <Header>Gallery</Header> */}
        <Row>
        <Column>
          <Image src = {img1}/>
          <Image src = {img2}/>
          <Image src = {img3}/>
        </Column>
        <Column>
          <Image src = {img5}/>
          <Image src = {img7}/>
          <Image src = {img6}/>
        </Column>
        <Column>
          <Image src = {img6}/>
          <Image src = {img5}/>
          <Image src = {img7}/>
        </Column>
      </Row>
    </Container> 
   );
}
 
export default Gallery;