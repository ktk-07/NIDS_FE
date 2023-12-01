#ubuntu is the base image
FROM ubuntu:22.04

#Update all the package
RUN sudo apt-get update

#Need to install node && npm
RUN sudo apt-get install -y nodejs npm

WORKDIR /NIDS_FE

#Copy application code
COPY . .

#Need to install the npm packages
RUN npm install

#Need to build the npm packge
RUN npm run build

#Run the production version
CMD npm run start



