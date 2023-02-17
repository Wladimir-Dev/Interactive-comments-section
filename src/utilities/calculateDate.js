
export function calculateDate(time) {
    let createdAt = new Date(time);

    if (createdAt.getTime()) {
        const today = new Date();

        let calculo = today.getTime() - createdAt.getTime();

        const sec = (calculo / 1000).toFixed(0);
        const min = (calculo / (1000 * 60)).toFixed(0);
        const hrs = (calculo / (1000 * 60 * 60)).toFixed(0);
        const days = (calculo / (1000 * 60 * 60 * 24)).toFixed(0);
        const weeks = (calculo / (1000 * 60 * 60 * 24 * 7)).toFixed(0);
        const months = (calculo / (1000 * 60 * 60 * 24 * 31)).toFixed(0);
        const years = (calculo / (1000 * 60 * 60 * 24 * 12)).toFixed(0);

        if (sec < 60) {
            return "seconds";
        } else if (min < 60) {
            return min + " mins";
        } else if (hrs < 24) {
            return hrs + " hrs";
        } else if (days < 7) {
            return days + " days";
        } else if (weeks < 4) {
            return weeks + " weeks";
        } else if (months < 12) {
            return months + " months";
        } else {
            return years + " year";
        }
    }
    else {
        return time
    }
}
