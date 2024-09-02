const getPredictedAge = async (user: string) => {
  const response = await fetch(`https://api.agify.io/?name=${user}`);
  return response.json();
};

const getPredictedGender = async (user: string) => {
  const response = await fetch(`https://api.genderize.io/?name=${user}`);
  return response.json();
};
const getPredictedCountry = async (user: string) => {
  const response = await fetch(`https://api.nationalize.io/?name=${user}`);
  return response.json();
};

interface Params {
  params: {
    user: string;
  };
}

const Prediction = async ({ params }: Params) => {
  const ageData = getPredictedAge(params.user);
  const genderData = getPredictedGender(params.user);
  const countryData = getPredictedCountry(params.user);

  const [age, gender, country] = await Promise.all([
    ageData,
    genderData,
    countryData,
  ]);
  return (
    <div>
      <div>{params.user} Personal Info</div>
      <div>Age:{age?.age}</div>
      <div>Gender:{gender?.gender}</div>
      <div>Country:{country?.country[0]?.country_id}</div>
    </div>
  );
};

export default Prediction;
