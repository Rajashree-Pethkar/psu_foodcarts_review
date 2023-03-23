FROM python:3.9

COPY . /app

WORKDIR /app

ENV DATABASE_URL=postgres://rajashree:rajashree@postgres:5432/psu_foodcarts

RUN python -m pip install -r requirements.txt

CMD [ "python3", "-m" , "flask", "run", "--host=0.0.0.0", "--port=80"]