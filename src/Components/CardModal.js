import React, { useState } from 'react';
import { Button, Form, Header, Image, Modal, TextArea } from 'semantic-ui-react';
import swal from 'sweetalert';
import url from "../urlHelper";

const CardModal = props => {

  const { card, open, setOpen, creds, getCards } = props;

  const [quantity, setQuantity] = useState(card.quantity)
  const [notes, setNotes] = useState(card.notes)

  const handleSubmit = () => {
    let newCardInfo = {
      quantity: quantity,
      notes: notes
    }
    fetch(`${url}/cards/${card.id}`, {
      method: "PATCH",
      headers: {
        "Authorization": `Bearer ${creds.jwt}`,
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(newCardInfo)
    })
    .then(resp => resp.json())
    .then(() => {getCards();setOpen(false)})
    .then(() => swal(`${card.name} Updated!`, `Your ${card.name} card info has been updated!`, "success"))
  }

  return (
    <Modal onClose={() => setOpen(false)} onOpen={() => setOpen(true)} open={open}>
      <Modal.Header>{card.name}</Modal.Header>
      <Modal.Content image>
        <Image size='medium' src={card.image} wrapped />
        <Modal.Description>
          <Header>{card.name} - {card.set}</Header>
          <p>Notes:</p>
          <Form>
            <TextArea value={notes} rows={4} onChange={e => setNotes(e.target.value)}/>
          </Form>
          <br />
          <p>Number owned: {quantity}</p>
        <Button color="green" onClick={() => {setQuantity(quantity + 1)}}>+</Button>
        <Button color="red" disabled={quantity < 1} onClick={() => setQuantity(quantity - 1)}>-</Button>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button color='red' onClick={() => setOpen(false)}>Cancel</Button>
        <Button
          content="Submit Changes"
          labelPosition='right'
          icon='checkmark'
          onClick={() => {setOpen(false);handleSubmit()}}
          positive
          disabled={ quantity === card.quantity && notes === card.notes }
        />
      </Modal.Actions>
    </Modal>
  )
}

export default CardModal;