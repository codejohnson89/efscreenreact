import React, { useEffect } from 'react';
import Footer from '../../global/footer/footer';
import NavigationBar from '../../global/header/nav/NavigationBar';

import '../../../styles/themes/seasonal-summer/theme.scss';
import Content from './Content';


function Immersion() {
    useEffect(() => {
        console.log('loading')
    }, [])

    return (
        <>
        <div className="seasonal-summer">
                <NavigationBar/>
                    <Content />
                <Footer />
        </div>            
        </>
    )
}

export default Immersion;