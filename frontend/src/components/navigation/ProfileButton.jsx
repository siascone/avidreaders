import { FaUserCircle } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { useState } from "react";
import * as sessionActions from '../../store/session';

function ProfileButton({ user }) {

    const dispatch = useDispatch();

    const handleLogout = (e) => {
        e.preventDefault();
        dispatch(sessionActions.logout());
    }

    return (
        <>
            <button>
                <FaUserCircle />
            </button>
            <ul className="profile-dropdown">
                <li>{user.username}</li>
                <li>{user.firstName} {user.lastName}</li>
                <li>{user.email}</li>
                <li>
                    <button onClick={handleLogout}>Log Out</button>
                </li>
            </ul>
        </>
    )
}

export default ProfileButton;