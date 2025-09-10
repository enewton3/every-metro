import Airtable from "airtable";

const key = process.env.REACT_APP_AIRTABLE_KEY;
const baseID = process.env.REACT_APP_AIRTABLE_BASE;
Airtable.configure({
  endpointUrl: "https://api.airtable.com",
  apiKey: key,
});

const base = Airtable.base(baseID);

const getAllSystems = async () => {
  const allRecords = [];
  return new Promise((resolve, reject) => {
    base("Metro_Systems")
      .select({
        view: "Grid view",
      })
      .eachPage(
        function page(records, fetchNextPage) {
          allRecords.push(...records);
          fetchNextPage();
        },
        function done(err) {
          if (err) {
            reject(err);
          } else {
            resolve(allRecords);
          }
        }
      );
  });
};

const getOneSystem = async (id) => {
  const system = base("Metro_Systems").find(id);

  return system;
};

const getOneSystemReviews = async (id) => {
  return base("reviews").find(id);
};

const contribute = async (params) => {};

const addReview = async (params) => {};

export {
  getAllSystems,
  getOneSystem,
  getOneSystemReviews,
  contribute,
  addReview,
};
