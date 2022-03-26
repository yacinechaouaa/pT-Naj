import React, { useState } from "react";

import {
  CardWrapper,
  CardContent,
  CardTextTitle,
  CardTextParag,
  Square,
  NextArrow,
  Row,
  Circle,
  CardAnimationWrapper,
  Rectangle,
  Image,
  LittleCard,
  RowModi,
  Column,
  IconLink
} from '../css/CardProject.styles';

//import logo from "./../../img/art.svg";
import contentLoading from "../hoc/contentLoading";

const technologies = ["CSS",  "Javascript", "React", "Nodejs"];


const CardProject = ({ data }) => {
  let data1 = {};
  if (data) {
    data1 = data;
  }
  const [change, handleChange] = useState(false);
  const TechnologiesCard = technologies.map(el =>
    <LittleCard>
      {el}
    </LittleCard>
  );
  const CardFront = () => {
    return (
      <CardWrapper>
        <CardContent>
          <CardTextTitle>
            {data1.name}
          </CardTextTitle>
          <CardTextParag>
            {data1.details}
          </CardTextParag>
        </CardContent>
        <CardContent>
          <Row>
            <Square>
              {data1.date}
            </Square>
            <Circle onClick={() => handleChange(true)}>
              <NextArrow />
              <NextArrow style={{ top: "-12px", right: "-15px" }} />
            </Circle>
          </Row>

          <img
            src={data1.img}
            style={{
              position: "relative",
              zIndex: 0,
              top: "-25px",
              width: "200px"
            }}
          />
        </CardContent>
      </CardWrapper>
    );
  };

  const CardBack = () => {
    return (
      <CardWrapper>
        <CardContent>
          <Circle onClick={() => handleChange(false)} direction>
            <NextArrow direction="right" style={{ top: "8px" }} />
            <NextArrow
              direction="right"
              style={{ top: "-12px", left: "16px" }}
            />
          </Circle>

          <RowModi>
            <Image src={data1.path} alt="img" />
            <Column  >
             { data1.github ? <IconLink onClick={()=>{window.open(data1.github)}} alt="github" src={"https://image.flaticon.com/icons/svg/25/25231.svg"}/> : <div />}
           { data1.link ? <IconLink onClick={()=>{window.open(data1.link)}} alt="link" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQH1JYtAzNaHYOw6fbIzAXOMjTRo7y4RDCbA4FdfRCG8jJ75Gb74g&s"} /> : <div />}
            </Column>
           
          </RowModi>
        </CardContent>

        <Rectangle>
          {TechnologiesCard}
        </Rectangle>
      </CardWrapper>
    );
  };

  return (
    <div style={{ padding: "20px", paddingLeft: "0px" }}>
      {change ? <CardBack /> : <CardFront />}
    </div>
  );
};
export default contentLoading(false)(CardProject);
