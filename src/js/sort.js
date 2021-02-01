function formatDate(dateString) {
    const months = [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sept',
        'Oct',
        'Nov',
        'Dec'
    ];
    const millis = Date.parse(dateString);
    const date = new Date(millis);
    const dayOfMonth = date.getDate();
    const year = date.getFullYear();
    const monthIndex = date.getMonth();
    const monthName = months[monthIndex];

    const hours = date.getHours();
    const minutes = date.getMinutes();

    const amOrPm = (hours >= 12) ? "PM" : "AM";
    let hourText = hours;
    if (hours < 10) {
        hourText = "0" + hours;
    } else if(hours > 12) {
        hourText = (hours - 12) < 10 ? "0" + (hours - 12): (hours - 12);
    }

    return `${dayOfMonth} ${monthName} ${year} ${hourText}:${minutes}${amOrPm}`;
}

function sortCommentsByDate(comments) {
    let sortedDates = [];

    comments.sort(function (comment1, comment2) {
        let millis1 = Date.parse(comment1.date);
        let millis2 = Date.parse(comment2.date);

        let date1 = new Date(millis1);
        let date2 = new Date(millis2);

        return date2.getTime() - date1.getTime();
    });

    let commentSize = comments.length
    let commentHTML = "";
    let comment;
    for (let i = 0; i < commentSize; ++i) {
        comment = comments[i];
        commentHTML = commentHTML + 
        `<div id='comment_user_${comment.id}' class='comment_user sm:px-1 py-4'>
        <div class='comment_details float-left w-full'>
        <h4 class='comment_user_name'>
        ${comment.name}
            <span class='comment_date ml-4 text-gray-400 text-xs'>${formatDate(comment.date)}</span>
            <span class='comment_likes float-right'>${comment.likes} likes</span>
        </h4>
        <p class='comment_text'>
            ${comment.body}
        </p>
        </div>
        </div>`;


        sortedDates.push(comment.date);
    }

    if(typeof document.getElementsByClassName("comments-list")[0] !== 'undefined') {
        document.getElementsByClassName("comments-list")[0].innerHTML = commentHTML;
    }

    return sortedDates;
}

function sortCommentsByLikes(comments) {
    let sortedLikes = [];

    comments.sort(function (comment1, comment2) {
        return comment2.likes - comment1.likes;
    });

    let commentSize = comments.length
    let commentHTML = "";
    let comment;
    for (let i = 0; i < commentSize; ++i) {
        comment = comments[i];
        commentHTML = commentHTML + 
        `<div id='comment_user_${comment.id}' class='comment_user sm:px-1 py-4'>
        <div class='comment_details float-left w-full'>
        <h4 class='comment_user_name'>
        ${comment.name}
            <span class='comment_date ml-4 text-gray-400 text-xs'>${formatDate(comment.date)}</span>
            <span class='comment_likes float-right'>${comment.likes} likes</span>
        </h4>
        <p class='comment_text'>
            ${comment.body}
        </p>
        </div>
        </div>`;

        sortedLikes.push(comment.likes);
    }

    if(typeof document.getElementsByClassName("comments-list")[0] !== 'undefined') {
        document.getElementsByClassName("comments-list")[0].innerHTML = commentHTML;
    }
    
    return sortedLikes;
}

module.exports = {
    formatDate: formatDate,
    sortCommentsByDate: sortCommentsByDate,
    sortCommentsByLikes: sortCommentsByLikes
};