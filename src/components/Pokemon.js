


class Pokemon {
  constructor(data) {
    this.id = data.id;
    this.name = data.name.toUpperCase();
    this.sprite = data.sprites.front_default;
    this.type = data.types[0].type.name;
    this.exp = data.base_experience;
    this.weight = data.weight;
  }
}

export default Pokemon;