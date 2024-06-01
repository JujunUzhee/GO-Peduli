import { query } from "../database/db.js";

const getBerita = async (req, res) => {
  const sql = `
        SELECT 
            berita.id AS berita_id,
            berita.img,
            berita.date,
            berita.title,
            berita.descripsi,
            content.author,
            content.date AS content_date,
            content.image AS content_image,
            paragraphs.paragraph,
            subheadings.subheading
        FROM 
            berita
        LEFT JOIN 
            paragraphs ON berita.id = paragraphs.berita_id
        LEFT JOIN 
            subheadings ON berita.id = subheadings.berita_id
        LEFT JOIN 
            content ON berita.id = content.berita_id;
    `;
  try {
    const results = await query(sql);

    const news = results.reduce((acc, row) => {
      const berita_id = row.berita_id;

      if (!acc[berita_id]) {
        acc[berita_id] = {
          id: berita_id,
          img: row.img,
          date: row.date,
          title: row.title,
          descripsi: row.descripsi,
          content: {
            author: row.author,
            date: row.content_date,
            image: row.content_image,
            paragraphs: [],
            subheadings: [],
          },
        };
      }

      if (
        row.paragraph &&
        !acc[berita_id].content.paragraphs.includes(row.paragraph)
      ) {
        acc[berita_id].content.paragraphs.push(row.paragraph);
      }

      if (
        row.subheading &&
        !acc[berita_id].content.subheadings.includes(row.subheading)
      ) {
        acc[berita_id].content.subheadings.push(row.subheading);
      }

      return acc;
    }, {});

    res.status(200).json(Object.values(news));
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch data" });
  }
};

export { getBerita };
