import { CardInfo } from "./style";

interface CardProps {
  name: string;
  age: number;
  hobby: string;
}

export const Card = ({ name, age, hobby }: CardProps) => {
  return (
    <CardInfo>
      <p>Nome: {name}</p>
      <p>Idade: {age}</p>
      <p> Hobby: {hobby}</p>
    </CardInfo>
  );
};

export default Card;
