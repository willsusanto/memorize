import config from "../data/config.json"

class HealthData {
  constructor(id) {
    this.id = id;
    this.active = true; 
  }
}

const getHealth = () => {
  const healthQuantity = config.HEALTH_BAR;
  const healthBar = Array.from({ length: healthQuantity }, (_, index) =>
    new HealthData(index+1)
  );

  return healthBar;
};

export default getHealth;
