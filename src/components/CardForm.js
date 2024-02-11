import { useState } from "react";
import "antd/dist/antd.min.css";
import { Button, Menu, MenuItem } from "@mui/material";
import { Button as AntButton } from "antd";
import styles from "./CardForm.module.css";

const CardForm = () => {
  const [dropdownLinkAnchorEl, setDropdownLinkAnchorEl] = useState(null);
  const [dropdownLink1AnchorEl, setDropdownLink1AnchorEl] = useState(null);
  const [dropdownLink2AnchorEl, setDropdownLink2AnchorEl] = useState(null);
  const dropdownLinkOpen = Boolean(dropdownLinkAnchorEl);
  const handleDropdownLinkClick = (event) => {
    setDropdownLinkAnchorEl(event.currentTarget);
  };
  const handleDropdownLinkClose = () => {
    setDropdownLinkAnchorEl(null);
  };
  const dropdownLink1Open = Boolean(dropdownLink1AnchorEl);
  const handleDropdownLink1Click = (event) => {
    setDropdownLink1AnchorEl(event.currentTarget);
  };
  const handleDropdownLink1Close = () => {
    setDropdownLink1AnchorEl(null);
  };
  const dropdownLink2Open = Boolean(dropdownLink2AnchorEl);
  const handleDropdownLink2Click = (event) => {
    setDropdownLink2AnchorEl(event.currentTarget);
  };
  const handleDropdownLink2Close = () => {
    setDropdownLink2AnchorEl(null);
  };
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroSectionContents}>
        <div className={styles.text}>
          <h1 className={styles.findYourDream}>Find Your Dream Home</h1>
          <div className={styles.vestibulumAnteIpsum}>
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia curae; Proin sodales ultrices nulla blandit
            volutpat.
          </div>
        </div>
        <form className={styles.rentsale}>
          <div className={styles.tabs}>
            <button className={styles.rent} autoFocus={true} disabled={false}>
              <div className={styles.rent1}>Rent</div>
            </button>
            <Button
              disableElevation={true}
              color="primary"
              size="medium"
              variant="contained"
              sx={{ borderRadius: "0px 0px 0px 0px" }}
            >
              Sale
            </Button>
          </div>
          <div className={styles.formwrapper}>
            <nav className={styles.formcontainer}>
              <div className={styles.locations}>
                <div className={styles.locations1}>Locations</div>
                <div>
                  <Button
                    id="button-Select your city"
                    aria-controls="menu-Select your city"
                    aria-haspopup="true"
                    aria-expanded={dropdownLinkOpen ? "true" : undefined}
                    onClick={handleDropdownLinkClick}
                    color="primary"
                  >
                    Select your city
                  </Button>
                  <Menu
                    anchorEl={dropdownLinkAnchorEl}
                    open={dropdownLinkOpen}
                    onClose={handleDropdownLinkClose}
                  />
                </div>
              </div>
              <div className={styles.propertyType}>
                <div className={styles.propertyType1}>Property Type</div>
                <div className={styles.dropdownlink}>
                  <Button
                    id="button-Select property type"
                    aria-controls="menu-Select property type"
                    aria-haspopup="true"
                    aria-expanded={dropdownLink1Open ? "true" : undefined}
                    onClick={handleDropdownLink1Click}
                    color="primary"
                  >
                    Select property type
                  </Button>
                  <Menu
                    anchorEl={dropdownLink1AnchorEl}
                    open={dropdownLink1Open}
                    onClose={handleDropdownLink1Close}
                  />
                </div>
              </div>
              <div className={styles.rentRange}>
                <div className={styles.propertyType1}>Rent Range</div>
                <div className={styles.dropdownlink}>
                  <Button
                    id="button-Select rent range"
                    aria-controls="menu-Select rent range"
                    aria-haspopup="true"
                    aria-expanded={dropdownLink2Open ? "true" : undefined}
                    onClick={handleDropdownLink2Click}
                    color="primary"
                  >
                    Select rent range
                  </Button>
                  <Menu
                    anchorEl={dropdownLink2AnchorEl}
                    open={dropdownLink2Open}
                    onClose={handleDropdownLink2Close}
                  />
                </div>
              </div>
              <AntButton
                className={styles.searchCta}
                size="middle"
                shape="default"
                style={{ width: "102px" }}
                type="primary"
              >
                Search
              </AntButton>
            </nav>
          </div>
        </form>
      </div>
    </section>
  );
};

export default CardForm;
