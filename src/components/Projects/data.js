import { backendNG, pumped, strangerThings, tfc, trivia } from '../../images';

export const projects = [
  {
    name: 'Cyber Trivia',
    description:
      'Cyber game with 80s styles! Developed in group during Trybe course.',
    technologies: [
      'React',
      'SASS',
      'Redux',
      'Testing Library',
      'Class Components',
    ],
    repository: 'https://github.com/Ranner106/triviaGame',
    deploy: 'https://gabrielhdn.github.io/cybertrivia/',
    image: trivia,
  },
  {
    name: 'Pumped',
    description:
      'Music player based on Spotify, you can add and remove favorited songs!!',
    technologies: ['React Router', 'React', 'JavaScript', 'CSS'],
    repository: 'https://github.com/Ranner106/pumpedApp',
    deploy: 'https://pumpedmusic.surge.sh/',
    image: pumped,
  },
  {
    name: 'Tabela do Brasileirão',
    description:
      'FullStack application, simulating the Brazilian championship table',
    technologies: ['Hooks', 'React', 'Node.js', 'Docker', 'MySQL'],
    repository: 'https://github.com/Ranner106/tabeladobrasileiro2',
    image: tfc,
  },
  {
    name: 'Stranger Things',
    description:
      'FullStack application, Fan page of the Stranger series with the inverted world function',
    technologies: ['Hooks', 'React', 'Node.js', 'Docker', 'MySQL'],
    repository: 'https://github.com/Ranner106/tabeladobrasileiro2',
    image: strangerThings,
  },
  {
    name: 'API de transferência Bancária',
    description:
      'development of an API for bank transfer of company employee accounts.',
    technologies: [
      'Node.js',
      'Docker',
      'PostgreSQL',
      'Sequelize',
      'TypeScript',
    ],
    repository: 'https://github.com/Ranner106/backendNG',
    image: backendNG,
  },
];
