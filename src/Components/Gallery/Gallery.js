import React from "react";

import {
  GallaryContainer,
  GallaryHeader,
  GallaryRows,
  GallaryFirstRow,
  GallatyImgContainer,
  GallaryImg,
} from "./GalleryElements";

import img1 from "./../../images/Gallaryimg1.jpg";
import img2 from "./../../images/Gallaryimg2.jpg";
import img3 from "./../../images/Gallaryimg3.jpg";
import img4 from "./../../images/Gallaryimg4.jpg";
import img5 from "./../../images/Gallaryimg5.jpg";
import img6 from "./../../images/Gallaryimg6.jpg";
import img7 from "./../../images/Gallaryimg7.jpg";
import img8 from "./../../images/Gallaryimg8.jpg";

const Gallary = () => {
  return (
    <GallaryContainer>
        <GallaryHeader>Gallery</GallaryHeader>
      <GallaryRows>
        <GallaryFirstRow>
          <GallatyImgContainer>
            <GallaryImg src={img1} />
          </GallatyImgContainer>
          <GallatyImgContainer>
            <GallaryImg src={img2} />
          </GallatyImgContainer>
          <GallatyImgContainer>
            <GallaryImg src={img3} />
          </GallatyImgContainer>
         
        </GallaryFirstRow>

        <GallaryFirstRow>
          <GallatyImgContainer>
            <GallaryImg src={img5} />
          </GallatyImgContainer>
          <GallatyImgContainer>
            <GallaryImg src={img6} />
          </GallatyImgContainer>
          <GallatyImgContainer>
            <GallaryImg src={img7} />
          </GallatyImgContainer>
          
        </GallaryFirstRow>
      </GallaryRows>
    </GallaryContainer>
  );
};

export default Gallary;