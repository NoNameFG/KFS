import valueHolder from '../ValueHolder/ValueHolder';
import catalogReducer from '../ValueHolder/catalogReducer';
import catalog from '../ValueHolder/Catalog';
import {combineReducers} from 'redux';
//import menuStatusChangeFunction from '../MenuStatusChangeFunction/MenuStatusChangeFunction';

const allReducers = combineReducers({
  menuStatus: valueHolder,
  catalog: catalog,
  activeItem: catalogReducer
});

export default allReducers;
