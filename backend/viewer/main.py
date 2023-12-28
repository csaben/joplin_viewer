from fastapi import FastAPI  # type: ignore
from viewer.api import api, get_all_dated_notes, get_all_viewer_pydantic_notes

app = FastAPI()


@app.get("/api")
def read_root_api():
    notes = api.get_all_notes(fields="id,title,body")
    dated_notes = get_all_dated_notes(notes)
    model_notes = get_all_viewer_pydantic_notes(dated_notes)
    return model_notes


# if only using backend, no react frontend:

# from starlette.templating import Jinja2Templates  # type: ignore
# templates = Jinja2Templates(directory="templates")
# from fastapi.responses import HTMLResponse  # type: ignore
# from starlette.requests import Request  # type: ignore
# @app.get("/items/{id}", response_class=HTMLResponse)
# async def read_item(request: Request, id: str):
#     notes = api.get_all_notes(fields="id,title,body")
#     dated_notes = get_all_dated_notes(notes)
#     return templates.TemplateResponse(
#         "item.html", {"request": request, "id": int(id), "notes": dated_notes}
#     )


# above works for python only. working on frontend that will need to be compiled to js
