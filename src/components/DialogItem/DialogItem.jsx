import React from 'react';

import { Link } from 'react-router-dom'


const DialogItem = (props) => {
  const link = `/dialogs/${props.id}`;

  return (
    <div className="dialogs__names-item">
      <Link to={link}>{props.name}</Link>
    </div>
  );
}

export default DialogItem;
