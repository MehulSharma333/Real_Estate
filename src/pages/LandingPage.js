import {
  Button,
  TextField,
  InputAdornment,
  Icon,
  IconButton,
} from "@mui/material";
import Header from "../components/Header";
import CardForm from "../components/CardForm";
import LinkCard from "../components/LinkCard";
import SellYourHomeContainer from "../components/SellYourHomeContainer";
import CardLink from "../components/CardLink";
import WashingtonCard from "../components/WashingtonCard";
import styles from "./LandingPage.module.css";

const LandingPage = () => {
  return (
    <main className={styles.landingPage}>
      <Header />
      <CardForm />
      <div className={styles.propertiesByAreaImagesSect}>
        <div className={styles.description}>
          <div className={styles.propertiesByArea}>Properties by Area</div>
          <div className={styles.vestibulumAnteIpsum}>
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia curae; Proin sodales ultrices nulla blandit
            volutpat.
          </div>
        </div>
        <div className={styles.cards}>
          <div className={styles.cardwrapper}>
            <div className={styles.row1}>
              <LinkCard linkTarget="_blank" locationName="Centerville" />
              <LinkCard
                locationName="Centerville"
                propBackgroundImage="url('/card-2@3x.png')"
                propPadding="unset"
              />
              <LinkCard
                locationName="Centerville"
                propBackgroundImage="url('/card-3@3x.png')"
                propPadding="unset"
              />
            </div>
            <div className={styles.row2}>
              <LinkCard
                locationName="Arlington"
                propBackgroundImage="url('/card-4@3x.png')"
                propPadding="10px"
              />
              <LinkCard
                locationName="Centerville"
                propBackgroundImage="url('/card-5@3x.png')"
                propPadding="10px"
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.propertiesByAreaFeatureCar}>
        <div className={styles.areaContent}>
          <div className={styles.areaLabels}>
            <div className={styles.propertiesByArea}>Properties by Area</div>
            <div className={styles.vestibulumAnteIpsum}>
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia curae; Proin sodales ultrices nulla blandit
              volutpat.
            </div>
          </div>
          <div className={styles.propertiesRow}>
            <SellYourHomeContainer
              imageId="/icon.svg"
              homeActionText="Sell your home"
            />
            <SellYourHomeContainer
              imageId="/icon1.svg"
              homeActionText="Rent your home"
              propPadding="var(--padding-3xl) 16px"
              propWidth="312px"
            />
            <SellYourHomeContainer
              imageId="/icon2.svg"
              homeActionText="Buy a home"
              propPadding="22px 80px"
              propWidth="unset"
            />
            <SellYourHomeContainer
              imageId="/icon3.svg"
              homeActionText="Free marketing"
              propPadding="var(--padding-3xl) 20px"
              propWidth="312px"
            />
          </div>
        </div>
      </div>
      <form className={styles.latestPropertiesOfRentCard}>
        <div className={styles.contents}>
          <div className={styles.text}>
            <div className={styles.latestPropertiesOf}>
              Latest Properties of Rent
            </div>
            <div className={styles.vestibulumAnteIpsum1}>
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia curae; Proin sodales ultrices nulla blandit
              volutpat.
            </div>
          </div>
          <div className={styles.cardsRow}>
            <CardLink imageDimensions="/property-image@2x.png" />
            <CardLink imageDimensions="/property-image1@2x.png" />
            <CardLink imageDimensions="/property-image2@2x.png" />
            <CardLink imageDimensions="/property-image3@2x.png" />
          </div>
        </div>
        <Button
          disableElevation={true}
          color="primary"
          size="medium"
          variant="contained"
          sx={{ borderRadius: "0px 0px 0px 0px" }}
        >
          Load more listing
        </Button>
      </form>
      <div className={styles.latestPropertiesOfRentCard1}>
        <div className={styles.contents1}>
          <div className={styles.text}>
            <div className={styles.propertiesByArea}>
              Latest Properties of Rent
            </div>
            <div className={styles.vestibulumAnteIpsum}>
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia curae; Proin sodales ultrices nulla blandit
              volutpat.
            </div>
          </div>
          <div className={styles.cardRow}>
            <a className={styles.card1}>
              <div className={styles.details}>
                <div className={styles.location}>
                  <img className={styles.mappinIcon} alt="" src="/mappin.svg" />
                  <div className={styles.washington}>Washington</div>
                </div>
                <div className={styles.location}>
                  <img
                    className={styles.mappinIcon}
                    alt=""
                    src="/arrowsout1.svg"
                  />
                  <div className={styles.washington}>12000</div>
                </div>
              </div>
            </a>
            <WashingtonCard />
            <WashingtonCard propBackgroundImage="url('/card-31@3x.png')" />
            <WashingtonCard propBackgroundImage="url('/card-41@3x.png')" />
          </div>
        </div>
        <Button
          disableElevation={true}
          color="primary"
          size="medium"
          variant="contained"
          sx={{ borderRadius: "0px 0px 0px 0px" }}
        >
          Load more listing
        </Button>
      </div>
      <div className={styles.latestPropertiesOfRentCard2}>
        <div className={styles.contents2}>
          <div className={styles.text}>
            <div className={styles.propertiesByArea}>Contact us</div>
            <div className={styles.vestibulumAnteIpsum}>
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia curae; Proin sodales ultrices nulla blandit
              volutpat.
            </div>
          </div>
          <div className={styles.form}>
            <div className={styles.formText}>
              <b className={styles.enquiryForm}>Enquiry Form</b>
              <div className={styles.areYouLooking}>
                Are you looking for details about a certain property? Ask us a
                question using the form below.
              </div>
            </div>
            <div className={styles.formFields}>
              <div className={styles.inputRow}>
                <TextField
                  className={styles.input}
                  color="primary"
                  label="First name"
                  variant="outlined"
                  sx={{ "& .MuiInputBase-root": { height: "56px" } }}
                />
                <TextField
                  className={styles.input}
                  color="primary"
                  label="Last name"
                  variant="outlined"
                  sx={{ "& .MuiInputBase-root": { height: "56px" } }}
                />
              </div>
              <TextField
                className={styles.destinationNameInput}
                color="primary"
                label="Email id"
                variant="outlined"
                sx={{ "& .MuiInputBase-root": { height: "56px" } }}
              />
              <TextField
                className={styles.destinationNameInput}
                color="primary"
                label="Comments or questions"
                variant="outlined"
                sx={{ "& .MuiInputBase-root": { height: "105px" } }}
              />
              <Button
                className={styles.formSubmitButton}
                disableElevation={true}
                color="primary"
                size="medium"
                variant="contained"
                sx={{ borderRadius: "0px 0px 0px 0px", width: 222, height: 46 }}
              >
                Submit
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.footerSection}>
        <footer className={styles.footer}>
          <div className={styles.contactUs1}>
            <div className={styles.logo}>
              <img
                className={styles.houselineIcon}
                alt=""
                src="/houseline.svg"
              />
              <div className={styles.reisParent}>
                <div className={styles.reis}>REIS</div>
                <div className={styles.realState}>Real State</div>
              </div>
            </div>
            <div className={styles.contactDetails}>
              <div className={styles.contactUs2}>Contact Us</div>
              <div className={styles.home}>Call : +123 400 123</div>
              <div className={styles.praesentNullaMassa}>
                Praesent nulla massa, hendrerit vestibulum gravida in, feugiat
                auctor felis.
              </div>
              <div className={styles.emailExamplemailcom}>
                Email: example@mail.com
              </div>
            </div>
            <div className={styles.socialMedia}>
              <div className={styles.socialMediaCard}>
                <img
                  className={styles.socialMediaLogo}
                  alt=""
                  src="/social-media-logo.svg"
                />
              </div>
              <div className={styles.socialMediaCard}>
                <img
                  className={styles.socialMediaLogo1}
                  alt=""
                  src="/social-media-logo1.svg"
                />
              </div>
              <div className={styles.socialMediaCard}>
                <img
                  className={styles.socialMediaLogo1}
                  alt=""
                  src="/social-media-logo2.svg"
                />
              </div>
              <div className={styles.socialMediaCard}>
                <img
                  className={styles.socialMediaLogo1}
                  alt=""
                  src="/social-media-logo3.svg"
                />
              </div>
              <div className={styles.socialMediaCard}>
                <img
                  className={styles.socialMediaLogo1}
                  alt=""
                  src="/social-media-logo4.svg"
                />
              </div>
            </div>
          </div>
          <div className={styles.features}>
            <div className={styles.teamAndPolicies}>Features</div>
            <div className={styles.featuresSubCategories}>
              <div className={styles.home}>Home</div>
              <div className={styles.home}>Become a Host</div>
              <div className={styles.home}>Pricing</div>
              <div className={styles.home}>Blog</div>
              <div className={styles.home}>Contact</div>
            </div>
          </div>
          <div className={styles.features}>
            <div className={styles.teamAndPolicies}>Company</div>
            <div className={styles.featuresSubCategories}>
              <div className={styles.home}>About Us</div>
              <div className={styles.home}>Press</div>
              <div className={styles.home}>Contact</div>
              <div className={styles.home}>Careers</div>
              <div className={styles.home}>Blog</div>
            </div>
          </div>
          <div className={styles.termsAndPolicies}>
            <div className={styles.teamAndPolicies}>Team and policies</div>
            <div className={styles.termsAndPoliciesSubcategori}>
              <div className={styles.home}>Terms of servies</div>
              <div className={styles.home}>Privacy Policy</div>
              <div className={styles.home}>Security</div>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
};

export default LandingPage;
