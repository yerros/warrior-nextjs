// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  res.statusCode = 200;
  res.json([
    {
      id: "IWAN MAKITA 06",
      name: "JOJO",
      DOB: "12012020",
      sex: "Female",
      color: "Tritis",
      ringPusat: "2019 / 254544",
      picture: "http://pic.com",
      achievement: [
        {
          0: "Juara 1 Malang",
          1: "Juara 1 Surabaya",
        },
      ],
      parents: [
        {
          id: "06",
          name: "Maspion",
          DOB: "12012020",
          sex: "Female",
          color: "Tritis",
          ringPusat: "2019 / 254544",
          picture: "http://pic.com",
          achievement: [
            {
              0: "Juara 1 Malang",
              1: "Juara 1 Surabaya",
            },
          ],
        },
        {
          id: "06",
          name: "IWAN MAKITA 290",
          DOB: "12012020",
          sex: "Female",
          color: "Tritis",
          ringPusat: "2019 / 254544",
          picture: "http://pic.com",
          achievement: [
            {
              0: "Juara 1 Malang",
              1: "Juara 1 Surabaya",
            },
          ],
        },
      ],
    },
    {
      id: "MAD 07",
      name: "Bluray",
      DOB: "12012020",
      sex: "Male",
      color: "Gambir",
      ringPusat: "2020 / 19545",
      picture: "http://pic.com",
      achievement: [
        {
          0: "Juara 1 Malang",
          1: "Juara 1 Surabaya",
        },
      ],
      parents: [
        {
          id: "06",
          name: "Maspion",
          DOB: "12012020",
          sex: "Female",
          color: "Tritis",
          ringPusat: "2019 / 254544",
          picture: "http://pic.com",
          achievement: [
            {
              0: "Juara 1 Malang",
              1: "Juara 1 Surabaya",
            },
          ],
        },
        {
          id: "06",
          name: "Orchid 290",
          DOB: "12012020",
          sex: "Female",
          color: "Tritis",
          ringPusat: "2019 / 254544",
          picture: "http://pic.com",
          achievement: [
            {
              0: "Juara 1 Malang",
              1: "Juara 1 Surabaya",
            },
          ],
        },
      ],
    }]);
};
