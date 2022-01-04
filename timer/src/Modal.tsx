import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import './style.css';

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    borderRadius: `20px`,
    backgroundColor: `grey`,
    fontFamily: `"Lucida Console", "Courier New", monospace`,
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }),
);

interface IAModal {
    open: boolean,
    handleClose: () => void,
}

const SimpleModal: React.FC<IAModal> = ({ open, handleClose}) => {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h2 className="modal" id="simple-modal-title">TIME'S UP</h2>
      <p className="modal" id="simple-modal-description">
        IT'S TIME FOR A BREAK.
      </p>
      {/* <SimpleModal /> */}
    </div>
  );

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}

export default SimpleModal;