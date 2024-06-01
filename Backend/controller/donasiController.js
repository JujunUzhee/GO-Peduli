import { query } from '../database/db.js';

const getDonasi = async (req, res) => {
    const sql = 'SELECT * FROM Donasi';
    try {
        const donations = await query(sql);
        res.status(200).json(donations);
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch data' });
    }
}

const getDonasiById =  async (req, res) => {
    const { id } = req.params;
    const sql = 'SELECT * FROM Donasi WHERE id = ?';
    try {
        const donation = await query(sql, [id]);
        if (donation.length > 0) {
            res.status(200).json(donation[0]);
        } else {
            res.status(404).json({ message: 'Donation not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch data' });
    }
}

export { getDonasi, getDonasiById }