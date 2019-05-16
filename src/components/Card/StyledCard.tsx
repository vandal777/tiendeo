import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import photo from '../../img/default-placeholder.png';
import { ICard } from '../../store/cards/types';
import { editCardAsync, deleteCard } from '../../store/cards/actions';
import { openEditModal } from '../../store/modal/actions';
import { connect } from 'react-redux';

const styles = {
  card: {
    maxWidth: 345,
    width: 300,
    margin: 20
  },
  media: {
    height: 140
  }
};

function MediaCard(props: any) {
  const { classes } = props;
  const card: ICard = props;
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={photo}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {card.title}
          </Typography>
          <Typography component="p">{card.description}</Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          size="small"
          color="primary"
          onClick={() => props.editCard(card)}
        >
          Edit
        </Button>
        <Button
          size="small"
          color="primary"
          onClick={() => props.deleteCard(card.id)}
        >
          Delete{' '}
        </Button>
      </CardActions>
    </Card>
  );
}

MediaCard.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    editCard: (card: ICard) =>
      dispatch(editCardAsync(card)).then(() => dispatch(openEditModal())),
    deleteCard: (idCard: number) => dispatch(deleteCard(idCard))
  };
};

const StyledCard = withStyles(styles)(MediaCard);

export default connect(
  null,
  mapDispatchToProps
)(StyledCard);
