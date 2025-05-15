pipeline {
    agent any

    stages {
        stage('Build') {
            agent {
                docker {
                    image 'node:18-alpine'
                    reuseNode true
                }
            }
            steps {
                sh '''
                    echo "Dosyalar:"
                    ls -la

                    echo "Node ve NPM versiyonları:"
                    node --version
                    npm --version

                    echo "npm install başlatılıyor..."
                    npm ci

                    echo "Uygulama test amaçlı başlatılıyor..."
                    node app.js &

                    sleep 3
                    curl -s http://localhost:3000 || echo "Uygulama cevap vermiyor"

                    echo "Build tamamlandı"
                '''
            }
        }
    }
}
