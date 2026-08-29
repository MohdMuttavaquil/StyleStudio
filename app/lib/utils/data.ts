

type Object = {
    url: string,
    disc: string
}

const haircut: Object = {
    url: '/hairvut.avif',
    disc: 'Get a sharp, personalized haircut designed to match your face shape, style, personality, and everyday grooming needs'
}

const beard: Object = {
    url: "/beadrs.avif",
    disc: "Professional beard trimming and shaping to create a clean, defined, and stylish look that perfectly complements your haircut"
}

const hairWash: Object = {
    url: "/hairwash.avif",
    disc: "Refresh your look with a relaxing facial and nourishing hair wash that deeply cleanses, revitalizes your skin, and leaves hair fresh"
}

// A function that convert time into miniuts 
function timeToMinutes(data: string): number {

    let time: string = data.toUpperCase()
    const [timePart, period] = time.split(" ");
    let [hours, minutes] = timePart.includes(":") ? timePart.split(":").map(Number) :
        [Number(timePart), 0]

    if (period === "AM" && hours === 12) hours = 0;
    if (period === "PM" && hours !== 12) hours += 12;

    return hours * 60 + minutes;
}

export { haircut, beard, hairWash, timeToMinutes }