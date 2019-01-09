const reservations = [
    {
        name: "sample name A",
        date: "sample date A",
        time: "sample time A",
        notes: "sample notes A",
    },
    {
        name: "sample name B",
        date: "sample date B",
        time: "sample time B",
        notes: "sample notes B",
    },
    {
        name: "sample name C",
        date: "sample date C",
        time: "sample time C",
        notes: "sample notes C",
    },
    {
        name: "sample name D",
        date: "sample date D",
        time: "sample time D",
        notes: "sample notes D",
    }
]

const waitlist = [
    {
        name: "sample name F",
        date: "sample date F",
        time: "sample time F",
        notes: "sample notes F",
        
    },{
        name: "sample name G",
        date: "sample date G",
        time: "sample time G",
        notes: "sample notes G",
    }
]

console.log(reservations)

exports.list = reservations
exports.waitlist = waitlist