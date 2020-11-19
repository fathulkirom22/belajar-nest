pipeline {
    agent {
        docker { image 'node:14-alpine' }
    }
    stages {
        stage('Test') {
            steps {
                sh 'node --version'
                sh 'yarn --version'
                sh 'yarn install'
                sh 'yarn test'
            }
        }
    }
}