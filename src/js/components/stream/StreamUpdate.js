import React from 'react';

import FormCreate from './FormCreate';

const StreamUpdate = (props) => (
  <div>
    <h1>Edit stream.</h1>
    <FormCreate edit={true} streamId={props.match.params.id} />
  </div>
)

export default StreamUpdate;
