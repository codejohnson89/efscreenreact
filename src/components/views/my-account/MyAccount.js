import React from 'react';
import { Container, Row } from 'react-bootstrap';

import Header from '../../modules/Header';
import CustomHeadersIntro from '../../modules/CustomHeadersIntro';
import CustomInfoPan from '../../modules/CustomInfoPan';

function MyAccount() {
    return (
        <div>
            <CustomHeadersIntro header="eFlorist | Custom Modules"/>
            <Container>
                <Row>
                    <CustomInfoPan
                        header="Account | Log In & Error Message"
                        linkPage="/loginerrormessage"
                        linkDoc="/loginerrormessage/doc"
                        version="v. 1.0"
                        text="Users can choose to create a new account or login. The 'Log In' link in the header will serve as the primary place for log in, but this is a secondary option and can be used when log in prompts are needed in other points in the user flow."
                        />
                    <CustomInfoPan
                        header="Account | Sign Up"
                        linkPage="/signup"
                        linkDoc="/signup/doc"
                        version="v. 1.0"
                        text="Account creation page (via form or Facebook)"
                        />
                    <CustomInfoPan
                        header="Account | Express Checkout"
                        linkPage="/expresscheckout"
                        linkDoc="/expresscheckout/doc"
                        version="v. 1.0"
                        text="Appears after a user has created an account. Prompts user to add in billing info for faster checkout."
                        />
                    <CustomInfoPan
                        header="Account | Order History"
                        linkPage="/orderhistory"
                        linkDoc="/orderhistory/doc"
                        version="v. 1.0"
                        text="Primary page for the account management section. Overview of user's order history."
                        />
                    <CustomInfoPan
                        header="Account | Order History | Order Detail"
                        linkPage="/orderhistorydetail"
                        linkDoc="/orderhistorydetail/doc"
                        version="v. 1.0"
                        text="Shows more info about an individual order. Example shows one bouquet in a previous order."
                        />
                    <CustomInfoPan
                        header="Account | Order History | Order Detail | Subscription Message"
                        linkPage="/orderhistorydetailsubscriptionmessage"
                        linkDoc="/orderhistorydetailsubscriptionmessage/doc"
                        version="v. 1.0"
                        text="Primary page for the account management section. Overview of user's order history."
                        />
                    <CustomInfoPan
                        header="Account | Order History | Order Detail Multiple Items"
                        linkPage="/orderhistorydetailmultipleitems"
                        linkDoc="/orderhistorydetailmultipleitems/doc"
                        version="v. 1.0"
                        text="Shows more info about an individual order. Example shows how one order with multiple bouquet purchases will appear."
                        />
                    <CustomInfoPan
                        header="Account | Info"
                        linkPage="/accountinfo"
                        linkDoc="/accountinfo/doc"
                        version="v. 1.0"
                        text="User can update their account info or delete their account."
                        />
                    <CustomInfoPan
                        header="Account | Deleted Account"
                        linkPage="/deleteaccount"
                        linkDoc="/deleteaccount/doc"
                        version="v. 1.0"
                        text="Page that appears after a user deletes an account from the Account Info page."
                        />
                    <CustomInfoPan
                        header="Account | Change Password"
                        linkPage="/changepassword"
                        linkDoc="/changepassword/doc"
                        version="v. 1.0"
                        text="Allows user to create a new password."
                        />
                    <CustomInfoPan
                        header="Account | Change Password | Password Confirmation"
                        linkPage="/changepasswordconfirmation"
                        linkDoc="/changepasswordconfirmation/doc"
                        version="v. 1.0"
                        text="Appears after new password is successfully created."
                        />
                    <CustomInfoPan
                        header="Account | Reminders"
                        linkPage="/reminders"
                        linkDoc="/reminders/doc"
                        version="v. 1.0"
                        text="Main page for viewing email reminders."
                        />
                    <CustomInfoPan
                        header="Account | Reminders | New Reminder"
                        linkPage="/remindersnew"
                        linkDoc="/remindersnew/doc"
                        version="v. 1.0"
                        text="Allows user to create and save custom email reminders."
                        />
                    <CustomInfoPan
                        header="Account | Reminders | Edit Reminder"
                        linkPage="/remindersedit"
                        linkDoc="/remindersedit/doc"
                        version="v. 1.0"
                        text="Allows user to edit existing custom reminders."
                        />
                    <CustomInfoPan
                        header="Account | Address Book"
                        linkPage="/addressbook"
                        linkDoc="/addressbook/doc"
                        version="v. 1.0"
                        text="Main page for user's saved recipient delivery addresses."
                        />
                    <CustomInfoPan
                        header="Account | Address Book | New"
                        linkPage="/addressbooknew"
                        linkDoc="/addressbooknew/doc"
                        version="v. 1.0"
                        text="Allows user to save recipient delivery addresses to be used at a later date."
                        />
                    <CustomInfoPan
                        header="Account | Address Book | Edit"
                        linkPage="/addressbookedit"
                        linkDoc="/addressbookedit/doc"
                        version="v. 1.0"
                        text="Allows user to edit recipient delivery addresses."
                        />
                    <CustomInfoPan
                        header="Account | E-mail Preferences"
                        linkPage="/emailprefs"
                        linkDoc="/emailprefs/doc"
                        version="v. 1.0"
                        text="Allows user to change which emails they receive. To unsubscribe from all emails, user must uncheck all boxes."
                        />
                    <CustomInfoPan
                        header="Account | Teleflora Rewards"
                        linkPage="/teleflorarewards"
                        linkDoc="/teleflorarewards/doc"
                        version="v. 1.0"
                        text="Account page to see Teleflora Rewards activity and history."
                        />
                    <CustomInfoPan
                        header="Account | Teleflora Rewards | Sign up"
                        linkPage="/teleflorarewardssignup"
                        linkDoc="/teleflorarewardssignup/doc"
                        version="v. 1.0"
                        text="Account page to sign up for Teleflora Rewards."
                        />
                    <CustomInfoPan
                        header="Account | Log Out"
                        linkPage="/logout"
                        linkDoc="/logout/doc"
                        version="v. 1.0"
                        text="Allows for user log out."
                        />
                    <CustomInfoPan
                        header="Tracking | Order Status"
                        linkPage="/orderstatus"
                        linkDoc="/orderstatus/doc"
                        version="v. 1.0"
                        text="Order status page allowing customers to track their orders outside of an account."
                        />
                    <CustomInfoPan
                        header="Email | Unsubscribe"
                        linkPage="/unsubscribe"
                        linkDoc="/unsubscribe/doc"
                        version="v. 1.0"
                        text="Email opt out page for users who click through from email marketing campaigns."
                        />
                    <CustomInfoPan
                        header="Email | Unsubscribe Success"
                        linkPage="/unsubscribesuccess"
                        linkDoc="/unsubscribesuccess/doc"
                        version="v. 1.0"
                        text="Unsubscribe success page notifying the customer of their email changes."
                        />
                    <CustomInfoPan
                        header="Membership | Membership Signup"
                        linkPage="/membershipsignup"
                        linkDoc="/membershipsignup/doc"
                        version="v. 1.0"
                        text="Allows a user to sign up for a membership."
                        />
                    <CustomInfoPan
                        header="Membership | Active Membership"
                        linkPage="/membershipactive"
                        linkDoc="/membershipactive/doc"
                        version="v. 1.0"
                        text="Allows a user to view their membership statistics."
                        />
                </Row>
            </Container>
        </div>
    )
}

export default MyAccount;