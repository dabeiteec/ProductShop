interface Product {
  productName: string;
  productPrice: number;
  productImg: string;
  productAmount: number;
  productQuantity:number;
  productDescription?: string;
}

interface DefaultState {
  products: Product[];
  productAmount: number;
  productsPrice: number;
}

const defaultState: DefaultState = {
  products: [],
  productAmount: 0,
  productsPrice: 0,
};

interface Action {
  type: string;
  payload?: Product;
}

const ReducerName = {
  addProduct: "ADD_PRODUCT",
  getProductsAmount: "GET_PRODUCT_AMOUNT",
  removeProduct: "REMOVE_PRODUCT",
  setProductPrice: "SET_PRODUCT_PRICE",
};

const addProductReducer = (state = defaultState, action: Action): DefaultState => {
  switch (action.type) {
    case ReducerName.addProduct:
      if (action.payload) {
        console.log(`Добавлен товар: ${action.payload.productName}`);
        return {
          ...state,
          products: [...state.products, action.payload],
          productAmount: state.products.length + 1,
          productsPrice: state.productsPrice + action.payload.productPrice,
        };
      }
      return state;
      //смотри редюсер ниже
      case ReducerName.setProductPrice:
        if (action.payload) {
          const updatedProducts = state.products.map(product => 
            product.productName === action.payload?.productName
              ? { ...product, productAmount: action.payload.productQuantity }
              : product
          );
          return {
            ...state,
            products: updatedProducts,
            productsPrice: updatedProducts.reduce(
              (total, product) => total + product.productPrice * product.productAmount, 
              0
            ),
          };
        }
        return state;

    case ReducerName.getProductsAmount:
      return {
        ...state,
        productAmount: state.products.length,
      };

    case ReducerName.removeProduct:
      if (action.payload) {
        const updatedProducts = state.products.filter(
          (product) => product.productName !== action.payload?.productName
        );
        return {
          ...state,
          products: updatedProducts,
          productAmount: updatedProducts.length,
          productsPrice: updatedProducts.reduce((total, product) => total + product.productPrice, 0),
        };
      }
      return state;

    default:
      return state;
  }
};

export default addProductReducer;
