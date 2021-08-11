import { render } from '@testing-library/react';
import React, { Component, useState } from 'react';
import { Redirect, useHistory } from "react-router-dom"

function HandleSearch(event) {
    let history = useHistory()
    return history.push(`/stock/${event}`)
}
export default HandleSearch()