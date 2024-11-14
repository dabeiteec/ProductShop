// basketReducer.ts
interface DefaultState {
    productAmount: number;
}

const defaultState: DefaultState = {
    productAmount: 0,
};

interface Action {
    type: string;
    payload?: number;
}
export const PRODUCT_AMOUNT = 'SET_PRODUCT_AMOUNT';
export const basketReducer = (state = defaultState, action: Action): DefaultState => {
    switch (action.type) {
        case PRODUCT_AMOUNT:
            return {
                ...state,
                productAmount: action.payload || 0,
            };
        default:
            return state;
    }
};

