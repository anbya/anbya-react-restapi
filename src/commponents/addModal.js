import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import AddCircleIcon from '@material-ui/icons/AddCircle';
// import Input from '@material-ui/core/Input';
import PersonListPost from './addform';

const useStyles = makeStyles(theme => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[2],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function AddModal() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      {/* <button type="button" onClick={handleOpen} style={{position:"fixed",bottom: "1em",right: "1em"}}>
      <AddCircleIcon></AddCircleIcon>
      </button> */}
      <a onClick={handleOpen} style={{position:"fixed",bottom: "1em",right: "1em",cursor:"pointer"}}><AddCircleIcon color="primary" fontSize="large"></AddCircleIcon></a>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2>Add Data To Api</h2>
            {/* <Input
                placeholder="Placeholder"
                inputProps={{
                'aria-label': 'description',
                }}
            />
            <br />
            <br />
            <button type="button" onClick={handleClose}>Close
            </button> */}
            <PersonListPost modalAddClose = {handleClose}/>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}