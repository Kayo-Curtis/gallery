pipeline {
  agent any

  stages {
    stage('Install') {
      steps {
        sh 'yarn install'
      }
    }

    stage('Build') {
      steps {
        sh 'yarn start' //I prefer the yarn package manger to npm
      }
    }

    stage('Deploy') {
      steps {
        echo 'Deploying to Render here is the url https://moringa-ip-1-gallery.onrender.com/'
      }
    }
  }

  triggers {
    githubPush()
  }
}
