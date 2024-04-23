Stages{
    Stage ('Building'){ 
        Steps{
            Script {
              sh  'docker build -t image2 .'
            }
        }

    }
    Stage ('Container'){
        Steps{
            Script{
              sh  'docker run -d --name container2 -p 3005:3005 image2'
            }
        }
    }
    Stage ('docker hub'){
        Steps{
            Script{
                withCredentials([string(credentialsId:'dockerhub',variable:'dockerhub')]){
                    sh 'docker login -u kefitouka2830 -p ${dockerhub}'
                    sh 'sudo docker push kefitouka2830/image2:latest'
                }
            }
        }
    }
}



