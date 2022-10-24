import React from 'react';
import { parseISO, formatDistanceToNow } from 'date-fns';

function TimeAgo({timestamp}) {
    let timeAgo = '';
    if (timestamp){
        const date = parseISO(timestamp);
        const timePeriod = formatDistanceToNow(date);
        timeAgo = `${timePeriod} ago`
    }
    return (
        <i className='text-xs block pt-5' title={timestamp}>{timeAgo}
        </i>
    );
}

export default TimeAgo;