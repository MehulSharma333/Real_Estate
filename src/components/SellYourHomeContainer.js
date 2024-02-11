import { useMemo } from "react";
import "antd/dist/antd.min.css";
import { Button } from "antd";
import styles from "./SellYourHomeContainer.module.css";

const SellYourHomeContainer = ({
  imageId,
  homeActionText,
  propPadding,
  propWidth,
}) => {
  const sellYourHomeStyle = useMemo(() => {
    return {
      padding: propPadding,
      width: propWidth,
    };
  }, [propPadding, propWidth]);

  return (
    <div className={styles.sellYourHome} style={sellYourHomeStyle}>
      <div className={styles.contents}>
        <img className={styles.icon} alt="" src={imageId} />
        <div className={styles.contents}>
          <div className={styles.sellYourHome1}>{homeActionText}</div>
          <div className={styles.weDoA}>
            We do a free evaluation to be sure you want to start selling.
          </div>
          <Button className={styles.readMore} type="text">
            Read more
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SellYourHomeContainer;
