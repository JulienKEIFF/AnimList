FROM alpine:3.11 as Builder
RUN apk --no-cache add gcc g++ make python nodejs npm
WORKDIR /animlist
COPY package.json .
COPY package-lock.json .
RUN npm ci

COPY . .
RUN npm run build
RUN cd server
RUN npm ci

FROM alpine:3.11
RUN apk --no-cache add nodejs
WORKDIR /animlist
COPY --from=Builder /animlist/server .
CMD ["node", "bin/www"]