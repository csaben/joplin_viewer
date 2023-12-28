import os
from typing import List

from dotenv import load_dotenv
from joppy.api import Api
from joppy.data_types import NoteData
from viewer.dtypes import ViewerNote, ViewerNoteModel
from viewer.tools import is_date

load_dotenv()  # take environment variables from .env.

token: str = str(os.getenv("token"))

api = Api(token=token)


def notes(api: Api = api) -> List[NoteData]:
    notes = api.get_all_notes(fields="id,title,body")
    return notes


def get_all_notes(notes: List[NoteData]) -> List[ViewerNote]:
    viewer_notes: List[ViewerNote] = [ViewerNote(**vars(note)) for note in notes]
    return viewer_notes


def get_all_viewer_pydantic_notes(
    viewer_notes: List[ViewerNote],
) -> List[ViewerNoteModel]:
    vnotes = []
    for viewer_note in viewer_notes:
        viewer_note_model = ViewerNoteModel.from_viewer_note(viewer_note)
        vnotes.append(viewer_note_model)
    return vnotes


def get_dated_notes(notes: List[ViewerNote]) -> List[ViewerNote]:
    dated_notes = []
    for note in notes:
        if is_date(note):
            dated_notes.append(note)
    return dated_notes


def get_all_dated_notes(notes: List[NoteData]) -> List[ViewerNote]:
    viewer_notes: List[ViewerNote] = get_all_notes(notes)
    dated_notes = get_dated_notes(viewer_notes)
    return dated_notes
