const express = require('express');
const router = express.Router();

// @route   GET api/trackers
// @desc    Get all the data
// @access  Private
router.get('/', (req, res) =>{
    res.send('Get all the data')
})

// @route   POST api/trackers
// @desc    Add a new data
// @access  Private
router.get('/', (req, res) =>{
    res.send('Get all the data')
})

// @route   PUT api/trackers/:id
// @desc    Update data
// @access  Private
router.put('/:id', (req, res) =>{
    res.send('Update data')
})

// @route   DELETE api/trackers/:id
// @desc    Delete data
// @access  Private
router.delete('/:id', (req, res) =>{
    res.send('Delete data')
})

module.exports = router;