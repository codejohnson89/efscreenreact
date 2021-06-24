import React from 'react';
import { Container, Row } from 'react-bootstrap';

import Header from '../../modules/Header';
import CustomHeadersIntro from '../../modules/CustomHeadersIntro';
import CustomInfoPan from '../../modules/CustomInfoPan';

function Checkout() {
    return (
        <div>
            <CustomHeadersIntro header="eFlorist | Custom Modules"/>
            <Container>
                <Row>
                    <CustomInfoPan
                        header="Basket | Empty Basket"
                        linkPage="/emptybasket"
                        linkDoc="/emptybasket/doc"
                        version="v. 1.0"
                        text="If a user navigates to the basket, or removes all items from their basket, they will see an empty basket version of the page. This page notifies the customer that they do not have any products in their cart, and makes a few recommendations."
                        />
                    <CustomInfoPan
                        header="Basket | Standard Page"
                        linkPage="/standardpage"
                        linkDoc="/standardpage/doc"
                        version="v. 1.0"
                        text="Standard basket page for users who are not logged, logged in + rewards and logged in without rewards."
                        />
                    <CustomInfoPan
                        header="Basket | Standard Page | Subscription Message"
                        linkPage="/standardpagesubscriptionmessage"
                        linkDoc="/standardpagesubscriptionmessage/doc"
                        version="v. 1.0"
                        text="Standard basket page w/ subscription message"
                        />
                    <CustomInfoPan
                        header="Delivery Info | Not Logged In"
                        linkPage="/deliveryinfologgedout"
                        linkDoc="/deliveryinfologgedout/doc"
                        version="v. 1.0"
                        text="Delivery Information page for users who are not logged in to their account."
                        />
                    <CustomInfoPan
                        header="Delivery Info | Logged In"
                        linkPage="/deliveryinfologgedin"
                        linkDoc="/deliveryinfologgedin/doc"
                        version="v. 1.0"
                        text="Delivery Information page for logged in users displaying their gift recipients."
                        />
                    <CustomInfoPan
                        header="Delivery Info | Address Error"
                        linkPage="/deliveryinfoaddresserror"
                        linkDoc="/deliveryinfoaddresserror/doc"
                        version="v. 1.0"
                        text="Delivery Information page displaying an Address Verification error message."
                        />
                    <CustomInfoPan
                        header="Billing Info | Not Logged In"
                        linkPage="/billinginfologgedout"
                        linkDoc="/billinginfologgedout/doc"
                        version="v. 1.0"
                        text="Billing Information and order review page for users who are not logged in to their account."
                        />
                    <CustomInfoPan
                        header="Billing Info | Logged In"
                        linkPage="/billinginfologgedin"
                        linkDoc="/billinginfologgedin/doc"
                        version="v. 1.0"
                        text="Billing Information and order review page for logged in users allowing them to select saved payment info."
                        />
                    <CustomInfoPan
                        header="Billing Info | Credit Card Error"
                        linkPage="/billinginfoccerror"
                        linkDoc="/billinginfoccerror/doc"
                        version="v. 1.0"
                        text="Billing Information and order review page displaying a credit card processing error message."
                        />
                    <CustomInfoPan
                        header="Billing Info | Logged In - In Store Pickup"
                        linkPage="/billinginfologgedininstorepickup"
                        linkDoc="/billinginfologgedininstorepickup/doc"
                        version="v. 1.0"
                        text="Billing Information and order review page for logged in users allowing them to select saved payment info with In Store Pickup text."
                        />
                    <CustomInfoPan
                        header="Billing Info | Credit Card Error - In Store Pickup"
                        linkPage="/billinginfoccerrorinstorepickup"
                        linkDoc="/billinginfoccerrorinstorepickup/doc"
                        version="v. 1.0"
                        text="Billing Information and order review page displaying a credit card processing error message with In Store Pickup text."
                        />
                    <CustomInfoPan
                        header="Confirmation | Order Confirmation Page"
                        linkPage="/confirmationpage"
                        linkDoc="/confirmationpage/doc"
                        version="v. 1.0"
                        text="Order confirmation page displaying the order details for the customer."
                        />
                    <CustomInfoPan
                        header="Confirmation | Order Confirmation Page - In Store Pickup"
                        linkPage="/confirmationpageinstorepickup"
                        linkDoc="/confirmationpageinstorepickup/doc"
                        version="v. 1.0"
                        text="Order confirmation page displaying the order details for the customer with In Store Pickup text."
                        />
                </Row>
            </Container>
        </div>
    )
}

export default Checkout;