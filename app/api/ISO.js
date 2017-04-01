import CountryCodes from './data/CountryCodes';
export default function(country) {
  const iso = CountryCodes[country];
  console.log(`${country}:${iso}`);
  return iso.toLowerCase();
}
