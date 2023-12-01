#ubuntu is the base image
FROM node:21-alpine3.17

#No need for this as docker image is already in NIDS_FE
#WORKDIR /NIDS_FE

#Copy application code from host directory to container directory
COPY . .

#Check directory
RUN pwd

#Check the files file direcory
RUN ls -al 

#Need to install the npm packages
RUN npm install

#Need to build the npm packge
RUN npm run build

#Expost port app runs on
EXPOSE 7777

#Run the production version
CMD npm run preview

