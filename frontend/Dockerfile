FROM node:17-alpine
WORKDIR /app
COPY package*.json /app/

RUN npm i --force
RUN npm i --location=global react-scripts@5.0.0

COPY . ./

CMD ["npm", "start"]

# to run: 
# docker build -t frontend .
# docker run --rm --name frontend --network [network name] -p 3000:3000 frontend
