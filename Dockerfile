FROM node:24.11 AS build


WORKDIR /EXO_CICD


COPY . .


RUN npm install

RUN npm run build --prod

FROM nginx:alpine AS final

COPY --from=build /EXO_CICD/dist/exo_cicd/browser/ /usr/share/nginx/html/



