export default function IconDetector( iconDescription ) {
  const getIconName = (description) => {
    if (description === 'Clear') return 'sunny';
    if (description === 'Clouds') return 'cloudy';
    if (description === 'Rain') return 'rainy';
  };

  const iconName = getIconName(iconDescription);

  return `/weather-icons/${iconName}.png`;
}