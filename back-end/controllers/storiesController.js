import mongoose from "mongoose";
import Story from '../models/storiesContent.js';
import { v4 as uuidv4 } from 'uuid';

// Set Root Routes to get list of Stories from moongoose
const getStories =  async (req, res) => {
    try {
        //get find all story list in database with await function 
        const story = await Story.find();

        //if success return 200 and return list in story
        res.status(200).json(story);
    } catch (error) {

        //if success return 404 and return error message
        res.status(404).json({message: error.message});
    }

}

// Set Route for create new story with async function
const createStories = async (req, res) => {

    //get body request value
    const body = req.body;

    // store body request value to new object and passed it into the model
    const newStory = new Story ({
        ...body,
        userId : uuidv4()
    })

    try {
        // await story to be saved in database
        await newStory.save();

        // return 201 status with value of new story object if success
        res.status(201).json(newStory);
    } catch (error) {

        // return 409 status with value if error storing to database
        res.status(409).json({message: error.message});
    }

}

export {getStories, createStories};

