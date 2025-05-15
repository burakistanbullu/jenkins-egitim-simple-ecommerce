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
                    echo "Node.js ve NPM versiyonları"
                    node --version
                    npm --version

                    echo "npm cache temizleniyor..."
                    npm cache clean --force

                    echo "Bağımlılıklar yükleniyor..."
                    npm install

                    echo "Uygulama çalıştırılıyor..."
                    node app.js &
                    sleep 3
                    curl -s http://localhost:3000 || echo "Uygulama cevap vermiyor"
                '''
            }
        }
    }
}
