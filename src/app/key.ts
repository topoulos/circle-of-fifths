import { AccidentalType } from './AccidentalType';
import { Note } from './Note';

export class Key {

    private readonly notesWithSharps: Note[] = [
        Note.A,
        Note.AS,
        Note.B,
        Note.C,
        Note.CS,
        Note.D,
        Note.DS,
        Note.E,
        Note.F,
        Note.FS,
        Note.G,
        Note.GS
    ];

    private readonly notesWithFlats: string[] = [
        Note.A,
        Note.Bb,
        Note.B,
        Note.C,
        Note.Db,
        Note.D,
        Note.Eb,
        Note.E,
        Note.F,
        Note.Gb,
        Note.G,
        Note.Ab
    ];

    private clamp(index: number): number {
        if (index > 11) {
            return (11 - index + 1) * -1;
        }

        if (index < 0) {
            return 11 + index + 1;
        }

        return index;
    }

    public get relatedMinorKeyName() {
        const notes = this.accidentalType === AccidentalType.Sharp || this.accidentalType === AccidentalType.Natural
            ? this.notesWithSharps
            : this.notesWithFlats;

        const majorIndex =  notes.indexOf(this.name);
        const relativeMinorIndex = this.clamp(majorIndex - 3);

        return notes[relativeMinorIndex];
    }

    constructor(
        public name: string,
        public accidentalCount: number,
        public accidentalType: AccidentalType,
        public accidentals: string[]
    ) { }
}


