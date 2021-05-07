/* eslint-disable no-console */
import express from 'express';
import sequelize from 'sequelize';

import db from '../database/initializeDB.js';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Welcome to the Airbnb Data API!');
});

/// /////////////////////////////////
/// ////////Listings Endpoint/////////
/// /////////////////////////////////

router.get('/listings/:listing_id', async (req, res) => {
  try {
    const listings = await db.listings.findAll({
      where: {
        listing_id: req.params.listing_id
      }
    });
    res.json(listings);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

/// /////////////////////////////////
/// Neighborhoods Endpoints///
/// /////////////////////////////////
router.post('/neighborhoods', async (req, res) => {
  const neighborhoods = await db.neighborhoods.findAll();
  const currentId = (await neighborhoods.length) + 1;
  try {
    const newEntry = await db.neighborhoods.create({
      neighborhood_id: currentId,
      neighborhood_name: req.body.neighborhood_name
    });
    res.json(newEntry);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

router.delete('/neighborhoods/:neighborhood_id', async (req, res) => {
  try {
    await db.neighborhoods.destroy({
      where: {
        neighborhood_id: req.params.neighborhood_id
      }
    });
    res.send('Successfully Deleted');
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

router.put('/neighborhoods', async (req, res) => {
  try {
    // N.B. - this is a good example of where to use code validation to confirm objects
    await db.neighborhoods.update(
      {
        neighborhood_name: req.body.neighborhood_name
      },
      {
        where: {
          neighborhood_id: req.body.neighborhood_id
        }
      }
    );
    res.send('Successfully Updated');
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

/// /////////////////////////////////
/// Properties Endpoint///
/// /////////////////////////////////
router.get('/properties', async (req, res) => {
  try {
    const properties = await db.properties.findAll();
    res.json(properties);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

/// /////////////////////////////////
/// Get All Records Endpoint///
/// /////////////////////////////////
const allRecords = `SELECT *
FROM
  listings l
JOIN calendar c 
  ON l.listing_id = c.listing_id
JOIN hosts h
  ON l.host_id = h.host_id
JOIN neighborhoods n
  ON l.neighborhood_id = n.neighborhood_id
JOIN properties p
  ON l.listing_id = p.listing_id
JOIN reviews r
  ON l.listing_id = r.listing_id
JOIN scores s
  ON l.listing_id = s.listing_id;`;
router.get('/allrecords', async (req, res) => {
  try {
    const result = await db.sequelizeDB.query(allRecords, {
      type: sequelize.QueryTypes.SELECT
    });
    res.json(result);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

export default router;