import express from 'express';
import config from 'config';
import axios from 'axios';

export const router = express.Router();

// @route   GET     api/popularMovies
// @desc    get popular movies
// @access  Public
router.get('/popularMovies',async(req,res)=>{
    try {
        const result = await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=cd3a49ef87f5be23a16018844fef262b&language=en-US&page=1");
        const data = result.data
        res.send(data);    

    } catch (err) {
        console.error(err);
    }   
})

// @route   GET     api/topRatedMovies
// @desc    get topRated movies
// @access  Public
router.get('/topRatedMovies',async(req,res)=>{
    try {
        const result = await axios.get("https://api.themoviedb.org/3/movie/top_rated?api_key=cd3a49ef87f5be23a16018844fef262b&language=en-US&page=1");
        const data = result.data
        res.send(data);    

    } catch (err) {
        console.error(err);
    }   
})

// @route   GET     api/popularShows
// @desc    get popular movies
// @access  Public
router.get('/popularShows',async(req,res)=>{
    try {
        const result = await axios.get("https://api.themoviedb.org/3/tv/popular?api_key=cd3a49ef87f5be23a16018844fef262b&language=en-US&page=1");
        const data = result.data
        res.send(data);    

    } catch (err) {
        console.error(err);
    }   
})

// @route   GET     api/topRatedShows
// @desc    get topRated movies
// @access  Public
router.get('/topRatedShows',async(req,res)=>{
    try {
        const result = await axios.get("https://api.themoviedb.org/3/tv/top_rated?api_key=cd3a49ef87f5be23a16018844fef262b&language=en-US&page=1");
        const data = result.data
        res.send(data);    

    } catch (err) {
        console.error(err);
    }   
})