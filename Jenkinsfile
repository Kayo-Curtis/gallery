pipeline {
  agent any
  tools {
    nodejs 'node20'
  }
  stages {
    stage('Install') {
      steps {
        sh 'npm ci'
      }
    }
    stage('Test') {
      steps {
        sh 'npm test'
      }
    }
    stage('Deploy') {
      steps {
        echo 'Deploying to Render here is the url https://moringa-ip-1-gallery.onrender.com/'
      }
    }
  }
  post {
    failure {
      mail to: 'kayocurtiswilson@gmail.com',
           subject: "Build Failed: ${env.JOB_NAME}",
           body: "Check Jenkins for details: ${env.BUILD_URL}"
    }
  }
  triggers {
    githubPush()
  }
}
