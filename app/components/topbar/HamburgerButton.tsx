import React from 'react';
import { connect } from 'react-redux';
import { FaBars, FaArrowLeft} from "react-icons/fa";
import { setSliding, closeEmail } from '../../actions';

const HamburgerButton = props => {

    const handleSlidebar = () => {
        props.setSliding(!props.slidebar)
    }

    const handleBackToEmailList = () => {
        props.closeEmail()
        //props.changeIsDisplayingThread(!props.isDisplayingThread)
    }

    return (
        <>
            {/* Below Div is for mobile */}
            <div className="back-or-bar">
                {props.isViewEmail ? (
                    <div className="back-btn btn" onClick={handleBackToEmailList}>
                        <FaArrowLeft />
                    </div>
                ) : (
                        <div className="sidebar-mob-btn btn" onClick={handleSlidebar}>
                            <FaBars />
                        </div>
                    )}
            </div>
            {/* Below Div is for Tablet */}
            <div className="sidebar-btn btn" onClick={handleSlidebar}>
                <FaBars />
            </div>
        </>
    )
}

const mapStateToProps = ({ viewEmail }) => ({
    isViewEmail: viewEmail.displayEmailSection
})

export default connect(mapStateToProps, {
    setSliding,
    closeEmail
})(HamburgerButton);
