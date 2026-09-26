export type Reward = {
  id: string;
  title: string;
  minimumPledge: number;
  description: string;
  stock: number;
};

export const project = {
  name: "Mastercraft Bamboo Monitor Riser",
  tagline:
    "A beautiful & handcrafted monitor stand to reduce neck and eye strain.",
  goal: 100_000,
  maxPledge: 10_000,
  raised: 89_914,
  backers: 5_007,
  daysLeft: 56,
  about: [
    "The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your screen to a more comfortable viewing height. Placing your monitor at eye level has the potential to improve your posture and make you more comfortable while at work, helping you stay focused on the task at hand.",
    "Featuring artisan craftsmanship, the simplicity of design creates extra desk space below your computer to allow notepads, pens, and USB sticks to be stored under the stand.",
  ],
};

export const rewards: Reward[] = [
  {
    id: "bamboo-stand",
    title: "Bamboo Stand",
    minimumPledge: 25,
    description:
      "You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list.",
    stock: 101,
  },
  {
    id: "black-edition-stand",
    title: "Black Edition Stand",
    minimumPledge: 75,
    description:
      "You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included.",
    stock: 64,
  },
  {
    id: "mahogany-special-edition",
    title: "Mahogany Special Edition",
    minimumPledge: 200,
    description:
      "You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included.",
    stock: 0,
  },
];

export const noReward = {
  id: "no-reward",
  title: "Pledge with no reward",
  minimumPledge: 1,
  description:
    "Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email.",
};
