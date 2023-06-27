import User from "../models/User.js";


//Updating Users 

export const updateUser = async (req, res) => {
    const id = req.params.id;
    try {
        const updatedUser = await User.findByIdAndUpdate(id, { $set: req.body }, { new: true })
        res.status(200).json({
            success: true,
            message: "succesfully updated User",
            data: updatedUser
        });

    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: 'User not deleted, try again'
        });

    }
};
//delete a User
export const deleteUser = async (req, res) => {
    const id = req.params.id
    try {
        await User.findByIdAndDelete(id)
        res.status(200).json({
            success: true,
            message: 'You have deleted a User succesfully'
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: 'Failed to delete a User'
        });

    }
};
//find a User
export const findUser = async (req, res) => {
    const id = req.params.id
    try {
        const findSingleUser = await User.findById(id);
        res.status(200).json({
            success: true,
            message: 'User details found',
            data: findSingleUser,
        })

    }
    catch (err) {
        res.status(404).json({
            success: false,
            message: 'Can not find a User'
        })

    }
};
//find all Users

export const findAllUsers = async (req, res) => {

    try {
        const allUsers = await User.find({});
        res.status(200).json({
            success: true,
            message: 'All Users available',
            data: allUsers
        });
    }
    catch (err) {
        res.status(404).json({
            success: false,
            message: 'No Users available'
        })

    }
};