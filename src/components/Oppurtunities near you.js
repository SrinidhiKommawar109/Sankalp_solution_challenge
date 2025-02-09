// OpportunitiesNearYou.js
const opportunities = [
  {
    id: 1,
    type: 'Investment in Banks',
    description: 'Investing in bank deposits or fixed deposits provides safety and stability with guaranteed returns.',
    riskLevel: 'Low',
    image: 'bank.jpg',
    links : '/bank'
  },
  {
    id: 2,
    type: 'Investment in Industries',
    description: 'Investing in industries such as manufacturing, tech, and energy can offer higher returns but increased risk.',
    riskLevel: 'High',
    image: 'ind.jpg',
    links : 'http://127.0.0.1:5000'
  },
  {
    id: 3,
    type: 'Referral Rewards Program',
    description: 'Earn rewards by sharing the website and educating your friends about various investment opportunities.',
    riskLevel: 'None',
    image: 'referal.jpg',
    links: 'EducateAndEarn'
  },
  {
    id: 4,
    type: 'Startup Investment Assistance',
    description: 'Let us invest and provide initial capital for your venture, helping you kickstart your business ideas.',
    riskLevel: 'Medium',
    image: 'Startup.jpg',
    links: 'JoinMission'
  }
];

export default opportunities;
