(function() {
  const TRAFFIC_LIGHT_TIMER = 5000;
  const TRAFFIC_LIGHT_GREEN_TIMER = 2500;
  const TRAFFIC_LIGHT_YELLOW_TIMER = 4000;
  const lightClasses = [
    "light-red-active",
    "light-yellow-active",
    "light-green-active"
  ];

  const init = () => {
    trafficLightSequence();
    setInterval(trafficLightSequence, TRAFFIC_LIGHT_TIMER);
  };

  const trafficLightSequence = () => {
    let state = 1;

    handleState(state);

    setTimeout(() => {
      state++;
      handleState(state);
    }, TRAFFIC_LIGHT_GREEN_TIMER);

    setTimeout(() => {
      state++;
      handleState(state);
    }, TRAFFIC_LIGHT_YELLOW_TIMER);
  };

  const handleState = state => {
    turnOffAllLights();
    switch (state) {
      case 1:
        turnOnTheLight("light-red");
        break;
      case 2:
        turnOnTheLight("light-green");
        break;
      case 3:
        turnOnTheLight("light-yellow");
        break;
      default:
        turnOnTheLight("light-red");
    }
  };

  const turnOnTheLight = light => {
    let lightToTurn = document.querySelector(`.${light}`);

    lightToTurn.classList.add(`${light}-active`);
  };

  const turnOffAllLights = () => {
    let lights = document.querySelectorAll(".light");

    lights.forEach((light, index) => {
      light.classList.remove(lightClasses[index]);
    });
  };

  init();
})();
