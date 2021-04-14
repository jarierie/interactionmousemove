import React from "react";
import styled from "styled-components";
import meenoi from "./assets/meenoi.jpg";
import meenoi2 from "./assets/meenoi2.jpg";
import meenoi3 from "./assets/meenoi3.jpg";
import meenoi4 from "./assets/meenoi4.jpg";
import meenoi5 from "./assets/meenoi5.jpg";

import { useEffect, useState, useRef } from "react";
import { gsap, Power1 } from "gsap";

const Main = styled.div`
  width: 100%;
  height: 1000px;
  background-color: #0d0d0d;
  overflow: hidden;
`;

const Secondary = styled.div`
  width: 60%;
  height: 60%;
  background-color: black;
`;

const MovingElements = styled.div`
  width: 100%;
  height: 100%;
  background-color: aliceblue;
  position: relative;
`;

const Items = styled.img`
  position: absolute;
  left: ${(props) => props.left};
  top: ${(props) => props.top};
`;

const MovingDiv = () => {
  const ref = useRef(null);

  const anim = () => {
    gsap.to(ref.current, {
      x: position.x * 0.6 - 50,
      y: position.y * 0.6 - 50,
      duration: 1,
      delay: 0,
      ease: Power1.easeOut,
    });
  };

  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  const handleMove = (e) => {
    setPosition({
      x: e.pageX,
      y: e.pageY,
    });
  };
  useEffect(() => {
    document.addEventListener("mousemove", handleMove);
  }, []);
  useEffect(() => {
    document.addEventListener("mousemove", anim);
    return () => {
      document.removeEventListener("mousemove", anim);
    };
  }, [position]);
  return (
    <>
      {" "}
      <Main>
        <Secondary ref={ref}>
          <MovingElements>
            <Items left={"-500px"} top={"400px"} src={meenoi} alt=''></Items>
            <Items left={"300px"} top={"120px"} src={meenoi2} alt=''></Items>
            <Items left={"900px"} top={"300px"} src={meenoi3} alt=''></Items>
            <Items left={"-300px"} top={"-300px"} src={meenoi4} alt=''></Items>
            <Items left={"900px"} top={"-250px"} src={meenoi5} alt=''></Items>
          </MovingElements>
        </Secondary>
      </Main>{" "}
    </>
  );
};

export default MovingDiv;
