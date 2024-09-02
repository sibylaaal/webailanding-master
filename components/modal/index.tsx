import React, { useState } from 'react';
import {
   Modal,
   Input,
   Textarea,
   Button,
   Text,
   Navbar,
} from '@nextui-org/react';

export const ModalLogin = () => {
   const [visible, setVisible] = useState(false);
   const [email, setEmail] = useState('');
   const [message, setMessage] = useState('');
   const [sending, setSending] = useState(false);

   const handler = () => setVisible(true);
   const closeHandler = () => {
      setVisible(false);
      setEmail('');
      setMessage('');
   };

   const redirectToWhatsApp = () => {
      setSending(true);

      // Create a WhatsApp URL with a pre-filled message
      const whatsappUrl = `https://wa.me/0769518824?text=${encodeURIComponent(`Message from: ${email}\n\n${message}`)}`;

      // Redirect to the WhatsApp URL
      window.location.href = whatsappUrl;

      // Reset sending state
      setSending(false);
      closeHandler();
   };

   return (
      <div>
         <Navbar.Link onClick={handler}>Contact us</Navbar.Link>
         <Modal
            closeButton
            blur
            aria-labelledby="modal-title"
            open={visible}
            onClose={closeHandler}
         >
            <Modal.Header>
               <Text id="modal-title" size={18}>
                  Welcome to
                  <Text b size={18}>
                     Webai
                  </Text>
               </Text>
            </Modal.Header>
            <Modal.Body>
               <Input
                  clearable
                  bordered
                  fullWidth
                  color="primary"
                  size="lg"
                  placeholder="Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
               />
               <Textarea
                  bordered
                  fullWidth
                  color="primary"
                  size="lg"
                  placeholder="Your Message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
               />
            </Modal.Body>
            <Modal.Footer>
               <Button auto onClick={redirectToWhatsApp} disabled={sending}>
                  {sending ? 'Sending...' : 'Send'}
               </Button>
            </Modal.Footer>
         </Modal>
      </div>
   );
};
