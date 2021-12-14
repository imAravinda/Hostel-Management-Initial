import React from "react";
import {
  StructureItems,
  StructureDes,
  StructureImgContainer,
  StructureDesPara,
  StructureDesVisionDes,
  StructureDesMissionDes,
  StructureRule,
} from "./RulesElements";


const Structure = () => {
  return (
    <StructureItems>
      <StructureRule>
        Rules & Regulations
      </StructureRule>
      <StructureDes>
        <StructureDesPara>
          The University of Ruhuna operates under the provisions of the
          Universities Act No. 16 of 1978 and the Universities (Amendment) Act
          No. 7 of 1985. Accordingly, the university has a Chancellor, a Vice
          Chancellor, Officers and Authorities to draw plans, make decisions,
          and monitor the implementation of such decisions in the overall
          management
        </StructureDesPara>
        <StructureDesVisionDes>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque dolore
          ad ipsam in fugiat odio reiciendis quod temporibus earum facere!
        </StructureDesVisionDes>
        <StructureDesMissionDes>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit
          molestiae magnam laboriosam aut officiis sed impedit excepturi
          voluptatum 
        </StructureDesMissionDes>
        <StructureImgContainer>
          <button type="submit" className="submit">
                 --See More--
              </button>
      </StructureImgContainer>
      </StructureDes>
      
    </StructureItems>
  );
};

export default Structure;
