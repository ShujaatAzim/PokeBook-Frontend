import { useState, Fragment } from 'react';
import CardModal from './CardModal';

const Card = (props) => {
  const { card, creds, getCards, canEdit, a, i } = props;
  const [open, setOpen] = useState(false);

  return (
    <Fragment>
      <img
        className='card'
        style={{
          height: '15rem',
          margin: '0rem 0.5rem 0.5rem 0.5rem',
          opacity: a[i].quantity === 0 ? '40%' : '100%',
        }}
        src={a[i].image}
        alt={`${a[i].name}'s card pic from the ${a[i].set} set.`}
        onClick={() => setOpen(!open)}
      />
      {open ? (
        <CardModal
          card={card}
          creds={creds}
          open={open}
          setOpen={setOpen}
          getCards={getCards}
          canEdit={canEdit}
          count={props.count}
          setCount={props.setCount}
          i={props.i}
          a={props.a}
        />
      ) : null}
    </Fragment>
  );
};

export default Card;
