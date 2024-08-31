import { Button, Divider, Grid, Text } from '@nextui-org/react';
import React from 'react';
import { AcmeLogo } from '../navbar/logo';
import { Flex } from '../styles/flex';

export const Trusted = () => {
   return (
      <>
         <Flex
            direction={'column'}
            align={'center'}
            css={{
               'pt': '$20',
               'px': '$6',
               '@md': {
                  px: '$64',
               },
            }}
         >
            <Text className='text-3xl font-bold' h2 css={{ textAlign: 'center' }}>
               Working with New technologies
            </Text>
            <Text
               css={{
                  color: '$accents8',
                  maxWidth: '800px',
                  textAlign: 'center',
               }}
               weight="normal"
               size={'$lg'}
            >
               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
               eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Text>
            <Grid.Container
               gap={6}
               alignItems="center"
               justify="center"
               css={{
                  'width': '100%',
                  '@sm': {
                     width: '100%',
                  },
                  '&  span': {
                     whiteSpace: 'pre',
                  },
               }}
            >
               <Grid xs={6} sm={3} justify="center">
                  <Flex align={'center'} justify={'center'}>
                     <img 
                        className='responsive-img' 
                        src='https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png'
                        alt='React'
                     />
                  </Flex>
               </Grid>
               <Grid xs={6} sm={3} justify="center">
                  <Flex align={'center'}>
                     <img 
                        className='responsive-img' 
                        src='https://upload.wikimedia.org/wikipedia/commons/1/17/Google-flutter-logo.png'
                        alt='Flutter'
                     />
                  </Flex>
               </Grid>
               <Grid xs={6} sm={3} justify="center">
                  <Flex align={'center'}>
                     <img 
                        className='responsive-img' 
                        src='https://cdn-icons-png.flaticon.com/512/174/174881.png'
                        alt='GitHub'
                     />
                  </Flex>
               </Grid>
               <Grid xs={6} sm={3} justify="center">
                  <Flex align={'center'}>
                     <img 
                        className='responsive-img' 
                        src='https://upload.wikimedia.org/wikipedia/commons/f/f1/Vue.png'
                        alt='Vue.js'
                     />
                  </Flex>
               </Grid>
               <Grid xs={6} sm={2} justify="center">
                  <Flex align={'center'}>
                     <img 
                        className='responsive-img' 
                        src='https://static-00.iconduck.com/assets.00/nextjs-icon-2048x1234-pqycciiu.png'
                        alt='Next.js'
                     />
                  </Flex>
               </Grid>
               <Grid xs={6} sm={3} justify="center">
                  <Flex align={'center'}>
                     <img 
                        className='responsive-img' 
                        src='https://static-00.iconduck.com/assets.00/laravel-icon-497x512-uwybstke.png'
                        alt='Laravel'
                     />
                  </Flex>
               </Grid>
               <Grid xs={6} sm={3} justify="center">
                  <Flex align={'center'}>
                     <img 
                        className='responsive-img' 
                        src='https://www.manektech.com/storage/developer/1646733543.webp'
                        alt='Manektech'
                     />
                  </Flex>
               </Grid>
               <Grid xs={6} sm={3} justify="center">
                  <Flex align={'center'}>
                     <img 
                        className='responsive-img' 
                        src='https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/97_Docker_logo_logos-512.png'
                        alt='Docker'
                     />
                  </Flex>
               </Grid>
            </Grid.Container>
         </Flex>

         <Divider
            css={{ position: 'absolute', inset: '0p', left: '0', mt: '$5' }}
         />
      </>
   );
};
