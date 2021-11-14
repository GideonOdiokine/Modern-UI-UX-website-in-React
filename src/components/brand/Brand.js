import React from 'react'
import './brand.css';
import { google, shopify, slack, atlassian, dropdown, } from './import'

const Brand = () => {
    return (
        <div className="gpt3__brand section__padding">
            <div>
                <img src={google} alt="google" />
            </div>
            <div>
                <img src={slack} alt="google" />
            </div>
            <div>
                <img src={atlassian} alt="google" />
            </div>
            <div>
                <img src={dropdown} alt="google" />
            </div>
            <div>
                <img src={shopify} alt="google" />
            </div>
        </div>
    )
}

export default Brand
