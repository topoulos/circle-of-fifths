import { TestBed, inject } from '@angular/core/testing';

import { NoteServiceService } from './note-service.service';
import { AccidentalType } from './AccidentalType';
import { Note } from './Note';

describe('NoteServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NoteServiceService]
    });
  });

  it('should be created', inject([NoteServiceService], (service: NoteServiceService) => {
    expect(service).toBeTruthy();
  }));

  it('should return the number of accidentals for a given key', inject([NoteServiceService], (service: NoteServiceService) => {
    expect(service.getNumberOfAccidentalsForKey(Note.Db)).toBe(5);
    expect(service.getNumberOfAccidentalsForKey(Note.Ab)).toBe(4);
    expect(service.getNumberOfAccidentalsForKey(Note.Eb)).toBe(3);
    expect(service.getNumberOfAccidentalsForKey(Note.Bb)).toBe(2);
    expect(service.getNumberOfAccidentalsForKey(Note.F)).toBe(1);
    expect(service.getNumberOfAccidentalsForKey(Note.C)).toBe(0);
    expect(service.getNumberOfAccidentalsForKey(Note.G)).toBe(1);
    expect(service.getNumberOfAccidentalsForKey(Note.D)).toBe(2);
    expect(service.getNumberOfAccidentalsForKey(Note.A)).toBe(3);
    expect(service.getNumberOfAccidentalsForKey(Note.E)).toBe(4);
    expect(service.getNumberOfAccidentalsForKey(Note.B)).toBe(5);
    expect(service.getNumberOfAccidentalsForKey(Note.FS)).toBe(6);
  }));

  it('should return the type of accidental for a given key', inject([NoteServiceService], (service: NoteServiceService) => {
    expect(service.getTypeOfAccidentalForKey(Note.Db)).toBe(AccidentalType.Flat);
    expect(service.getTypeOfAccidentalForKey(Note.Ab)).toBe(AccidentalType.Flat);
    expect(service.getTypeOfAccidentalForKey(Note.Eb)).toBe(AccidentalType.Flat);
    expect(service.getTypeOfAccidentalForKey(Note.Bb)).toBe(AccidentalType.Flat);
    expect(service.getTypeOfAccidentalForKey(Note.F)).toBe(AccidentalType.Flat);
    expect(service.getTypeOfAccidentalForKey(Note.C)).toBe(AccidentalType.Natural);
    expect(service.getTypeOfAccidentalForKey(Note.G)).toBe(AccidentalType.Sharp);
    expect(service.getTypeOfAccidentalForKey(Note.D)).toBe(AccidentalType.Sharp);
    expect(service.getTypeOfAccidentalForKey(Note.A)).toBe(AccidentalType.Sharp);
    expect(service.getTypeOfAccidentalForKey(Note.E)).toBe(AccidentalType.Sharp);
    expect(service.getTypeOfAccidentalForKey(Note.B)).toBe(AccidentalType.Sharp);
    expect(service.getTypeOfAccidentalForKey(Note.FS)).toBe(AccidentalType.Sharp);
  }));

  it('should return the accidentals for a given key', inject([NoteServiceService], (service: NoteServiceService) => {
    expect(service.getAccidentalsForKey(Note.Db).join()).toBe('B,E,A,D,G' );
    expect(service.getAccidentalsForKey(Note.Ab).join()).toBe('B,E,A,D');
    expect(service.getAccidentalsForKey(Note.Eb).join()).toBe('B,E,A');
    expect(service.getAccidentalsForKey(Note.Bb).join()).toBe('B,E');
    expect(service.getAccidentalsForKey(Note.F).join()).toBe('B');
    expect(service.getAccidentalsForKey(Note.C)).toBe(null);
    expect(service.getAccidentalsForKey(Note.G).join()).toBe('F');
    expect(service.getAccidentalsForKey(Note.D).join()).toBe('F,C');
    expect(service.getAccidentalsForKey(Note.A).join()).toBe('F,C,G');
    expect(service.getAccidentalsForKey(Note.E).join()).toBe('F,C,G,D');
    expect(service.getAccidentalsForKey(Note.B).join()).toBe('F,C,G,D,A');
    expect(service.getAccidentalsForKey(Note.FS).join()).toBe('F,C,G,D,A,E');
  }));

  it('should return the related minor key for a given key', inject([NoteServiceService], (service: NoteServiceService) => {
    expect(service.getMinorRelatedKey(Note.Db)).toBe(Note.Bb);
    expect(service.getMinorRelatedKey(Note.Ab)).toBe(Note.F);
    expect(service.getMinorRelatedKey(Note.Eb)).toBe(Note.C);
    expect(service.getMinorRelatedKey(Note.Bb)).toBe(Note.G);
    expect(service.getMinorRelatedKey(Note.F)).toBe(Note.D);
    expect(service.getMinorRelatedKey(Note.C)).toBe(Note.A);
    expect(service.getMinorRelatedKey(Note.G)).toBe(Note.E);
    expect(service.getMinorRelatedKey(Note.D)).toBe(Note.B);
    expect(service.getMinorRelatedKey(Note.A)).toBe(Note.FS);
    expect(service.getMinorRelatedKey(Note.E)).toBe(Note.CS);
    expect(service.getMinorRelatedKey(Note.B)).toBe(Note.GS);
    expect(service.getMinorRelatedKey(Note.FS)).toBe(Note.DS);
  }));

  it('test clamp', inject([NoteServiceService], (service: NoteServiceService) => {
    expect(service.getClampedIndex(0)).toBe( 0 );
    expect(service.getClampedIndex(-1)).toBe( 11 );
    expect(service.getClampedIndex(12)).toBe( 0 );
  }));
});
