# Docker node image : Node version is 22.13.1 
FROM node:22-alpine 

# THe working Directory 
WORKDIR /app 

# Copy the file .json into the image 
COPY package*.json ./

# Copy node modules 
COPY . .

#Expose the port of the app
EXPOSE 3000

# Command to run the application 
CMD ["npm", "run", "start"]