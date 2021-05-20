import axios from 'axios';

const GetRandomPrayer = () => {
  return (dispatch, getState) => {
    const { prayers } = getState().prayers;
    let num = Math.floor(Math.random() * prayers.length);
    dispatch({type: 'SET_RANDOM_PRAYER', data: prayers[num]});
  }
}

const AddPrayer = (payload) => {
  return async (dispatch, getState) => {
    try {
      const add = await axios.post('/prayer/add', payload);
      dispatch({type: 'ADD_PRAYER', data: payload});
      return true;
    } catch(err) {
      dispatch({type: 'ADD_PRAYER_ERROR', data: true});
      return false;
    }
  }
}

const GetAllPrayers = () => {
  return async (dispatch, getState) => {
    try {
      const getAll = await axios.get('/prayer/get_all');
      dispatch({type: 'GET_ALL_PRAYERS', data: getAll.data});
    } catch(err) {
      dispatch({type: 'GET_ALL_PRAYERS_ERROR', data: true});
    }
  }
}

export {
  GetRandomPrayer,
  AddPrayer,
  GetAllPrayers
}