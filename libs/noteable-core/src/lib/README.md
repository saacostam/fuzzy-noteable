# NoteAble

## Main Software Components

- NoteAbleViewer
  - **DOMHandler:** In charge of creating and managing the necessary DOM elements.
  - **DataHandler:** In charge of manipulating data.
    - **Example:** Transposition, Simplification, etc.
  - **SourceHandler:** In charge of setting up, managing and listening to the source element.
    - Supported sources: YouTube.
  - **CanvasHandler:** In charge of getting the information from the SourceHandler and update graphics accordingly.

# Todo

- [ ] Add a description for the usability field of ChordDefinition.
  - Field for sorting the usability of each chord definition. That is, a chord can be played in multiple ways, but some are more common/simple than others. This field helps to sort the chord definitions but how popular/easy/usable they are.
- [ ] Consider adding a mute annotation to ChordDefinition.
  - Some chords mute certain strings when been played. Ex: D, A, Am, C, etc.
- [ ] Consider adding a strumming annotation.
  - I'm not sure about the visualization part, but at least defining it in terms of data, so in the future it does not interfere or require a big refactor.
- [ ] Consider making the bpm, timeSignature and syncPoint optional.
  - Also, considering that the first music unit does require all of this params (Business-side validation).
  - Basically, remove them if they are not defining a change.

# Update CheckList

## DomHandler

No necessary updated checklist items were found!

## DataHandler

- [ ] Check music Unit Type validation for new instruments.
  - If an instrument is fret-based, the notes provided in the patterns should also be fret-based.
  - The same for chord definition, the type should match.
  - Also, if a chord is used for a certain instrument, it should have been defined with the correct note-type.
- [ ] Consider and define the usability of a chord.

## SourceHandler

## CanvasHandler
