const todo = require('../models/todo')

//Create new Todo 
exports.newPost = async (req, res, next) => {
    const post = await todo.create(req.body);
    res.status(201).json({
        srccess: true,
        post
    })
}

//Get all Todo
exports.getPost = async (req, res, next) => {
    const post = await todo.find()
    res.status(200).json({
        success: true,
        count: todos.length,
        post
    })
}

//Get single Todo details 
exports.getSinglePost = async (req, res, next) => {
    let post = await todo.findById(req.params.id);

    if (!post) {
        return res.status(404).json({
            success: false,
            message: 'todo not found'
        })
    }
    res.status(200).json({
        success: true,
        post,
    })
}

//Update a Todo
exports.updatePost = async (req, res, next) => {
    let post = await todo.findById(req.params.id);

    if (!post) {
        return res.status(404).json({
            success: false,
            message: "todo not found"
        })
    }
    post = await todo.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
        useFindAndModify: false
    })
    res.status(200).json({
        success: true,
        post
    })
}


//Delete a Todo
exports.deletePost = async (req, res, next) => {

    const post = await todo.findByIdAndDelete(req.params.id)

    if (!todo) {
        return res.status(404).json({
            success: false,
            message: "todo not found"
        })
    }
    await post.remove();
    res.status(200).json({
        success: true,
        message: "todo is Deleted"
    })

}



//Get Post between two dates

exports.sortByDate = async (req, res, next) => {
    let date = new Date("March 20,2021")
    let currentDate = new date()

    const post = await todo.find({ Date: { $gt: "$date", $lt: "$currentDate" } })

    if (!post) {
        return res.json({
            success: false,
            message: "No todo lists found"
        })
    }
    return res.status(200).json({
        success: true,
        post
    })

    // try {
    //     let 
    //     const post = await todo.aggregate([
    //         {
    //             $sort: { post: -1 }
    //         },
    //         {
    //             $group: {_id: null, from: { $max: "$createdAt" }, to: { $min: "$updatedAt" } }
    //         }
    //     ])
    //  }
    // catch (error) {
    //     return res.json('Todo cannot found')
    // }
}

