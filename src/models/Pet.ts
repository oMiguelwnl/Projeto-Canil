type PetType = "dog" | "cat" | "fish";

type Pet = {
  type: PetType;
  name: string;
  image: string;
  color: string;
  age: number;
  sex: "Masculino" | "Feminino";
};

const data: Pet[] = [
  {
    type: "dog",
    image: "pastor-alemao.jpg",
    name: "Pastor-alemão",
    color: "Amarelo e Preto",
    sex: "Masculino",
    age: 4,
  },
  {
    type: "dog",
    image: "labrador.jpg",
    name: "Labrador-retriever",
    color: "Branco",
    sex: "Masculino",
    age: 7,
  },
  {
    type: "dog",
    image: "zwergspitz.jpg",
    name: "Zwergspitz",
    color: "Amarelo",
    sex: "Feminino",
    age: 5,
  },
  {
    type: "dog",
    image: "husky.jpg",
    name: "Husky Siberiano",
    color: "Branco e Preto",
    sex: "Masculino",
    age: 3,
  },
  {
    type: "dog",
    image: "golden.jpg",
    name: "Golden Retriever",
    color: "Amarelo",
    sex: "Masculino",
    age: 8,
  },
  {
    type: "dog",
    image: "poodle.jpg",
    name: "Poodle",
    color: "Branco",
    sex: "Feminino",
    age: 6,
  },
  {
    type: "dog",
    image: "bulldog.jpg",
    name: "Bulldog",
    color: "Branco e Amarelo",
    sex: "Masculino",
    age: 6,
  },
  {
    type: "cat",
    image: "persa.jpg",
    name: "Persa",
    color: "Amarelo",
    sex: "Masculino",
    age: 4,
  },
  {
    type: "cat",
    image: "mainecoon.jpg",
    name: "Maine Coon",
    color: "Preto e Branco",
    sex: "Masculino",
    age: 3,
  },
  {
    type: "cat",
    image: "bengal.jpg",
    name: "Bengal",
    color: "Branco, Preto e Amarelo",
    sex: "Feminino",
    age: 6,
  },
  {
    type: "cat",
    image: "siames.jpg",
    name: "Siamês",
    color: "Amarelo e Preto",
    sex: "Masculino",
    age: 3,
  },
  {
    type: "cat",
    image: "sphynx.jpg",
    name: "Sphynx",
    color: "Branco",
    sex: "Masculino",
    age: 3,
  },
  {
    type: "fish",
    image: "neon.jpg",
    name: "Tetra Neon",
    color: "Vermelho e Azul",
    sex: "Masculino",
    age: 4,
  },
  {
    type: "fish",
    image: "matogrosso.jpg",
    name: "Mato Grosso",
    color: "Laranja",
    sex: "Masculino",
    age: 6,
  },
  {
    type: "fish",
    image: "limpavidro.jpg",
    name: "Limpa Vidro",
    color: "Verde e Branco",
    sex: "Masculino",
    age: 5,
  },
  {
    type: "fish",
    image: "tanictis.jpg",
    name: "Tanictis",
    color: "Vermelho",
    sex: "Masculino",
    age: 2,
  },
  {
    type: "fish",
    image: "acara.jpg",
    name: "Acará Bandeira",
    color: "Preto",
    sex: "Masculino",
    age: 2,
  },
];

export const Pet = () => {
  getAll: (): Pet[] => {
    return data;
  };
  getFromType: (type: PetType): Pet[] => {
    return data.filter((pet) => pet.type === type);
  };
  getFromName: (name: string): Pet[] => {
    return data.filter(
      (pet) => pet.name.toLowerCase().indexOf(name.toLowerCase()) > -1
    );
  };
};
