import { query } from '../database/db.js';
const getData = async (req, res) => {
    const sqlProgram = 'SELECT * FROM Program';
    const sqlDonasi = 'SELECT * FROM Donasi';
    const sqlBerita = 'SELECT * FROM Berita';
    try {
        const [programs, donations, news] = await Promise.all([
            query(sqlProgram),
            query(sqlDonasi),
            query(sqlBerita)
        ]);
        res.status(200).json({ programs, donations, news });
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch data' });
    }
};
export { getData };