const express = require('express');
const router = express.Router();
const { publishWeek, grabShiftId, addShiftsByUser, transferShift } = require('../controllers/events');

// PUT to update and Transfer Shifts
router.put('/transfer', async (req, res) => {
  try {
    const {user_id, shift_id, category_id, event_date, transferToId} = req.query
    const transfer = await transferShift(user_id, shift_id, transferToId)
    res.status(200).json(transfer)
  } catch(err) {
    console.error("Transfer of Shifts Error: ", err)
    res.status(400).json({msg: "Cannot complete transfer of shifts from routes"})
  }
});

//PUT updates event status
router.put('/publish', (req, res) => {
  const { publish, firstDay, lastDay } = req.body;
  publishWeek(publish, firstDay, lastDay).catch((e) => console.log('publishWeek ERROR', e));
});

// ADD EVENTS
router.post('/add', async (req, res) => {
  try {
    const { user_id, shift_id, category_id, event_date } = req.body;
    const add = await addShiftsByUser(user_id, shift_id, category_id, event_date);
    res.status(200).json(add);
  } catch (err) {
    console.error('addEvents ERROR:', err);
    res.status(400).json({ msg: 'Not sure what you are trying to accomplish...' });
  }
});

// DELETE specific or many event_shifts
// /api/events/delete
router.delete('/delete', async (req, res) => {
  try {
    const { shift_id, event_date, user_id } = req.query;
    await grabShiftId(shift_id, event_date, user_id);
    res.status(200).send('OKAY');
  } catch (err) {
    console.error('RemoveShiftIdRoute:', err);
    res.status(401).json({ msg: 'Invalid Shift IDs' });
  }
});

module.exports = router.post('/', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userController.authenticate(email, password);
    res.status(200).json(user);
  } catch (err) {
    console.error('LoginRoute:', err);
    res.status(401).json({ msg: 'Invalid credentials' });
  }
});
module.exports = router;
