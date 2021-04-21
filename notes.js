
const notes = [
    {
        id: 1,
        subject: "If / else",
        date: "04/16/2021",
        feeling: "optimistic",
        timeSpent: 3.2
    },
    {
        id: 2,
        subject: "Arrays",
        date: "04/19/2021",
        feeling: "confident",
        timeSpent: 4.3

    }
]

const noteAboutToday = {
    subject: "Arrays inside arrays",
    date: "04/20/2021",
    feeling: "frustrated",
    timeSpent: 4.3
}

const addNewNote = (noteObject) => {
    const lastIndex = notes.length - 1
    const currentLastNotes = notes[lastIndex]
    const maxId = currentLastNotes.id
    const idForNewNote = maxId + 1

    noteObject.id = idForNewNote

    notes.push(noteObject)
}

// addNewNote(noteAboutToday)

/*for (const noting of notes) {
    console.log(`i wished io knew this ${noting.id}
today i learned  ${noting.subject}
and now i feel ${noting.feeling}
---------
`)
}*/

const searchTerm = "optimistic"

for (const note of notes) {
    if (note.feeling === searchTerm) {
        console.log(`today im feeling ${searchTerm}.`)
    }
}