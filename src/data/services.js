import corteTesouraImg from '../components/serviços/img/corteTesoura.png';
import corteSocialImg from '../components/serviços/img/corteSocial.png';
import tesouraImg from '../components/serviços/img/tesoura.jpg';
import barbaImg from '../components/serviços/img/barba.png';
import degradeMaquinaImg from '../components/serviços/img/degrade.jfif';
import degradeNavalhadoImg from '../components/serviços/img/degradeNavalhado.jfif';
import sobrancelhaImg from '../components/serviços/img/sombran.jpg';

export const RESERVATION_PERCENTAGE = 0.5;

export const RESERVATION_RULE_TEXT = `Para confirmar a reserva, é necessário realizar o pagamento de ${RESERVATION_PERCENTAGE * 100}% do valor dos serviços.`;

export const CATEGORIES = {
  CABELO: 'cabelo',
  BARBA: 'barba',
  SOBRANCELHA: 'sobrancelha',
  PIGMENTACAO: 'pigmentacao',
};


export const CATEGORY_LABELS = [
  { id: CATEGORIES.CABELO, title: 'Cabelo' },
  { id: CATEGORIES.BARBA, title: 'Barba' },
  { id: CATEGORIES.SOBRANCELHA, title: 'Sobrancelha' },
  { id: CATEGORIES.PIGMENTACAO, title: 'Pigmentação e química' },
];


export const SERVICES = [
  {
    id: 'corte-tesoura',
    name: 'Corte na tesoura',
    price: 30,
    slots: 1,
    category: CATEGORIES.CABELO,
    image: tesouraImg,
    description: 'Corte feito na tesoura, com remodelação e acabamento natural e detalhado.',
  },
  {
    id: 'corte-social',
    name: 'Corte social',
    price: 25,
    slots: 1,
    category: CATEGORIES.CABELO,
    image: corteSocialImg,
    description: 'Corte versátil para o dia a dia, mantendo o visual limpo e apresentável.',
  },
  {
    id: 'degrade-maquina',
    name: 'Degrade máquina',
    price: 30,
    slots: 1,
    category: CATEGORIES.CABELO,
    image: degradeMaquinaImg,
    description: 'Laterais raspadas em degradê mais evidente, garantindo um visual estiloso.',
  },
  {
    id: 'degrade-navalhado',
    name: 'Degrade navalhado',
    price: 35,
    slots: 1,
    category: CATEGORIES.CABELO,
    image: degradeNavalhadoImg,
    description: 'Degradê feito com navalha, com acabamento mais definido e preciso.',
  },
  {
    id: 'corte-mullet',
    name: 'Corte mullet',
    price: 28,
    slots: 1,
    category: CATEGORIES.CABELO,
    image: corteSocialImg,
    description: 'Frente e laterais curtas com a parte de trás longa, unindo retrô e moderno.',
  },
  {
    id: 'corte-americano',
    name: 'Corte americano',
    price: 28,
    slots: 1,
    category: CATEGORIES.CABELO,
    image: corteSocialImg,
    description: 'Laterais curtas e topo mais longo, oferecendo um visual clássico e atemporal.',
  },
  {
    id: 'corte-jaca',
    name: 'Corte do jaca',
    price: 38,
    slots: 1,
    category: CATEGORIES.CABELO,
    image: corteSocialImg,
    description: 'Volume no topo com laterais limpas, ideal para um visual marcante.',
  },
  {
    id: 'degrade-moicano',
    name: 'Degrade moicano',
    price: 30,
    slots: 1,
    category: CATEGORIES.CABELO,
    image: degradeMaquinaImg,
    description: 'Laterais raspadas e topo alongado, destacando atitude e estilo.',
  },
  {
    id: 'barba',
    name: 'Barba',
    price: 15,
    slots: 1,
    category: CATEGORIES.BARBA,
    image: barbaImg,
    description: 'Remoção completa da barba com navalha, garantindo um barbear rente e confortável.',
  },
  {
    id: 'barba-desenhada',
    name: 'Barba desenhada',
    price: 18,
    slots: 1,
    category: CATEGORIES.BARBA,
    image: barbaImg,
    description: 'Contornos definidos na navalha, realçando o rosto com estilo.',
  },
  {
    id: 'barba-degrade',
    name: 'Barba degradê',
    price: 23,
    slots: 1,
    category: CATEGORIES.BARBA,
    image: barbaImg,
    description: 'Lateral baixa e topo alinhado, ideal para um visual elegante.',
  },
  {
    id: 'aparar-barba',
    name: 'Aparar barba',
    price: 5,
    slots: 1,
    category: CATEGORIES.BARBA,
    image: barbaImg,
    description: 'Apenas aparagem da barba, mantendo o comprimento atual.',
  },
  {
    id: 'bigode',
    name: 'Bigode',
    price: 4,
    slots: 1,
    category: CATEGORIES.BARBA,
    image: barbaImg,
    description: 'Contorno e aparagem do bigode com navalha.',
  },
  {
    id: 'pezinho',
    name: 'Pezinho',
    price: 7,
    slots: 1,
    category: CATEGORIES.BARBA,
    image: degradeMaquinaImg,
    description: 'Remodelação e acabamento do contorno na nuca com navalha.',
  },
  {
    id: 'sobrancelha',
    name: 'Sobrancelha',
    price: 8,
    slots: 1,
    category: CATEGORIES.SOBRANCELHA,
    image: sobrancelhaImg,
    description: 'Alinhamento e remoção dos pelos, deixando a sobrancelha definida.',
  },
  {
    id: 'pig-corte',
    name: 'Pigmentação no corte',
    price: 20,
    slots: 1,
    category: CATEGORIES.PIGMENTACAO,
    image: corteTesouraImg,
    description: 'Pigmentação aplicada no corte para disfarçar áreas de cabelo branco.',
  },
  {
    id: 'pig-barba',
    name: 'Pigmentação na barba',
    price: 20,
    slots: 1,
    category: CATEGORIES.PIGMENTACAO,
    image: barbaImg,
    description: 'Pigmentação aplicada na barba para uniformizar o tom e cobrir falhas.',
  },
  {
    id: 'reflexo-alinhado',
    name: 'Reflexo alinhado',
    price: 65,
    slots: 1,
    category: CATEGORIES.PIGMENTACAO,
    image: tesouraImg,
    description: 'Reflexo na altura dos olhos, mantendo a cor e disfarçando o crescimento.',
  },
  {
    id: 'luzes',
    name: 'Luzes',
    price: 60,
    slots: 1,
    category: CATEGORIES.PIGMENTACAO,
    image: tesouraImg,
    description: 'Luzes pontuais ou globais para clarear e dar profundidade ao cabelo.',
  },
  {
    id: 'nevou',
    name: 'Nevou',
    price: 120,
    slots: 1,
    category: CATEGORIES.PIGMENTACAO,
    image: tesouraImg,
    description: 'Descoloração global com matização, para um loiro uniforme e iluminado.',
  },
];

export const getServiceById = (id) => SERVICES.find((service) => service.id === id) ?? null;

export const resolveServices = (ids = []) =>
  ids.map((id) => getServiceById(id)).filter(Boolean);

export const getServicesByCategory = (category, services = SERVICES) =>
  services.filter((service) => service.category === category);

export const getCategoryTitle = (category) =>
  CATEGORY_LABELS.find((label) => label.id === category)?.title ?? '';

export const getLowestPrice = (services = SERVICES) =>
  Math.min(...services.map((service) => service.price));
