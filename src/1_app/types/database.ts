import onion from '../../3_widgets/global/assets/onion.svg'
import tomato from '../../3_widgets/global/assets/tomato.svg'
import strawberry from '../../3_widgets/global/assets/strawberry.jpg'
import ginger from '../../3_widgets/global/assets/ginger.svg'


const product: { [key: string]: { price: number; name: string; img: string; description: string; produceDate: string; } } = {
    tomato: {
      price: 5.99,
      name: "Heirloom Tomato",
      img: tomato,
      description: "Grown in San Juan Capistrano, CA",
      produceDate: "",
    },
    ginger: {
      price: 12.99,
      name: "Organic Ginger",
      img: ginger,
      description: "Grown in Huntington Beach, CA",
      produceDate: "",
    },
    onion: {
      price: 2.99,
      name: "Sweet Onion",
      img: onion,
      description: "Grown in Huntington Beach, CA",
      produceDate: "",
    },
    strawberry: {
      price: 6.99,
      name: "Heirloom Strawberry",
      img: strawberry,
      description: "Grown in San Juan Capistrano, CA",
      produceDate: "",
    },
  };
  


export default product