import { Card, Divider, Text } from '@nextui-org/react';
import React from 'react';
import { Box } from '../styles/box';
import { Flex } from '../styles/flex';

export const Features3 = () => {
  return (
    <>
      <Box
        css={{
          px: '$6',
          pb: '$14',
        }}
      >
        <Flex
          direction={'column'}
          justify={'center'}
          align={'center'}
          css={{
            pt: '$20',
          }}
        >
          <Text className="text-3xl font-bold" span css={{ color: '$blue600' }}>
            Our Products
          </Text>
          <Text h3>Empowering Your Business with Innovation</Text>
          <Text
            span
            css={{
              maxWidth: '800px',
              color: '$accents8',
              textAlign: 'center',
            }}
          >
            We create tailored solutions that leverage the latest technologies to help your business thrive. Whether its mobile apps, web apps, or custom websites, we bring your vision to life.
          </Text>
        </Flex>

        <Flex
          align={'center'}
          justify={'center'}
          wrap={'wrap'}
          css={{
            gap: '1rem',
            pt: '$14',
          }}
        >
          <Card css={{ mw: '500px' }}>
            <Card.Body>
              <Flex css={{ gap: '0.5rem' }}>
                <img src='/hajam.png' className='rounded-xl' alt="7ajam Logo" style={{ width: '50px', height: '50px' }} />
                <Flex direction={'column'}>
                  <Text className='font-bold' h5>
                    <a href="https://hajam.ma" target="_blank" rel="noopener noreferrer">
                      7ajam.ma
                    </a>
                  </Text>
                  <Text className=' ' css={{color:'$accents8'}} span>
                    Our SaaS platform is tailor-made for barbers, providing all the tools you need to manage your business efficiently. From scheduling appointments to managing customer profiles, 7ajam.ma simplifies your operations so you can focus on what you do best.
                  </Text>
                </Flex>
              </Flex>
            </Card.Body>
          </Card>

          <Card css={{ mw: '500px' }}>
            <Card.Body>
              <Flex css={{ gap: '0.5rem' }}>
                <img src='/hajam.png' className='rounded-xl' alt="7ajam Logo" style={{ width: '50px', height: '50px' }} />
                <Flex direction={'column'}>
                  <Text className='font-bold' h5>
                    <a href="https://hajam.ma" target="_blank" rel="noopener noreferrer">
                      7ajam.ma
                    </a>
                  </Text>
                  <Text className=' ' css={{color:'$accents8'}} span>
                    Our SaaS platform is tailor-made for barbers, providing all the tools you need to manage your business efficiently. From scheduling appointments to managing customer profiles, 7ajam.ma simplifies your operations so you can focus on what you do best.
                  </Text>
                </Flex>
              </Flex>
            </Card.Body>
          </Card>
        </Flex>

        <Flex
          align={'center'}
          wrap={'wrap'}
          justify={'center'}
          css={{
            gap: '1rem',
            pt: '$8',
          }}
        >
     
        </Flex>
      </Box>

      <Divider
        css={{ position: 'absolute', inset: '0', left: '0', mt: '$5' }}
      />
    </>
  );
};
