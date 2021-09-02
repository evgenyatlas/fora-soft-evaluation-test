import React from 'react'
import PropTypes from "prop-types";
import { NickAvatar } from '../NickAvatar';
import { timePassed } from '../../lib/timePassed';

import './Message.css';

/**
 * Message component
 * @param {string} text - message
 * @param {object} user - user object
 * @param {number} time
 * @param {string} float
 */
export function Message({ text, user, time, float = 'left' }) {
    return (
        <div className="Message">
            <NickAvatar className="Message__Avatar" {...user} />
            <div className="Message__Content">
                {text}
                <div className="Message__Time">{timePassed(time)}</div>
            </div>
        </div>
    )
}

Message.propTypes = {
    text: PropTypes.string.isRequired,
    user: PropTypes.shape({
        nickname: PropTypes.string.isRequired,
        color: PropTypes.string.isRequired
    }),
    time: PropTypes.number.isRequired,
    float: PropTypes.oneOf(['right', 'left'])
}