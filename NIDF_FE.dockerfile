#ubuntu is the base image
FROM ubuntu:22.04

#Update all the package
RUN sudo apt update

#Need to install node && npm
RUN sudo apt-get install -y nodejs npm

WORKDIR /user/NIDS_FE

#Need to build the npm packge
RUN npm run build

#Run the production version
CMD npm run start



