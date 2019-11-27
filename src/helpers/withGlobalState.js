import React from 'react';
import StateConsumer from './StateConsumer';

const withGlobalState = Component => (props) => (
    <StateConsumer>
      {context => <Component {...props} context={context}/>}
    </StateConsumer>
  );

export default withGlobalState;

