import React from 'react';
import Header from '../src/client/components/Header';
import cssMain from '../src/scss/main.scss';
import Template from '../src/client/components/Template';
/* eslint-disable react/prefer-stateless-function */
class Index extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Template>
          <Header img="form" title="About us" subtitle="ed consequat enim a faucibus" />
          <div className={cssMain.container}>
            <h2 className={cssMain['title--main']}>
             Morbi at interdum arcu, ut condimentum tellus.
            </h2>
            <p>
              Suspendisse laoreet magna sem, ac malesuada ante pretium ut.
              Vivamus vel nunc id ante sollicitudin aliquam.
              Sed consequat enim a faucibus lobortis.
              In porttitor facilisis enim, ac bibendum quam dapibus non. Curabitur a mi non orci
              iaculis tincidunt.
              Morbi at interdum arcu, ut condimentum tellus.
              Sed non eleifend arcu. Suspendisse egestas arcu a ligula fermentum imperdiet.
            </p>
            <p>
              Suspendisse laoreet magna sem, ac malesuada ante pretium ut.
              Vivamus vel nunc id ante sollicitudin aliquam.
              Sed consequat enim a faucibus lobortis.
              In porttitor facilisis enim, ac bibendum quam dapibus non. Curabitur a mi non orci
              iaculis tincidunt.
              Morbi at interdum arcu, ut condimentum tellus.
              Sed non eleifend arcu. Suspendisse egestas arcu a ligula fermentum imperdiet.
            </p>
          </div>
        </Template>
      </React.Fragment>
    );
  }
}

export default Index;
