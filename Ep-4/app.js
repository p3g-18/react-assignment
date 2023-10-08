import React from "react";
import ReactDOM from "react-dom/client";
//creating react element(ep-1 & 2)

// const heading = React.createElement("h1", { id: "heading" }, "Hi i am parth");
// console.log(heading);
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

//creating an element using JSX

// const jsxHeading = <h1 id="head">hi i am parth but jsx</h1>;
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(jsxHeading);

// React Components
// Class Based Component - OLD
// Functional Component - NEW

//const Title = () => <h1>component compositon</h1>; //functional component composition
// const title = <h1>HI</h1>; //created a react element

// const Heading = () => (
//   <div>
//     {title};<h1 id="head">functional component</h1>
//   </div>
// );

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<Heading />);

/**
 * Header
 * - logo
 * - links(home,about,cart)
 * Body
 * - Search input
 * - RestaurantContainer
 *    - Restuarant-cards
 *    -
 * footer
 * - copyright
 * - links
 * - address
 * - contact
 */

//header component

const header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://img.freepik.com/premium-vector/good-food-logo-design_79169-10.jpg"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};
const RestaurantCard = (props) => {
  const { resData } = props; //destructuring
  const { cloudinaryImageId, cuisines, name, avgRating, costForTwo } =
    resData?.info; //destructuring and optional chaining(doesn't throw an error instead "undefined")

  return (
    <div className="res-card">
      <img
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
        alt="img"
        className="res-logo"
      ></img>

      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
    </div>
  );
};

const resObj = {
  restaurants: [
    {
      info: {
        id: "2192",
        name: "Aroma's Hyderabad House",
        cloudinaryImageId: "y2hukcrkdh4p4v6djdff",
        locality: "Rahatani Road",
        areaName: "Pimple Saudagar",
        costForTwo: "₹500 for two",
        cuisines: ["Biryani", "Mughlai", "North Indian", "Chinese"],
        avgRating: 4.1,
        feeDetails: {
          restaurantId: "2192",
          fees: [
            {
              name: "BASE_DISTANCE",
              fee: 3300,
            },
            {
              name: "BASE_TIME",
            },
            {
              name: "ANCILLARY_SURGE_FEE",
            },
          ],
          totalFee: 3300,
        },
        parentId: "71",
        avgRatingString: "4.1",
        totalRatingsString: "10K+",
        promoted: true,
        adTrackingId:
          "cid=8752452~p=1~eid=0000018a-f45d-da84-55fa-baff001a015a~srvts=1696316906116~45995",
        sla: {
          deliveryTime: 16,
          lastMileTravel: 1.4,
          serviceability: "SERVICEABLE",
          slaString: "16 mins",
          lastMileTravelString: "1.4 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2023-10-03 16:00:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            textBased: {},
            imageBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "40% OFF",
          subHeader: "UPTO ₹80",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
      analytics: {},
      cta: {
        link: "swiggy://menu?restaurant_id=2192",
        text: "RESTAURANT_MENU",
        type: "DEEPLINK",
      },
    },
    {
      info: {
        id: "23705",
        name: "McDonald's",
        cloudinaryImageId: "ee5f8e06b300efc07c9fe3f4df40dfc4",
        locality: "Pimple Saudagar",
        areaName: "Pimple Saudagar",
        costForTwo: "₹400 for two",
        cuisines: ["Burgers", "Beverages", "Cafe", "Desserts"],
        avgRating: 4.3,
        feeDetails: {
          restaurantId: "23705",
          fees: [
            {
              name: "BASE_DISTANCE",
              fee: 3300,
            },
            {
              name: "BASE_TIME",
            },
            {
              name: "ANCILLARY_SURGE_FEE",
            },
          ],
          totalFee: 3300,
        },
        parentId: "630",
        avgRatingString: "4.3",
        totalRatingsString: "10K+",
        sla: {
          deliveryTime: 16,
          lastMileTravel: 1.9,
          serviceability: "SERVICEABLE",
          slaString: "16 mins",
          lastMileTravelString: "1.9 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2023-10-03 23:45:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        aggregatedDiscountInfoV2: {},
        type: "F",
        badgesV2: {
          entityBadges: {
            textBased: {},
            imageBased: {},
            textExtendedBadges: {},
          },
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
      analytics: {},
      cta: {
        link: "swiggy://menu?restaurant_id=23705",
        text: "RESTAURANT_MENU",
        type: "DEEPLINK",
      },
    },
    {
      info: {
        id: "16061",
        name: "KFC",
        cloudinaryImageId: "56c9ab92bd79745fd152a30fa2525426",
        locality: "Spot 18 Mall",
        areaName: "Pimple Saudagar",
        costForTwo: "₹400 for two",
        cuisines: ["Burgers", "Biryani", "American", "Snacks"],
        avgRating: 4,
        feeDetails: {
          restaurantId: "16061",
          fees: [
            {
              name: "BASE_DISTANCE",
              fee: 3800,
            },
            {
              name: "BASE_TIME",
            },
            {
              name: "ANCILLARY_SURGE_FEE",
            },
          ],
          totalFee: 3800,
        },
        parentId: "547",
        avgRatingString: "4.0",
        totalRatingsString: "10K+",
        sla: {
          deliveryTime: 16,
          lastMileTravel: 1.9,
          serviceability: "SERVICEABLE",
          slaString: "16 mins",
          lastMileTravelString: "1.9 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2023-10-04 01:00:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            textBased: {},
            imageBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "20% OFF",
          subHeader: "UPTO ₹50",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
      analytics: {},
      cta: {
        link: "swiggy://menu?restaurant_id=16061",
        text: "RESTAURANT_MENU",
        type: "DEEPLINK",
      },
    },
    {
      info: {
        id: "233324",
        name: "Burger King",
        cloudinaryImageId: "e33e1d3ba7d6b2bb0d45e1001b731fcf",
        locality: "Pimple Saudagar",
        areaName: "Rahatani",
        costForTwo: "₹350 for two",
        cuisines: ["Burgers", "American"],
        avgRating: 4,
        feeDetails: {
          restaurantId: "233324",
          fees: [
            {
              name: "BASE_DISTANCE",
              fee: 3300,
            },
            {
              name: "BASE_TIME",
            },
            {
              name: "ANCILLARY_SURGE_FEE",
            },
          ],
          totalFee: 3300,
        },
        parentId: "166",
        avgRatingString: "4.0",
        totalRatingsString: "10K+",
        sla: {
          deliveryTime: 22,
          lastMileTravel: 1.6,
          serviceability: "SERVICEABLE",
          slaString: "22 mins",
          lastMileTravelString: "1.6 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2023-10-04 03:50:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            textBased: {},
            imageBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "60% OFF",
          subHeader: "UPTO ₹120",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
      analytics: {},
      cta: {
        link: "swiggy://menu?restaurant_id=233324",
        text: "RESTAURANT_MENU",
        type: "DEEPLINK",
      },
    },
    {
      info: {
        id: "26116",
        name: "Virinda Pav Bhaji (Wakad)",
        cloudinaryImageId: "srpzluqchyyxexrglvbn",
        locality: "Shankar Kalat Nagar",
        areaName: "Wakad",
        costForTwo: "₹200 for two",
        cuisines: ["Fast Food"],
        avgRating: 4,
        veg: true,
        feeDetails: {
          restaurantId: "26116",
          fees: [
            {
              name: "BASE_DISTANCE",
              fee: 4300,
            },
            {
              name: "BASE_TIME",
            },
            {
              name: "ANCILLARY_SURGE_FEE",
            },
          ],
          totalFee: 4300,
        },
        parentId: "223986",
        avgRatingString: "4.0",
        totalRatingsString: "5K+",
        promoted: true,
        adTrackingId:
          "cid=8515733~p=2~eid=0000018a-f45d-da84-55fa-bb00001a0238~srvts=1696316906116~45995",
        sla: {
          deliveryTime: 23,
          lastMileTravel: 3.5,
          serviceability: "SERVICEABLE",
          slaString: "23 mins",
          lastMileTravelString: "3.5 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2023-10-03 23:00:00",
          opened: true,
        },
        badges: {
          imageBadges: [
            {
              imageId: "v1695133679/badges/Pure_Veg111.png",
              description: "pureveg",
            },
          ],
        },
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {
              badgeObject: [
                {
                  attributes: {
                    imageId: "v1695133679/badges/Pure_Veg111.png",
                    description: "pureveg",
                  },
                },
              ],
            },
            textExtendedBadges: {},
            textBased: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "30% OFF",
          subHeader: "UPTO ₹75",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
      analytics: {},
      cta: {
        link: "swiggy://menu?restaurant_id=26116",
        text: "RESTAURANT_MENU",
        type: "DEEPLINK",
      },
    },
    {
      info: {
        id: "24434",
        name: "Domino's Pizza",
        cloudinaryImageId: "dk5nnh5w4jdqdrmvwgji",
        locality: "Rahatani Road",
        areaName: "Pimple Saudagar",
        costForTwo: "₹400 for two",
        cuisines: ["Pizzas", "Italian", "Pastas", "Desserts"],
        avgRating: 4.2,
        feeDetails: {
          restaurantId: "24434",
          fees: [
            {
              name: "BASE_DISTANCE",
              fee: 3300,
            },
            {
              name: "BASE_TIME",
            },
            {
              name: "ANCILLARY_SURGE_FEE",
            },
          ],
          totalFee: 3300,
        },
        parentId: "2456",
        avgRatingString: "4.2",
        totalRatingsString: "10K+",
        sla: {
          deliveryTime: 25,
          serviceability: "SERVICEABLE",
          slaString: "25 mins",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2023-10-04 02:59:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            textBased: {},
            imageBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "₹150 OFF",
          subHeader: "ABOVE ₹299",
          discountTag: "FLAT DEAL",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
      analytics: {},
      cta: {
        link: "swiggy://menu?restaurant_id=24434",
        text: "RESTAURANT_MENU",
        type: "DEEPLINK",
      },
    },
    {
      info: {
        id: "538367",
        name: "Great Indian Khichdi by EatFit",
        cloudinaryImageId: "6e44fd7f1e5cd9967edfe47c10247671",
        locality: "Bhat Nagar",
        areaName: "Pimpri",
        costForTwo: "₹200 for two",
        cuisines: ["Indian", "Home Food", "Healthy Food", "Snacks"],
        avgRating: 4.2,
        veg: true,
        feeDetails: {
          restaurantId: "538367",
          fees: [
            {
              name: "BASE_DISTANCE",
              fee: 4300,
            },
            {
              name: "BASE_TIME",
            },
            {
              name: "ANCILLARY_SURGE_FEE",
            },
          ],
          totalFee: 4300,
        },
        parentId: "319582",
        avgRatingString: "4.2",
        totalRatingsString: "1K+",
        sla: {
          deliveryTime: 24,
          lastMileTravel: 4.6,
          serviceability: "SERVICEABLE",
          slaString: "24 mins",
          lastMileTravelString: "4.6 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2023-10-03 23:00:00",
          opened: true,
        },
        badges: {
          imageBadges: [
            {
              imageId: "v1695133679/badges/Pure_Veg111.png",
              description: "pureveg",
            },
          ],
          textExtendedBadges: [
            {
              iconId: "guiltfree/GF_Logo_android_3x",
              shortDescription: "options available",
              fontColor: "#7E808C",
            },
          ],
        },
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            textBased: {},
            imageBased: {
              badgeObject: [
                {
                  attributes: {
                    imageId: "v1695133679/badges/Pure_Veg111.png",
                    description: "pureveg",
                  },
                },
              ],
            },
            textExtendedBadges: {
              badgeObject: [
                {
                  attributes: {
                    shortDescription: "options available",
                    fontColor: "#7E808C",
                    iconId: "guiltfree/GF_Logo_android_3x",
                    description: "",
                  },
                },
              ],
            },
          },
        },
        aggregatedDiscountInfoV3: {
          header: "EVERY ITEM",
          subHeader: "@ ₹149",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
      analytics: {},
      cta: {
        link: "swiggy://menu?restaurant_id=538367",
        text: "RESTAURANT_MENU",
        type: "DEEPLINK",
      },
    },
    {
      info: {
        id: "688720",
        name: "Big Bowl",
        cloudinaryImageId: "546730f50d0c2b6e9a1446022a08ed21",
        locality: "Rahatan",
        areaName: "Pimple Saudagar",
        costForTwo: "₹250 for two",
        cuisines: ["North Indian", "Chinese", "Tibetan", "Desserts"],
        avgRating: 3.3,
        feeDetails: {
          restaurantId: "688720",
          fees: [
            {
              name: "BASE_DISTANCE",
              fee: 3300,
            },
            {
              name: "BASE_TIME",
            },
            {
              name: "ANCILLARY_SURGE_FEE",
            },
          ],
          totalFee: 3300,
        },
        parentId: "434792",
        avgRatingString: "3.3",
        totalRatingsString: "100+",
        sla: {
          deliveryTime: 21,
          lastMileTravel: 1.9,
          serviceability: "SERVICEABLE",
          slaString: "21 mins",
          lastMileTravelString: "1.9 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2023-10-04 01:00:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            textExtendedBadges: {},
            textBased: {},
            imageBased: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "60% OFF",
          subHeader: "UPTO ₹120",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
      analytics: {},
      cta: {
        link: "swiggy://menu?restaurant_id=688720",
        text: "RESTAURANT_MENU",
        type: "DEEPLINK",
      },
    },
    {
      info: {
        id: "562875",
        name: "Taco Bell",
        cloudinaryImageId: "d3b3db238b6448c3f297c851e9d0b96b",
        locality: "Pimple Saudagar",
        areaName: "Pimple Saudagar",
        costForTwo: "₹300 for two",
        cuisines: ["Mexican"],
        avgRating: 4,
        feeDetails: {
          restaurantId: "562875",
          fees: [
            {
              name: "BASE_DISTANCE",
              fee: 3800,
            },
            {
              name: "BASE_TIME",
            },
            {
              name: "ANCILLARY_SURGE_FEE",
            },
          ],
          totalFee: 3800,
        },
        parentId: "1557",
        avgRatingString: "4.0",
        totalRatingsString: "500+",
        promoted: true,
        adTrackingId:
          "cid=8550669~p=3~eid=0000018a-f45d-da84-55fa-bb01001a032c~srvts=1696316906116~45995",
        sla: {
          deliveryTime: 22,
          lastMileTravel: 1.6,
          serviceability: "SERVICEABLE",
          slaString: "22 mins",
          lastMileTravelString: "1.6 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2023-10-03 23:00:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            textBased: {},
            imageBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "40% OFF",
          subHeader: "UPTO ₹80",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
      analytics: {},
      cta: {
        link: "swiggy://menu?restaurant_id=562875",
        text: "RESTAURANT_MENU",
        type: "DEEPLINK",
      },
    },
    {
      info: {
        id: "124544",
        name: "Hotel Ekvira",
        cloudinaryImageId: "50392a52a242af6cf492842ce29f66d3",
        locality: "Ganga Park",
        areaName: "Pimple Saudagar",
        costForTwo: "₹300 for two",
        cuisines: ["North Indian", "Chaat"],
        avgRating: 4,
        veg: true,
        feeDetails: {
          restaurantId: "124544",
          fees: [
            {
              name: "BASE_DISTANCE",
              fee: 3300,
            },
            {
              name: "BASE_TIME",
            },
            {
              name: "ANCILLARY_SURGE_FEE",
            },
          ],
          totalFee: 3300,
        },
        parentId: "98874",
        avgRatingString: "4.0",
        totalRatingsString: "1K+",
        sla: {
          deliveryTime: 21,
          lastMileTravel: 2.3,
          serviceability: "SERVICEABLE",
          slaString: "21 mins",
          lastMileTravelString: "2.3 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2023-10-03 22:00:00",
          opened: true,
        },
        badges: {
          imageBadges: [
            {
              imageId: "v1695133679/badges/Pure_Veg111.png",
              description: "pureveg",
            },
          ],
        },
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            textExtendedBadges: {},
            textBased: {},
            imageBased: {
              badgeObject: [
                {
                  attributes: {
                    imageId: "v1695133679/badges/Pure_Veg111.png",
                    description: "pureveg",
                  },
                },
              ],
            },
          },
        },
        aggregatedDiscountInfoV3: {
          header: "20% OFF",
          subHeader: "UPTO ₹50",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
      analytics: {},
      cta: {
        link: "swiggy://menu?restaurant_id=124544",
        text: "RESTAURANT_MENU",
        type: "DEEPLINK",
      },
    },
    {
      info: {
        id: "188105",
        name: "Ramdev Dhaba Pure Veg",
        cloudinaryImageId: "qyulkul7gmnp9swxnyhp",
        locality: "Vishnu Dev Nagar",
        areaName: "Wakad",
        costForTwo: "₹300 for two",
        cuisines: ["Jain", "Rajasthani", "North Indian"],
        avgRating: 3.8,
        veg: true,
        feeDetails: {
          restaurantId: "188105",
          fees: [
            {
              name: "BASE_DISTANCE",
              fee: 3300,
            },
            {
              name: "BASE_TIME",
            },
            {
              name: "ANCILLARY_SURGE_FEE",
            },
          ],
          totalFee: 3300,
        },
        parentId: "166534",
        avgRatingString: "3.8",
        totalRatingsString: "1K+",
        sla: {
          deliveryTime: 23,
          lastMileTravel: 2.1,
          serviceability: "SERVICEABLE",
          slaString: "23 mins",
          lastMileTravelString: "2.1 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2023-10-03 15:30:00",
          opened: true,
        },
        badges: {
          imageBadges: [
            {
              imageId: "v1695133679/badges/Pure_Veg111.png",
              description: "pureveg",
            },
          ],
        },
        isOpen: true,
        aggregatedDiscountInfoV2: {},
        type: "F",
        badgesV2: {
          entityBadges: {
            textExtendedBadges: {},
            textBased: {},
            imageBased: {
              badgeObject: [
                {
                  attributes: {
                    imageId: "v1695133679/badges/Pure_Veg111.png",
                    description: "pureveg",
                  },
                },
              ],
            },
          },
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
      analytics: {},
      cta: {
        link: "swiggy://menu?restaurant_id=188105",
        text: "RESTAURANT_MENU",
        type: "DEEPLINK",
      },
    },
    {
      info: {
        id: "175717",
        name: "Radha Pure Veg",
        cloudinaryImageId: "kbupbusbmr3oewcjmzse",
        locality: "Kaspate Wasti",
        areaName: "Wakad",
        costForTwo: "₹500 for two",
        cuisines: ["North Indian"],
        avgRating: 3.9,
        veg: true,
        feeDetails: {
          restaurantId: "175717",
          fees: [
            {
              name: "BASE_DISTANCE",
              fee: 3300,
            },
            {
              name: "BASE_TIME",
            },
            {
              name: "ANCILLARY_SURGE_FEE",
            },
          ],
          totalFee: 3300,
        },
        parentId: "164182",
        avgRatingString: "3.9",
        totalRatingsString: "1K+",
        sla: {
          deliveryTime: 22,
          lastMileTravel: 2.3,
          serviceability: "SERVICEABLE",
          slaString: "22 mins",
          lastMileTravelString: "2.3 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2023-10-03 23:00:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            textExtendedBadges: {},
            textBased: {},
            imageBased: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "15% OFF",
          subHeader: "ABOVE ₹800",
          discountTag: "FLAT DEAL",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
      analytics: {},
      cta: {
        link: "swiggy://menu?restaurant_id=175717",
        text: "RESTAURANT_MENU",
        type: "DEEPLINK",
      },
    },
    {
      info: {
        id: "243624",
        name: "Pakwan Food Tradition",
        cloudinaryImageId: "oyiunemy4nundrbvijhx",
        locality: "Aundh Ravet Road",
        areaName: "Pimple Saudagar",
        costForTwo: "₹250 for two",
        cuisines: ["Indian"],
        avgRating: 4.2,
        veg: true,
        feeDetails: {
          restaurantId: "243624",
          fees: [
            {
              name: "BASE_DISTANCE",
              fee: 3300,
            },
            {
              name: "BASE_TIME",
            },
            {
              name: "ANCILLARY_SURGE_FEE",
            },
          ],
          totalFee: 3300,
        },
        parentId: "153884",
        avgRatingString: "4.2",
        totalRatingsString: "500+",
        promoted: true,
        adTrackingId:
          "cid=8515994~p=4~eid=0000018a-f45d-da84-55fa-bb02001a0418~srvts=1696316906116~45995",
        sla: {
          deliveryTime: 22,
          lastMileTravel: 2.5,
          serviceability: "SERVICEABLE",
          slaString: "22 mins",
          lastMileTravelString: "2.5 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2023-10-03 15:30:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        aggregatedDiscountInfoV2: {},
        type: "F",
        badgesV2: {
          entityBadges: {
            textExtendedBadges: {},
            textBased: {},
            imageBased: {},
          },
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
      analytics: {},
      cta: {
        link: "swiggy://menu?restaurant_id=243624",
        text: "RESTAURANT_MENU",
        type: "DEEPLINK",
      },
    },
    {
      info: {
        id: "77208",
        name: "New Ashoka Pure Veg",
        cloudinaryImageId: "n1wm5myazuwxwqpz7ojn",
        locality: "BRT Road",
        areaName: "Pimple Saudagar",
        costForTwo: "₹350 for two",
        cuisines: ["North Indian", "South Indian"],
        avgRating: 4,
        veg: true,
        feeDetails: {
          restaurantId: "77208",
          fees: [
            {
              name: "BASE_DISTANCE",
              fee: 3300,
            },
            {
              name: "BASE_TIME",
            },
            {
              name: "ANCILLARY_SURGE_FEE",
            },
          ],
          totalFee: 3300,
        },
        parentId: "18876",
        avgRatingString: "4.0",
        totalRatingsString: "5K+",
        sla: {
          deliveryTime: 21,
          lastMileTravel: 2.2,
          serviceability: "SERVICEABLE",
          slaString: "21 mins",
          lastMileTravelString: "2.2 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2023-10-03 16:00:00",
          opened: true,
        },
        badges: {
          imageBadges: [
            {
              imageId: "v1695133679/badges/Pure_Veg111.png",
              description: "pureveg",
            },
          ],
        },
        isOpen: true,
        aggregatedDiscountInfoV2: {},
        type: "F",
        badgesV2: {
          entityBadges: {
            textBased: {},
            imageBased: {
              badgeObject: [
                {
                  attributes: {
                    description: "pureveg",
                    imageId: "v1695133679/badges/Pure_Veg111.png",
                  },
                },
              ],
            },
            textExtendedBadges: {},
          },
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
      analytics: {},
      cta: {
        link: "swiggy://menu?restaurant_id=77208",
        text: "RESTAURANT_MENU",
        type: "DEEPLINK",
      },
    },
    {
      info: {
        id: "9174",
        name: "Varuna Pure Veg",
        cloudinaryImageId: "a2az5iws5kuyi7npu4kd",
        locality: "Dutta Mandir Road",
        areaName: "Wakad",
        costForTwo: "₹250 for two",
        cuisines: ["North Indian", "Punjabi", "Chinese", "Biryani"],
        avgRating: 3.9,
        veg: true,
        feeDetails: {
          restaurantId: "9174",
          fees: [
            {
              name: "BASE_DISTANCE",
              fee: 4300,
            },
            {
              name: "BASE_TIME",
            },
            {
              name: "ANCILLARY_SURGE_FEE",
            },
          ],
          totalFee: 4300,
        },
        parentId: "11934",
        avgRatingString: "3.9",
        totalRatingsString: "10K+",
        sla: {
          deliveryTime: 24,
          lastMileTravel: 3.9,
          serviceability: "SERVICEABLE",
          slaString: "24 mins",
          lastMileTravelString: "3.9 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2023-10-04 00:00:00",
          opened: true,
        },
        badges: {
          imageBadges: [
            {
              imageId: "v1695133679/badges/Pure_Veg111.png",
              description: "pureveg",
            },
          ],
        },
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            textBased: {},
            imageBased: {
              badgeObject: [
                {
                  attributes: {
                    imageId: "v1695133679/badges/Pure_Veg111.png",
                    description: "pureveg",
                  },
                },
              ],
            },
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "60% OFF",
          subHeader: "UPTO ₹120",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
      analytics: {},
      cta: {
        link: "swiggy://menu?restaurant_id=9174",
        text: "RESTAURANT_MENU",
        type: "DEEPLINK",
      },
    },
    {
      info: {
        id: "462205",
        name: "Hotel Nisarg Misal House",
        cloudinaryImageId: "mefx5semcguco7wkojsx",
        locality: "Nakhate Nagar",
        areaName: "Pimple Saudagar",
        costForTwo: "₹190 for two",
        cuisines: ["Snacks", "Beverages"],
        avgRating: 4,
        veg: true,
        feeDetails: {
          restaurantId: "462205",
          fees: [
            {
              name: "BASE_DISTANCE",
              fee: 3300,
            },
            {
              name: "BASE_TIME",
            },
            {
              name: "ANCILLARY_SURGE_FEE",
            },
          ],
          totalFee: 3300,
        },
        parentId: "5796",
        avgRatingString: "4.0",
        totalRatingsString: "1K+",
        sla: {
          deliveryTime: 18,
          lastMileTravel: 1.6,
          serviceability: "SERVICEABLE",
          slaString: "18 mins",
          lastMileTravelString: "1.6 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2023-10-03 22:00:00",
          opened: true,
        },
        badges: {
          imageBadges: [
            {
              imageId: "v1695133679/badges/Pure_Veg111.png",
              description: "pureveg",
            },
          ],
        },
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            textBased: {},
            imageBased: {
              badgeObject: [
                {
                  attributes: {
                    imageId: "v1695133679/badges/Pure_Veg111.png",
                    description: "pureveg",
                  },
                },
              ],
            },
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "10% OFF",
          subHeader: "UPTO ₹40",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
      analytics: {},
      cta: {
        link: "swiggy://menu?restaurant_id=462205",
        text: "RESTAURANT_MENU",
        type: "DEEPLINK",
      },
    },
  ],
  theme: "SeoRestaurantListingGridWidget",
};

const Body = () => {
  return (
    <div className="body">
      <div className="Search">Search</div>

      <div className="res-container">
        {resObj.restaurants.map((restaurants) => (
          <RestaurantCard key={restaurants.info.id} resData={restaurants} />
        ))}
        {/* <RestaurantCard resData={resObj} /> */}
        {/* <RestaurantCard resName="Subway" cuisine="salads, subs" stars="3" />
        <RestaurantCard
          resName="Meghna Foods"
          cuisine="vadapav, samosa"
          stars="4"
        />
        <RestaurantCard
          resName="National Food"
          cuisine="burger, pizza"
          stars="5"
        />
        <RestaurantCard resName="Taco bell" cuisine="tacos" stars="3" />
        <RestaurantCard resName="Mother Dairy" cuisine="milk malai" stars="2" />
        <RestaurantCard resName="Oatilicious" cuisine="oat meal" stars="5" /> */}
      </div>
    </div>
  );
};
const appLayout = () => {
  return (
    <div className="app">
      {header()}
      {Body()}
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(appLayout());
