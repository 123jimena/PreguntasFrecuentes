import React from 'react';

import fondo from './fondo.jpg';

export const Bienvenida = () => {
  return (
    <div className="faqContainer" style={{ backgroundImage: `url(${fondo})`, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}>
      <h1 className="title">Frutas Deshidratadas</h1>
      <div className="question">
        <h2>¿Qué son las frutas deshidratadas?</h2>
        <p>Las frutas deshidratadas son frutas frescas que han sido sometidas a un proceso de deshidratación para eliminar la mayor parte de su contenido de agua, lo que resulta en un producto seco pero conservando su sabor y nutrientes.</p>
      </div>
      <div className="question">
        <h2>¿Cuál es el proceso de deshidratación de las frutas?</h2>
        <p>El proceso de deshidratación de las frutas implica la eliminación del agua presente en las frutas mediante calor y circulación de aire. Esto se puede lograr mediante métodos como el secado al sol, el uso de deshidratadores eléctricos o el horneado a baja temperatura.</p>
      </div>
      <div className="question">
        <h2>¿Cuáles son los beneficios de consumir frutas deshidratadas?</h2>
        <p>Consumir frutas deshidratadas ofrece varios beneficios, como ser una excelente fuente de fibra, vitaminas y minerales. Además, son fáciles de transportar, tienen una larga vida útil y son una opción práctica y saludable para picar entre comidas.</p>
      </div>
      <div className="question">
        <h2>¿Se pueden consumir frutas deshidratadas si se tiene diabetes?</h2>
        <p>Las frutas deshidratadas pueden ser una opción saludable para personas con diabetes debido a su contenido de fibra y nutrientes. Sin embargo, es importante controlar las porciones y optar por frutas deshidratadas sin azúcares añadidos para evitar picos en los niveles de azúcar en la sangre.</p>
      </div>
      <div className="question">
        <h2>¿Cuál es la mejor manera de almacenar frutas deshidratadas?</h2>
        <p>Para mantener la frescura y calidad de las frutas deshidratadas, es importante almacenarlas en un lugar fresco, oscuro y seco, preferiblemente en recipientes herméticos o bolsas con cierre hermético. También es recomendable consumirlas antes de la fecha de vencimiento indicada en el empaque.</p>
      </div>
    </div>


  );
}

export default Bienvenida;
