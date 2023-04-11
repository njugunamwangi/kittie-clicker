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

        stage('Runs fixes') {
          steps {
            sh 'npm i && npm run lint'
          }
        }

      }
    }

    stage('Build') {
      steps {
        sh 'docker image build -f Dockerfile . -t njugunamwangi/kittie-clicker:latesr'
      }
    }

    stage('Login to Dockerhub') {
      environment {
        DOCKERHUB_USER = 'njugunamwangi'
        DOCKERHUB_PASSWORD = '5ZE.CfGZ6Nd3DeJ'
      }
      steps {
        sh 'docker login -u $DOCKERHUB_USER -p $DOCKERHUB_PASSWORD'
      }
    }

    stage('Push') {
      steps {
        sh 'docker image push njugunamwangi/kittie-clicker:latest'
      }
    }

  }
}