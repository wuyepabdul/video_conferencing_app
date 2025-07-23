import { LANGUAGE_TO_FLAG } from "../constants";

export default function getLanguageFlag(language) {
  if (!language) return null;

  const languageLowercase = language.toLowerCase();
  const countryCode = LANGUAGE_TO_FLAG[languageLowercase];

  if (countryCode) {
    return (
      <img
        src={`https://flagcdn.com/24x18/${countryCode}.png`}
        alt={`${languageLowercase} flag`}
        className="h-3 mr-1 inline-block"
      />
    );
  }
  return null;
}
