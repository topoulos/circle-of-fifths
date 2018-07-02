import { Injectable } from '@angular/core';
import { Key } from './key';
import { AccidentalType } from './AccidentalType';
import { Note } from './Note';

@Injectable({
    providedIn: 'root'
})
export class NoteServiceService {
    public keys: Key[];

    getClampedIndex(index: number): number {
        return this.keys[0].clamp(index);
    }

    getMinorRelatedKey(keyName: string): string {
        return this.keys.find((element) => element.name === keyName).relatedMinorKeyName;
    }

    getAccidentalsForKey(keyName: string): string[] {
        return this.keys.find((element) => element.name === keyName).accidentals;
    }

    public getNumberOfAccidentalsForKey(keyName: string): number {
        return this.keys.find((element) => element.name === keyName).accidentalCount;
    }

    public getTypeOfAccidentalForKey(keyName: string): number {
        return this.keys.find((element) => element.name === keyName).accidentalType;
    }

    constructor() {
        this.keys = [
            new Key(Note.Bb, 5, AccidentalType.Flat, [Note.B, Note.E, Note.A, Note.D, Note.G]),
            new Key(Note.Ab, 4, AccidentalType.Flat, [Note.B, Note.E, Note.A, Note.D]),
            new Key(Note.Eb, 3, AccidentalType.Flat, [Note.B, Note.E, Note.A]),
            new Key(Note.Bb, 2, AccidentalType.Flat, [Note.B, Note.E]),
            new Key(Note.F, 1, AccidentalType.Flat, [Note.B]),
            new Key(Note.C, 0, AccidentalType.Natural, null),
            new Key(Note.G, 1, AccidentalType.Sharp, [Note.F]),
            new Key(Note.D, 2, AccidentalType.Sharp, [Note.F, Note.C]),
            new Key(Note.A, 3, AccidentalType.Sharp, [Note.F, Note.C, Note.G]),
            new Key(Note.E, 4, AccidentalType.Sharp, [Note.F, Note.C, Note.G, Note.D]),
            new Key(Note.B, 5, AccidentalType.Sharp, [Note.F, Note.C, Note.G, Note.D, Note.A]),
            new Key(Note.FS, 6, AccidentalType.Sharp, [Note.F, Note.C, Note.G, Note.D, Note.A, Note.E])
        ];
    }
}
