import React from 'react';
import { PreviewWrapper, PreviewBackground } from './index.style';
import PreviewSlot from './components/Slot';

const Preview = () => {
  const slots = [
    {
      response: 'success',
      id: '70',
      name: 'Batman',
      powerstats: {
        intelligence: '100',
        strength: '26',
        speed: '27',
        durability: '50',
        power: '47',
        combat: '100'
      },
      biography: {
        'full-name': 'Bruce Wayne',
        'alter-egos': 'No alter egos found.',
        aliases: ['Insider', 'Matches Malone'],
        'place-of-birth': 'Crest Hill, Bristol Township; Gotham County',
        'first-appearance': 'Detective Comics #27',
        publisher: 'DC Comics',
        alignment: 'good'
      },
      appearance: {
        gender: 'Male',
        race: 'Human',
        height: ["6'2", '188 cm'],
        weight: ['210 lb', '95 kg'],
        'eye-color': 'blue',
        'hair-color': 'black'
      },
      work: {
        occupation: 'Businessman',
        base:
          'Batcave, Stately Wayne Manor, Gotham City; Hall of Justice, Justice League Watchtower'
      },
      connections: {
        'group-affiliation':
          'Batman Family, Batman Incorporated, Justice League, Outsiders, Wayne Enterprises, Club of Heroes, formerly White Lantern Corps, Sinestro Corps',
        relatives:
          'Damian Wayne (son), Dick Grayson (adopted son), Tim Drake (adopted son), Jason Todd (adopted son), Cassandra Cain (adopted ward)\nMartha Wayne (mother, deceased), Thomas Wayne (father, deceased), Alfred Pennyworth (former guardian), Roderick Kane (grandfather, deceased), Elizabeth Kane (grandmother, deceased), Nathan Kane (uncle, deceased), Simon Hurt (ancestor), Wayne Family'
      },
      image: {
        url: 'https://www.superherodb.com/pictures2/portraits/10/100/639.jpg'
      }
    },
    {
      response: 'success',
      id: '47',
      name: 'Astro Boy',
      powerstats: {
        intelligence: 'null',
        strength: '90',
        speed: 'null',
        durability: 'null',
        power: 'null',
        combat: 'null'
      },
      biography: {
        'full-name': 'Atom',
        'alter-egos': 'No alter egos found.',
        aliases: ['-'],
        'place-of-birth': '-',
        'first-appearance': '-',
        publisher: 'null',
        alignment: 'good'
      },
      appearance: {
        gender: 'Male',
        race: 'null',
        height: ['-', '0 cm'],
        weight: ['- lb', '0 kg'],
        'eye-color': 'Brown',
        'hair-color': 'Black'
      },
      work: { occupation: '-', base: '-' },
      connections: { 'group-affiliation': '-', relatives: '-' },
      image: {
        url: 'https://www.superherodb.com/pictures2/portraits/10/100/1159.jpg'
      }
    }
  ];

  return (
    <PreviewBackground>
      <PreviewWrapper className="container">
        {slots.map(item => (
          <PreviewSlot
            key={item.id}
            name={item.name}
            biography={item.biography}
            image={item.image}
          />
        ))}
      </PreviewWrapper>
    </PreviewBackground>
  );
};

export default Preview;
