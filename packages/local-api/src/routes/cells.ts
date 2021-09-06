import express from 'express';

const router = express.Router();

router.get('/cells', async (req, res) => {
    // make sure cell storage file exists
    // if file does not exist add in a default list of cells

    // Read file
    // Parse list of cells
    // send list of cells back to browser
});

router.post('cells', async (req, res) => {
    // Make sure file exists
    // create if it does not

    // take list of cells from req
    // serialize cells
    // write cells into the file
});