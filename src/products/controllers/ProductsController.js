module.exports = {
    getProducts: (_, res) => {
        res.send({
            data: [
                {
                    id: '1',
                    name: 'product name',
                    description: 'product desc',
                    price: '50',
                },
                {
                    id: '2',
                    name: 'product name',
                    description: 'product desc',
                    price: '30',
                },
                {
                    id: '3',
                    name: 'product name',
                    description: 'product desc',
                    price: '20',
                },
            ],
        });
    },
};
