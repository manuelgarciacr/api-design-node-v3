import { controllers } from '../item.controllers';
import _ from 'lodash';

describe('item controllers', () => {

    test('has crud controllers', () => {
        const crudMethods = [
            'getOne',
            'getMany',
            'createOne',
            'removeOne',
            'updateOne'
        ]
        const ctrls = controllers();

        crudMethods.forEach(name =>
            expect(_.isFunction(ctrls[name])).toBe(true)
        )
    })
})
