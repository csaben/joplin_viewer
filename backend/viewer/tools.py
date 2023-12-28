import re

import marko


def htmlify(text: str) -> str:
    # return pypandoc.convert_text(text, 'html', format='md')
    return marko.convert(text)


def filter(note):
    match = re.match(r"0*(\d+)/0*(\d+)/(\d+)", note)
    if match:
        month, day, year = match.groups()
        return f"{int(month)}/{int(day)}/{year[-2:]}"
    err = ValueError(f"Invalid date format: {note}")
    raise err


def is_date(note):
    """Check if the note is a date."""
    # if note.title == joplin_utils.filter(datetime.date.today().strftime("%m/%d/%Y")):
    # check if valid format fo date

    # simpler, regex is '00/00/00' st 0 can be any num or space
    pattern = r"\d{1,2}/\d{1,2}/\d{1,2}"
    match = re.fullmatch(pattern, note.title)
    if match:
        return note
    else:
        return None
