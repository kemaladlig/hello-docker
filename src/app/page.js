import Head from 'next/head';

export default function Home() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Head>
        <title>Hello Docker - Jenkins, Docker, and Docker Hub Tutorial</title>
        <meta name="description" content="Learn how to use Jenkins, Docker, and Docker Hub with this step-by-step tutorial." />
      </Head>

      {/* Navbar */}
      <nav className="bg-blue-600 text-white p-4 shadow-lg">
        <div className="container mx-auto">
          <h1 className="text-2xl font-bold">Hello Docker</h1>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="bg-blue-500 text-white py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Welcome to the Docker, Jenkins, and Docker Hub Tutorial</h1>
          <p className="text-xl">Learn how to Dockerize a Next.js app, push it to Docker Hub, and automate the process with Jenkins.</p>
        </div>
      </header>

      {/* Tutorial Steps */}
      <main className="container mx-auto py-12 px-4">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Step 1 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Step 1: Create a Next.js Project</h2>
            <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
              <code>
                {`
npx create-next-app hello-docker
cd hello-docker
                `}
              </code>
            </pre>
          </div>

          {/* Step 2 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Step 2: Dockerize the Next.js App</h2>
            <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
              <code>
                {`
# Use Node.js as the base image
FROM node:16-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the Next.js app
RUN npm run build

# Expose the app port
EXPOSE 3000

# Start the app
CMD ["npm", "start"]
                `}
              </code>
            </pre>
          </div>

          {/* Step 3 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Step 3: Build and Run the Docker Image</h2>
            <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
              <code>
                {`
docker build -t hello-docker .
docker run -p 3000:3000 hello-docker
                `}
              </code>
            </pre>
          </div>

          {/* Step 4 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Step 4: Push the Docker Image to Docker Hub</h2>
            <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
              <code>
                {`
docker tag hello-docker your-dockerhub-username/hello-docker
docker push your-dockerhub-username/hello-docker
                `}
              </code>
            </pre>
          </div>

          {/* Step 5 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Step 5: Set Up Jenkins for CI/CD</h2>
            <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto">
              <code>
                {`
pipeline {
    agent any

    environment {
        DOCKER_HUB_CREDENTIALS = credentials('docker-hub-credentials')
    }

    stages {
        stage('Build Docker Image') {
            steps {
                script {
                    docker.build("hello-docker")
                }
            }
        }

        stage('Push to Docker Hub') {
            steps {
                script {
                    docker.withRegistry('https://registry.hub.docker.com', 'docker-hub-credentials') {
                        docker.image("hello-docker").push("latest")
                    }
                }
            }
        }
    }
}
                `}
              </code>
            </pre>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-blue-600 text-white py-6 mt-12">
        <div className="container mx-auto text-center">
          <p>© 2023 Hello Docker. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}