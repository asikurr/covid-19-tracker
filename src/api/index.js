import axios from 'axios';

const url = 'https://covid19.mathdro.id/api'

export const fetchData = async (country) => {
  let changeAbleUrl = url;
  console.log(country)
  if (country) {
    changeAbleUrl = `${url}/countries/${country}`
  }
  try {

      const {data:{confirmed,recovered,deaths,lastUpdate}} = await axios.get(changeAbleUrl);
      // const modifyData = {
      //   confirmed: data.confirmed,
      //   recovered: data.recovered,
      //   deaths: data.deaths,
      //   lastUpdate: data.lastUpdate

      // }
      // const modifyData = {confirmed,recovered,deaths,lastUpdate}
      // console.log(confirmed)
      return {confirmed,recovered,deaths,lastUpdate};
  } catch (error) {
      console.log(error)
  }
}

export const fetchDailyData = async () => {
  try {
    const {data} = await axios.get(`${url}/daily`);
    // console.log(data);
    const modifyDailyData = data.map(dailyData => ({
      confirmed : dailyData.confirmed.total,
      deaths : dailyData.deaths.total,
      date : dailyData.reportDate
    }));

    return modifyDailyData;
  } catch (error) {
    console.log(error)
  }
}

// export const conuntryData = async () => {
//   try {
//     const res = await axios.get(`${url}/countries`)
//     console.log(res)
//   } catch (error) {
//     console.log(error)
//   }
// }