import Card, { CardResult } from "./card";
import data from "../../data/data.json";
import styles from "./cardsSection.module.css";

export interface CardData {
  id: number;
  title: string;
  amount: string;
  historicalAmount: string;
  result: CardResult;
}

const cardsSection = () => {
  return (
    <div className={styles.cardsSection}>
      {(data.cards as CardData[]).map((card) => (
        <Card
          key={card.id}
          title={card.title}
          value={card.amount}
          historicalAmount={card.historicalAmount}
          result={card.result}
        />
      ))}
    </div>
  );
};

export default cardsSection;
