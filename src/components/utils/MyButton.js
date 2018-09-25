import React from 'react';
import Button from '@material-ui/core/Button';

import TicketIcon from '../../resources/images/icons/ticket.png';

const MyButton = props => (
  <Button
    variant="contained"
    size="small"
    href={props.link}
    style={{
      background: props.background,
      color: props.color,
    }}
  >
    <img src={TicketIcon} alt="icon" className="iconImage" />
    {props.text}
  </Button>
);

export default MyButton;
