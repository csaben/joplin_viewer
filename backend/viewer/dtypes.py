from dataclasses import dataclass, field

from joppy.data_types import NoteData
from pydantic import BaseModel  # type: ignore
from viewer.tools import htmlify


@dataclass
class ViewerNote(NoteData):
    html: str = field(init=False)

    def __post_init__(self):
        self.html = htmlify(self.body)


class ViewerNoteModel(BaseModel):
    id: str
    title: str
    body: str
    html: str

    @classmethod
    def from_viewer_note(cls, note: ViewerNote):
        return cls(
            id=note.id, title=note.title, body=note.body, html=htmlify(str(note.body))
        )
