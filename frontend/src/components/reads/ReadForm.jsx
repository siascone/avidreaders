import { useDispatch } from "react-redux";
import { useState, useRef, useEffect } from "react";
import * as readActions from '../../store/readsReducer';
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function ReadForm({ bookId }) {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const readDropdownRef = useRef(null);
    const [showDropdown, setShowDropdown] = useState(false);
    const [readStatus, setReadStatus] = useState('Unread')
    const userId = useSelector(state => {
        
        if (state.session.user) {
            return state.session.user.id;
        } else {
            return null;
        } 
    })

    useEffect(() => {
        if (!showDropdown) return;

        const closeDropdown = (e) => {
            if (readDropdownRef.current && !readDropdownRef.current.contains(e.target)) {
                showDropdown(false);
            }
        }

        document.addEventListener('click', closeDropdown);

        return () => document.removeEventListener('click', closeDropdown);
        
    }, [showDropdown])

    const handleSubmit = (e, status) => {
        e.preventDefault();

        setReadStatus(status)

        dispatch(readActions.makeRead({
            bookId: bookId,
            userId: userId,
            status: readStatus
        }))
        // dispatch()

        toggleDropdown(e)
    }

    const toggleDropdown = (e) => {
        e.preventDefault();
        e.stopPropagation();

        setShowDropdown(!showDropdown);
    }

    const goToLogin = (e) => {
        e.preventDefault();
        e.stopPropagation();

        navigate('/login');
    }

    if (!userId) {
        return (
            <>
                <button onClick={e => goToLogin(e)}>Login to add to list</button>
            </>
        )
    } 
    
    return (
        <>
            <button onClick={toggleDropdown}>
                {readStatus}
            </button>
            {showDropdown && (
                <ul className="read-dropdown" ref={readDropdownRef}>
                    <li onClick={(e) => handleSubmit(e, 'Unread')}>Unread</li>
                    <li onClick={(e) => handleSubmit(e, 'Reading')}>Reading</li>
                    <li onClick={(e) => handleSubmit(e, 'Read')}>Read</li>
                </ul>
            )}
        </>
    )
}

export default ReadForm;