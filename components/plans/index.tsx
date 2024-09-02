import { Flex } from '../styles/flex';
import { Button, Card, Divider, Grid, Text } from '@nextui-org/react';
import React from 'react';
import { CheckIcon } from '../icons/CheckIcon';
import { Box } from '../styles/box';

export const Plans = () => {
  return (
    <>
      <Flex
        css={{ py: '$20', gap: '1rem', px: '$6' }}
        justify={'center'}
        wrap={'wrap'}
        direction={'column'}
        align={'center'}
      >
        <Flex className='text-3xl font-bold' direction={'column'} align={'center'}>
          <Text span css={{ color: '$blue600' }}>
            PACKS POUR LA CRÉATION DE SITE WEB OU BOUTIQUE ONLINE
          </Text>
          <Text className='pb-5' h2>Nos Offres</Text>
        </Flex>

        <Flex
          css={{ gap: '2rem', width: '100%' }}
          wrap={'wrap'}
          justify={'center'}
        >
          {/* Pack Standard */}
          <Card css={{ p: '$6', mw: '400px' }}>
            <Card.Header>
              <Grid.Container css={{ pl: '$6' }}>
                <Grid xs={12}>
                  <Text className='text-3xl font-bold' h4 css={{ lineHeight: '$xs' }}>
                    Pack Standard
                  </Text>
                </Grid>
                <Text className='text-3xl font-bold p-2' h4 css={{ lineHeight: '$xs', color: '$blue600' }}>
                  1500dh
                </Text>
              </Grid.Container>
            </Card.Header>
            <Card.Body css={{ py: '$4' }}>
              <Button css={{ mt: '$7', mb: '$12' }}>
              
              <a href="https://wa.me/212769518824?text=Je%20suis%20int%C3%A9ress%C3%A9%20par%20le%20Pack%20Standar%20de%201500dh." target="_blank" rel="noopener noreferrer">

Get Started

</a>
                </Button>
              <Divider />
              <Box as={'ul'}>
                <Flex as={'li'} css={{ py: '$2', gap: '$2' }} align={'center'}>
                  <CheckIcon />
                  <Text span>Création Site Web Dynamique</Text>
                </Flex>
                <Flex as={'li'} css={{ py: '$2', gap: '$2' }} align={'center'}>
                  <CheckIcon />
                  <Text span>WEB 2.0 OnePage Design</Text>
                </Flex>
                <Flex as={'li'} css={{ py: '$2', gap: '$2' }} align={'center'}>
                  <CheckIcon />
                  <Text span>Logo Design</Text>
                </Flex>
                <Flex as={'li'} css={{ py: '$2', gap: '$2' }} align={'center'}>
                  <CheckIcon />
                  <Text span>Nom de Domaine .MA .COM etc</Text>
                </Flex>
                <Flex as={'li'} css={{ py: '$2', gap: '$2' }} align={'center'}>
                  <CheckIcon />
                  <Text span>Système de Gestion de Contenu</Text>
                </Flex>
                <Flex as={'li'} css={{ py: '$2', gap: '$2' }} align={'center'}>
                  <CheckIcon />
                  <Text span>Hébergement Rapide SSD</Text>
                </Flex>
                <Flex as={'li'} css={{ py: '$2', gap: '$2' }} align={'center'}>
                  <CheckIcon />
                  <Text span>15 Boîte E-mail @votreentreprise.com</Text>
                </Flex>
                <Flex as={'li'} css={{ py: '$2', gap: '$2' }} align={'center'}>
                  <CheckIcon />
                  <Text span>Positionnement en Google Maps</Text>
                </Flex>
                <Flex as={'li'} css={{ py: '$2', gap: '$2' }} align={'center'}>
                  <CheckIcon />
                  <Text span>Indexation sur Google Search</Text>
                </Flex>
                <Flex as={'li'} css={{ py: '$2', gap: '$2' }} align={'center'}>
                  <CheckIcon />
                  <Text span>Création Page Professionnelle sur Facebook</Text>
                </Flex>
                <Flex as={'li'} css={{ py: '$2', gap: '$2' }} align={'center'}>
                  <CheckIcon />
                  <Text span>Carte de visite en HD</Text>
                </Flex>
                <Flex as={'li'} css={{ py: '$2', gap: '$2' }} align={'center'}>
                  <CheckIcon />
                  <Text span>Support à Distance 7/7</Text>
                </Flex>
              </Box>
            </Card.Body>
          </Card>

          {/* Pack Sur Mesure */}
          <Card css={{ p: '$6', mw: '400px' }}>
            <Card.Header>
              <Grid.Container css={{ pl: '$6' }}>
                <Grid xs={12}>
                  <Text className='text-3xl font-bold' h4 css={{ lineHeight: '$xs' }}>
                    Pack Sur Mesure
                  </Text>
                </Grid>
                
                <Text className='text-3xl font-bold p-2' h4 css={{ lineHeight: '$xs', color: '$blue600' }}>
                  7000dh
                </Text>
              </Grid.Container>
            </Card.Header>
            <Card.Body css={{ py: '$4' }}>
              <Button css={{ mt: '$7', mb: '$12' }}>
              <a href="https://wa.me/212769518824?text=Je%20suis%20int%C3%A9ress%C3%A9%20par%20le%20Pack%20packsurmesure%20de%201500dh." target="_blank" rel="noopener noreferrer">

                Get Started
                
                </a>
                </Button>
              <Divider />
              <Box as={'ul'}>
                <Flex as={'li'} css={{ py: '$2', gap: '$2' }} align={'center'}>
                  <CheckIcon />
                  <Text span>Création Site Web Dynamique</Text>
                </Flex>
                <Flex as={'li'} css={{ py: '$2', gap: '$2' }} align={'center'}>
                  <CheckIcon />
                  <Text span>WEB 2.0 OnePage Design</Text>
                </Flex>
                <Flex as={'li'} css={{ py: '$2', gap: '$2' }} align={'center'}>
                  <CheckIcon />
                  <Text span>Logo PRO Design</Text>
                </Flex>
                <Flex as={'li'} css={{ py: '$2', gap: '$2' }} align={'center'}>
                  <CheckIcon />
                  <Text span>Nom de Domaine .MA .COM etc</Text>
                </Flex>
                <Flex as={'li'} css={{ py: '$2', gap: '$2' }} align={'center'}>
                  <CheckIcon />
                  <Text span>Système de Gestion de Contenu</Text>
                </Flex>
                <Flex as={'li'} css={{ py: '$2', gap: '$2' }} align={'center'}>
                  <CheckIcon />
                  <Text span>Accès BackOffice</Text>
                </Flex>
                <Flex as={'li'} css={{ py: '$2', gap: '$2' }} align={'center'}>
                  <CheckIcon />
                  <Text span>Automatisation des Forces de Vente</Text>
                </Flex>
                <Flex as={'li'} css={{ py: '$2', gap: '$2' }} align={'center'}>
                  <CheckIcon />
                  <Text span>Gestion des Utilisateurs</Text>
                </Flex>
                <Flex as={'li'} css={{ py: '$2', gap: '$2' }} align={'center'}>
                  <CheckIcon />
                  <Text span>Hébergement Rapide SSD</Text>
                </Flex>
                <Flex as={'li'} css={{ py: '$2', gap: '$2' }} align={'center'}>
                  <CheckIcon />
                  <Text span>Illimité - Boîte E-mail @votreentreprise.com</Text>
                </Flex>
                <Flex as={'li'} css={{ py: '$2', gap: '$2' }} align={'center'}>
                  <CheckIcon />
                  <Text span>Positionnement en Google Maps</Text>
                </Flex>
                <Flex as={'li'} css={{ py: '$2', gap: '$2' }} align={'center'}>
                  <CheckIcon />
                  <Text span>Indexation sur Google Search</Text>
                </Flex>
                <Flex as={'li'} css={{ py: '$2', gap: '$2' }} align={'center'}>
                  <CheckIcon />
                  <Text span>1 Optimisation SEO</Text>
                </Flex>
                <Flex as={'li'} css={{ py: '$2', gap: '$2' }} align={'center'}>
                  <CheckIcon />
                  <Text span>Création Page Professionnelle sur Facebook</Text>
                </Flex>
                <Flex as={'li'} css={{ py: '$2', gap: '$2' }} align={'center'}>
                  <CheckIcon />
                  <Text span>Integration SDK de Facebook</Text>
                </Flex>
                <Flex as={'li'} css={{ py: '$2', gap: '$2' }} align={'center'}>
                  <CheckIcon />
                  <Text span>1000 Likes sur Facebook</Text>
                </Flex>
                <Flex as={'li'} css={{ py: '$2', gap: '$2' }} align={'center'}>
                  <CheckIcon />
                  <Text span>Carte de visite en HD</Text>
                </Flex>
                <Flex as={'li'} css={{ py: '$2', gap: '$2' }} align={'center'}>
                  <CheckIcon />
                  <Text span>Support à Distance 7/7</Text>
                </Flex>
              </Box>
            </Card.Body>
          </Card>

          {/* Pack E-Commerce */}
          <Card css={{ p: '$6', mw: '400px' }}>
            <Card.Header>
              <Grid.Container css={{ pl: '$6' }}>
                <Grid xs={12}>
                  <Text className='text-3xl font-bold' h4 css={{ lineHeight: '$xs' }}>
                    Pack E-Commerce
                  </Text>
                </Grid>
                <Text className='text-3xl font-bold p-2' h4 css={{ lineHeight: '$xs', color: '$blue600' }}>
                  3000dh
                </Text>
              </Grid.Container>
            </Card.Header>
            <Card.Body css={{ py: '$4' }}>
              <Button css={{ mt: '$7', mb: '$12' }}>
                
              <a href="https://wa.me/212769518824?text=Je%20suis%20int%C3%A9ress%C3%A9%20par%20le%20Pack%20E-Commerce%20de%201500dh." target="_blank" rel="noopener noreferrer">

Get Started

</a>                
                </Button>
              <Divider />
              <Box as={'ul'}>
                <Flex as={'li'} css={{ py: '$2', gap: '$2' }} align={'center'}>
                  <CheckIcon />
                  <Text span>Création Site E-Commerce</Text>
                </Flex>
                <Flex as={'li'} css={{ py: '$2', gap: '$2' }} align={'center'}>
                  <CheckIcon />
                  <Text span>WEB 2.0 OnePage Design</Text>
                </Flex>
                <Flex as={'li'} css={{ py: '$2', gap: '$2' }} align={'center'}>
                  <CheckIcon />
                  <Text span>Logo PRO Design</Text>
                </Flex>
                <Flex as={'li'} css={{ py: '$2', gap: '$2' }} align={'center'}>
                  <CheckIcon />
                  <Text span>Nom de Domaine .MA .COM etc</Text>
                </Flex>
                <Flex as={'li'} css={{ py: '$2', gap: '$2' }} align={'center'}>
                  <CheckIcon />
                  <Text span>Système de Gestion de Contenu</Text>
                </Flex>
                <Flex as={'li'} css={{ py: '$2', gap: '$2' }} align={'center'}>
                  <CheckIcon />
                  <Text span>Accès BackOffice</Text>
                </Flex>
                <Flex as={'li'} css={{ py: '$2', gap: '$2' }} align={'center'}>
                  <CheckIcon />
                  <Text span>Automatisation des Forces de Vente</Text>
                </Flex>
                <Flex as={'li'} css={{ py: '$2', gap: '$2' }} align={'center'}>
                  <CheckIcon />
                  <Text span>Gestion des Utilisateurs</Text>
                </Flex>
                <Flex as={'li'} css={{ py: '$2', gap: '$2' }} align={'center'}>
                  <CheckIcon />
                  <Text span>Hébergement Rapide SSD</Text>
                </Flex>
                <Flex as={'li'} css={{ py: '$2', gap: '$2' }} align={'center'}>
                  <CheckIcon />
                  <Text span>Illimité - Boîte E-mail @votreentreprise.com</Text>
                </Flex>
                <Flex as={'li'} css={{ py: '$2', gap: '$2' }} align={'center'}>
                  <CheckIcon />
                  <Text span>Positionnement en Google Maps</Text>
                </Flex>
                <Flex as={'li'} css={{ py: '$2', gap: '$2' }} align={'center'}>
                  <CheckIcon />
                  <Text span>Indexation sur Google Search</Text>
                </Flex>
                <Flex as={'li'} css={{ py: '$2', gap: '$2' }} align={'center'}>
                  <CheckIcon />
                  <Text span>Optimisation SEO</Text>
                </Flex>
                <Flex as={'li'} css={{ py: '$2', gap: '$2' }} align={'center'}>
                  <CheckIcon />
                  <Text span>Création Page Professionnelle sur Facebook</Text>
                </Flex>
                <Flex as={'li'} css={{ py: '$2', gap: '$2' }} align={'center'}>
                  <CheckIcon />
                  <Text span>Integration SDK de Facebook</Text>
                </Flex>
                <Flex as={'li'} css={{ py: '$2', gap: '$2' }} align={'center'}>
                  <CheckIcon />
                  <Text span>5000 Likes sur Facebook</Text>
                </Flex>
                <Flex as={'li'} css={{ py: '$2', gap: '$2' }} align={'center'}>
                  <CheckIcon />
                  <Text span>Carte de visite en HD</Text>
                </Flex>
                <Flex as={'li'} css={{ py: '$2', gap: '$2' }} align={'center'}>
                  <CheckIcon />
                  <Text span>Support à Distance 7/7</Text>
                </Flex>
              </Box>
            </Card.Body>
          </Card>
        </Flex>
      </Flex>
    </>
  );
};
