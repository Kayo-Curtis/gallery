pipeline {
  agent any
  environment {
    NODE_VERSION = '20.20.2'
    NODE_DIR = "${WORKSPACE}/.node"
  }
  stages {
    stage('Install Node') {
      steps {
        script {
          def arch = sh(script: '''
            case "$(uname -m)" in
              x86_64) echo x64 ;;
              aarch64|arm64) echo arm64 ;;
              *) exit 1 ;;
            esac
          ''', returnStdout: true).trim()
          env.NODE_HOME = "${NODE_DIR}/node-v${NODE_VERSION}-linux-${arch}"
        }
        sh '''
          if [ ! -x "$NODE_HOME/bin/node" ]; then
            mkdir -p "$NODE_DIR"
            curl -fsSL "https://nodejs.org/dist/v${NODE_VERSION}/$(basename "$NODE_HOME").tar.gz" | tar -xz -C "$NODE_DIR"
          fi
          "$NODE_HOME/bin/node" -v
        '''
      }
    }
    stage('Install') {
      steps {
        sh 'PATH="$NODE_HOME/bin:$PATH" npm ci'
      }
    }
    stage('Test') {
      steps {
        sh 'PATH="$NODE_HOME/bin:$PATH" npm test'
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
