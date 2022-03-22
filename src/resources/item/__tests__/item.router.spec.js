import router from '../item.router'

describe('item router', () => {
    const routes = [
        { path: '/', method: 'get' },
        { path: '/:id', method: 'get' },
        { path: '/:id', method: 'delete' },
        { path: '/:id', method: 'put' },
        { path: '/', method: 'post' }
    ]
    routes.forEach(route => {
        console.log('Route:', route);
        test(`has crud routes ${JSON.stringify(route)}`, () => {
            const match = router.stack.find(
                s => s.route.path === route.path && s.route.methods[route.method]
            )

            expect(match).toBeTruthy()
        })
    })
})
