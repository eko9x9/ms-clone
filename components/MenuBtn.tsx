import React, { ReactElement, useState } from 'react'

export default function MenuBtn(props: any): ReactElement {
    const [showMenuOnPhone, setshowMenuOnPhone] = useState(false);

    const setIsShown = (isShow: boolean) => {
        setshowMenuOnPhone(isShow)
    }

    return (
        <React.Fragment>
            <div onClick={() => {
                setIsShown(!showMenuOnPhone)
            }} className={`menu-btn`}>
                <i className="fas fa-bars fa-2x"></i>
            </div>
            {props.children(showMenuOnPhone, setIsShown)}
        </React.Fragment>
    )
}
