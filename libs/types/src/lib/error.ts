class NoteAbleError extends Error {
  constructor(msg: string) {
    super(`❌ NoteAble Error: ${msg}`);
  }
}

export class DomSetupError extends NoteAbleError {}

export class SourceSetupError extends NoteAbleError {}

export class DataError extends NoteAbleError {}

export class RuntimeError extends NoteAbleError {}
