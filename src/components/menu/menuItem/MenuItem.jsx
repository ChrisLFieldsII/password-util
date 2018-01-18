import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import './MenuItem.scss'

export default function MenuItem(props) {
    MenuItem.propTypes = {
        to: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired
    }

    return (
        <Link className="link" to={props.to}>{props.title}</Link>
    )
}
