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
        sh 'node server.js & '
      }
    }

    stage('Deploy') {
      steps {
        echo 'Deploying to Render'
      }
    }
  }

  triggers {
    githubPush()
  }
}
