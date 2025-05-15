pipeline {
    agent {
        docker {
            image 'node:18'
            args '--entrypoint=""'
            reuseNode true
        }
    }

    stages {
         stage('Temizlik') {
            steps {
                deleteDir()
            }
        stage('Build') {
            steps {
                sh '''
                    echo "Node versiyonu:"
                    node -v
                    echo "NPM versiyonu:"
                    npm -v
                    npm install
                '''
            }
        }
    }
}
