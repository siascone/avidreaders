import { useDispatch } from "react-redux";
import { useState, useRef, useEffect } from "react";
import * as readActions from '../../store/readsReducer';
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function ReadForm({ bookId, userId }) {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const readDropdownRef = useRef(null);
    const [showDropdown, setShowDropdown] = useState(false);
    const [readStatus, setReadStatus] = useState('Add to list?')

    const read = useSelector(state => {
        let bookReads = Object.values(state.reads)

        let userReads = bookReads.filter(bookRead => {
            if (bookRead.bookId === bookId && bookRead.userId === userId) {
                return bookRead
            }
        })

        return userReads[0]
    })

    useEffect(() => {
        if (!showDropdown) return;

        const closeDropdown = (e) => {
            if (readDropdownRef.current && !readDropdownRef.current.contains(e.target)) {
                setShowDropdown(false);
            }
        }

        document.addEventListener('click', closeDropdown);

        return () => document.removeEventListener('click', closeDropdown);
        
    }, [showDropdown])

    const handleSubmit = (e, status, verb) => {
        e.preventDefault();

        

        if (verb === 'POST') {
            dispatch(readActions.createRead({
                bookId: bookId,
                userId: userId,
                status: status
            }))
        } else if (verb === 'PATCH') {
            dispatch(readActions.updateRead(read.id, status))
        }
        setReadStatus(status)
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

    if (read) {
        return (
            <>
                <button onClick={toggleDropdown}>
                    {read.status}
                </button>
                {showDropdown && (
                        <ul className="read-dropdown" ref={readDropdownRef}>
                            <li onClick={(e) => handleSubmit(e, 'Unread', 'PATCH')}>Unread</li>
                            <li onClick={(e) => handleSubmit(e, 'Reading', 'PATCH')}>Reading</li>
                            <li onClick={(e) => handleSubmit(e, 'Read', 'PATCH')}>Read</li>
                        </ul>
                    )
                }
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
                    <li onClick={(e) => handleSubmit(e, 'Unread', 'POST')}>Unread</li>
                    <li onClick={(e) => handleSubmit(e, 'Reading', 'POST')}>Reading</li>
                    <li onClick={(e) => handleSubmit(e, 'Read', 'POST')}>Read</li>
                </ul>
            )}
        </>
    )
}

export default ReadForm;