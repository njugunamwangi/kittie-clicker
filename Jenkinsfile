pipeline {
  agent any
  stages {
    stage('Checkout Code') {
      steps {
        git(url: 'https://github.com/njugunamwangi/kittie-clicker', branch: 'main')
      }
    }

    stage('Logs') {
      parallel {
        stage('Logs') {
          steps {
            sh 'ls -la'
          }
        }

        stage('Unit Tests') {
          steps {
            sh 'npm i && npm run test:unit'
          }
        }

      }
    }

  }
}