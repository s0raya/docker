FROM node:latest

RUN mkdir -p '/mnt/Nas/Programacion/Sori/The Bridge/ejercicios-online/Sprint 23/appnode'

WORKDIR '/mnt/Nas/Programacion/Sori/The Bridge/ejercicios-online/Sprint 23/appnode'

COPY package*.json . /

RUN npm install

COPY . .

EXPOSE 3000

CMD [ "npm", "start" ]