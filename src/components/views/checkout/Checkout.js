import React from "react";
import { Container, Row } from "react-bootstrap";

import { CustomInfoPan, CustomHeadersIntro } from "../../modules";

/*
  Check it out. Array that maps out into the component.
  I would even store this array in another file since it
  is pretty long.
*/

const modules = [
  {
    header: "Basket | Empty Basket",
    linkPage: "/emptybasket",
    linkDoc: "/emptybasket/doc",
    version: "v. 1.0",
    text: "If a user navigates to the basket, or removes all items from their basket, they will see an empty basket version of the page. This page notifies the customer that they do not have any products in their cart, and makes a few recommendations.",
  },
  {
    header: "Basket | Standard Page",
    linkPage: "/standardpage",
    linkDoc: "/standardpage/doc",
    version: "v. 1.0",
    text: "Standard basket page for users who are not logged, logged in + rewards and logged in without rewards.",
  },
  {
    header: "Basket | Standard Page | Subscription Message",
    linkPage: "/standardpagesubscriptionmessage",
    linkDoc: "/standardpagesubscriptionmessage/doc",
    version: "v. 1.0",
    text: "Standard basket page w/ subscription message",
  },
  {
    header: "Delivery Info | Not Logged In",
    linkPage: "/deliveryinfologgedout",
    linkDoc: "/deliveryinfologgedout/doc",
    version: "v. 1.0",
    text: "Delivery Information page for users who are not logged in to their account.",
  },
  {
    header: "Delivery Info | Logged In",
    linkPage: "/deliveryinfologgedin",
    linkDoc: "/deliveryinfologgedin/doc",
    version: "v. 1.0",
    text: "Delivery Information page for logged in users displaying their gift recipients.",
  },
  {
    header: "Delivery Info | Address Error",
    linkPage: "/deliveryinfoaddresserror",
    linkDoc: "/deliveryinfoaddresserror/doc",
    version: "v. 1.0",
    text: "Delivery Information page displaying an Address Verification error message.",
  },
  {
    header: "Billing Info | Not Logged In",
    linkPage: "/billinginfologgedout",
    linkDoc: "/billinginfologgedout/doc",
    version: "v. 1.0",
    text: "Billing Information and order review page for users who are not logged in to their account.",
  },
  {
    header: "Billing Info | Logged In",
    linkPage: "/billinginfologgedin",
    linkDoc: "/billinginfologgedin/doc",
    version: "v. 1.0",
    text: "Billing Information and order review page for logged in users allowing them to select saved payment info.",
  },
  {
    header: "Billing Info | Credit Card Error",
    linkPage: "/billinginfoccerror",
    linkDoc: "/billinginfoccerror/doc",
    version: "v. 1.0",
    text: "Billing Information and order review page displaying a credit card processing error message.",
  },
  {
    header: "Billing Info | Logged In - In Store Pickup",
    linkPage: "/billinginfologgedininstorepickup",
    linkDoc: "/billinginfologgedininstorepickup/doc",
    version: "v. 1.0",
    text: "Billing Information and order review page for logged in users allowing them to select saved payment info with In Store Pickup text.",
  },
  {
    header: "Billing Info | Credit Card Error - In Store Pickup",
    linkPage: "/billinginfoccerrorinstorepickup",
    linkDoc: "/billinginfoccerrorinstorepickup/doc",
    version: "v. 1.0",
    text: "Billing Information and order review page displaying a credit card processing error message with In Store Pickup text.",
  },
  {
    header: "Confirmation | Order Confirmation Page",
    linkPage: "/confirmationpage",
    linkDoc: "/confirmationpage/doc",
    version: "v. 1.0",
    text: "Order confirmation page displaying the order details for the customer.",
  },
  {
    header: "Confirmation | Order Confirmation Page - In Store Pickup",
    linkPage: "/confirmationpageinstorepickup",
    linkDoc: "/confirmationpageinstorepickup/doc",
    version: "v. 1.0",
    text: "Order confirmation page displaying the order details for the customer with In Store Pickup text.",
  },
];

const Checkout = () => (
    <div>
      <CustomHeadersIntro header="eFlorist | Custom Modules" />
      <Container>
        <Row>
          {modules.map(module => (
            <CustomInfoPan key={module.header} {...module} />
          ))}
        </Row>
      </Container>
    </div>
  );

export default Checkout;
