FROM python:3.11
WORKDIR /api

COPY ./viewer /api/viewer
COPY ./setup.py /api/setup.py
COPY ./pyproject.toml /api/pyproject.toml

RUN pip install --no-cache-dir -e .

COPY . /api

COPY requirements.txt /api/requirements.txt
RUN pip install --no-cache-dir --upgrade -r /api/requirements.txt

CMD [ "uvicorn", "viewer.main:app", "--host", "0.0.0.0","--port", "8000"]

# need a network to connect to the frontend
# to create a network:
# docker network create [network name]
# (name i chose is backtofront)

# to run backend:
# docker build -t backend .
# docker run --rm --name backend --network [network name] -p 8000:8000 backend
