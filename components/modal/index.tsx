import React from 'react';
import {
   Modal,
   Input,
   Row,
   Checkbox,
   Button,
   Text,
   Navbar,
   Textarea,
} from '@nextui-org/react';

export const ModalLogin = () => {
   const [visible, setVisible] = React.useState(false);
   const handler = () => setVisible(true);
   const closeHandler = () => {
      setVisible(false);
      console.log('closed');
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
                  placeholder="Email"
                  //   contentLeft={<Mail fill="currentColor" />}
               />
            
               <Textarea
                   bordered
                   fullWidth
                   color="primary"
                   size="lg"
                   placeholder="message"
               />
          
            </Modal.Body>
            <Modal.Footer>
         
               <Button auto onClick={closeHandler}>
                  send
               </Button>
            </Modal.Footer>
         </Modal>
      </div>
   );
};
