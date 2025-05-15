pipeline {
    agent {
        docker {
            image 'node:18-alpine'
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
                    echo "Node.js ve NPM versiyonları:"
                    node -v
                    npm -v

                    echo "npm install başlatılıyor..."
                    npm install

                    echo "Build klasörü listeleniyor:"
                    ls -la
                '''
            }
        }
    }
}
