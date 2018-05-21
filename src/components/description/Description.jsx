import React from 'react';
import DescriptionOptions from './DescriptionOptions';
import './_description.css';

const Description = ({isShownOptions, count}) => (
            <div className="description">
                <span className="description__title">{count} items found</span>
                {isShownOptions && <DescriptionOptions/>}
            </div>
        );
 export default Description;