pipeline {
    agent {
        docker {
            image 'node:18'
            reuseNode true
        }
    }

    stages {
        stage('Temizlik') {
            steps {
                deleteDir()
            }
        }

        stage('Build') {
            steps {
                sh '''
                    node -v
                    npm -v
                    npm install
                    ls -la
                '''
            }
        }
    }
}
