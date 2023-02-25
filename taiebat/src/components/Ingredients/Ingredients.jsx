import React from "react";
import S from './Ingredients.module.css'

const Ingredients = () => {
  return (
    <div className={S.ingredientsCtn} >
      <p className={S.ingredient}>Pão Árabe</p>
      <p className={S.ingredient}>Carne Bovina</p>
      <p className={S.ingredient}>Tomate</p>
      <p className={S.ingredient}>Cebola</p>
      <p className={S.ingredient}>Salsa</p>
      <p className={S.ingredient}>Pepino em Conserva</p>
      <p className={S.ingredient}>Maionese</p>
      <p className={S.ingredient}>Temperos Árabes</p>
    </div>
  );
};

export default Ingredients;
