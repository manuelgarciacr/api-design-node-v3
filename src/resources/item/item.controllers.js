import { crudControllers } from '../../utils/crud';
import { Item } from './item.model';

export default crudControllers(Item);

// const getOne = model => async (req, res) => { }
// const getMany = model => async (req, res) => { }
// const createOne = model => async (req, res) => { }
// const updateOne = model => async (req, res) => { }
// const removeOne = model => async (req, res) => { }

// export const controllers = model => ({
//     removeOne: removeOne(model),
//     updateOne: updateOne(model),
//     getMany: getMany(model),
//     getOne: getOne(model),
//     createOne: createOne(model)
// });
