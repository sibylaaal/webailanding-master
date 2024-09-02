import { Divider, Text } from '@nextui-org/react';
import React from 'react';
import { AcmeLogo } from '../navbar/logo';
import { Box } from '../styles/box';
import { Flex } from '../styles/flex';
import { FaLinkedin, FaInstagram, FaWhatsapp } from 'react-icons/fa';


export const Footer = () => {
   return (
      <Flex
         css={{
            py: '$20',
            px: '$6',
         }}
      >
         <Box as={'footer'} css={{ width: '100%' }}>
            <Flex
               justify={'center'}
               wrap={'wrap'}
               align={'center'}
               css={{
                  'gap': '$10',
                  '& ul': {
                     margin: 0,
                  },
                  '@sm': {},
               }}
            >
               {/* Other sections of the footer */}

               <Flex
                  css={{ gap: '$5', w: '250px' }}
                  direction={'column'}
                  align={'center'}
               >
                  <Text h5>Follow Us</Text>
                  <Box as={'ul'} css={{ gap: '$5', listStyle: 'none', display: 'flex', justifyContent: 'center' }}>
                     <Box as={'li'}>
                        <a href="https://www.linkedin.com/company/web-aii/?viewAsMember=true" target="_blank" rel="noopener noreferrer">
                           <FaLinkedin size={24} style={{ color: '#0e76a8' }} />
                        </a>
                     </Box>
                     <Box as={'li'}>
                        <a href="https://www.instagram.com/web.artificials/" target="_blank" rel="noopener noreferrer">
                           <FaInstagram size={24} style={{ color: '#E1306C' }} />
                        </a>
                     </Box>
                     <Box as={'li'}>
                        <a href="https://wa.me/0769518824" target="_blank" rel="noopener noreferrer">
                           <FaWhatsapp size={24} style={{ color: '#25D366' }} />
                        </a>
                     </Box>
                  </Box>
               </Flex>
            </Flex>
            <Box
               css={{
                  'px': '$10',
                  '@md': {
                     px: '$56',
                  },
               }}
            >
               <Divider
                  css={{
                     mt: '$14',
                     display: 'flex',
                     justifyContent: 'center',
                  }}
               />
               <Flex
                  align={'center'}
                  wrap={'wrap'}
                  css={{
                     'pt': '$8',
                     'gap': '$10',
                     'justifyContent': 'center',
                     '@md': {
                        justifyContent: 'space-between',
                     },
                  }}
               >
                  <Flex
                     css={{
                        gap: '$10',
                     }}
                     wrap={'wrap'}
                  >
                     <AcmeLogo />
                  
                  </Flex>
                  <Flex
                     css={{
                        gap: '$6',
                     }}
                  >
                     <Text span css={{ color: '$accents8' }}>
                        Terms of Service
                     </Text>
                     <Text span css={{ color: '$accents8' }}>
                        Privacy Policy
                     </Text>
                  </Flex>
                  <Flex
                     css={{
                        gap: '$6',
                     }}
                  >
                     <Text span css={{ color: '$accents8' }}>
                        © Copyright 2024 webai Inc.
                     </Text>
                  </Flex>
               </Flex>
            </Box>
         </Box>
      </Flex>
   );
};
