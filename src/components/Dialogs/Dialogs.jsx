import React from 'react';

import DialogItem from '../DialogItem/DialogItem';
import DialogMsg from '../DialogMsg/DialogMsg';

const Dialogs = (props) => {
  const state = props.dialogPage;

  const addMsg = () => {
    props.addMsg();
  };

  const updateNewMsg = (e) => {
    const target = e.target.value;
    props.updateNewMsg(target);
  };

  return (
    <div className="content dialogs content-box">
      <h2>Dialogs</h2>
      <div className="dialogs__content">
        <div className="dialogs__names">
          {state.dialogData.map((item) => {
            return <DialogItem name={item.name} id={item.id} />;
          })}
        </div>
        <div className="dialogs__content-msgs">
          {state.msgData.map((item) => {
            return <DialogMsg msg={item.msg} />;
          })}
          <textarea
            className="dialogs__textarea  textarea"
            placeholder="Type Your Message"
            name="msg"
            onChange={updateNewMsg}
            value={state.newDialogMsg}
          ></textarea>
          <button onClick={addMsg} className="dialogs__send-btn">
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
