import React, { Fragment } from 'react';
import Form from "./form.jsx";
import Leads from "./leads.jsx";

export default function Dashboard() {
    return (
        <Fragment>
            <Form />
            <Leads />
        </Fragment>
    );
}