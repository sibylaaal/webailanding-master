import {Button, Divider, Text} from '@nextui-org/react';
import React from 'react';
import {Box} from '../styles/box';
import {Flex} from '../styles/flex';

export const Statistics = () => {
   return (
      <>
         <Box
            css={{
               pt: '$20',
               pb: '$16',
               px: '$6',
            }}
         >
            <Flex direction={'column'} align={'center'}>
               <Text
                  h3
                  className='text-3xl font-bold pb-5'
                  css={{ 
                     color: '$blue600' ,
                     textAlign: 'center',
                  }}
               >
                  Over 80+ projects completed
               </Text>
               <Text
                  span
                  css={{
                     maxWidth: '800px',
                     textAlign: 'center',
                  }}
               >
         With over 80 successful projects completed, we excel in delivering tailored solutions for your business needs. From mobile and web apps to custom websites, our expertise ensures your vision becomes a reality with cutting-edge technology.
               </Text>
            </Flex>
            <Flex
               direction={'row'}
               wrap={'wrap'}
               justify={'center'}
               css={{
                  'gap': '4rem',
                  'pt': '$16',
                  '@sm': {
                     gap: '10rem',
                  },
               }}
            >
               <Flex direction={'column'}>
                  <Text h2 css={{color: '$blue600'}}>
                     $50K+
                  </Text>
                  <Text span css={{textAlign: 'center'}} weight={'medium'}>
                     Revenue
                  </Text>
               </Flex>
               <Flex direction={'column'}>
                  <Text h2 css={{color: '$blue600'}}>
                     1+
                  </Text>
                  <Text span css={{textAlign: 'center'}} weight={'medium'}>
                     Products
                  </Text>
               </Flex>
               <Flex direction={'column'}>
                  <Text h2 css={{color: '$blue600'}}>
                     150+
                  </Text>
                  <Text span css={{textAlign: 'center'}} weight={'medium'}>
                     apps
                  </Text>
               </Flex>
               <Flex direction={'column'}>
                  <Text h2 css={{color: '$blue600'}}>
                     10+
                  </Text>
                  <Text span css={{textAlign: 'center'}} weight={'medium'}>
                     Employees
                  </Text>
               </Flex>
            </Flex>
         </Box>

         <Divider
            css={{position: 'absolute', inset: '0p', left: '0', mt: '$5'}}
         />
      </>
   );
};
