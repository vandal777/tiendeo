import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import "./style.css";
import { connect } from "react-redux";
import { openModal } from '../../../store/modal/actions';

const styles = (theme: any) => ({
  fab: {
    margin: theme.spacing.unit
  }
});

const ButtonAddComponent = (props: any) => {
  const { classes } = props;
  return (
    <div className={"button-add-container"}>
      <Fab
        color="primary"
        aria-label="Add"
        className={classes.fab}
        onClick={props.openModal}
      >
        <AddIcon />
      </Fab>
    </div>
  );
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    openModal: () => dispatch(openModal())
  }
}

const ButtonAdd = withStyles(styles)(ButtonAddComponent);

export default connect(null, mapDispatchToProps)(ButtonAdd);
