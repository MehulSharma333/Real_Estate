import { useMemo } from "react";
import styles from "./LinkCard.module.css";

const LinkCard = ({
  linkTarget,
  locationName,
  propBackgroundImage,
  propPadding,
}) => {
  const card1Style = useMemo(() => {
    return {
      backgroundImage: propBackgroundImage,
      padding: propPadding,
    };
  }, [propBackgroundImage, propPadding]);

  return (
    <a className={styles.card1} target={linkTarget} style={card1Style}>
      <div className={styles.text}>
        <div className={styles.centerville}>{locationName}</div>
        <div className={styles.listings}>25 listings</div>
      </div>
    </a>
  );
};

export default LinkCard;
