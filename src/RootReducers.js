const rootReducer = (state, action) => {
    switch (action.type) {
        case "withdraw":
            if (state.balance >= action.amount) {
                const withdrawBalance = state.balance - action.amount
                return { ...state, balance: withdrawBalance }
            }
            return state 

        case "deposit":
            const depositBalance = state.balance + action.amount;
            return { ...state, balance: depositBalance };

        default:

            return state
    }
}

export const selectUser = state => state.user;
export const selectBalance = state => state.balance;

export default rootReducer;