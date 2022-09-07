const createBook = (req, res) => {
    
    res.send({
        status: 200,
        message: 'book created',
        data: {
            name: 'C++ Fundamentals',
            author: 'ABC Kumar'
        }
    })
};
export default createBook;