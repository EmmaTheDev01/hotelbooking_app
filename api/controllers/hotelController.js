import Hotel from "../models/Hotel.js";
import Review from "../models/Review.js";


export const createHotel = async (req, res) => {
    const newHotel = new Hotel(req.body);
    try {
        const savedHotel = await newHotel.save();
        res.status(200).json({
            success: true,
            message: "Hotel saved succesfully",
            data: savedHotel
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: 'Hotel not saved, try again'
        });
    }
};

//Updating hotels 

export const updateHotel = async (req, res) => {
    const id = req.params.id;
    try {
        const updatedHotel = await Hotel.findByIdAndUpdate(id, { $set: req.body }, { new: true })
        res.status(200).json({
            success: true,
            message: "succesfully updated hotel",
            data: updatedHotel
        });

    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: 'Hotel not deleted, try again'
        });

    }
};
//delete a hotel
export const deleteHotel = async (req, res) => {
    const id = req.params.id
    try {
        await Hotel.findByIdAndDelete(id)
        res.status(200).json({
            success: true,
            message: 'You have deleted a hotel succesfully'
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: 'Failed to delete a hotel'
        });

    }
};
//find a hotel
export const findHotel = async (req, res) => {
    const id = req.params.id
    try {
        const findSingleHotel = await Hotel.findById(id);
        res.status(200).json({
            success: true,
            message: 'Hotel details found',
            data: findSingleHotel
        })

    }
    catch (err) {
        res.status(404).json({
            success: false,
            message: 'Can not find a hotel'
        })

    }
};
//find all hotels

export const findAllHotels = async (req, res) => {

    //pagination

    const page = parseInt(req.query.page);
    console.log(page);
    try {
        const allHotels = await Hotel.find({}).populate('reviews').skip(page * 8).limit(8);
        res.status(200).json({
            success: true,
            count: allHotels.length,
            message: 'All hotels available',
            data: allHotels
        });
    }
    catch (err) {
        res.status(404).json({
            success: false,
            message: 'No hotels available'
        })

    }
};

//Get a hotel from a search query

export const getHotelBySearch = async (req, res) => {

    //case sensitive
    const city = new RegExp(req.query.city, 'i');
    const title = new RegExp(req.query.title, 'i');
    const distance = parseInt(req.query.distance);
    const rooms = parseInt(req.query.rooms);


    try {
        const hotelSearch = await Hotel.find({ city:{$gte:city}, title:{ $gte: title}, distance: { $gte: distance } }).populate('reviews') 

        res.status(200).json({

            success: true,
            count: hotelSearch.length,
            message: 'Search results',
            data: hotelSearch
        });
    }
    catch (err) {
        res.status(404).json({
            success: false,
            message: 'No such hotel(S) found'
        })
    }
};


//get featured hotels

export const getFeauturedHotel = async (req, res) => {

    try {
        const featuredHotels = await Hotel.find({ featured: true }).populate('reviews').limit(8);

        res.status(200).json({
            success: true,
            message: 'Featured hotels',
            data: featuredHotels,
        });
    }
    catch (err) {
        res.status(404).json({
            success: false,
            message: 'No hotels available'
        })

    }
};

export const getHotelCounts = async (req, res) => {

    try {
        const hotelCount = await Hotel.estimatedDocumentCount();

        res.status(200).json({
            success: true,
            message: 'Featured hotels',
            data: hotelCount,
        });
    }
    catch (err) {
        res.status(404).json({
            success: false,
            message: 'No hotels available'
        })

    }
};