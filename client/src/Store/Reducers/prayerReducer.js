const initState = {
  prayers: [
    {
      name: 'Demarkus Matthews',
      prayer: 'That my family continues to prosper',
      valid: true
    },
    {
      name: 'Jess',
      prayer: 'If I quit now, I will soon be back to where I started. And when I started I was desperately wishing to be where I am now.',
      valid: true
    },
    {
      name: 'Garret',
      prayer: 'Hey De’Markus! Just sending you some positive vides, hope all is going well!',
      valid: true
    },
    {
      name: 'Demarkus Matthews',
      prayer: 'That this world gets better',
      valid: true
    },
    {
      name: 'Demarkus Matthews',
      prayer: 'That this world gets better',
      valid: true
    }
  ],
  random: {},
  addError: false,
  getAllError: false
};

const prayerReducer = (state = initState, action) => {
  switch(action.type) {
    case 'GET_ALL_PRAYERS':
      return {
        ...state,
        prayers: [...state.prayers, ...action.data]
      };
    case 'GET_ALL_PRAYERS_ERROR':
      return {
        ...state,
        getAllError: action.data
      };
    case 'ADD_PRAYER':
      return {
        ...state,
        prayers: [...state.prayers, action.data]
      };
    case 'ADD_PRAYER_ERROR':
      return {
        ...state,
        addError: action.data
      };
    case 'SET_RANDOM_PRAYER':
      return {
        ...state,
        random: action.data
      };
    default:
      return state;
  }
}

export default prayerReducer;