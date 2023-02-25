import React from "react";
import S from "./Price.module.css";

const Price = () => {
  return (
    <div className={S.priceCtn}>
      <p className={S.price}>R$19</p>
      <p className={S.cents}>,99</p>
    </div>
  );
};

export default Price;
