

export const initialState = [{
    item: 'Buy guitar',
    completed: false,
    id: 3892987589
    },
    {
    item: 'Buy tuner',
    completed: false,
    id: 87893487489    
    }
    ,
    {
    item: 'Buy extra guitar strings',
    completed: false,
    id: 789095837849
    },
    {
    item: 'Learn to string guitar',
    completed: false,
    id: 12345678
    },
    {
    item: 'Learn to tune guiar',
    completed: false,
    id: 789087358
    },
    {
    item: 'Learn guitar string names',
    completed: false,
    id: 9876544234
    },
    {
    item: 'Learn chord C',
    completed: false,
    id: 1234568974   
    },
    {
    item: 'Learn chord Am',
    completed: false,
    id: 789384738988
    },
    {
    item: 'Learn chord D',
    completed: false,
    id: 756748375284
    }, {
        item: 'Learn chord E',
        completed: false,
        id:75674834525
    }

]


export const reducer = (state, action)=> {
    switch(action.type) {
        case 'ADD':
            return [...state, {item: action.payload, completed: false, id: Date.now()}];
        case 'TOGGLE':
            return state.map(todo => {
                if (todo.id === action.payload) {
                    return {...todo, completed: !(todo.completed)};
                } else {
                    return todo;
                }
            });
        case 'CLEAR':
            return state.filter(todo => !todo.completed);
        default:
            return state;
    }
}