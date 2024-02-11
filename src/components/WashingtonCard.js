import { useMemo } from "react";
import styles from "./WashingtonCard.module.css";

const WashingtonCard = ({ propBackgroundImage }) => {
  const card2Style = useMemo(() => {
    return {
      backgroundImage: propBackgroundImage,
    };
  }, [propBackgroundImage]);

  return (
    <div className={styles.card2} style={card2Style}>
      <div className={styles.details}>
        <div className={styles.location}>
          <img className={styles.mappinIcon} alt="" src="/mappin.svg" />
          <div className={styles.washington}>Washington</div>
        </div>
        <div className={styles.location}>
          <img className={styles.mappinIcon} alt="" src="/arrowsout1.svg" />
          <div className={styles.washington}>12000</div>
        </div>
      </div>
    </div>
  );
};

export default WashingtonCard;
