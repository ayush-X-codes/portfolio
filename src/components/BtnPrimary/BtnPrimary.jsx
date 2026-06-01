import React from "react";
import "./BtnPrimary.css"
import { ArrowRight } from "lucide-react";


const BTNPRIMARY = () => {
  return (
    <a className="btn-primary btn" href="#">
      View my work <ArrowRight width={14}/>
    </a>
  );
};

export default BTNPRIMARY;
