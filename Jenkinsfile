pipeline {
agent any
stages {
    stage ('Building'){ 
        steps{
            script {
              sh  'docker build -t image2 .'
            }
        }

    }
    stage ('Container'){
        steps {
            script {
              sh  'docker run -d --name container2 -p 3005:3005 image2'
            }
        }
    }
    stage ('docker hub'){
        steps {
            script{
                withCredentials([string(credentialsId:'dockerhub',variable:'dockerhub')]){
                    sh 'docker login -u kefitouka2830 -p ${dockerhub}'
                    sh 'sudo docker push kefitouka2830/image2:latest'
                }
            }
        }
    }
}

}

